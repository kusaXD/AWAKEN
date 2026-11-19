from contextlib import asynccontextmanager
from uuid import uuid4
from xmlrpc.client import boolean

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from opentelemetry.trace import StatusCode
from pydantic import BaseModel
from sqlalchemy import create_engine, select
from sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column, sessionmaker

DATABASE_URL = "postgresql+psycopg://postgres:12345@localhost:5432/awaken"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)


@asynccontextmanager
async def lifespan(_: FastAPI):
    Base.metadata.create_all(bind=engine)
    yield


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


class Base(DeclarativeBase):
    id: Mapped[str] = mapped_column(primary_key=True, default=lambda: str(uuid4()))


class QuestORM(Base):
    __tablename__ = "quests"

    title: Mapped[str]
    description: Mapped[str]
    completed: Mapped[boolean]


class QuestChema(BaseModel):
    id: str
    title: str
    description: str
    completed: boolean


class QuestCreateChema(BaseModel):
    title: str
    description: str
    completed: boolean


def quest_orm_to_model(quest_orm: QuestORM) -> QuestChema:
    return QuestChema(
        id=quest_orm.id,
        title=quest_orm.title,
        description=quest_orm.description,
        completed=quest_orm.completed,
    )


@app.get("/quests")
def get_quests(db: Depends(get_db)) -> QuestChema:
    quests_from_db = db.scalars(select(QuestORM)).all()
    return [quest_orm_to_model(quest for quest in quests_from_db)]


@app.post("/quests")
def create_quest(payload: QuestCreateChema, db: Depends(get_db)) -> QuestChema:
    new_quest = QuestORM(
        id=str(uuid4()),
        title=payload.title,
        description=payload.description,
        completed=payload.description,
    )
    db.add(new_quest)
    db.commit()
    return new_quest
