"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ShieldCheck, Zap, XCircle, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function FaceCleanserPage() {
  const [activeImage, setActiveImage] = useState("/images/hero/cream.png");
  
  const thumbnails = [
    "/images/hero/cream.png",
    "/images/hero/bottle.png",
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
                alt="ALPHA Face Cleanser" 
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
              DAILY ESSENTIAL
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
              ALPHA Face Cleanser
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-[#C8A96A] mb-4 tracking-tight">
              Clear Skin. Less Oil. <br /> Fresh Look All Day.
            </h2>

            <p className="text-white/40 text-sm tracking-wide mb-8 font-medium">
              For men who want to look fresh, not tired.
            </p>

            <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/5 w-full">
              <div className="flex gap-1 text-[#C8A96A]">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <span className="text-white/60 font-bold text-xs tracking-widest uppercase">4.7/5 • 800+ Users</span>
            </div>

            <div className="flex items-end gap-4 mb-10">
              <span className="text-5xl font-bold text-white tracking-tighter">₹399</span>
              <span className="text-2xl text-white/20 line-through mb-1 font-light">₹499</span>
            </div>

            <div className="mb-10 w-full space-y-4">
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white/80 font-medium text-sm">
                  <CheckCircle className="w-5 h-5 text-[#8A9A86]/50" /> Removes deep-seated impurities
                </li>
                <li className="flex items-center gap-4 text-white/80 font-medium text-sm">
                  <CheckCircle className="w-5 h-5 text-[#8A9A86]/50" /> Controls excess sebum all day
                </li>
                <li className="flex items-center gap-4 text-white/80 font-medium text-sm">
                  <CheckCircle className="w-5 h-5 text-[#8A9A86]/50" /> Revitalizes dull, tired skin
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
              <ShieldCheck className="w-4 h-4 text-[#C8A96A]/50" /> Safe for daily use • Natural Ingredients
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3 — PROBLEM / SOLUTION */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* PROBLEM */}
        <div className="bg-[#050505] border border-white/5 p-10 rounded-[8px]">
          <h3 className="text-[#C8A96A] font-bold tracking-widest uppercase text-xs mb-4">The Problem</h3>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Oily Skin Kills Your Look
          </h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-white/70"><XCircle className="w-5 h-5 text-red-900/50" /> Greasy face</li>
            <li className="flex items-center gap-3 text-white/70"><XCircle className="w-5 h-5 text-red-900/50" /> Dull skin</li>
            <li className="flex items-center gap-3 text-white/70"><XCircle className="w-5 h-5 text-red-900/50" /> Tired appearance</li>
          </ul>
          <p className="text-white font-medium border-l-2 border-[#C8A96A] pl-4 italic">
            Even if you dress well, your face gives it away.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#C8A96A]/20 p-10 rounded-[8px]">
          <h3 className="text-[#8A9A86] font-bold tracking-widest uppercase text-xs mb-4">The Solution</h3>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Stay Fresh All Day
          </h2>
          <p className="text-white/60 mb-6">ALPHA Face Cleanser:</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-white"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> Removes excess oil</li>
            <li className="flex items-center gap-3 text-white"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> Cleans deeply</li>
            <li className="flex items-center gap-3 text-white"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> Keeps skin balanced</li>
          </ul>
          <p className="text-[#C8A96A] font-bold">Clean face = confident appearance.</p>
        </div>
      </section>

      {/* SECTION 4 & 5 — HOW TO USE / INGREDIENTS (Optimized with Accordion on Mobile) */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* How It Works */}
          <div className="border-b md:border-none border-white/10 pb-10 md:pb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              How It Works
            </h2>
            <ul className="space-y-6">
              <li className="flex gap-4"><Clock className="w-6 h-6 text-[#C8A96A] shrink-0" /> <span className="text-white/80 font-medium"><strong>1.</strong> Apply on wet face</span></li>
              <li className="flex gap-4"><CheckCircle className="w-6 h-6 text-[#C8A96A] shrink-0" /> <span className="text-white/80 font-medium"><strong>2.</strong> Massage gently</span></li>
              <li className="flex gap-4"><CheckCircle className="w-6 h-6 text-[#C8A96A] shrink-0" /> <span className="text-white/80 font-medium"><strong>3.</strong> Rinse</span></li>
            </ul>
            <p className="text-[#C8A96A] font-bold mt-8 text-lg">30 seconds. Big difference.</p>
          </div>

          {/* Ingredients */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ingredients
            </h2>
            <div className="space-y-4">
              {[
                { title: "Charcoal", desc: "Deep cleanse" },
                { title: "Aloe Vera", desc: "Soothing" },
                { title: "Neem", desc: "Anti-bacterial" }
              ].map((item, i) => (
                <div key={i} className="border-b border-white/10 pb-4">
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[#8A9A86] font-bold mt-8 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> No harsh chemicals
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SOCIAL PROOF */}
      <section className="bg-[#121212] border-y border-white/5 py-24 mb-32">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "No more oily face.",
              "Skin feels fresh all day.",
              "Perfect for daily use."
            ].map((quote, i) => (
              <div key={i} className="bg-[#0A0A0A] p-8 rounded-[8px] border border-white/5 text-left">
                <div className="flex gap-1 text-[#C8A96A] mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/80 font-medium text-lg leading-relaxed">&quot;{quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — COMPARISON */}
      <section className="max-w-[1000px] mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#121212] border border-[#C8A96A]/30 p-8 rounded-[8px]">
            <h4 className="text-[#C8A96A] font-bold mb-6 text-xl">ALPHA:</h4>
            <ul className="space-y-4 text-white/90 font-medium">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#8A9A86]"/> Deep clean</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#8A9A86]"/> Gentle</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#8A9A86]"/> Fresh look</li>
            </ul>
          </div>
          <div className="bg-[#050505] border border-white/5 p-8 rounded-[8px] opacity-60">
            <h4 className="text-white/50 font-bold mb-6 text-xl">Others:</h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-900/50"/> Over-drying</li>
              <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-900/50"/> Harsh</li>
              <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-900/50"/> Temporary effect</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8 — BUNDLE UPSELL */}
      <section className="max-w-[1000px] mx-auto px-6 mb-32">
        <div className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#C8A96A]/20 p-10 md:p-16 rounded-[12px] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,_rgba(200,169,106,0.1)_0%,_transparent_70%)] pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Upgrade Your Routine
          </h2>
          <h3 className="text-xl text-[#C8A96A] font-bold mb-6">Bundle: Face Cleanser + Beard Kit</h3>
          
          <p className="text-white/80 text-lg mb-8">Clear skin + strong beard = better presence.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[#C8A96A] text-[#050505] font-bold py-4 px-12 rounded-[4px] text-lg hover:scale-[1.02] transition-transform shadow-[0_0_40px_rgba(200,169,106,0.3)]">
              Build My Routine
            </button>
            <Link 
              href="/routine" 
              className="text-white font-bold flex items-center gap-2 hover:text-[#C8A96A] transition-colors group"
            >
              See The Routine <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Look Fresh. Every Day.
        </h2>
        <p className="text-2xl text-[#C8A96A] font-medium mb-12">Small habit. Big difference.</p>
        
        <button className="bg-white text-black font-bold py-5 px-16 rounded-[4px] text-xl hover:bg-[#C8A96A] transition-colors mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Buy Now
        </button>
      </section>

      {/* Sticky Mobile Buy Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10 p-4 z-50">
        <button className="w-full bg-[#C8A96A] text-black font-bold py-3.5 rounded-[4px]">
          Buy Now — ₹399
        </button>
      </div>

    </main>
  );
}


