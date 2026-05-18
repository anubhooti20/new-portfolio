from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
import models
import schemas

router = APIRouter()


@router.get("/hero-stats", response_model=list[schemas.HeroStatOut])
def get_hero_stats(db: Session = Depends(get_db)):
    return db.query(models.HeroStat).order_by(models.HeroStat.order).all()
