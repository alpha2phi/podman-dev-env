from sqlmodel import Session

from app import crud
from app.models import User, UserCreate
from app.tests.utils.utils import random_email, random_lower_string


def create_random_user(db: Session) -> User:
    name = random_lower_string()
    email = random_email()
    password = random_lower_string()
    user_in = UserCreate(name=name, email=email, password=password)
    user = crud.create_user(session=db, user_create=user_in)
    return user
