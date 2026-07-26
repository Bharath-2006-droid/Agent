"use client";

import Navbar from "./Navbar";
import AIOrb from "../ai/AIOrb";

export default function Dashboard() {
  return (
    <section className="flex min-h-full flex-col">
      <Navbar />

      <div className="p-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">

          {/* AI CORE */}
          <div className="rounded-3xl border border-violet-500/20 bg-black/20 backdrop-blur-xl p-8">

            <div className="mb-8 flex items-center justify-between">

              <div>
                <h1 className="text-5xl font-bold text-cyan-400">
                  AI CORE
                </h1>

                <p className="mt-2 text-gray-400">
                  Bharath's Personal AI Operating System
                </p>
              </div>

              <div className="rounded-full bg-green-500/20 px-5 py-2 text-green-400">
                ● ONLINE
              </div>

            </div>

            <AIOrb />

          </div>

          {/* Quick Actions */}

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">

            <button className="rounded-2xl bg-cyan-500/20 p-6 transition hover:scale-105">
              💬
              <br />
              New Chat
            </button>

            <button className="rounded-2xl bg-violet-500/20 p-6 transition hover:scale-105">
              📁
              <br />
              Upload
            </button>

            <button className="rounded-2xl bg-pink-500/20 p-6 transition hover:scale-105">
              🌐
              <br />
              Research
            </button>

            <button className="rounded-2xl bg-green-500/20 p-6 transition hover:scale-105">
              🧠
              <br />
              Memory
            </button>

            <button className="rounded-2xl bg-yellow-500/20 p-6 transition hover:scale-105">
              ⚙️
              <br />
              Settings
            </button>

            <button className="rounded-2xl bg-red-500/20 p-6 transition hover:scale-105">
              🎤
              <br />
              Voice
            </button>

          </div>

          {/* Stats */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-gray-400">Model</p>
              <h2 className="mt-2 text-3xl font-bold text-cyan-400">
                Qwen3 8B
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-gray-400">Backend</p>
              <h2 className="mt-2 text-3xl font-bold text-green-400">
                FastAPI
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-gray-400">Memory</p>
              <h2 className="mt-2 text-3xl font-bold">
                Enabled
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-gray-400">Status</p>
              <h2 className="mt-2 text-3xl font-bold text-green-400">
                Ready
              </h2>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}