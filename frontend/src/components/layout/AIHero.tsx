"use client";

import AIHero from "./AIHero";

export default function AIHero() {
  return (
    <div className="rounded-3xl border border-violet-500/20 bg-black/10 backdrop-blur-md p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-4xl font-bold text-violet-300">
            AI CORE
          </h2>

          <p className="mt-2 text-gray-400">
            Bharath's Personal AI Operating System
          </p>
        </div>

        <div className="rounded-full border border-green-400/30 bg-green-500/10 px-5 py-2 text-green-400">
          ● ONLINE
        </div>

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <AIHero />
        </div>

        <div className="space-y-4">

          <div className="rounded-2xl border border-violet-500/20 bg-white/5 p-5">
            <p className="text-sm text-gray-400">MODEL</p>
            <h3 className="mt-2 text-2xl font-bold text-violet-300">
              Qwen3 8B
            </h3>
          </div>

          <div className="rounded-2xl border border-violet-500/20 bg-white/5 p-5">
            <p className="text-sm text-gray-400">STATUS</p>
            <h3 className="mt-2 text-2xl font-bold text-green-400">
              Ready
            </h3>
          </div>

          <div className="rounded-2xl border border-violet-500/20 bg-white/5 p-5">
            <p className="text-sm text-gray-400">MEMORY</p>
            <h3 className="mt-2 text-2xl font-bold">
              Enabled
            </h3>
          </div>

          <div className="rounded-2xl border border-violet-500/20 bg-white/5 p-5">
            <p className="text-sm text-gray-400">BACKEND</p>
            <h3 className="mt-2 text-2xl font-bold text-cyan-400">
              FastAPI
            </h3>
          </div>

        </div>

      </div>

    </div>
  );
}