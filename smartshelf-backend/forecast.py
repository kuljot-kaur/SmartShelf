import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder
from datetime import date, datetime


def get_days_to_expiry(expiry_date):
    """Calculate days remaining until expiry."""
    if isinstance(expiry_date, str):
        expiry_date = datetime.strptime(expiry_date, "%Y-%m-%d").date()
    return (expiry_date - date.today()).days


def get_forecast(inventory_data):
    """
    Train a RandomForest model on inventory data and predict demand.
    Returns a list of forecast dicts with recommendations.
    """
    if not inventory_data or len(inventory_data) < 3:
        return []

    # Build a DataFrame
    df = pd.DataFrame(inventory_data)

    # Compute days_to_expiry for each item
    df["days_to_expiry"] = df["expiry_date"].apply(get_days_to_expiry)

    # Encode category
    le = LabelEncoder()
    df["category_encoded"] = le.fit_transform(df["category"].astype(str))

    # Features: days_to_expiry, category_encoded, price, qty
    feature_cols = ["days_to_expiry", "category_encoded", "price", "qty"]
    df["price"] = pd.to_numeric(df["price"], errors="coerce").fillna(0)
    df["qty"] = pd.to_numeric(df["qty"], errors="coerce").fillna(0)

    X = df[feature_cols].values

    # Synthetic target: simulate demand as a function of proximity + qty
    # Items near expiry with high qty → lower demand signal
    # Items with long shelf life → higher demand signal
    y = (df["qty"] * 0.6 + df["days_to_expiry"] * 0.3 + df["price"] * 0.1).values
    y = np.clip(y, 0, None)  # no negative demand

    # Train model
    model = RandomForestRegressor(n_estimators=50, random_state=42)
    model.fit(X, y)

    # Predict
    predictions = model.predict(X)
    max_pred = predictions.max() if predictions.max() > 0 else 1

    results = []
    for i, row in df.iterrows():
        pred = round(float(predictions[i]), 2)
        confidence = round(min(float(predictions[i]) / max_pred, 1.0) * 100, 1)

        days = row["days_to_expiry"]
        # Recommendation logic
        if pred > (max_pred * 0.65):
            recommendation = "restock"
        elif days <= 3 and pred < (max_pred * 0.4):
            recommendation = "discount_soon"
        else:
            recommendation = "safe"

        results.append({
            "item": row["name"],
            "category": row["category"],
            "predicted_demand": pred,
            "confidence": confidence,
            "recommendation": recommendation,
        })

    # Sort by predicted_demand descending
    results.sort(key=lambda x: x["predicted_demand"], reverse=True)

    return results
