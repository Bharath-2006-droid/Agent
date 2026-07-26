"use client";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-white/10 backdrop-blur-xl bg-white/5 flex items-center justify-between px-8">
      <div>
        <h2 className="text-2xl font-bold">
          AI Dashboard
        </h2>

        <p className="text-sm text-gray-400">
          Bharath's Personal AI
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

        <span className="text-green-400">
          ONLINE
        </span>
      </div>
    </header>
  );
}