import ollama
from app.memory.conversation import conversation


def ask_ai(prompt: str):

    conversation.append({
        "role": "user",
        "content": prompt
    })

    response = ollama.chat(
        model="qwen3:8b",
        messages=conversation,
        keep_alive="24h"
    )

    assistant_reply = response["message"]["content"]

    conversation.append({
        "role": "assistant",
        "content": assistant_reply
    })

    return assistant_reply


def stream_ai(prompt: str):

    conversation.append({
        "role": "user",
        "content": prompt
    })

    stream = ollama.chat(
        model="qwen3:8b",
        messages=conversation,
        stream=True,
        keep_alive="24h"
    )

    full_response = ""

    for chunk in stream:
        text = chunk["message"]["content"]

        # Debug: check if Ollama is streaming
        print(repr(text), flush=True)

        full_response += text

        # Send chunk immediately
        yield text.encode("utf-8")

    conversation.append({
        "role": "assistant",
        "content": full_response
    })
    