"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Star, Sparkles, Shield } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

// ─── Mouse-Reactive 3D Perspective Container ───
function Perspective3D({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (isMobile) return;
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) return <div className="w-full h-full">{children}</div>;

  return (
    <div ref={containerRef} style={{ perspective: "1200px" }} className="w-full h-full">
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

// ─── Animated Particles (Subtle finishing touch) ───
function FloatingParticles() {
  const isMobile = useIsMobile();
  const particles = [
    { x: "15%", y: "25%", size: 2, dur: 20, del: 0 },
    { x: "60%", y: "45%", size: 3, dur: 25, del: 2 },
    { x: "80%", y: "20%", size: 2, dur: 22, del: 4 },
  ];

  if (isMobile) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#C8A96A]/20 blur-[1px]"
          style={{ width: p.size, height: p.size, left: p.x, top: p.y }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.del,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const productY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "10%" : "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col w-full overflow-hidden bg-[#050505] selection:bg-[#C8A96A] selection:text-[#0A0A0A]"
    >
      {/* Background System */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ scale: bgScale }}>
        <div className="absolute w-full h-full bg-[#050505]" />
      </motion.div>

      <FloatingParticles />

      {/* ═══════════ MAIN HERO ═══════════ */}
      <div className="relative z-10 mx-auto flex w-full min-h-[100svh] max-w-[1200px] flex-col lg:flex-row items-center justify-between px-6 pt-24 pb-16 lg:pt-32">

        {/* Text Section */}
        <div className="flex w-full lg:w-[50%] flex-col items-center lg:items-start text-center lg:text-left z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] uppercase text-[#C8A96A]"
          >
            THE NEW STANDARD
          </motion.div>

          <h1 className="text-[40px] sm:text-[60px] lg:text-[88px] font-bold tracking-tighter leading-[1.05] mb-8 text-white max-w-[600px]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Become The Man <br className="hidden lg:block" />
            <span className="text-[#C8A96A]">People Notice First.</span>
          </h1>

          <p className="text-lg lg:text-xl font-light leading-relaxed text-white/60 mb-12 tracking-wide max-w-[500px]">
            Precision grooming designed to upgrade your presence, every single day.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <Link href="/shop" className="btn-primary w-full sm:w-auto">
              Upgrade Your Look
            </Link>
            <Link href="/routine" className="btn-secondary w-full sm:w-auto">
              See The Routine
            </Link>
          </div>

          {!isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-4 mt-16 text-white/30 text-xs font-bold uppercase tracking-widest"
            >
              <div className="flex text-[#C8A96A]/50">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <span>Trusted by 1,000+ men</span>
            </motion.div>
          )}
        </div>

        {/* Product Section */}
        <motion.div style={{ y: productY }} className="relative mt-16 lg:mt-0 w-full lg:w-[45%] flex items-center justify-center z-10">
          <Perspective3D>
            <div className="relative w-full h-[350px] sm:h-[500px] lg:h-[750px] max-w-[800px]">
              <Image
                src="/images/hero/alpha_hero_composition.png"
                alt="ALPHA"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Perspective3D>
        </motion.div>
      </div>

      {/* Scroll Expansion */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-[35svh] px-6 py-20 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/80 tracking-tight mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Not just grooming.
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#C8A96A] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            A visible upgrade.
          </h3>
        </div>
      </div>
    </section>
  );
}
