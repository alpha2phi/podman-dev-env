import random
import string

import httpx

from app.core.config import settings


def random_lower_string() -> str:
    return "".join(random.choices(string.ascii_lowercase, k=32))


def random_email() -> str:
    return f"{random_lower_string()}@{random_lower_string()}.com"


def get_user_token_headers() -> dict[str, str]:
    login_data = {
        "client_id": settings.API_CLIENT_ID,
        "client_secret": settings.API_CLIENT_SECRET,
        "grant_type": "client_credentials",
        "scope": settings.API_SCOPE,
    }
    r = httpx.post(settings.API_TOKEN_URL, data=login_data)
    tokens = r.json()
    a_token = tokens["access_token"]
    headers = {"Authorization": f"Bearer {a_token}"}
    return headers
