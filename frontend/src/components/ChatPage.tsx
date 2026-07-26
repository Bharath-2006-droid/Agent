"use client";

import Navbar from "./layout/Navbar";
import ChatWindow from "./chat/ChatWindow";

export default function ChatPage() {
  return (
    <section className="flex h-screen flex-col">

      <Navbar />

      <div className="flex-1 overflow-hidden p-8">

        <div className="mx-auto h-full max-w-7xl">

          <ChatWindow />

        </div>

      </div>

    </section>
  );
}