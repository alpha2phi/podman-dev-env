from fastapi.encoders import jsonable_encoder
from sqlmodel import Session

from app import crud
from app.core.config import settings
from app.core.security import verify_password
from app.models import User, UserCreate, UserUpdate
from app.tests.utils.utils import random_email, random_lower_string


def test_create_user(db: Session) -> None:
    email = random_email()
    password = random_lower_string()
    name = random_lower_string()
    user_in = UserCreate(name=name, email=email, password=password)
    user = crud.create_user(session=db, user_create=user_in)
    assert user.email == email
    assert hasattr(user, "hashed_password")


def test_get_user(db: Session) -> None:
    password = random_lower_string()
    username = random_email()
    name = random_lower_string()
    user_in = UserCreate(
        name=name, email=username, password=password, is_superuser=True
    )
    user = crud.create_user(session=db, user_create=user_in)
    user_2 = db.get(User, user.id)
    assert user_2
    assert user.email == user_2.email
    assert jsonable_encoder(user) == jsonable_encoder(user_2)


def test_authenticate_user(db: Session) -> None:
    name = random_lower_string()
    email = random_email()
    password = random_lower_string()
    user_in = UserCreate(name=name, email=email, password=password)
    user = crud.create_user(session=db, user_create=user_in)
    authenticated_user = crud.authenticate(session=db, email=email, password=password)
    assert authenticated_user
    assert user.email == authenticated_user.email


def test_get_admin_user(db: Session) -> None:
    user = crud.get_user_by_email(session=db, email=settings.FIRST_SUPERUSER_EMAIL)
    assert user


def test_update_user(db: Session) -> None:
    password = random_lower_string()
    email = random_email()
    name = random_lower_string()
    user_in = UserCreate(name=name, email=email, password=password, is_superuser=True)
    user = crud.create_user(session=db, user_create=user_in)
    new_name = random_lower_string()
    new_password = random_lower_string()
    user_in_update = UserUpdate(name=new_name, password=new_password, is_superuser=True)
    if user.id is not None:
        crud.update_user(session=db, db_user=user, user_in=user_in_update)
    user_2 = db.get(User, user.id)
    assert user_2
    assert user.email == user_2.email
    assert verify_password(new_password, user_2.hashed_password)
