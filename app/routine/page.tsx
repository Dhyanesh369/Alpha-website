"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Star, Droplet, Shield, Scissors } from "lucide-react";
import Image from "next/image";

export default function RoutinePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]/95 backdrop-blur-sm selection:bg-[#C8A96A] selection:text-[#0A0A0A] pb-24">
      
      {/* SECTION 1 — HERO (ENTRY POINT) */}
      <section className="pt-40 pb-24 px-6 max-w-[900px] mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
            The <span className="text-[#C8A96A]">ALPHA System</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 font-light mb-12 leading-relaxed">
            Stop guessing. Start following a proven path <br className="hidden sm:block" />
            to a sharper, more defined appearance.
          </p>
          
          <div className="flex justify-center">
            <Link href="#steps" className="btn-primary">
              Build Your Routine
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 & 3 — PROBLEM & SOLUTION */}
      <section className="py-24 lg:py-32 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* PROBLEM */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Most Men Fail <br />
              <span className="text-[#C8A96A]">By Doing Too Much.</span>
            </h2>
            <ul className="space-y-5 mb-8">
              <li className="flex items-center gap-4 text-white/50 font-medium"><XCircle className="w-5 h-5 text-red-900/30" /> Over-complicating choices</li>
              <li className="flex items-center gap-4 text-white/50 font-medium"><XCircle className="w-5 h-5 text-red-900/30" /> Using random products</li>
              <li className="flex items-center gap-4 text-white/50 font-medium"><XCircle className="w-5 h-5 text-red-900/30" /> No consistent habit</li>
            </ul>
          </div>

          {/* SOLUTION */}
          <div className="bg-[#121212] p-12 border border-[#C8A96A]/10 rounded-[4px] flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              The 3-Step Solution
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              We stripped away the noise to create a single, effortless system that works.
            </p>
            <p className="text-2xl font-black text-[#C8A96A] uppercase tracking-tighter">Simple. Effective. ALPHA.</p>
          </div>

        </div>
      </section>

      {/* SECTION 4 — ROUTINE STEPS (CORE) */}
      <section id="steps" className="py-24 lg:py-40 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-12 md:gap-10 mb-20 relative">
            
            {/* STEP 1 */}
            <div className="bg-[#121212] p-10 border border-white/5 rounded-[4px] flex flex-col items-center relative z-10 text-center transition-all duration-500 hover:border-[#C8A96A]/20">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border border-[#C8A96A]/30 mb-8 shadow-[0_0_20px_rgba(200,169,106,0.1)]">
                <span className="text-[#C8A96A] font-black text-lg">01</span>
              </div>
              <h3 className="text-[#8A9A86] font-black tracking-[0.25em] uppercase text-[10px] mb-4">Phase One: Cleanse</h3>
              <p className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Face Cleanser</p>
              <p className="text-white/40 text-sm leading-relaxed">The foundation. Removes impurities and balances skin tone instantly.</p>
            </div>

            {/* STEP 2 */}
            <div className="bg-[#121212] p-10 border border-white/5 rounded-[4px] flex flex-col items-center relative z-10 text-center transition-all duration-500 hover:border-[#C8A96A]/20">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border border-[#C8A96A]/30 mb-8 shadow-[0_0_20px_rgba(200,169,106,0.1)]">
                <span className="text-[#C8A96A] font-black text-lg">02</span>
              </div>
              <h3 className="text-[#8A9A86] font-black tracking-[0.25em] uppercase text-[10px] mb-4">Phase Two: Treat</h3>
              <p className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Growth Oil</p>
              <p className="text-white/40 text-sm leading-relaxed">The fuel. Targeted active ingredients for deep repair and hair density.</p>
            </div>

            {/* STEP 3 */}
            <div className="bg-[#121212] p-10 border border-white/5 rounded-[4px] flex flex-col items-center relative z-10 text-center transition-all duration-500 hover:border-[#C8A96A]/20">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border border-[#C8A96A]/30 mb-8 shadow-[0_0_20px_rgba(200,169,106,0.1)]">
                <span className="text-[#C8A96A] font-black text-lg">03</span>
              </div>
              <h3 className="text-[#8A9A86] font-black tracking-[0.25em] uppercase text-[10px] mb-4">Phase Three: Define</h3>
              <p className="text-white font-bold text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Beard Kit</p>
              <p className="text-white/40 text-sm leading-relaxed">The finish. Sharpening the edges and ensuring total control over your look.</p>
            </div>
          </div>

          <p className="text-center text-[#C8A96A] font-black text-lg uppercase tracking-[0.3em] opacity-50">One Continuous Flow</p>
        </div>
      </section>

      {/* SECTION 5 — BUNDLE OFFER (HIGH-CONVERSION) */}
      <section className="py-20 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-[1000px] mx-auto relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,169,106,0.1)_0%,_transparent_60%)] pointer-events-none" />
          
          <div className="bg-[#0A0A0A] border border-[#C8A96A]/50 p-10 md:p-16 rounded-[12px] relative z-10 overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-12">
            
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get The Full Routine
              </h2>
              <h3 className="text-xl text-[#C8A96A] font-bold mb-8">ALPHA Complete System</h3>
              
              <ul className="space-y-3 mb-8 text-white/80 font-medium">
                <li className="flex items-center gap-3 justify-center md:justify-start"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> Face Cleanser</li>
                <li className="flex items-center gap-3 justify-center md:justify-start"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> Hair Growth Oil</li>
                <li className="flex items-center gap-3 justify-center md:justify-start"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> Beard Growth Kit</li>
              </ul>
            </div>

              <div className="flex flex-col items-center">
                <div className="flex items-end gap-4 mb-4">
                  <span className="text-5xl font-bold text-white">₹1499</span>
                  <span className="text-2xl text-white/40 line-through mb-1">₹1999</span>
                </div>
                <p className="text-[#8A9A86] font-bold mb-8 text-lg">Better results. Lower cost.</p>
                
                <Link 
                  href="/shop"
                  className="w-full flex items-center justify-center bg-[#C8A96A] text-[#050505] font-bold py-5 px-10 rounded-[4px] text-lg hover:scale-[1.02] transition-transform shadow-[0_0_40px_rgba(200,169,106,0.3)] uppercase tracking-tighter"
                >
                  Get Complete Routine
                </Link>
                <Link href="/shop" className="mt-4 text-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                  Or Explore Individual Products
                </Link>
              </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — PERSONALIZED ENTRY (SMART PATH) */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Or Start With One
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            <Link href="/product/hair-growth-oil" className="group bg-[#121212] p-8 border border-white/5 rounded-[8px] hover:border-[#C8A96A]/40 transition-colors">
              <p className="text-white/50 text-sm mb-2">Hair Issue <ArrowRight className="inline w-3 h-3 mx-1" /></p>
              <p className="text-white font-bold text-xl group-hover:text-[#C8A96A] transition-colors">Start with Hair Growth Oil</p>
            </Link>
            
            <Link href="/product/beard-kit" className="group bg-[#121212] p-8 border border-white/5 rounded-[8px] hover:border-[#C8A96A]/40 transition-colors">
              <p className="text-white/50 text-sm mb-2">Beard Issue <ArrowRight className="inline w-3 h-3 mx-1" /></p>
              <p className="text-white font-bold text-xl group-hover:text-[#C8A96A] transition-colors">Start with Beard Kit</p>
            </Link>

            <Link href="/product/face-cleanser" className="group bg-[#121212] p-8 border border-white/5 rounded-[8px] hover:border-[#C8A96A]/40 transition-colors">
              <p className="text-white/50 text-sm mb-2">Skin Issue <ArrowRight className="inline w-3 h-3 mx-1" /></p>
              <p className="text-white font-bold text-xl group-hover:text-[#C8A96A] transition-colors">Start with Face Cleanser</p>
            </Link>
          </div>

          <Link href="/shop" className="inline-block border border-white/20 bg-transparent text-white font-bold py-4 px-12 rounded-[4px] hover:bg-white/5 transition-colors">
            Choose My Product
          </Link>
        </div>
      </section>

      {/* SECTION 7 & 8 — BENEFIT STACK & SOCIAL PROOF */}
      <section className="py-24 px-6 bg-[#050505] border-y border-white/5 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1400px] mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why This Works Better
          </h2>
          <ul className="space-y-6 mb-8">
            <li className="flex gap-4"><CheckCircle className="w-6 h-6 text-[#C8A96A] shrink-0" /> <span className="text-white/80 text-lg">Products complement each other</span></li>
            <li className="flex gap-4"><CheckCircle className="w-6 h-6 text-[#C8A96A] shrink-0" /> <span className="text-white/80 text-lg">Results show faster</span></li>
            <li className="flex gap-4"><CheckCircle className="w-6 h-6 text-[#C8A96A] shrink-0" /> <span className="text-white/80 text-lg">Routine builds consistency</span></li>
          </ul>
          <p className="text-xl font-bold text-[#C8A96A]">Better system <ArrowRight className="inline w-5 h-5 mx-2" /> better results</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Men Are Getting Results
          </h2>
          <div className="space-y-6">
            <div className="bg-[#0A0A0A] p-6 border border-white/5 rounded-[8px]">
              <p className="text-white/90 font-medium italic">&quot;Routine made a huge difference&quot;</p>
            </div>
            <div className="bg-[#0A0A0A] p-6 border border-white/5 rounded-[8px]">
              <p className="text-white/90 font-medium italic">&quot;Everything works better together&quot;</p>
            </div>
            <div className="bg-[#0A0A0A] p-6 border border-white/5 rounded-[8px]">
              <p className="text-white/90 font-medium italic">&quot;Simple and effective&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Stop Guessing. <br className="hidden sm:block" />
          <span className="text-[#C8A96A]">Start Following A System.</span>
        </h2>
        
        <p className="text-2xl text-white/80 font-light mb-12">
          Consistency + right products = results
        </p>
        
        <button className="bg-white text-black font-bold py-5 px-16 rounded-[4px] text-xl hover:bg-[#C8A96A] transition-colors mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Build My Routine
        </button>
        
        <p className="text-white/50 italic text-sm">Start today. See the difference.</p>
      </section>

    </main>
  );
}


