from fastapi import FastAPI
from pydantic import BaseModel
from model import predict_url

app = FastAPI()

class URLRequest(BaseModel):
    url: str

@app.get("/")
def home():
    return {"message": "PhishGuard API running"}

@app.post("/check")
def check_url(data: URLRequest):
    result = predict_url(data.url)
    return {"result": result}
