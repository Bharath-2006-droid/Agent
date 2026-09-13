from sentence_transformers import SentenceTransformer
import chromadb

from langchain_text_splitters import RecursiveCharacterTextSplitter


# Embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")


# ChromaDB
chroma_client = chromadb.PersistentClient(
    path="app/vectorstore/chroma_db"
)

collection = chroma_client.get_or_create_collection(
    name="documents"
)


# Split text into chunks
def split_text(pages):

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200
    )

    chunks = []

    for page in pages:

        text = page["text"]
        page_number = page["page"]

        if not text.strip():
            continue

        page_chunks = splitter.split_text(text)

        for chunk in page_chunks:

            chunks.append({
                "text": chunk,
                "page": page_number
            })

    return chunks


# Create embeddings
def create_embeddings(texts):

    embeddings = model.encode(texts)

    return embeddings.tolist()


# Store chunks in ChromaDB
def store_chunks(chunks):

    texts = [chunk["text"] for chunk in chunks]

    embeddings = create_embeddings(texts)

    ids = [
        f"chunk_{i}"
        for i in range(len(chunks))
    ]

    metadatas = [
        {
            "page": chunk["page"]
        }
        for chunk in chunks
    ]

    collection.add(
        ids=ids,
        documents=texts,
        embeddings=embeddings,
        metadatas=metadatas
    )

    return len(chunks)

def search_documents(query, top_k=3):

    query_embedding = create_embeddings([query])[0]

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=top_k
    )

    documents = results["documents"][0]
    metadatas = results["metadatas"][0]

    matches = []

    for document, metadata in zip(documents, metadatas):

        matches.append({
            "text": document,
            "page": metadata["page"]
        })

    return matches