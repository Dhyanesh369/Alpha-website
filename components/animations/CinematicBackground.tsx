/* eslint-disable */
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { useIsMobile } from "@/hooks/useIsMobile";

function GoldParticles({ count = 200 }) {
  const isMobile = useIsMobile();
  const adjustedCount = isMobile ? Math.min(count, 50) : count;
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < adjustedCount; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -20 + Math.random() * 40;
      const yFactor = -20 + Math.random() * 40;
      const zFactor = -20 + Math.random() * 40;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [adjustedCount]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s * 0.2, s * 0.2, s * 0.2);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, adjustedCount]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial 
        color="#C8A96A" 
        emissive="#C8A96A"
        emissiveIntensity={1.0}
        transparent 
        opacity={0.6}
      />
    </instancedMesh>
  );
}

function ProductMonolith() {
  const isMobile = useIsMobile();
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  if (isMobile) return null; // Remove monolith on mobile per "Remove before shrink"

  return (
    <mesh ref={meshRef} position={[0, -1, 0]}>
      <cylinderGeometry args={[1.5, 1.5, 6, 32]} />
      <meshPhysicalMaterial 
        color="#050505" 
        metalness={0.9} 
        roughness={0.1}
        clearcoat={1.0}
      />
    </mesh>
  );
}

export default function CinematicBackground() {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-[#030303] opacity-80 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 45 }} 
        dpr={isMobile ? [1, 1] : [1, 2]}
        gl={{ antialias: !isMobile, alpha: true }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[0, -5, 5]} intensity={1.5} color="#C8A96A" />
        <fog attach="fog" args={["#030303", 10, 30]} />

        <ProductMonolith />
        <GoldParticles count={150} />
      </Canvas>
    </div>
  );
}
