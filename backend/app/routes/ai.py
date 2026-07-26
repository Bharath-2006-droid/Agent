from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from app.services.ollama_service import ask_ai, stream_ai
from app.models.chat import ChatRequest

router = APIRouter()


@router.post("/chat")
def chat(request: ChatRequest):

    reply = ask_ai(request.prompt)

    return {
        "response": reply
    }


@router.post("/chat/stream")
def chat_stream(request: ChatRequest):

    return StreamingResponse(
        stream_ai(request.prompt),
        media_type="text/plain",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )