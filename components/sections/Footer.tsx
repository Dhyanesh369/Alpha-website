"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, MessageSquare, Share2, ArrowUpRight, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Shop",
    links: [
      { name: "All Products", href: "/shop" },
      { name: "The Signature Set", href: "/shop/signature-set" },
      { name: "Subscription", href: "/subscribe" },
      { name: "Gift Cards", href: "/gifts" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Science", href: "/science" },
      { name: "Reviews", href: "/reviews" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Shipping & Returns", href: "/shipping" },
      { name: "FAQ", href: "/faq" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full pt-32 pb-16 bg-[#050505] border-t border-white/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-[1200px] mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24, mb-24">
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-12">
            <div>
              <Link href="/" className="text-3xl font-black tracking-[0.25em] text-white mb-8 block uppercase">
                ALPHA<span className="text-[#C8A96A]">.</span>
              </Link>
              <p className="text-white/40 text-base font-light leading-relaxed max-w-sm">
                Elevating the standard of men's grooming through science, nature, and relentless pursuit of excellence.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C8A96A]">JOIN THE ELITE</h4>
              <div className="relative max-w-md group">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-[4px] px-6 h-14 text-white focus:outline-none focus:border-[#C8A96A]/50 transition-all duration-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-[2px] bg-[#C8A96A] flex items-center justify-center text-black hover:scale-105 transition-transform active:scale-95">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Subscribe for exclusive updates.</p>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C8A96A]">{group.title}</h4>
                <ul className="flex flex-col gap-5">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/40 text-sm font-medium hover:text-white transition-colors flex items-center group whitespace-nowrap"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Shop CTA Strip */}
        <div className="py-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Upgrade?
            </h3>
            <p className="text-white/30 text-base font-medium">Start your ALPHA journey today with our signature collection.</p>
          </div>
          <Link
            href="/shop"
            className="btn-primary"
          >
            Shop The Collection
          </Link>
        </div>

        {/* Bottom */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase text-center md:text-left">
            © 2024 ALPHA PREMIUM GROOMING. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-8">
            {[
              { icon: <Camera className="w-5 h-5" />, href: "#" },
              { icon: <MessageSquare className="w-5 h-5" />, href: "#" },
              { icon: <Share2 className="w-5 h-5" />, href: "#" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="text-white/30 hover:text-[#C8A96A] transition-all duration-500 hover:scale-110 active:scale-95"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Decorative text */}
      <div className="absolute bottom-0 -left-10 text-[200px] md:text-[300px] font-black text-white/5 select-none pointer-events-none leading-none tracking-tighter">
        ALPHA
      </div>
    </footer>
  );
}
