"use client";

import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
}

export default function PromptBox({ onSend }: Props) {
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  }

  return (
    <div className="flex gap-3">
      <input
        className="flex-1 rounded-xl bg-white/10 p-4 outline-none"
        placeholder="Ask Bharath's Bot..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") send();
        }}
      />

      <button
        onClick={send}
        className="rounded-xl bg-cyan-500 px-6"
      >
        Send
      </button>
    </div>
  );
}