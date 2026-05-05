"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Shield, Sparkles, Zap, Beaker } from "lucide-react";

export default function Craftsmanship() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 overflow-hidden bg-[#050505] flex flex-col items-center"
    >
      {/* Background Text Overlay */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-[0.03]">
        <motion.h2 style={{ x: x1 }} className="text-[15vw] font-black text-white leading-none tracking-tighter">CRAFTSMANSHIP</motion.h2>
        <motion.h2 style={{ x: x2 }} className="text-[15vw] font-black text-[#C8A96A] leading-none tracking-tighter">PERFECTION</motion.h2>
      </div>

      <div className="relative z-10 max-w-[1400px] w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Content */}
        <div className="flex flex-col gap-12">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#C8A96A]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C8A96A]">Quality Obsessed</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Science of <br />
              <span className="text-[#C8A96A]">Modern Masculinity.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/40 text-lg lg:text-xl font-light leading-relaxed mb-10"
            >
              We don't believe in short-cuts. Every formula is meticulously engineered with premium organic ingredients and backed by dermatological science.
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: <Shield className="w-6 h-6" />, title: "Organic Only", desc: "No harsh chemicals." },
                { icon: <Zap className="w-6 h-6" />, title: "Fast Acting", desc: "Results in weeks." },
                { icon: <Beaker className="w-6 h-6" />, title: "Scientifically Proven", desc: "Tested formulas." },
                { icon: <Sparkles className="w-6 h-6" />, title: "Premium Scent", desc: "Sandalwood & Musk." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex flex-col gap-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#C8A96A] group-hover:bg-[#C8A96A] group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/30 text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square w-full max-w-[600px] mx-auto"
        >
          {/* Glass Card Backdrop */}
          <div className="absolute inset-0 bg-[#C8A96A]/5 backdrop-blur-3xl rounded-[40px] border border-white/5 shadow-2xl overflow-hidden">
             {/* Animated Light Sweep */}
             <motion.div 
               className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]"
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
             />
          </div>

          <div className="relative w-full h-full p-12 flex items-center justify-center">
            <Image
              src="/images/hero/lifestyle.png"
              alt="Premium Quality"
              fill
              className="object-cover rounded-[30px] opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 grayscale hover:grayscale-0"
            />
            
            {/* Floating Overlay elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-[#0A0A0A]/80 backdrop-blur-xl border border-[#C8A96A]/20 rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-2xl"
            >
              <span className="text-4xl font-bold text-[#C8A96A] mb-1">98%</span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Natural<br/>Ingredients</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
