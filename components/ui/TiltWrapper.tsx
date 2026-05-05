"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

interface TiltWrapperProps {
  children: React.ReactNode;
  className?: string;
  rotationIntensity?: number;
}

export default function TiltWrapper({ 
  children, 
  className = "",
  rotationIntensity = 4
}: TiltWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Use springs for ultra-smooth movement
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the card (-1 to 1)
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // X axis rotation is driven by Y mouse position (and vice versa)
    const rX = (y / (rect.height / 2)) * -rotationIntensity;
    const rY = (x / (rect.width / 2)) * rotationIntensity;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative hover-target ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
      animate={{
        y: isHovered ? -5 : 0, // Lift
      }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="w-full h-full"
      >
        {children}
        
        {/* Subtle gold glow on hover */}
        <motion.div 
          className="absolute inset-0 pointer-events-none rounded-inherit z-[-1]"
          animate={{
            boxShadow: isHovered 
              ? "0 10px 30px -10px rgba(200, 169, 106, 0.15)" 
              : "0 0px 0px 0px rgba(200, 169, 106, 0)"
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
