from collections.abc import Generator

import pytest
from fastapi.testclient import TestClient
from sqlmodel import Session, delete

from app.core.config import Settings, settings
from app.core.db import engine, init_db
from app.main import app
from app.models import Item, User
from app.tests.utils.utils import get_user_token_headers


@pytest.fixture
def config() -> Settings:
    return settings


@pytest.fixture(scope="session", autouse=True)
def db() -> Generator[Session, None, None]:
    with Session(engine) as session:
        init_db(session)
        yield session

        # Clean up items
        statement = delete(Item)
        session.exec(statement)

        # Clean up users
        statement = delete(User)
        session.exec(statement)

        session.commit()


def test_settings(config: Settings):
    assert config is not None


@pytest.fixture(scope="module")
def client() -> Generator[TestClient, None, None]:
    with TestClient(app) as c:
        yield c


@pytest.fixture(scope="module")
def user_token_headers() -> dict[str, str]:
    return get_user_token_headers()
