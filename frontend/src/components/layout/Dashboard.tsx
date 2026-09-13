"use client";

import { useRef, useState } from "react";

import Navbar from "./Navbar";
import AIOrb from "../ai/AIOrb";

export default function Dashboard() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setUploading(true);
    setUploadMessage("Uploading and processing...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Upload failed"
        );
      }

      setUploadMessage(
        `${file.name} is ready for questions.`
      );
    } catch (error) {
      console.error(error);

      setUploadMessage(
        "Upload failed. Please try again."
      );
    } finally {
      setUploading(false);

      // Allow selecting the same file again
      event.target.value = "";
    }
  };

  return (
    <section className="flex min-h-full flex-col">

      <Navbar />

      <div className="p-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-8">

          {/* AI CORE */}

          <div className="rounded-3xl border border-violet-500/20 bg-black/20 p-8 backdrop-blur-xl">

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


          {/* COMMAND DECK */}

          <div className="relative">

            {/* Section Header */}

            <div className="mb-5 flex items-end justify-between">

              <div>

                <div className="mb-2 flex items-center gap-3">

                  <span className="h-px w-8 bg-cyan-400/60" />

                  <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400/70">
                    CONTROL SURFACE
                  </span>

                </div>

                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  Command Deck
                </h2>

              </div>

              <div className="hidden items-center gap-2 text-[10px] tracking-[0.25em] text-gray-600 sm:flex">

                <span>06</span>

                <span className="h-px w-8 bg-white/10" />

                <span>MODULES</span>

              </div>

            </div>


            {/* Command Grid */}

            <div className="grid grid-cols-1 gap-3 md:grid-cols-12">


              {/* NEW CHAT */}

              <button
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.025]
                  p-7 text-left
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.035]
                  md:col-span-7
                "
              >

                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.06] blur-3xl transition-all duration-700 group-hover:bg-cyan-400/[0.12]" />

                <div className="relative flex min-h-[180px] flex-col justify-between">

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">

                      <span className="text-xl">
                        ◇
                      </span>

                    </div>

                    <span className="text-[10px] tracking-[0.25em] text-gray-600">
                      01
                    </span>

                  </div>

                  <div>

                    <div className="mb-2 text-[11px] tracking-[0.3em] text-cyan-400/70">
                      NEW SESSION
                    </div>

                    <div className="flex items-end justify-between">

                      <div>

                        <h3 className="text-xl font-medium text-white">
                          New Chat
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          Start with a clean conversation context
                        </p>

                      </div>

                      <span className="text-xl text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
                        →
                      </span>

                    </div>

                  </div>

                </div>

              </button>


              {/* UPLOAD */}

              <button
                onClick={handleUploadClick}
                disabled={uploading}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.025]
                  p-7 text-left
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-violet-400/30
                  hover:bg-violet-400/[0.035]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  md:col-span-5
                "
              >

                <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-violet-400/[0.06] blur-3xl transition-all duration-700 group-hover:bg-violet-400/[0.12]" />

                <div className="relative flex min-h-[180px] flex-col justify-between">

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/[0.06] text-violet-300">

                      <span className="text-xl">
                        ↑
                      </span>

                    </div>

                    <span className="text-[10px] tracking-[0.25em] text-gray-600">
                      02
                    </span>

                  </div>

                  <div>

                    <div className="mb-2 text-[11px] tracking-[0.3em] text-violet-400/70">
                      KNOWLEDGE
                    </div>

                    <h3 className="text-xl font-medium text-white">
                      {uploading
                        ? "Processing..."
                        : "Upload"}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Feed new knowledge into the system
                    </p>

                  </div>

                </div>

              </button>


              {/* Hidden File Input */}

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={handleFileChange}
                className="hidden"
              />


              {/* RESEARCH */}

              <button
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.025]
                  p-6 text-left
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-pink-400/30
                  hover:bg-pink-400/[0.035]
                  md:col-span-4
                "
              >

                <div className="relative flex min-h-[145px] flex-col justify-between">

                  <div className="flex items-start justify-between">

                    <span className="text-xl text-pink-300">
                      ⌕
                    </span>

                    <span className="text-[10px] tracking-[0.25em] text-gray-600">
                      03
                    </span>

                  </div>

                  <div>

                    <div className="text-[10px] tracking-[0.3em] text-pink-400/70">
                      DISCOVERY
                    </div>

                    <h3 className="mt-1 text-lg font-medium text-white">
                      Research
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      Search, investigate, discover
                    </p>

                  </div>

                </div>

              </button>


              {/* MEMORY */}

              <button
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.025]
                  p-6 text-left
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-emerald-400/30
                  hover:bg-emerald-400/[0.035]
                  md:col-span-4
                "
              >

                <div className="relative flex min-h-[145px] flex-col justify-between">

                  <div className="flex items-start justify-between">

                    <span className="text-xl text-emerald-300">
                      ◉
                    </span>

                    <span className="text-[10px] tracking-[0.25em] text-gray-600">
                      04
                    </span>

                  </div>

                  <div>

                    <div className="text-[10px] tracking-[0.3em] text-emerald-400/70">
                      KNOWLEDGE
                    </div>

                    <h3 className="mt-1 text-lg font-medium text-white">
                      Memory
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      Explore stored intelligence
                    </p>

                  </div>

                </div>

              </button>


              {/* SYSTEM */}

              <button
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.025]
                  p-6 text-left
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-amber-400/30
                  hover:bg-amber-400/[0.035]
                  md:col-span-2
                "
              >

                <div className="relative flex min-h-[145px] flex-col justify-between">

                  <div className="flex items-start justify-between">

                    <span className="text-xl text-amber-300">
                      ⚙
                    </span>

                    <span className="text-[10px] tracking-[0.25em] text-gray-600">
                      05
                    </span>

                  </div>

                  <div>

                    <div className="text-[10px] tracking-[0.25em] text-amber-400/70">
                      CORE
                    </div>

                    <h3 className="mt-1 text-lg font-medium text-white">
                      System
                    </h3>

                  </div>

                </div>

              </button>


              {/* VOICE */}

              <button
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.025]
                  p-6 text-left
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-red-400/30
                  hover:bg-red-400/[0.035]
                  md:col-span-2
                "
              >

                <div className="relative flex min-h-[145px] flex-col justify-between">

                  <div className="flex items-start justify-between">

                    <span className="text-xl text-red-300">
                      ◉
                    </span>

                    <span className="text-[10px] tracking-[0.25em] text-gray-600">
                      06
                    </span>

                  </div>

                  <div>

                    <div className="text-[10px] tracking-[0.25em] text-red-400/70">
                      INTERFACE
                    </div>

                    <h3 className="mt-1 text-lg font-medium text-white">
                      Voice
                    </h3>

                  </div>

                </div>

              </button>

            </div>

          </div>


          {/* UPLOAD STATUS */}

          {uploadMessage && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-gray-300">
              {uploadMessage}
            </div>
          )}


          {/* STATS */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <p className="text-gray-400">
                Model
              </p>

              <h2 className="mt-2 text-3xl font-bold text-cyan-400">
                Qwen3 8B
              </h2>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <p className="text-gray-400">
                Backend
              </p>

              <h2 className="mt-2 text-3xl font-bold text-green-400">
                FastAPI
              </h2>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <p className="text-gray-400">
                Memory
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Enabled
              </h2>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <p className="text-gray-400">
                Status
              </p>

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