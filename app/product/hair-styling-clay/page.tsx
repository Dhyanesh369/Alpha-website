"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ShieldCheck, Zap, ArrowRight, XCircle, Clock } from "lucide-react";
import { useState } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function HairStylingClayPage() {
  const [activeImage, setActiveImage] = useState("/images/hero/bottle.png");
  
  const thumbnails = [
    "/images/hero/bottle.png",
    "/images/hero/pipette.png",
    "/images/hero/lifestyle.png"
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] selection:bg-[#C8A96A] selection:text-[#0A0A0A] pb-24">
      
      {/* SECTION 1 — PRODUCT HERO (DECISION ZONE) */}
      <section className="pt-40 pb-24 px-6 max-w-[1200px] mx-auto">
        <Breadcrumbs />
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full aspect-[4/5] bg-[#121212] rounded-[4px] overflow-hidden group border border-white/5"
            >
              <Image 
                src={activeImage} 
                alt="ALPHA Hair Styling Clay" 
                fill 
                className="object-cover object-center transition-transform duration-700 lg:group-hover:scale-105 opacity-90"
                priority
              />
            </motion.div>
            <div className="flex gap-4">
              {thumbnails.map((thumb, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(thumb)}
                  className={`relative w-24 h-24 rounded-[2px] overflow-hidden border-2 transition-all duration-500 ${activeImage === thumb ? 'border-[#C8A96A]' : 'border-transparent opacity-40 hover:opacity-100'}`}
                >
                  <Image src={thumb} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Conversion Stack */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#C8A96A] mb-8">
              NEW ARRIVAL
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
              ALPHA Hair Styling Clay
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-[#C8A96A] mb-4 tracking-tight">
              All-Day Strong Hold. <br /> Ultra-Matte Finish.
            </h2>

            <p className="text-white/40 text-sm tracking-wide mb-8 font-medium">
              For men who want their hair to stay perfect, without the shine.
            </p>

            <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/5 w-full">
              <div className="flex gap-1 text-[#C8A96A]">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <span className="text-white/60 font-bold text-xs tracking-widest uppercase">4.9/5 • New Release</span>
            </div>

            <div className="flex items-end gap-4 mb-10">
              <span className="text-5xl font-bold text-white tracking-tighter">₹499</span>
              <span className="text-2xl text-white/20 line-through mb-1 font-light">₹649</span>
            </div>

            <div className="mb-10 w-full">
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white/80 font-medium text-sm">
                  <CheckCircle className="w-5 h-5 text-[#8A9A86]/50" /> High hold that lasts 24 hours
                </li>
                <li className="flex items-center gap-4 text-white/80 font-medium text-sm">
                  <CheckCircle className="w-5 h-5 text-[#8A9A86]/50" /> Natural matte finish (no grease)
                </li>
                <li className="flex items-center gap-4 text-white/80 font-medium text-sm">
                  <CheckCircle className="w-5 h-5 text-[#8A9A86]/50" /> Easy to wash out with water
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full mb-6">
              <button className="btn-primary flex-1 !h-[60px] !text-sm">
                Buy Now
              </button>
              <button className="btn-secondary flex-1 !h-[60px] !text-sm uppercase tracking-widest">
                Add to Cart
              </button>
            </div>

            <p className="flex items-center gap-3 text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mt-4">
              <ShieldCheck className="w-4 h-4 text-[#C8A96A]/50" /> Safe Ingredients • Paraben Free
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLEM / SOLUTION */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <div className="bg-[#050505] border border-white/5 p-10 rounded-[8px]">
          <h3 className="text-[#C8A96A] font-bold tracking-widest uppercase text-xs mb-4">The Problem</h3>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Gel Makes You Look Greasy
          </h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-white/70"><XCircle className="w-5 h-5 text-red-900/50" /> Unnatural shine</li>
            <li className="flex items-center gap-3 text-white/70"><XCircle className="w-5 h-5 text-red-900/50" /> Flaky residue</li>
            <li className="flex items-center gap-3 text-white/70"><XCircle className="w-5 h-5 text-red-900/50" /> Hard to restyle</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#C8A96A]/20 p-10 rounded-[8px]">
          <h3 className="text-[#8A9A86] font-bold tracking-widest uppercase text-xs mb-4">The Solution</h3>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Modern Matte Look
          </h2>
          <p className="text-white/60 mb-6">ALPHA Styling Clay provides:</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-white"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> Firm yet flexible hold</li>
            <li className="flex items-center gap-3 text-white"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> Clean, matte texture</li>
            <li className="flex items-center gap-3 text-white"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> Restylable all day</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 — FINAL CTA */}
      <section className="text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Never Settle For A Messy Look.
        </h2>
        <p className="text-2xl text-[#C8A96A] font-medium mb-12">Total control starts here.</p>
        
        <button className="btn-primary !px-16 !h-16">
          Buy Now
        </button>
      </section>

    </main>
  );
}
