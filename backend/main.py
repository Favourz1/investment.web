import uvicorn
from starlette.middleware.sessions import SessionMiddleware

from dotenv import load_dotenv
import os

from fastapi import FastAPI
from fastapi_utils.tasks import repeat_every

from api.database import database
from api.database.database import engine
from api.routes import routes, social_login
from api.payment_gte import server
from api.scripts.ranking import run_process_scripts
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()

database.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SECRET_KEY = os.getenv('SECRET_KEY')
app.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)

app.include_router(social_login.router)
app.include_router(routes.router)
app.include_router(server.router)



async def update_script_task():
    print('Running update script...')
    await run_process_scripts()


@app.on_event("startup")
@repeat_every(seconds=60 * 60)  # run every hour
async def run_cron():
    await update_script_task()


@app.get('/')
async def get_root():
    return {
        "message": "My Stock Plug API",
    }


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
