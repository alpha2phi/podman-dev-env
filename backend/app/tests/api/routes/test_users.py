from unittest.mock import patch

from fastapi.testclient import TestClient
from sqlmodel import Session

from app import crud
from app.core.config import settings
from app.tests.utils.utils import random_email, random_lower_string


def test_create_user(client: TestClient, db: Session) -> None:
    name = random_lower_string()
    email = random_email()
    password = random_lower_string()
    data = {"name": name, "email": email, "password": password}
    r = client.post(
        f"{settings.API_V1_STR}/users/",
        json=data,
    )
    assert 200 <= r.status_code < 300
    created_user = r.json()
    user = crud.get_user_by_email(session=db, email=email)
    assert user
    assert user.email == created_user["email"]
