"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";

import { EffectComposer, Bloom } from "@react-three/postprocessing";

import OrbScene from "./OrbScene";

export default function AIOrb() {
  return (
    <div className="h-[600px] w-full rounded-3xl overflow-hidden border border-cyan-400/20 bg-gradient-to-br from-slate-950 via-[#070b18] to-black">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 40,
        }}
      >
        {/* Background */}

        <color attach="background" args={["#030712"]} />

        {/* Scene */}

        <OrbScene />

        {/* HDR Environment */}

        <Environment preset="night" />

        {/* Ground Shadow */}

        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.3}
          blur={2}
          scale={8}
          far={5}
        />

        {/* Camera */}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.25}
        />

        {/* Glow */}

        <EffectComposer>
          <Bloom
            intensity={2.2}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}