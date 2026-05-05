"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "/images/hero/ultimate_hero.png",
    alt: "Premium Men's Grooming Bottles on Wet Slate",
  },
  {
    src: "/images/hero/bottle.png",
    alt: "ALPHA Hair Growth Oil Black Glass Bottle",
  },
  {
    src: "/images/hero/lifestyle.png",
    alt: "Organic Green Leaves on Dark Charcoal Stone",
  }
];

export default function CinematicSequence() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change image every 4 seconds to simulate a slow cinematic video cut
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#030303] pointer-events-none">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 0.6, scale: 1.08 }} // Slow Ken Burns zoom
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" } 
          }}
          className="absolute inset-[-5%] h-[110%] w-[110%]"
        >
          <Image
            src={IMAGES[currentIndex].src}
            alt={IMAGES[currentIndex].alt}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Vignette & Color Grading Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#030303]/40 via-[#030303]/20 to-[#030303]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#030303_100%)] opacity-80" />
      
      {/* Subtle organic dust/water particles simulated with CSS */}
      <div className="absolute inset-0 z-10 opacity-20 mix-blend-screen" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </div>
  );
}
