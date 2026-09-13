import ollama

from app.memory.conversation import conversation
from app.services.rag import search_documents


def ask_ai(prompt: str):

    # Search uploaded documents
    matches = search_documents(prompt)

    context = "\n\n".join(
        match["text"]
        for match in matches
    )

    rag_prompt = f"""
You are Bharath's Bot, an AI study assistant.

Use the uploaded document context as the primary source for the topic.

DOCUMENT CONTEXT:
{context}

USER QUESTION:
{prompt}

Instructions:
- Use the document context to understand the user's question and the relevant topic.
- If the document contains the answer, answer using that information.
- If the document contains only a question and not its answer, you may use your own knowledge to explain the answer clearly.
- Do not claim that information came from the uploaded document if it is not actually present there.
- Keep the answer clear and useful for studying.
"""

    conversation.append({
        "role": "user",
        "content": rag_prompt
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

    # Search uploaded documents
    matches = search_documents(prompt)

    context = "\n\n".join(
        match["text"]
        for match in matches
    )

    rag_prompt = f"""
You are Bharath's Bot, an AI study assistant.

Use the uploaded document context as the primary source for the topic.

DOCUMENT CONTEXT:
{context}

USER QUESTION:
{prompt}

Instructions:
- Use the document context to understand the user's question and the relevant topic.
- If the document contains the answer, answer using that information.
- If the document contains only a question and not its answer, you may use your own knowledge to explain the answer clearly.
- Do not claim that information came from the uploaded document if it is not actually present there.
- Keep the answer clear and useful for studying.
- Do not use Markdown formatting.
- Do not use #, *, **, _, or backticks.
- Use plain text only.
- Use simple numbered lists when needed.
"""

    conversation.append({
        "role": "user",
        "content": rag_prompt
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

        print(repr(text), flush=True)

        full_response += text

        yield text.encode("utf-8")

    conversation.append({
        "role": "assistant",
        "content": full_response
    })