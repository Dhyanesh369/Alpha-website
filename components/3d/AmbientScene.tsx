/* eslint-disable react-hooks/purity */
/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/refs */
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// ─── Background Particles ───
function FloatingParticles({ count = 50 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#C8A96A"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.3}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ─── Small Decorative Sphere (lightweight) ───
function DecoSphere({ position, scale = 0.3, speed = 1.5 }: { position: [number, number, number]; scale?: number; speed?: number }) {
  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 2]} />
        <meshPhysicalMaterial
          color="#C8A96A"
          metalness={0.1}
          roughness={0.15}
          transmission={0.85}
          thickness={0.3}
          transparent
          opacity={0.35}
          ior={1.5}
        />
      </mesh>
    </Float>
  );
}

// ─── Ambient Ring ───
function AmbientRing({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.08;
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={mesh} position={position} scale={scale}>
        <torusGeometry args={[1, 0.03, 16, 64]} />
        <meshStandardMaterial
          color="#C8A96A"
          metalness={0.9}
          roughness={0.2}
          emissive="#C8A96A"
          emissiveIntensity={0.08}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

// ─── Ambient 3D Background ───
export default function AmbientScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={8} color="#C8A96A" distance={15} decay={2} />
        <pointLight position={[-5, -3, 3]} intensity={5} color="#8A9A86" distance={12} decay={2} />

        <FloatingParticles count={50} />
        <DecoSphere position={[-6, 3, -5]} scale={0.3} speed={1} />
        <DecoSphere position={[7, -2, -6]} scale={0.25} speed={1.2} />
        <DecoSphere position={[-5, -4, -4]} scale={0.2} speed={0.8} />
        <AmbientRing position={[6, 4, -8]} scale={0.5} />
        <AmbientRing position={[-7, -3, -6]} scale={0.4} />
      </Canvas>
    </div>
  );
}
