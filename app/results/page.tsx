"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, CheckCircle, TrendingUp, Users, Clock, ShieldCheck } from "lucide-react";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]/95 backdrop-blur-sm selection:bg-[#C8A96A] selection:text-[#0A0A0A] pb-24">
      
      {/* SECTION 1 — HERO (TRUST HOOK) */}
      <section className="pt-40 pb-20 px-6 max-w-[1200px] mx-auto text-center border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-[80px] font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Real Results. <br className="hidden sm:block" />
            <span className="text-[#C8A96A]">Real Men.</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-white font-medium mb-8">
            See how ALPHA is helping men upgrade their look.
          </p>
          
          <p className="inline-block border border-[#C8A96A]/30 bg-[#C8A96A]/10 text-[#C8A96A] text-sm font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-[4px]">
            No hype. Just results.
          </p>
        </motion.div>
      </section>

      {/* SECTION 2 — SOCIAL PROOF STATS (INSTANT TRUST) */}
      <section className="py-20 px-6 bg-[#050505] border-b border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center justify-center p-6 border border-white/5 rounded-[8px] bg-[#0A0A0A]">
            <Users className="w-8 h-8 text-[#C8A96A] mb-4" />
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">1,000+</span>
            <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Customers</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 border border-white/5 rounded-[8px] bg-[#0A0A0A]">
            <Star className="w-8 h-8 text-[#C8A96A] mb-4" />
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">4.8</span>
            <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Average Rating</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 border border-white/5 rounded-[8px] bg-[#0A0A0A]">
            <Clock className="w-8 h-8 text-[#C8A96A] mb-4" />
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">3–4 Wks</span>
            <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Visible Results</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 border border-white/5 rounded-[8px] bg-[#0A0A0A]">
            <TrendingUp className="w-8 h-8 text-[#C8A96A] mb-4" />
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">Daily</span>
            <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Growing Users</span>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TESTIMONIAL GRID (CORE SECTION) */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: "Hair fall reduced faster than I expected.", name: "Rahul D.", location: "Mumbai" },
              { quote: "My beard looks fuller and more defined.", name: "Vikram S.", location: "Delhi" },
              { quote: "Skin feels fresh throughout the day.", name: "Arjun M.", location: "Bangalore" },
              { quote: "Simple routine. Real results.", name: "Karan T.", location: "Pune" },
              { quote: "Worth every rupee.", name: "Siddharth R.", location: "Hyderabad" },
              { quote: "Finally found something that actually works for my hair.", name: "Aditya P.", location: "Chennai" },
              { quote: "The face cleanser removed all my oily shine. Great product.", name: "Rohan V.", location: "Ahmedabad" },
              { quote: "My beard patches are actually filling in. Highly recommend.", name: "Kabir K.", location: "Jaipur" },
              { quote: "Clean ingredients and it shows. No irritation, just results.", name: "Nikhil B.", location: "Chandigarh" }
            ].map((review, i) => (
              <div key={i} className="bg-[#121212] p-8 border border-white/5 rounded-[8px] hover:border-[#C8A96A]/30 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-[#C8A96A] mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-white/90 font-medium text-lg italic leading-relaxed mb-6">&quot;{review.quote}&quot;</p>
                </div>
                <div className="border-t border-white/10 pt-4 mt-auto flex items-center justify-between">
                  <span className="text-white font-bold tracking-wide">{review.name}</span>
                  <span className="text-white/40 text-sm">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CATEGORY RESULTS (SMART SEGMENTATION) */}
      <section className="py-32 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Results Based On Your Need
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Hair */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-[#C8A96A] border-b border-white/10 pb-4">Hair</h3>
              <div className="bg-[#0A0A0A] p-6 border border-white/5 rounded-[8px]">
                <p className="text-white/80 font-medium">“Hair fall reduced in weeks.”</p>
              </div>
              <div className="bg-[#0A0A0A] p-6 border border-white/5 rounded-[8px]">
                <p className="text-white/80 font-medium">“Hair feels stronger now.”</p>
              </div>
            </div>

            {/* Beard */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-[#C8A96A] border-b border-white/10 pb-4">Beard</h3>
              <div className="bg-[#0A0A0A] p-6 border border-white/5 rounded-[8px]">
                <p className="text-white/80 font-medium">“Patchy beard filled up.”</p>
              </div>
              <div className="bg-[#0A0A0A] p-6 border border-white/5 rounded-[8px]">
                <p className="text-white/80 font-medium">“Looks sharper and cleaner.”</p>
              </div>
            </div>

            {/* Skin */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-[#C8A96A] border-b border-white/10 pb-4">Skin</h3>
              <div className="bg-[#0A0A0A] p-6 border border-white/5 rounded-[8px]">
                <p className="text-white/80 font-medium">“No more oily face.”</p>
              </div>
              <div className="bg-[#0A0A0A] p-6 border border-white/5 rounded-[8px]">
                <p className="text-white/80 font-medium">“Skin looks fresh daily.”</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 (BEFORE/AFTER) OMITTED PER INSTRUCTIONS */}

      {/* SECTION 6 — TRUST REINFORCEMENT */}
      <section className="py-32 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Results Happen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#121212] p-8 border border-white/5 rounded-[8px] flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-[#C8A96A] mb-6" />
              <p className="text-white font-bold text-lg">Clean ingredients</p>
            </div>
            <div className="bg-[#121212] p-8 border border-white/5 rounded-[8px] flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-[#C8A96A] mb-6" />
              <p className="text-white font-bold text-lg">Targeted formulas</p>
            </div>
            <div className="bg-[#121212] p-8 border border-white/5 rounded-[8px] flex flex-col items-center">
              <Clock className="w-8 h-8 text-[#C8A96A] mb-6" />
              <p className="text-white font-bold text-lg">Consistent usage</p>
            </div>
          </div>
          
          <p className="text-2xl font-bold text-[#C8A96A]">
            Results are not random. They are built.
          </p>
        </div>
      </section>

      {/* SECTION 7 — COMMUNITY SIGNAL */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#121212] to-[#050505] border-y border-[#C8A96A]/20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            More Men Are Switching To ALPHA
          </h2>
          <p className="text-xl text-white/60 mb-12">Every day, more users are upgrading to:</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <span className="text-white font-bold text-lg px-6 py-3 bg-[#0A0A0A] rounded-[4px] border border-white/10">Better grooming</span>
            <span className="text-white font-bold text-lg px-6 py-3 bg-[#0A0A0A] rounded-[4px] border border-white/10">Better appearance</span>
            <span className="text-white font-bold text-lg px-6 py-3 bg-[#0A0A0A] rounded-[4px] border border-white/10">Better confidence</span>
          </div>
          
          <p className="text-[#8A9A86] font-bold text-xl">
            You&apos;re not the only one making the shift.
          </p>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Your Turn To See The Difference
        </h2>
        <p className="text-2xl text-[#C8A96A] font-medium mb-12">
          Start your upgrade today.
        </p>
        
        <Link href="/shop" className="inline-block bg-white text-black font-bold py-5 px-16 rounded-[4px] text-xl hover:bg-[#C8A96A] transition-colors mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Shop ALPHA Products
        </Link>
        
        <p className="text-white/50 italic text-sm">Results come from consistency.</p>
      </section>

    </main>
  );
}


