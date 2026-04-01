import sys
import os
sys.path.append(os.getcwd())

from forecast import get_forecast

# Sample data for testing
sample_inventory = [
    {"name": "Milk", "category": "Dairy", "qty": 10, "price": 2.5, "expiry_date": "2026-03-28"}, # Near expiry
    {"name": "Bread", "category": "Bakery", "qty": 5, "price": 1.2, "expiry_date": "2026-03-30"},# Near expiry
    {"name": "Apples", "category": "Fruit", "qty": 20, "price": 0.5, "expiry_date": "2026-04-10"},# Far expiry, high qty
    {"name": "Cereal", "category": "Pantry", "qty": 2, "price": 4.0, "expiry_date": "2027-01-01"},# Very far expiry, low qty
]

def test_forecast():
    print("Testing ML Forecast with sample data...")
    results = get_forecast(sample_inventory)
    
    if not results:
        print("FAILED: No results returned.")
        return

    print(f"Success! {len(results)} items forecasted.\n")
    print(f"{'Item':<10} | {'Demand':<8} | {'Conf':<6} | {'Rec':<15}")
    print("-" * 45)
    for res in results:
        print(f"{res['item']:<10} | {res['predicted_demand']:<8} | {res['confidence']:<6} | {res['recommendation']:<15}")

def test_edge_case_small_inventory():
    print("\nTesting edge case: small inventory (< 3 items)...")
    small_inventory = sample_inventory[:2]
    results = get_forecast(small_inventory)
    if results == []:
        print("Success: Correctly returned empty list for small inventory.")
    else:
        print(f"FAILED: Expected empty list, got {len(results)} items.")

if __name__ == "__main__":
    test_forecast()
    test_edge_case_small_inventory()
