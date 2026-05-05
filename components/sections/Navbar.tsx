"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Routine", href: "/routine" },
  { name: "Results", href: "/results" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#0A0A0A] border-b border-[#2A2A2A] shadow-md py-4 lg:py-[1.125rem]"
          : "bg-transparent py-5 lg:py-6"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-white hover:text-[#C8A96A] transition-all duration-500 font-serif text-2xl tracking-[0.25em] uppercase font-black"
          style={{ fontFamily: "'Playfair Display', serif" }} 
        >
          ALPHA<span className="text-[#C8A96A]">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname === "" && link.href === "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-500 py-1 ${
                  isActive ? "text-[#C8A96A]" : "text-white/40 hover:text-white"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center justify-center bg-[#C8A96A] text-black font-black text-[11px] uppercase tracking-[0.15em] px-6 h-11 rounded-[4px] transition-all duration-500 hover:brightness-110 active:scale-95"
          >
            Shop Now
          </Link>
          
          <Link href="/cart" className="text-white/60 hover:text-[#C8A96A] transition-all duration-500 relative">
            <ShoppingCart size={20} strokeWidth={2} />
          </Link>

          <button 
            className="lg:hidden text-white/60 hover:text-[#C8A96A] transition-all duration-500"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col px-6 py-8 h-[100dvh]"
          >
            <div className="flex items-center justify-between mb-12">
              <Link 
                href="/" 
                className="text-[#C8A96A] font-serif text-2xl tracking-[0.1em] uppercase font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontFamily: "'Playfair Display', 'Cinzel', serif" }} 
              >
                ALPHA
              </Link>
              <button 
                className="text-white hover:text-[#C8A96A] transition-colors p-2 -mr-2"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Mobile Menu"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-col gap-4 flex-grow overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname === "" && link.href === "/");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center min-h-[56px] px-4 rounded-[8px] text-[24px] font-black uppercase tracking-tight transition-all active:scale-[0.97] active:bg-white/5 ${
                      isActive ? "text-[#C8A96A]" : "text-white hover:text-[#C8A96A]"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Fixed CTA at bottom */}
            <div className="mt-auto pt-6 pb-4">
              <Link
                href="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center bg-[#C8A96A] text-black text-[18px] font-black h-[60px] rounded-[8px] transition-all active:scale-[0.95] uppercase tracking-tighter"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Shop Collection
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
