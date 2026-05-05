"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Scene1 from "./scenes/Scene1";
import Scene2 from "./scenes/Scene2";
import Scene3 from "./scenes/Scene3";
import Scene4 from "./scenes/Scene4";
import Scene5 from "./scenes/Scene5";
import CinematicModel from "../3d/CinematicModel";
import SystemBackground from "../3d/SystemBackground";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicScrollSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5, // Slightly more lag for "expensive" feel
          onUpdate: (self) => setProgress(self.progress),
        },
      });

      // Scene 1 -> 2 transition
      tl.to(".scene-1", { opacity: 0, duration: 0.1 }, 0.15)
        .fromTo(".scene-2", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.1 }, 0.16);

      // Scene 2 -> 3 transition (The System)
      tl.to(".scene-2", { opacity: 0, duration: 0.1 }, 0.38)
        .fromTo(".scene-3", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.1 }, 0.39);

      // Scene 3 -> 4 transition
      tl.to(".scene-3", { opacity: 0, duration: 0.1 }, 0.6)
        .fromTo(".scene-4", { opacity: 0, scale: 1 }, { opacity: 1, scale: 1, duration: 0.1 }, 0.61);

      // Scene 4 -> 5 transition
      tl.to(".scene-4", { opacity: 0, duration: 0.1 }, 0.8)
        .fromTo(".scene-5", { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0.81);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#030303]">
      {/* Fixed 3D Layer */}
      <div className="fixed inset-0 z-0 h-screen w-full pointer-events-none">
        <Canvas shadows gl={{ antialias: true, alpha: true }}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#C8A96A" />
          <pointLight position={[-10, -10, 10]} intensity={1} color="#8A9A86" />
          
          <CinematicModel progress={progress} />
          <SystemBackground progress={progress} />
          
          <Environment preset="night" />
        </Canvas>
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10">
        <section className="scene-1 relative h-[120vh] w-full flex items-center px-12">
          <Scene1 />
        </section>
        
        <section className="scene-2 relative h-[150vh] w-full flex items-center justify-end px-12">
          <Scene2 />
        </section>
        
        <section className="scene-3 relative h-[150vh] w-full flex items-center px-12">
          <Scene3 />
        </section>
        
        <section className="scene-4 relative h-[120vh] w-full flex items-center justify-center px-12">
          <Scene4 />
        </section>
        
        <section className="scene-5 relative h-[100vh] w-full flex flex-col items-center justify-center px-12">
          <Scene5 />
        </section>
      </div>
    </div>
  );
}
