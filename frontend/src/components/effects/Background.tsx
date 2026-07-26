"use client";

export default function Background() {
  return (
    <>
      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Purple Mesh Glow */}
      <div className="absolute mesh-orb orb-1" />

      {/* Magenta Glow */}
      <div className="absolute mesh-orb orb-2" />

      {/* Ambient Center Glow */}
      <div className="absolute mesh-orb orb-3" />
    </>
  );
}