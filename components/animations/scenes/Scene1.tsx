"use client";

import { motion } from "framer-motion";

export default function Scene1() {
  return (
    <div className="max-w-3xl">
      <div className="flex flex-col items-start">
        <h1 className="text-[60px] md:text-[120px] font-bold text-white leading-[1] tracking-tighter mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          THE <br />
          <span className="text-[#C8A96A]">ALPHA</span> <br />
          ERA.
        </h1>
        <p className="text-xs md:text-sm text-[#C8A96A] font-black tracking-[0.4em] uppercase">
          Scroll to Begin Your Transformation
        </p>
      </div>
    </div>
  );
}
