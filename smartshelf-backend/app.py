from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import date, datetime
import csv
import uuid

from logic import get_days_to_expiry, get_status, get_discount_pct
from forecast import get_forecast

app = Flask(__name__)
CORS(app)

INVENTORY = []
REDISTRIBUTION_LOG = []

def initialize_dummy_data():
    INVENTORY.clear()
    REDISTRIBUTION_LOG.clear()
    try:
        with open('data/inventory.csv', 'r') as f:
            reader = csv.DictReader(f)
            today = date.today()
            # Anchor date from the CSV
            anchor_date = date(2026, 3, 25)
            offset = today - anchor_date

            for row in reader:
                item_id = str(uuid.uuid4())
                
                if row.get('expiry_date'):
                    orig_exp = date.fromisoformat(row['expiry_date'])
                    row['expiry_date'] = (orig_exp + offset).isoformat()
                if row.get('added_date'):
                    orig_add = date.fromisoformat(row['added_date'])
                    row['added_date'] = (orig_add + offset).isoformat()

                row['id'] = item_id
                row['qty'] = float(row['qty'])
                row['price'] = float(row['price'])
                row['discount_pct'] = float(row['discount_pct'])
                
                INVENTORY.append(row)
    except Exception as e:
        print("Error loading CSV:", e)

initialize_dummy_data()


# ─── 1. GET /inventory ───────────────────────────────────────────────
@app.route("/inventory", methods=["GET"])
def get_inventory():
    try:
        items = []
        for item in INVENTORY:
            days = get_days_to_expiry(item["expiry_date"])
            item["days_to_expiry"] = days
            if item.get("status") != "redistributed":
                item["status"] = get_status(days)
            items.append(item)
        return jsonify({"success": True, "data": items}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 2. POST /inventory ──────────────────────────────────────────────
@app.route("/inventory", methods=["POST"])
def add_inventory():
    try:
        data = request.get_json()
        required = ["name", "category", "qty", "unit", "price", "expiry_date"]
        for field in required:
            if field not in data:
                return jsonify({"success": False, "error": f"Missing field: {field}"}), 400

        days = get_days_to_expiry(data["expiry_date"])
        
        new_item = {
            "id": str(uuid.uuid4()),
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
        INVENTORY.append(new_item)
        return jsonify({"success": True, "message": "Item added successfully", "data": [new_item]}), 201
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 2b. DELETE /inventory/<id> ──────────────────────────────────────
@app.route("/inventory/<item_id>", methods=["DELETE"])
def delete_inventory(item_id):
    try:
        global INVENTORY
        initial_len = len(INVENTORY)
        INVENTORY = [i for i in INVENTORY if i["id"] != item_id]
        if len(INVENTORY) == initial_len:
            return jsonify({"success": False, "error": "Item not found"}), 404
        return jsonify({"success": True, "message": "Item deleted"}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 3. GET /expiry-alerts ───────────────────────────────────────────
@app.route("/expiry-alerts", methods=["GET"])
def expiry_alerts():
    try:
        alerts = []
        for item in INVENTORY:
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
    try:
        suggestions = []
        for item in INVENTORY:
            if item.get("status") == "redistributed":
                continue
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
    try:
        items = [i for i in INVENTORY if i.get("status") != "redistributed"]
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
    try:
        data = request.get_json()
        item_id = data.get("item_id")
        ngo_name = data.get("ngo_name")

        if not item_id or not ngo_name:
            return jsonify({"success": False, "error": "item_id and ngo_name are required"}), 400

        item = next((i for i in INVENTORY if i["id"] == item_id), None)
        if not item:
            return jsonify({"success": False, "error": "Item not found"}), 404

        item["status"] = "redistributed"
        item["discount_pct"] = 0

        log_entry = {
            "id": str(uuid.uuid4()),
            "item_name": item["name"],
            "qty": item["qty"],
            "ngo_name": ngo_name,
            "donated_at": datetime.now().isoformat(),
            "inventory_id": item_id,
        }
        REDISTRIBUTION_LOG.append(log_entry)

        return jsonify({"success": True, "message": f"{item['name']} redistributed to {ngo_name}"}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 7. GET /redistribution-log ──────────────────────────────────────
@app.route("/redistribution-log", methods=["GET"])
def redistribution_log():
    try:
        sorted_logs = sorted(REDISTRIBUTION_LOG, key=lambda x: x["donated_at"], reverse=True)
        return jsonify({"success": True, "data": sorted_logs}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── 8. GET /forecast ──────────────────────────────────────────────────
@app.route("/forecast", methods=["GET"])
def forecast_endpoint():
    try:
        results = get_forecast(INVENTORY)
        return jsonify({"success": True, "data": results}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


# ─── Run Server ──────────────────────────────────────────────────────
if __name__ == "__main__":
    app.run(debug=True, port=5000)
