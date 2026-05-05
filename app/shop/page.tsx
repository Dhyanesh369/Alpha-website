"use client";
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, Zap, Filter } from "lucide-react";
import TiltWrapper from "@/components/ui/TiltWrapper";
import AddToCartButton from "@/components/ui/AddToCartButton";

// --- MOCK DATA ---
const PRODUCTS = [
  {
    id: 1,
    name: "ALPHA Hair Growth Oil",
    category: "Hair",
    slug: "hair-growth-oil",
    image: "/images/hero/bottle.png",
    badge: "Best Seller",
    benefit: "Thicker hair in weeks",
    proof: "Used by 1,000+ men",
    price: 749,
    originalPrice: 999,
    popular: true,
    beginnerFriendly: false,
  },
  {
    id: 2,
    name: "ALPHA Beard Growth Kit",
    category: "Beard",
    slug: "beard-kit",
    image: "/images/hero/pipette.png",
    badge: "Most Popular",
    benefit: "Fuller beard. Cleaner look",
    proof: "Customer favorite",
    price: 899,
    originalPrice: 1199,
    popular: true,
    beginnerFriendly: true,
  },
  {
    id: 3,
    name: "ALPHA Face Cleanser",
    category: "Skin",
    slug: "face-cleanser",
    image: "/images/hero/cream.png",
    badge: "Fast Results",
    benefit: "Clear skin. Less oil",
    proof: "Visible results in 3–4 weeks",
    price: 549,
    originalPrice: 699,
    popular: false,
    beginnerFriendly: true,
  },
  {
    id: 4,
    name: "ALPHA Hair Styling Clay",
    category: "Hair",
    slug: "hair-styling-clay",
    image: "/images/hero/bottle.png",
    badge: "New",
    benefit: "All-day hold. Matte finish",
    proof: "No harsh chemicals",
    price: 499,
    originalPrice: 649,
    popular: false,
    beginnerFriendly: true,
  }
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeToggle, setActiveToggle] = useState<string | null>(null);

  // Filter Logic
  const filteredProducts = PRODUCTS.filter(p => {
    if (activeCategory !== "All" && p.category !== activeCategory) return false;
    if (activeToggle === "Popular" && !p.popular) return false;
    if (activeToggle === "Beginner" && !p.beginnerFriendly) return false;
    return true;
  });

  return (
    <main className="min-h-screen bg-[#0A0A0A]/95 backdrop-blur-sm selection:bg-[#C8A96A] selection:text-[#0A0A0A]">
      
      {/* SECTION 1 — PAGE HEADER */}
      <section className="pt-32 pb-20 px-6 text-center max-w-[800px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Upgrade Your Presence
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/60 font-light leading-relaxed"
        >
          Premium grooming for men who want a sharper, more defined look.
        </motion.p>
      </section>

      {/* SECTION 2 — SMART FILTER BAR */}
      <div className="sticky top-[70px] z-40 bg-[#050505]/90 backdrop-blur-xl border-y border-white/5 py-5 px-6 mb-16">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Categories */}
          <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {["All", "Hair", "Beard", "Skin"].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all whitespace-nowrap
                  ${activeCategory === cat 
                    ? "bg-[#C8A96A] text-black" 
                    : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex w-full md:w-auto justify-between md:justify-end gap-4 items-center">
            {/* Toggles */}
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveToggle(activeToggle === "Popular" ? null : "Popular")}
                className={`flex items-center gap-2 px-4 py-2 rounded-[4px] text-[10px] font-black uppercase tracking-[0.2em] transition-all
                  ${activeToggle === "Popular" ? "bg-[#C8A96A]/10 text-[#C8A96A] border-[#C8A96A]/30" : "bg-transparent text-white/30 border-white/10"} border`}
              >
                Popular
              </button>
              <button 
                onClick={() => setActiveToggle(activeToggle === "Beginner" ? null : "Beginner")}
                className={`flex items-center gap-2 px-4 py-2 rounded-[4px] text-[10px] font-black uppercase tracking-[0.2em] transition-all
                  ${activeToggle === "Beginner" ? "bg-[#8A9A86]/10 text-[#8A9A86] border-[#8A9A86]/30" : "bg-transparent text-white/30 border-white/10"} border`}
              >
                Beginner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 — PRODUCT GRID */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col bg-[#121212] border border-white/5 rounded-[4px] overflow-hidden transition-all duration-500 hover:border-[#C8A96A]/20 h-full"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-black/80 backdrop-blur-md border border-[#C8A96A]/20 text-[#C8A96A] text-[9px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-[2px]">
                  {product.badge}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative h-[350px] w-full bg-[#050505] overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover object-center transition-transform duration-700 lg:group-hover:scale-105 opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {product.name}
                </h3>
                
                <p className="text-[#C8A96A] font-bold text-sm mb-1 tracking-wide">
                  {product.benefit}
                </p>

                <p className="text-white/30 text-xs flex items-center gap-1.5 mb-8 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#8A9A86]/50" /> {product.proof}
                </p>

                <div className="mt-auto">
                  <div className="flex items-end gap-3 mb-8">
                    <span className="text-3xl font-bold text-white tracking-tighter">₹{product.price}</span>
                    <span className="text-base text-white/20 line-through mb-1">₹{product.originalPrice}</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <AddToCartButton className="btn-primary w-full h-14 !text-xs" />
                    <Link 
                      href={`/product/${product.slug}`}
                      className="btn-secondary w-full h-14 !text-xs uppercase tracking-widest"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — FEATURE STRIP (REASSURANCE) */}
      <section className="border-y border-white/5 bg-[#050505] py-8 mb-24">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8 text-center md:text-left">
          {["Organic Ingredients", "No Harsh Chemicals", "Built for Men", "Visible Results"].map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#C8A96A]" />
              <span className="text-white/80 font-medium tracking-wide uppercase text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — BUNDLE SECTION (AOV BOOSTER) */}
      <section className="max-w-[1000px] mx-auto px-6 mb-24">
        <div className="relative rounded-[12px] border border-[#C8A96A]/30 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] p-8 md:p-12 overflow-hidden">
          {/* Subtle gold glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8A96A]/10 blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <span className="text-[#C8A96A] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">AOV Booster</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get Better Results Faster
              </h2>
              <p className="text-white/60 mb-6">Products work better together. The ALPHA Starter Routine.</p>
              
              <ul className="space-y-3 mb-8 text-sm text-white/80 font-medium">
                <li className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle className="w-4 h-4 text-[#C8A96A]" /> Face Cleanser</li>
                <li className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle className="w-4 h-4 text-[#C8A96A]" /> Hair Growth Oil</li>
                <li className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle className="w-4 h-4 text-[#C8A96A]" /> Beard Kit</li>
              </ul>

              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <span className="text-3xl font-bold text-white">₹1499</span>
                <span className="text-lg text-white/40 line-through">₹1999</span>
              </div>
              
              <button className="w-full md:w-auto bg-[#C8A96A] text-[#050505] font-bold py-4 px-10 rounded-[4px] hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(200,169,106,0.2)]">
                Get The Routine
              </button>
              <p className="text-xs text-[#8A9A86] font-bold mt-4">Save more. See faster results.</p>
            </div>

            <div className="w-full md:w-1/2 relative h-[300px]">
              <Image src="/images/hero/pipette.png" alt="Bundle" fill className="object-cover rounded-[8px] border border-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — DECISION HELPER */}
      <section className="bg-[#121212] py-24 mb-24">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Not Sure What To Pick?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { start: "Hair", product: "Hair Growth Oil" },
              { start: "Beard", product: "Beard Kit" },
              { start: "Skin", product: "Face Cleanser" }
            ].map((option, i) => (
              <div key={i} className="border border-white/5 bg-[#0A0A0A] p-8 rounded-[8px] hover:border-[#C8A96A]/30 transition-colors">
                <p className="text-white/50 text-sm mb-2">Option {i + 1}</p>
                <h4 className="text-xl font-bold text-white mb-4">Start with {option.start}</h4>
                <div className="h-px w-full bg-white/10 mb-4" />
                <p className="text-[#C8A96A] font-semibold">{option.product} <ArrowRight className="inline w-4 h-4 ml-1" /></p>
              </div>
            ))}
          </div>

          <button className="bg-white/5 border border-white/10 text-white font-bold py-4 px-10 rounded-[4px] hover:bg-white/10 transition-colors">
            Find My Product
          </button>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="text-center pb-32 px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          You Don&apos;t Need More Products.
        </h2>
        <p className="text-xl text-[#C8A96A] font-light mb-10">You need the right one.</p>
        <button className="bg-[#C8A96A] text-[#050505] font-bold py-4 px-12 rounded-[4px] text-lg hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(200,169,106,0.2)]">
          Shop Now
        </button>
      </section>

    </main>
  );
}


