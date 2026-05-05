"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import * as THREE from "three";

interface CinematicModelProps {
  progress: number;
}

export default function CinematicModel({ progress }: CinematicModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useTexture("/images/hero/alpha_hero_product_3d.png");

  // Map progress to transformations
  // Scene 1 (0.0 - 0.2): Hero - Entry
  // Scene 2 (0.2 - 0.4): Focus - Features
  // Scene 3 (0.4 - 0.6): Routine
  // Scene 4 (0.6 - 0.8): Grid
  // Scene 5 (0.8 - 1.0): CTA

  useFrame((state) => {
    if (!meshRef.current) return;

    // Base Floating Animation
    const t = state.clock.getElapsedTime();
    
    // Scroll-driven rotations
    let targetRotationY = 0;
    let targetRotationX = 0;
    let targetScale = 1;
    let targetZ = 0;
    let targetX = 0;

    if (progress < 0.2) {
      // Scene 1: Front view, slight zoom
      targetRotationY = progress * 2;
      targetScale = 1 + progress * 0.5;
    } else if (progress < 0.35) {
      // Scene 2: Angled view, move to left
      targetRotationY = 0.5 + (progress - 0.2) * 4;
      targetX = -(progress - 0.2) * 15;
      targetScale = 1.2;
    } else if (progress < 0.45) {
      // Transition out smoothly (0.35 to 0.45)
      const transitionProgress = (progress - 0.35) / 0.1; // 0 to 1
      targetRotationY = 0.5 + 0.15 * 4 + transitionProgress * 2; // Continue rotating
      targetX = -2.25 - transitionProgress * 20; // Continue moving left and offscreen
      targetScale = 1.2 * (1 - transitionProgress); // Smoothly scale to 0
      targetZ = -transitionProgress * 30; // Move backward
    } else {
      // Scene 3, 4, 5: Stay hidden
      targetScale = 0;
      targetZ = -50;
      targetX = -30;
    }


    // Lerp for smoothness
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX + Math.sin(t * 0.5) * 0.1, 0.1);
    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1));
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.1);
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.1);
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <planeGeometry args={[5, 7]} />
          <meshBasicMaterial map={texture} transparent alphaTest={0.5} />
        </mesh>
        
        {/* Decorative elements to add depth */}
        <mesh position={[0, 0, -0.1]}>
          <planeGeometry args={[5.2, 7.2]} />
          <meshBasicMaterial color="#C8A96A" transparent opacity={0.1} />
        </mesh>
      </Float>
      
      {/* Dynamic Lighting that follows scroll */}
      <pointLight 
        position={[Math.sin(progress * Math.PI) * 10, 5, 5]} 
        intensity={2 + progress * 5} 
        color="#C8A96A" 
      />
    </group>
  );
}
