from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
import models  # noqa: registers all models with Base before create_all
from routers import hero, about, experience, skills, projects, marquee, contact

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Anubhooti Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(hero.router, prefix="/api")
app.include_router(about.router, prefix="/api")
app.include_router(experience.router, prefix="/api")
app.include_router(skills.router, prefix="/api")
app.include_router(projects.router, prefix="/api")
app.include_router(marquee.router, prefix="/api")
app.include_router(contact.router, prefix="/api")
