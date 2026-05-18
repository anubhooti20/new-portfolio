from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
import models
import schemas

router = APIRouter()


@router.post("/contact", response_model=schemas.ContactMessageOut, status_code=201)
def submit_contact(payload: schemas.ContactMessageIn, db: Session = Depends(get_db)):
    msg = models.ContactMessage(**payload.model_dump())
    db.add(msg)
    db.commit()
    db.refresh(msg)
    return msg


@router.get("/contact/messages", response_model=list[schemas.ContactMessageOut])
def list_messages(db: Session = Depends(get_db)):
    return (
        db.query(models.ContactMessage)
        .order_by(models.ContactMessage.created_at.desc())
        .all()
    )
