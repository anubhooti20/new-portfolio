from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.types import JSON
from datetime import datetime, timezone
from database import Base


class HeroStat(Base):
    __tablename__ = "hero_stats"
    id = Column(Integer, primary_key=True, autoincrement=True)
    label = Column(String, nullable=False)
    value_text = Column(String, nullable=True)
    value_big = Column(String, nullable=True)
    order = Column(Integer, default=0)


class AboutParagraph(Base):
    __tablename__ = "about_paragraphs"
    id = Column(Integer, primary_key=True, autoincrement=True)
    content = Column(Text, nullable=False)
    order = Column(Integer, default=0)


class Experience(Base):
    __tablename__ = "experience"
    id = Column(Integer, primary_key=True, autoincrement=True)
    role = Column(String, nullable=False)
    company = Column(String, nullable=False)
    location = Column(String, nullable=True)
    type = Column(String, nullable=False)  # "current" | "internship" | "education"
    dates = Column(String, nullable=False)
    bullets = Column(JSON, nullable=False)
    pills = Column(JSON, nullable=True)
    order = Column(Integer, default=0)


class Skill(Base):
    __tablename__ = "skills"
    id = Column(Integer, primary_key=True, autoincrement=True)
    category = Column(String, nullable=False)
    name = Column(String, nullable=False)
    order = Column(Integer, default=0)


class SkillVisual(Base):
    __tablename__ = "skill_visuals"
    id = Column(Integer, primary_key=True, autoincrement=True)
    icon = Column(String, nullable=False)
    name = Column(String, nullable=False)
    label = Column(String, nullable=False)
    order = Column(Integer, default=0)


class MarqueeItem(Base):
    __tablename__ = "marquee_items"
    id = Column(Integer, primary_key=True, autoincrement=True)
    text = Column(String, nullable=False)
    order = Column(Integer, default=0)


class Project(Base):
    __tablename__ = "projects"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    badge = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    features = Column(JSON, nullable=False)
    tags = Column(JSON, nullable=False)
    order = Column(Integer, default=0)


class ContactMessage(Base):
    __tablename__ = "contact_messages"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    subject = Column(String, nullable=True)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
