from fastapi import APIRouter, UploadFile, File, HTTPException

import os
import shutil

from app.services.pdf_loader import (
    extract_pdf_text,
    extract_docx_text
)

from app.services.rag import split_text, store_chunks


router = APIRouter()

UPLOAD_DIR = "app/uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)


ALLOWED_EXTENSIONS = {
    ".pdf",
    ".docx",
    ".txt"
}


@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):

    # Check if a file was selected
    if not file.filename:
        raise HTTPException(
            status_code=400,
            detail="No file selected"
        )

    # Get file extension
    extension = os.path.splitext(file.filename)[1].lower()

    # Check supported file type
    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Only PDF, DOCX and TXT files are supported"
        )

    # Create file path
    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    # Save uploaded file
    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(
                file.file,
                buffer
            )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to save file: {str(e)}"
        )

    # Extract document text
    pages = []

    try:

        if extension == ".pdf":

            pages = extract_pdf_text(file_path)

        elif extension == ".docx":

            pages = extract_docx_text(file_path)

        elif extension == ".txt":

            with open(
                file_path,
                "r",
                encoding="utf-8"
            ) as text_file:

                text = text_file.read()

            pages = [
                {
                    "page": 1,
                    "text": text
                }
            ]

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=f"Failed to scan document: {str(e)}"
        )

    # Split extracted text into chunks
    try:

        chunks = split_text(pages)

        # Store chunks in ChromaDB
        stored_chunks = store_chunks(chunks)

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=f"Failed to process document: {str(e)}"
        )

    # Return result
    return {
        "success": True,
        "message": "Document uploaded, scanned, chunked and stored successfully",
        "filename": file.filename,
        "file_type": extension,
        "number_of_pages": len(pages),
        "number_of_chunks": len(chunks),
        "stored_chunks": stored_chunks
    }