const API_URL = "http://127.0.0.1:8000";

export async function askAI(message: string) {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: message,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to contact AI");
  }

  return response.json();
}

export async function streamAI(
  message: string,
  onChunk: (chunk: string) => void
) {
  const response = await fetch(`${API_URL}/chat/stream`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: message,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to contact AI");
  }

  const reader = response.body?.getReader();

  if (!reader) {
    throw new Error("No response body");
  }

  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    onChunk(decoder.decode(value));
  }
}