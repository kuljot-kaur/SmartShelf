from datetime import date, datetime


def get_days_to_expiry(expiry_date):
    """Calculate days remaining until expiry from today."""
    if isinstance(expiry_date, str):
        expiry_date = datetime.strptime(expiry_date, "%Y-%m-%d").date()
    return (expiry_date - date.today()).days


def get_status(days):
    """Determine item status based on days to expiry."""
    if days < 0:
        return "expired"
    elif days <= 7:
        return "expiring_soon"
    else:
        return "safe"


def get_discount_pct(days):
    """Calculate discount percentage based on days to expiry."""
    if days < 0:
        return 0          # expired — redistribute, no discount
    elif days <= 1:
        return 50
    elif days <= 3:
        return 25
    elif days <= 7:
        return 10
    else:
        return 0           # safe — no discount needed
