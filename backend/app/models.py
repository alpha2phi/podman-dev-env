import uuid
from datetime import datetime

from sqlmodel import Field, Relationship, SQLModel


class UserBase(SQLModel):
    name: str
    email: str = Field(unique=True, index=True)
    is_active: bool = True
    is_superuser: bool = False


class User(UserBase, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    hashed_password: str
    items: list["Item"] = Relationship(back_populates="owner")
    date_created: datetime = Field(default_factory=datetime.now, nullable=False)
    date_modified: datetime = Field(default_factory=datetime.now, nullable=False)


# Properties to receive via API on creation
class UserCreate(UserBase):
    password: str


# Properties to receive via API on update, all are optional
# TODO replace email str with EmailStr when sqlmodel supports it
class UserUpdate(UserBase):
    name: str | None = None
    email: str | None = None
    password: str | None = None


# Properties to return via API, id is always required
class UserPublic(UserBase):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)


class UsersPublic(SQLModel):
    data: list[UserPublic]
    count: int


# Shared properties
class ItemBase(SQLModel):
    title: str
    description: str | None = None
    date_created: datetime = Field(default_factory=datetime.now, nullable=False)
    date_modified: datetime = Field(default_factory=datetime.now, nullable=False)


# Properties to receive on item creation
class ItemCreate(ItemBase):
    title: str


# Properties to receive on item update
class ItemUpdate(ItemBase):
    title: str | None = None  # type: ignore


# Database model, database table inferred from class name
class Item(ItemBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str
    owner_id: uuid.UUID | None = Field(
        default=None, foreign_key="user.id", nullable=False
    )
    owner: User | None = Relationship(back_populates="items")


class ItemPublic(ItemBase):
    id: int
    owner_id: int


class ItemsPublic(SQLModel):
    data: list[ItemPublic]
    count: int


# Generic message
class Message(SQLModel):
    message: str


# JSON payload containing access token
class Token(SQLModel):
    access_token: str
    token_type: str = "bearer"


# Contents of JWT token
class TokenPayload(SQLModel):
    sub: int | None = None
