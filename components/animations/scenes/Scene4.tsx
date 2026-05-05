"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const items = [
  { name: "Face Cleanser", slug: "face-cleanser", img: "/images/hero/bottle.png" },
  { name: "Growth Oil", slug: "hair-growth-oil", img: "/images/hero/pipette.png" },
  { name: "Beard Kit", slug: "beard-kit", img: "/images/hero/cream.png" }
];

export default function Scene4() {
  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      <h2 className="text-[50px] md:text-[100px] font-bold text-white mb-24 leading-[0.95] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
        THE <span className="text-[#C8A96A]">COLLECTION.</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <Link
            key={i}
            href={`/product/${item.slug}`}
            className="group relative flex flex-col items-center cursor-pointer"
          >
            <div className="w-full aspect-[4/5] bg-[#121212] rounded-[4px] overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-[#C8A96A]/20">
              <Image 
                src={item.img} 
                alt={item.name} 
                fill 
                className="object-contain p-12 opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" 
              />
            </div>
            <h3 className="mt-8 text-xl font-bold text-white tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>{item.name}</h3>
            <div className="mt-2 w-10 h-px bg-[#C8A96A]/30 transition-all duration-500 group-hover:w-20 group-hover:bg-[#C8A96A]" />
          </Link>
        ))}
      </div>
    </div>
  );
}
