"use client";

import { useState } from "react";
import { streamAI } from "@/lib/api";
import PromptBox from "./PromptBox";
import ChatMessage from "./ChatMessage";
import { Message } from "@/types/chat";

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(text: string) {
    setLoading(true);

    const user: Message = {
      role: "user",
      content: text,
    };

    const assistant: Message = {
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, user, assistant]);

    try {
      await streamAI(text, (chunk) => {
        setMessages((prev) => {
          const copy = [...prev];

          copy[copy.length - 1] = {
            ...copy[copy.length - 1],
            content: copy[copy.length - 1].content + chunk,
          };

          return copy;
        });
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

      <div className="flex-1 overflow-y-auto p-6 space-y-4">

        {messages.length === 0 && (
          <div className="flex h-full items-center justify-center text-gray-500">
            Start a conversation with Bharath's Bot
          </div>
        )}

        {messages.map((m, i) => (
          <ChatMessage key={i} {...m} />
        ))}

        {loading && (
          <div className="text-cyan-400 animate-pulse">
            Bharath's Bot is typing...
          </div>
        )}

      </div>

      <div className="border-t border-white/10 p-6">
        <PromptBox onSend={sendMessage} />
      </div>

    </div>
  );
}