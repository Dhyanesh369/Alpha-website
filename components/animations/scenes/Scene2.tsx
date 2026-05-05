"use client";

import { motion } from "framer-motion";

const features = [
  "Absolute Presence",
  "Effortless Control",
  "Peak Performance"
];

export default function Scene2() {
  return (
    <div className="max-w-3xl text-right ml-auto">
      <h2 className="text-[60px] md:text-[120px] font-bold text-white mb-16 leading-[0.95] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
        MADE FOR <br />
        <span className="text-[#C8A96A]">EXCELLENCE.</span>
      </h2>
      
      <div className="flex flex-col items-end gap-12">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-8 group"
          >
            <span className="text-xl md:text-3xl text-white/40 font-black tracking-tighter uppercase group-hover:text-white transition-colors duration-500">{feature}</span>
            <div className="w-12 md:w-20 h-px bg-[#C8A96A]/30 group-hover:bg-[#C8A96A] transition-colors duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
