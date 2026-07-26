"use client";

import {
  Float,
  MeshTransmissionMaterial,
  Sparkles,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function OrbScene() {
  const group = useRef<THREE.Group>(null!);

  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  const satellite1 = useRef<THREE.Mesh>(null!);
  const satellite2 = useRef<THREE.Mesh>(null!);

  useFrame(({ mouse, clock }) => {
    const t = clock.elapsedTime;

    if (!group.current) return;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.x * 0.5,
      0.05
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -mouse.y * 0.3,
      0.05
    );

    group.current.position.y = Math.sin(t * 1.2) * 0.08;

    ring1.current.rotation.z += 0.003;
    ring2.current.rotation.x += 0.004;
    ring3.current.rotation.y -= 0.002;

    const r = 1.7;

    satellite1.current.position.set(
      Math.cos(t) * r,
      0,
      Math.sin(t) * r
    );

    satellite2.current.position.set(
      Math.cos(-t * 0.7) * r,
      Math.sin(t * 0.8) * 0.5,
      Math.sin(-t * 0.7) * r
    );
  });

  return (
    <>
      {/* LIGHTS */}

      <ambientLight intensity={1.5} color="#6d28d9" />

      <pointLight
        position={[5, 5, 5]}
        intensity={120}
        color="#7dd3fc"
      />

      <pointLight
        position={[-5, -3, -5]}
        intensity={100}
        color="#8b5cf6"
      />

      <pointLight
        position={[0, 0, 0]}
        intensity={80}
        color="#38bdf8"
      />

      {/* PARTICLES */}

      <Sparkles
        count={800}
        size={4}
        scale={12}
        speed={0.25}
        color="#7dd3fc"
      />

      <group ref={group}>
        <Float
          speed={2}
          floatIntensity={1.5}
          rotationIntensity={0.3}
        >
          {/* OUTER GLASS */}

          <mesh>
            <sphereGeometry args={[1.05, 64, 64]} />

            <MeshTransmissionMaterial
              thickness={0.25}
              roughness={0}
              transmission={1}
              ior={1.5}
              chromaticAberration={0.05}
              backside
            />
          </mesh>

          {/* ENERGY CORE */}

          <mesh>
            <icosahedronGeometry args={[0.6, 8]} />

            <meshStandardMaterial
              color="#60a5fa"
              emissive="#3b82f6"
              emissiveIntensity={3}
              metalness={1}
              roughness={0}
            />
          </mesh>

          {/* RING 1 */}

          <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.4, 0.02, 32, 300]} />

            <meshStandardMaterial
              color="#38bdf8"
              emissive="#38bdf8"
              emissiveIntensity={2}
            />
          </mesh>

          {/* RING 2 */}

          <mesh ref={ring2} rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[1.6, 0.018, 32, 300]} />

            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#8b5cf6"
              emissiveIntensity={2}
            />
          </mesh>

          {/* RING 3 */}

          <mesh ref={ring3} rotation={[0.6, 0.5, 0]}>
            <torusGeometry args={[1.8, 0.015, 32, 300]} />

            <meshStandardMaterial
              color="#22d3ee"
              emissive="#22d3ee"
              emissiveIntensity={2}
            />
          </mesh>

          {/* SATELLITE */}

          <mesh ref={satellite1}>
            <sphereGeometry args={[0.06, 16, 16]} />

            <meshStandardMaterial
              color="white"
              emissive="#ffffff"
              emissiveIntensity={4}
            />
          </mesh>

          <mesh ref={satellite2}>
            <sphereGeometry args={[0.05, 16, 16]} />

            <meshStandardMaterial
              color="#60a5fa"
              emissive="#60a5fa"
              emissiveIntensity={4}
            />
          </mesh>
        </Float>
      </group>
    </>
  );
}