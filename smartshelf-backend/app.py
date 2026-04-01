from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import date, datetime

from supabase_client import supabase
from logic import get_days_to_expiry, get_status, get_discount_pct
from forecast import get_forecast

app = Flask(__name__)
CORS(app)


# ─── 1. GET /inventory ───────────────────────────────────────────────
@app.route("/inventory", methods=["GET"])
def get_inventory():
    """Fetch all inventory items and recalculate live status fields."""
    try:
        response = supabase.table("inventory").select("*").execute()
        items = response.data

        for item in items:
            days = get_days_to_expiry(item["expiry_date"])
            item["days_to_expiry"] = days
            item["status"] = get_status(days)

        return jsonify({"success": True, "data": items}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 2. POST /inventory ──────────────────────────────────────────────
@app.route("/inventory", methods=["POST"])
def add_inventory():
    """Add a new inventory item with auto-calculated fields."""
    try:
        data = request.get_json()

        required = ["name", "category", "qty", "unit", "price", "expiry_date"]
        for field in required:
            if field not in data:
                return jsonify({"success": False, "error": f"Missing field: {field}"}), 400

        days = get_days_to_expiry(data["expiry_date"])

        new_item = {
            "name": data["name"],
            "category": data["category"],
            "qty": float(data["qty"]),
            "unit": data["unit"],
            "price": float(data["price"]),
            "expiry_date": data["expiry_date"],
            "added_date": date.today().isoformat(),
            "status": get_status(days),
            "discount_pct": get_discount_pct(days),
        }

        response = supabase.table("inventory").insert(new_item).execute()

        return jsonify({
            "success": True,
            "message": "Item added successfully",
            "data": response.data
        }), 201
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 2b. DELETE /inventory/<id> ──────────────────────────────────────
@app.route("/inventory/<item_id>", methods=["DELETE"])
def delete_inventory(item_id):
    """Delete an inventory item by ID."""
    try:
        response = supabase.table("inventory").delete().eq("id", item_id).execute()
        if not response.data:
            return jsonify({"success": False, "error": "Item not found"}), 404
        return jsonify({"success": True, "message": "Item deleted"}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 3. GET /expiry-alerts ───────────────────────────────────────────
@app.route("/expiry-alerts", methods=["GET"])
def expiry_alerts():
    """Return items expiring within 3 days (or already expired), sorted ascending."""
    try:
        response = supabase.table("inventory").select("*").execute()
        items = response.data

        alerts = []
        for item in items:
            days = get_days_to_expiry(item["expiry_date"])
            if days <= 3 and item.get("status") != "redistributed":
                alerts.append({
                    "name": item["name"],
                    "qty": item["qty"],
                    "days_left": days,
                    "expiry_date": item["expiry_date"],
                })

        alerts.sort(key=lambda x: x["days_left"])

        return jsonify({"success": True, "data": alerts}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 4. GET /discount-suggestions ────────────────────────────────────
@app.route("/discount-suggestions", methods=["GET"])
def discount_suggestions():
    """Return items eligible for discount (0–7 days to expiry)."""
    try:
        response = supabase.table("inventory").select("*").execute()
        items = response.data

        suggestions = []
        for item in items:
            days = get_days_to_expiry(item["expiry_date"])
            if 0 <= days <= 7:
                discount = get_discount_pct(days)
                current_price = float(item["price"])
                suggestions.append({
                    "name": item["name"],
                    "current_price": current_price,
                    "discount_pct": discount,
                    "suggested_price": round(current_price * (1 - discount / 100), 2),
                })

        return jsonify({"success": True, "data": suggestions}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 5. GET /waste-score ─────────────────────────────────────────────
@app.route("/waste-score", methods=["GET"])
def waste_score():
    """Calculate waste score = (expired / total) * 100, excluding redistributed."""
    try:
        response = supabase.table("inventory").select("*").execute()
        all_items = response.data

        # Exclude redistributed items
        items = [i for i in all_items if i.get("status") != "redistributed"]

        total = len(items)
        expired = 0
        safe = 0
        expiring_soon = 0

        for item in items:
            days = get_days_to_expiry(item["expiry_date"])
            status = get_status(days)
            if status == "expired":
                expired += 1
            elif status == "expiring_soon":
                expiring_soon += 1
            elif status == "safe":
                safe += 1

        score = round((expired / total) * 100, 2) if total > 0 else 0

        return jsonify({
            "success": True,
            "data": {
                "waste_score": score,
                "total_items": total,
                "expired_items": expired,
                "safe_items": safe,
                "expiring_soon": expiring_soon,
            }
        }), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 6. POST /redistribute ───────────────────────────────────────────
@app.route("/redistribute", methods=["POST"])
def redistribute():
    """Mark an item as redistributed and log the donation."""
    try:
        data = request.get_json()

        item_id = data.get("item_id")
        ngo_name = data.get("ngo_name")

        if not item_id or not ngo_name:
            return jsonify({"success": False, "error": "item_id and ngo_name are required"}), 400

        # Fetch the item first
        item_resp = supabase.table("inventory").select("*").eq("id", item_id).execute()
        if not item_resp.data:
            return jsonify({"success": False, "error": "Item not found"}), 404

        item = item_resp.data[0]

        # Update inventory status
        supabase.table("inventory").update({
            "status": "redistributed",
            "discount_pct": 0
        }).eq("id", item_id).execute()

        # Log the redistribution
        log_entry = {
            "item_name": item["name"],
            "qty": item["qty"],
            "ngo_name": ngo_name,
            "donated_at": datetime.now().isoformat(),
            "inventory_id": item_id,
        }
        supabase.table("redistribution_log").insert(log_entry).execute()

        return jsonify({
            "success": True,
            "message": f"{item['name']} redistributed to {ngo_name}",
        }), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 7. GET /redistribution-log ──────────────────────────────────────
@app.route("/redistribution-log", methods=["GET"])
def redistribution_log():
    """Return all redistribution logs, most recent first."""
    try:
        response = (
            supabase.table("redistribution_log")
            .select("*")
            .order("donated_at", desc=True)
            .execute()
        )
        return jsonify({"success": True, "data": response.data}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 8. GET /forecast ──────────────────────────────────────────────────
@app.route("/forecast", methods=["GET"])
def forecast_endpoint():
    """Predict demand and generate recommendations using ML."""
    try:
        response = supabase.table("inventory").select("*").execute()
        items = response.data

        # Generate ML forecast
        results = get_forecast(items)

        return jsonify({"success": True, "data": results}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── Run Server ──────────────────────────────────────────────────────
if __name__ == "__main__":
    app.run(debug=True, port=5000)
