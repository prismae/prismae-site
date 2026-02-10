from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

from app.routes.contact import router as contact_router

load_dotenv()

app = FastAPI(
    title=os.getenv("PROJECT_NAME", "PRISMAE API"),
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(contact_router, prefix="/contact", tags=["Contact"])

@app.get("/")
def root():
    return {
        "status": "online",
        "project": app.title
    }
