from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
import models
import schemas

router = APIRouter()


@router.get("/experience", response_model=list[schemas.ExperienceOut])
def get_experience(db: Session = Depends(get_db)):
    return db.query(models.Experience).order_by(models.Experience.order).all()
