# 🤖 BHARATH'S BOT

An intelligent personal AI assistant built with **FastAPI**, **Next.js**, **React**, **TypeScript**, and **Ollama**.

BHARATH'S BOT combines a modern futuristic 3D interface with a local AI backend, conversation memory, document intelligence, and Retrieval-Augmented Generation (RAG).

---

## ✨ Features

- 💬 AI Chat Interface
- 🧠 Conversation Memory
- ⚡ FastAPI Backend
- 🦙 Local Ollama LLM Integration
- 🤖 Qwen3 8B AI Model
- 🌐 Modern Next.js Frontend
- 🎨 Futuristic 3D Quantum AI Core
- 📄 PDF, DOCX and TXT Document Upload
- 🔍 Document Text Extraction
- ✂️ Intelligent Text Chunking
- 🧬 Semantic Embeddings
- 🗄️ ChromaDB Vector Database
- 📚 Retrieval-Augmented Generation (RAG)
- 🔎 Context-Aware Document Search
- 📡 Streaming AI Responses
- 🧩 Extensible AI Agent Architecture

---

## 🧠 How It Works

```text
                ┌─────────────────────┐
                │     User Query      │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │    Next.js UI       │
                │  React + TypeScript │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │    FastAPI API      │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │   RAG Retrieval     │
                │                     │
                │ Query Embedding     │
                │        ↓            │
                │     ChromaDB        │
                │        ↓            │
                │ Relevant Chunks     │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │      Qwen3 8B       │
                │       Ollama        │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │    AI Response      │
                └─────────────────────┘
