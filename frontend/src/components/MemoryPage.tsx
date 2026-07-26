"use client";

import Navbar from "./layout/Navbar";

export default function MemoryPage() {
  return (
    <>
      <Navbar />

      <div className="p-8">
        <div className="rounded-3xl bg-white/5 p-8">
          <h1 className="text-4xl font-bold">Memory</h1>
          <p className="mt-3 text-gray-400">
            Long-term AI memory will appear here.
          </p>
        </div>
      </div>
    </>
  );
}