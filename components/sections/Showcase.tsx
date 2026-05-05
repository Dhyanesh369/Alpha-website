"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function Showcase() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const productRotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-40 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] rounded-full bg-[#C8A96A]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 flex flex-col items-center">
        <motion.div
          style={{ scale, opacity }}
          className="text-center mb-20"
        >
          <span className="text-[#C8A96A] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Limited Collection</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Alpha <br />
            <span className="text-[#C8A96A] italic">Signature</span> Set.
          </h2>
          <p className="text-white/40 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Everything you need for a complete skin transformation. Expertly curated, scientifically balanced, and delivered in a premium presentation case.
          </p>
        </motion.div>

        <div className="relative w-full max-w-[1000px] aspect-[16/10] flex items-center justify-center">
          {/* Animated rings behind product */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute border border-[#C8A96A]/10 rounded-full"
                style={{ width: `${i * 30}%`, aspectRatio: "1/1" }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.3, 0.1],
                  rotate: i % 2 === 0 ? 360 : -360
                }}
                transition={{ 
                  duration: 10 + i * 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            ))}
          </div>

          <motion.div
            style={{ rotate: productRotate }}
            className="relative w-full h-full z-10"
          >
            <Image
              src="/images/hero/ultimate_hero.png"
              alt="Alpha Signature Set"
              fill
              className="object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-12 text-white/60">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">$149.00</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#C8A96A]">Full Routine Kit</span>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">4.9/5</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#C8A96A]">Customer Satisfaction</span>
            </div>
          </div>

          <Link
            href="/shop"
            className="group relative flex h-16 items-center gap-4 rounded-full bg-white px-10 text-[15px] font-bold text-black transition-all duration-300 hover:bg-[#C8A96A] hover:text-black hover:shadow-[0_0_50px_rgba(200,169,106,0.4)]"
          >
            <ShoppingBag className="w-5 h-5" />
            Claim Your Kit
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
          
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
            Free Priority Shipping Worldwide • 30-Day Money Back Guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
