"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Scene5() {
  return (
    <div className="text-center px-6">
      <div className="flex flex-col items-center">
        <h2 className="text-[50px] md:text-[120px] font-bold text-white mb-12 tracking-tighter leading-[0.95]" style={{ fontFamily: "'Playfair Display', serif" }}>
          BECOME <br />
          <span className="text-[#C8A96A]">ALPHA.</span>
        </h2>
        
        <div className="flex flex-col items-center gap-8">
          <Link
            href="/shop"
            className="btn-primary !h-20 !px-16 !text-lg shadow-[0_0_50px_rgba(200,169,106,0.2)]"
          >
            Shop The Collection
            <ArrowRight className="w-6 h-6 ml-4" />
          </Link>
          
          <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.5em]">
            THE NEW STANDARD IN MEN&apos;S GROOMING
          </p>
        </div>
      </div>
    </div>
  );
}
