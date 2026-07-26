"use client";

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#05020a]">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(147,51,234,.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(147,51,234,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Purple Orb */}
      <div className="absolute left-[10%] top-[-10%] h-[550px] w-[550px] rounded-full bg-purple-600/40 blur-[120px] animate-orb1" />

      {/* Pink Orb */}
      <div className="absolute right-[10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/40 blur-[120px] animate-orb2" />

      {/* Center Orb */}
      <div className="absolute left-[35%] top-[30%] h-[350px] w-[350px] rounded-full bg-violet-500/30 blur-[120px] animate-orb3" />

    </div>
  );
}