"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SystemBackground({ progress }: { progress: number }) {
  const meshRef = useRef<THREE.Group>(null);
  const count = 300;
  const dustCount = 1000;
  
  // Create an array of particles for the background
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 10 + Math.random() * 50;
      const speed = 0.005 + Math.random() / 500;
      const xFactor = -15 + Math.random() * 30;
      const yFactor = -15 + Math.random() * 30;
      const zFactor = -15 + Math.random() * 30;
      const radius = 5 + Math.random() * 10;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, radius });
    }
    return temp;
  }, [count]);

  const dustPositions = useMemo(() => {
    const positions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return positions;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null);
  const dustRef = useRef<THREE.Points>(null);

  // Logic to show/hide based on progress
  // Scene 3 is 0.4 to 0.6
  const isActive = progress >= 0.35 && progress <= 0.65;
  const opacity = isActive 
    ? (progress < 0.4 ? (progress - 0.35) * 20 : (progress > 0.6 ? (0.65 - progress) * 20 : 1))
    : 0;

  useFrame((state) => {
    if (!instancedMeshRef.current || !isActive) return;

    const time = state.clock.getElapsedTime();

    particles.forEach((particle, i) => {
      let { t, factor, speed, radius } = particle;
      t = particle.t += speed;
      
      // Swirl/Vortex movement with pulsing
      const pulse = 1 + Math.sin(time * 2 + i) * 0.2;
      const angle = t + time * 0.15;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle * 0.5 + time * 0.2) * (radius * 0.4);
      const z = Math.sin(angle) * radius;
      
      const s = (0.5 + Math.cos(t) * 0.5) * pulse;
      
      dummy.position.set(x, y, z);
      dummy.scale.set(s * 0.6 * opacity, s * 0.6 * opacity, s * 0.6 * opacity);
      dummy.rotation.set(time * 0.5 + i, time * 0.3, time * 0.2);
      dummy.updateMatrix();
      instancedMeshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;

    if (dustRef.current) {
      dustRef.current.rotation.y = time * 0.05;
      dustRef.current.rotation.x = time * 0.03;
    }
  });

  if (!isActive) return null;

  return (
    <group ref={meshRef}>
      {/* Primary Gold Particles */}
      <instancedMesh ref={instancedMeshRef} args={[undefined, undefined, count]}>
        <icosahedronGeometry args={[0.15, 1]} />
        <meshStandardMaterial 
          color="#C8A96A" 
          transparent 
          opacity={opacity * 0.6} 
          metalness={0.9} 
          roughness={0.1} 
          emissive="#C8A96A"
          emissiveIntensity={0.5}
        />
      </instancedMesh>

      {/* Gold Dust / Sparkles */}
      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[dustPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#C8A96A"
          size={0.05}
          transparent
          opacity={opacity * 0.4}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Subtle lighting for particles */}
      <pointLight intensity={5 * opacity} color="#C8A96A" distance={20} />
    </group>
  );
}
