from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
import models
import schemas

router = APIRouter()


@router.get("/marquee", response_model=list[schemas.MarqueeItemOut])
def get_marquee(db: Session = Depends(get_db)):
    return db.query(models.MarqueeItem).order_by(models.MarqueeItem.order).all()
