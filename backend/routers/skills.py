from collections import defaultdict
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
import models
import schemas

router = APIRouter()


@router.get("/skills", response_model=schemas.SkillsResponse)
def get_skills(db: Session = Depends(get_db)):
    skill_rows = db.query(models.Skill).order_by(models.Skill.order).all()
    groups: dict[str, list[str]] = defaultdict(list)
    for s in skill_rows:
        groups[s.category].append(s.name)

    visuals = db.query(models.SkillVisual).order_by(models.SkillVisual.order).all()
    return {"groups": dict(groups), "visuals": visuals}
