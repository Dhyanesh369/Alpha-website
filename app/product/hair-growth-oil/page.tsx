"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ShieldCheck, Zap, ArrowRight, XCircle, Truck, Clock } from "lucide-react";
import { useState } from "react";

import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function ProductPage() {
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
                alt="ALPHA Hair Growth Oil" 
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
              BEST SELLER
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
              ALPHA Hair Growth Oil
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-[#C8A96A] mb-4 tracking-tight">
              Notice Less Hair Fall. <br /> See Stronger Hair In Weeks.
            </h2>

            <p className="text-white/40 text-sm tracking-wide mb-8 font-medium">
              For men who don't settle for average results.
            </p>

            <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/5 w-full">
              <div className="flex gap-1 text-[#C8A96A]">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <span className="text-white/60 font-bold text-xs tracking-widest uppercase">4.8/5 • 1,000+ Users</span>
            </div>

            <div className="flex items-end gap-4 mb-10">
              <span className="text-5xl font-bold text-white tracking-tighter">₹749</span>
              <span className="text-2xl text-white/20 line-through mb-1 font-light">₹999</span>
            </div>

            <div className="mb-10 w-full">
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white/80 font-medium text-sm">
                  <CheckCircle className="w-5 h-5 text-[#8A9A86]/50" /> Significantly reduced hair fall
                </li>
                <li className="flex items-center gap-4 text-white/80 font-medium text-sm">
                  <CheckCircle className="w-5 h-5 text-[#8A9A86]/50" /> Deep root nourishment
                </li>
                <li className="flex items-center gap-4 text-white/80 font-medium text-sm">
                  <CheckCircle className="w-5 h-5 text-[#8A9A86]/50" /> Visible improvement in thickness
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
              <ShieldCheck className="w-4 h-4 text-[#C8A96A]/50" /> Secure Checkout • Fast Delivery
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — DECISION SHORTCUT */}
      <section className="bg-[#121212] border-y border-white/5 py-16 mb-24">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Start Here If You&apos;re Unsure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
            <div className="bg-[#0A0A0A] p-6 rounded-[8px] border border-white/5">
              <p className="text-white/50 text-sm mb-1">Hair fall <ArrowRight className="inline w-3 h-3 mx-1" /></p>
              <p className="text-white font-bold">Hair Growth Oil</p>
            </div>
            <div className="bg-[#0A0A0A] p-6 rounded-[8px] border border-white/5">
              <p className="text-white/50 text-sm mb-1">Patchy beard <ArrowRight className="inline w-3 h-3 mx-1" /></p>
              <p className="text-white font-bold">Beard Kit</p>
            </div>
            <div className="bg-[#0A0A0A] p-6 rounded-[8px] border border-white/5">
              <p className="text-white/50 text-sm mb-1">Oily skin <ArrowRight className="inline w-3 h-3 mx-1" /></p>
              <p className="text-white font-bold">Face Cleanser</p>
            </div>
          </div>
          <button className="text-[#C8A96A] font-bold uppercase tracking-wider hover:underline text-sm">
            Find My Product
          </button>
        </div>
      </section>

      {/* SECTION 3 & 4 — PROBLEM / SOLUTION */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* PROBLEM */}
        <div className="bg-[#050505] border border-white/5 p-10 rounded-[8px]">
          <h3 className="text-[#C8A96A] font-bold tracking-widest uppercase text-xs mb-4">The Problem</h3>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why It Keeps Happening
          </h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-white/70"><XCircle className="w-5 h-5 text-red-900/50" /> Weak roots</li>
            <li className="flex items-center gap-3 text-white/70"><XCircle className="w-5 h-5 text-red-900/50" /> Lack of nourishment</li>
            <li className="flex items-center gap-3 text-white/70"><XCircle className="w-5 h-5 text-red-900/50" /> Chemical-heavy products</li>
          </ul>
          <p className="text-white font-medium border-l-2 border-[#C8A96A] pl-4 italic">
            You&apos;re not the problem. Your products are.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#C8A96A]/20 p-10 rounded-[8px]">
          <h3 className="text-[#8A9A86] font-bold tracking-widest uppercase text-xs mb-4">The Solution</h3>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Fix The Cause, Not Just The Symptoms
          </h2>
          <p className="text-white/60 mb-6">ALPHA works where it matters:</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-white"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> Nourishes the scalp</li>
            <li className="flex items-center gap-3 text-white"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> Strengthens hair follicles</li>
            <li className="flex items-center gap-3 text-white"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> Supports healthier growth</li>
          </ul>
          <p className="text-[#C8A96A] font-bold">This is not a temporary fix.</p>
        </div>
      </section>

      {/* SECTION 5 — PROOF TIMELINE */}
      <section className="py-24 bg-[#121212] border-y border-white/5 mb-32">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Most Users Experience
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-white/10 -z-10" />
            
            {[
              { time: "Week 1–2", desc: "Scalp feels healthier" },
              { time: "Week 3–4", desc: "Hair fall starts reducing" },
              { time: "Week 5+", desc: "Hair feels thicker" }
            ].map((step, i) => (
              <div key={i} className="flex-1 bg-[#0A0A0A] p-8 rounded-[8px] border border-[#C8A96A]/20 relative">
                <div className="w-4 h-4 bg-[#C8A96A] rounded-full mx-auto mb-6 shadow-[0_0_15px_#C8A96A]" />
                <h4 className="text-[#C8A96A] font-bold mb-2">{step.time}</h4>
                <p className="text-white/80 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/50 italic mt-12">Consistency = visible change</p>
        </div>
      </section>

      {/* SECTION 6 & 7 — HOW IT FITS / INGREDIENTS */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Built For Your Routine
          </h2>
          <ul className="space-y-6">
            <li className="flex gap-4"><Clock className="w-6 h-6 text-[#C8A96A] shrink-0" /> <span className="text-white/80">Takes 2 minutes to apply</span></li>
            <li className="flex gap-4"><CheckCircle className="w-6 h-6 text-[#C8A96A] shrink-0" /> <span className="text-white/80">Works overnight</span></li>
            <li className="flex gap-4"><CheckCircle className="w-6 h-6 text-[#C8A96A] shrink-0" /> <span className="text-white/80">No complicated steps</span></li>
          </ul>
          <p className="text-[#C8A96A] font-bold mt-8 text-lg">No effort. Just consistency.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            What You Put On Your Hair Matters
          </h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h4 className="text-white font-bold text-lg">Argan Oil</h4>
              <p className="text-white/60">Deep nourishment</p>
            </div>
            <div className="border-b border-white/10 pb-4">
              <h4 className="text-white font-bold text-lg">Bhringraj</h4>
              <p className="text-white/60">Supports growth</p>
            </div>
            <div className="border-b border-white/10 pb-4">
              <h4 className="text-white font-bold text-lg">Castor Oil</h4>
              <p className="text-white/60">Improves thickness</p>
            </div>
          </div>
          <p className="text-[#8A9A86] font-bold mt-8 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> No sulphates. No parabens.
          </p>
        </div>
      </section>

      {/* SECTION 8 — SOCIAL PROOF */}
      <section className="bg-[#121212] border-y border-white/5 py-24 mb-32">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Men Are Already Seeing Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              "Hair fall reduced faster than expected.",
              "Hair feels stronger within weeks.",
              "Finally something that works."
            ].map((quote, i) => (
              <div key={i} className="bg-[#0A0A0A] p-8 rounded-[8px] border border-white/5 text-left">
                <div className="flex gap-1 text-[#C8A96A] mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/80 font-medium text-lg leading-relaxed">&quot;{quote}&quot;</p>
              </div>
            ))}
          </div>
          <p className="text-[#C8A96A] font-bold text-lg">1,000+ customers and growing</p>
        </div>
      </section>

      {/* SECTION 9 & 10 — FAQ & COMPARISON */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Common Concerns
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-white font-bold mb-1">Will it suit me?</p>
              <p className="text-white/60 flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#C8A96A]" /> Designed for Indian hair types</p>
            </div>
            <div>
              <p className="text-white font-bold mb-1">Is it safe?</p>
              <p className="text-white/60 flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#C8A96A]" /> No harsh chemicals</p>
            </div>
            <div>
              <p className="text-white font-bold mb-1">Will it take time?</p>
              <p className="text-white/60 flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#C8A96A]" /> Results start in weeks</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why ALPHA Feels Different
          </h2>
          <div className="flex flex-col gap-4">
            <div className="bg-[#121212] border border-[#C8A96A]/30 p-6 rounded-[8px]">
              <h4 className="text-[#C8A96A] font-bold mb-4">ALPHA:</h4>
              <ul className="space-y-2 text-white/90 font-medium">
                <li>✔ Targets root cause</li>
                <li>✔ Clean ingredients</li>
                <li>✔ Consistent results</li>
              </ul>
            </div>
            <div className="bg-[#050505] border border-white/5 p-6 rounded-[8px] opacity-60">
              <h4 className="text-white/50 font-bold mb-4">Others:</h4>
              <ul className="space-y-2 text-white/50 font-medium">
                <li>✖ Temporary fixes</li>
                <li>✖ Harsh chemicals</li>
                <li>✖ No visible change</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — BUNDLE LOGIC */}
      <section className="max-w-[1000px] mx-auto px-6 mb-32">
        <div className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#C8A96A]/20 p-10 md:p-16 rounded-[12px] text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,_rgba(200,169,106,0.1)_0%,_transparent_70%)] pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Want Faster Results?
          </h2>
          <h3 className="text-xl text-[#C8A96A] font-bold mb-8">ALPHA Complete Routine</h3>
          
          <p className="text-white/80 text-lg mb-2">Each product supports the other.</p>
          <p className="text-white font-bold text-xl mb-10">Better together. Faster results.</p>
          
          <div className="flex items-end justify-center gap-4 mb-8">
            <span className="text-5xl font-bold text-white">₹1499</span>
            <span className="text-2xl text-white/40 line-through mb-1">₹1999</span>
          </div>
          
          <button className="bg-[#C8A96A] text-[#050505] font-bold py-4 px-12 rounded-[4px] text-lg hover:scale-[1.02] transition-transform shadow-[0_0_40px_rgba(200,169,106,0.3)]">
            Upgrade To Full Routine
          </button>
        </div>
      </section>

      {/* SECTION 12 — FINAL PUSH */}
      <section className="text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          You Can Keep Trying Random Products.
        </h2>
        <p className="text-2xl text-[#C8A96A] font-medium mb-12">Or switch to something that actually works.</p>
        
        <button className="bg-white text-black font-bold py-5 px-16 rounded-[4px] text-xl hover:bg-[#C8A96A] transition-colors mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Buy Now
        </button>
        
        <p className="text-white/50 italic text-sm">Your results depend on what you use daily.</p>
      </section>

      {/* Sticky Mobile Buy Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10 p-4 z-50">
        <button className="w-full bg-[#C8A96A] text-black font-bold py-3.5 rounded-[4px]">
          Buy Now — ₹749
        </button>
      </div>

    </main>
  );
}


