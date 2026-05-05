"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]/95 backdrop-blur-sm selection:bg-[#C8A96A] selection:text-[#0A0A0A] pb-24">
      
      {/* SECTION 1 — HERO (IDENTITY HOOK) */}
      <section className="relative pt-40 pb-32 px-6 max-w-[1200px] mx-auto text-center border-b border-white/5">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,169,106,0.05)_0%,_transparent_70%)] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-[90px] font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            This Is Not Just <br className="hidden sm:block" />
            <span className="text-[#C8A96A]">Grooming.</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-white font-medium mb-8">
            This is how you show up.
          </p>
          
          <p className="max-w-[700px] mx-auto text-lg text-white/60 tracking-wide leading-relaxed">
            ALPHA is built for men who care about how they look, how they feel, and how they are perceived.
          </p>
        </motion.div>
      </section>

      {/* SECTION 2 — THE PROBLEM (RELATABILITY) */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Most Men Settle For Average
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#121212] p-8 rounded-[8px] border border-white/5 flex flex-col items-center">
              <span className="text-white/40 text-sm tracking-widest uppercase mb-4">The Reality</span>
              <p className="text-white font-medium text-lg">Random products</p>
            </div>
            <div className="bg-[#121212] p-8 rounded-[8px] border border-white/5 flex flex-col items-center">
              <span className="text-white/40 text-sm tracking-widest uppercase mb-4">The Reality</span>
              <p className="text-white font-medium text-lg">No routine</p>
            </div>
            <div className="bg-[#121212] p-8 rounded-[8px] border border-white/5 flex flex-col items-center">
              <span className="text-white/40 text-sm tracking-widest uppercase mb-4">The Reality</span>
              <p className="text-white font-medium text-lg">No real results</p>
            </div>
          </div>

          <div className="max-w-[600px] mx-auto text-center">
            <ul className="space-y-4 mb-10 text-xl text-white/70">
              <li className="flex justify-center items-center gap-3"><XCircle className="w-5 h-5 text-red-900/50" /> Hair falls</li>
              <li className="flex justify-center items-center gap-3"><XCircle className="w-5 h-5 text-red-900/50" /> Skin looks dull</li>
              <li className="flex justify-center items-center gap-3"><XCircle className="w-5 h-5 text-red-900/50" /> Beard stays uneven</li>
            </ul>
            <p className="text-[#C8A96A] font-bold text-2xl italic">
              And most brands don’t fix it.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE SHIFT (BRAND PURPOSE) */}
      <section className="py-32 px-6 border-y border-white/5">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              We Built ALPHA For One Reason
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-10">
              To give men a <strong className="text-[#C8A96A]">simple, effective way</strong> to upgrade how they look.
            </p>
            
            <ul className="space-y-4 text-white/60 font-medium">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> No confusion</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> No complicated routines</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#8A9A86]" /> No false promises</li>
            </ul>
            
            <p className="mt-10 text-2xl font-bold text-white">Just products that work.</p>
          </div>
          
          <div className="w-full md:w-1/2 relative h-[500px]">
             <Image src="/images/hero/ultimate_hero.png" alt="ALPHA Purpose" fill className="object-cover rounded-[12px] opacity-80 border border-white/10" />
             <div className="absolute inset-0 bg-[#0A0A0A]/40" />
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT MAKES ALPHA DIFFERENT */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            What We Do Differently
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {[
              "We focus on results, not hype",
              "We use clean, organic ingredients",
              "We design for Indian conditions",
              "We keep it simple and effective"
            ].map((point, i) => (
              <div key={i} className="bg-[#121212] p-8 border border-white/5 rounded-[8px] flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-[#C8A96A] shrink-0" />
                <span className="text-white text-lg font-medium">{point}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="inline-block border-b-2 border-[#C8A96A] pb-2 text-2xl text-white font-bold tracking-wide">
              Less noise. More results.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — BRAND PHILOSOPHY (MEMORY LOCK) */}
      <section className="py-32 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-full bg-[radial-gradient(circle,_rgba(200,169,106,0.05)_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="text-[#C8A96A] font-bold tracking-[0.2em] uppercase text-sm mb-6">The ALPHA Mindset</h2>
          
          <div className="space-y-4 mb-16">
            <p className="text-2xl md:text-3xl text-white/50 font-light">You don’t need 20 products.</p>
            <p className="text-2xl md:text-3xl text-white/50 font-light">You don’t need complicated routines.</p>
          </div>
          
          <p className="text-xl text-white mb-8">You need:</p>
          <ul className="space-y-4 mb-16 text-2xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            <li>Consistency.</li>
            <li>The right products.</li>
            <li>A system that works.</li>
          </ul>
          
          <p className="text-3xl font-bold text-[#C8A96A]">That&apos;s ALPHA.</p>
        </div>
      </section>

      {/* SECTION 6 — SOCIAL PROOF */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Men Are Already Upgrading
          </h2>
          <p className="text-xl text-white/60 mb-16">
            <strong className="text-white">1,000+ customers</strong> <br/> Growing every day.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Finally something that works.",
              "Simple routine, real results.",
              "Worth every rupee."
            ].map((quote, i) => (
              <div key={i} className="bg-[#121212] p-10 rounded-[8px] border border-white/5">
                <div className="flex justify-center gap-1 text-[#C8A96A] mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/90 font-medium text-xl italic">&quot;{quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — AUTHORITY (TRUST BUILDER) */}
      <section className="py-32 px-6 border-y border-white/5">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Built With Purpose
          </h2>
          
          <p className="text-xl text-white/60 mb-10">Every product is designed to:</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <div className="bg-[#0A0A0A] p-6 border border-[#C8A96A]/20 rounded-[8px] flex-1">
              <p className="text-white font-bold text-lg">Solve a real problem</p>
            </div>
            <div className="bg-[#0A0A0A] p-6 border border-[#C8A96A]/20 rounded-[8px] flex-1">
              <p className="text-white font-bold text-lg">Deliver visible results</p>
            </div>
            <div className="bg-[#0A0A0A] p-6 border border-[#C8A96A]/20 rounded-[8px] flex-1">
              <p className="text-white font-bold text-lg">Fit into daily routine</p>
            </div>
          </div>
          
          <p className="text-2xl font-bold text-[#8A9A86]">No shortcuts. No compromises.</p>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="py-32 px-6 text-center bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          This Is Your <span className="text-[#C8A96A]">Upgrade.</span>
        </h2>
        <p className="text-2xl text-white/80 font-light mb-12">
          How you look affects how you are seen.
        </p>
        
        <Link href="/shop" className="inline-block bg-white text-black font-bold py-5 px-16 rounded-[4px] text-xl hover:bg-[#C8A96A] transition-colors mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Shop ALPHA Products
        </Link>
        
        <p className="text-white/50 italic text-sm">Start today. See the difference.</p>
      </section>

    </main>
  );
}


