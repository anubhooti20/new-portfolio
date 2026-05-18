from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
import models
import schemas

router = APIRouter()


@router.get("/about", response_model=list[schemas.AboutParagraphOut])
def get_about(db: Session = Depends(get_db)):
    return db.query(models.AboutParagraph).order_by(models.AboutParagraph.order).all()
