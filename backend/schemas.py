from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional


class HeroStatOut(BaseModel):
    id: int
    label: str
    value_text: Optional[str] = None
    value_big: Optional[str] = None
    order: int
    model_config = {"from_attributes": True}


class AboutParagraphOut(BaseModel):
    id: int
    content: str
    order: int
    model_config = {"from_attributes": True}


class ExperienceOut(BaseModel):
    id: int
    role: str
    company: str
    location: Optional[str] = None
    type: str
    dates: str
    bullets: list[str]
    pills: Optional[list[str]] = None
    order: int
    model_config = {"from_attributes": True}


class SkillOut(BaseModel):
    id: int
    category: str
    name: str
    order: int
    model_config = {"from_attributes": True}


class SkillVisualOut(BaseModel):
    id: int
    icon: str
    name: str
    label: str
    order: int
    model_config = {"from_attributes": True}


class SkillsResponse(BaseModel):
    groups: dict[str, list[str]]
    visuals: list[SkillVisualOut]


class MarqueeItemOut(BaseModel):
    id: int
    text: str
    order: int
    model_config = {"from_attributes": True}


class ProjectOut(BaseModel):
    id: int
    name: str
    badge: str
    description: str
    features: list[str]
    tags: list[str]
    order: int
    model_config = {"from_attributes": True}


class ContactMessageIn(BaseModel):
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str


class ContactMessageOut(BaseModel):
    id: int
    name: str
    email: str
    subject: Optional[str] = None
    message: str
    created_at: datetime
    model_config = {"from_attributes": True}
