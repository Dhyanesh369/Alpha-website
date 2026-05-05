"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Droplets, Zap, ShieldCheck } from "lucide-react";

const products = [
  {
    id: "01",
    name: "Pure Cleanser",
    description: "A deep-pore volcanic clay wash that removes impurities without stripping moisture.",
    image: "/images/hero/bottle.png",
    icon: <Droplets className="w-5 h-5" />,
    color: "#8A9A86", // Sage Green
    delay: 0.1
  },
  {
    id: "02",
    name: "Active Serum",
    description: "High-potency Vitamin C and peptides to brighten and tighten skin texture.",
    image: "/images/hero/pipette.png",
    icon: <Zap className="w-5 h-5" />,
    color: "#C8A96A", // Alpha Gold
    delay: 0.3
  },
  {
    id: "03",
    name: "Revive Moisturizer",
    description: "24-hour hydration with a matte finish. Built for the modern man&apos;s lifestyle.",
    image: "/images/hero/cream.png",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "#728491", // Slate Blue
    delay: 0.5
  }
];

export default function Routine() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 px-6 overflow-hidden bg-[#050505]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C8A96A]/20 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-[1px] w-8 bg-[#C8A96A]" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C8A96A]">The Routine</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Three steps to <br />
              <span className="text-[#C8A96A]">Absolute Confidence.</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 max-w-sm text-lg font-light leading-relaxed"
          >
            We&apos;ve simplified high-performance grooming. No fluff, just the essentials your skin needs to perform at its peak.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      {/* Large background text for depth */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02]">
        <h2 className="text-[20vw] font-bold text-white whitespace-nowrap tracking-tighter">ESSENTIALS</h2>
      </div>
    </section>
  );
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: product.delay }}
      className="group relative flex flex-col"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] w-full mb-8 overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/5 flex items-center justify-center p-12 transition-all duration-700 group-hover:border-[#C8A96A]/30">
        {/* Animated Background Mesh */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
          style={{ 
            backgroundImage: `radial-gradient(circle at 50% 50%, ${product.color}20 0%, transparent 70%)`,
          }} 
        />
        
        {/* Floating Ring Decor */}
        <motion.div 
          className="absolute w-48 h-48 border border-white/5 rounded-full pointer-events-none"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          style={{ y: imageY, rotateX }}
          className="relative w-full h-full z-10"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
        
        <div className="absolute top-6 right-6 text-white/10 font-bold text-4xl select-none group-hover:text-[#C8A96A]/20 transition-colors duration-500">
          {product.id}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div 
            className="p-2 rounded-lg bg-white/5 transition-colors duration-500 group-hover:bg-[#C8A96A]/20 group-hover:text-[#C8A96A]"
            style={{ color: "white" }}
          >
            {product.icon}
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#C8A96A] transition-colors duration-500">
            {product.name}
          </h3>
        </div>
        
        <p className="text-white/40 leading-relaxed text-sm lg:text-base font-light">
          {product.description}
        </p>
        
        <motion.button
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C8A96A] mt-2 group/btn"
        >
          Explore Science
          <div className="h-px w-0 bg-[#C8A96A] group-hover/btn:w-8 transition-all duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
}
