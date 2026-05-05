"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MessageCircle, Send, ShieldCheck, CheckCircle, Package } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]/95 backdrop-blur-sm selection:bg-[#C8A96A] selection:text-[#0A0A0A] pb-24">
      
      {/* SECTION 1 — HERO */}
      <section className="pt-40 pb-20 px-6 max-w-[1000px] mx-auto text-center border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            We&apos;re Here If You Need Us
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 font-medium mb-8">
            Questions, support, or anything else — reach out anytime.
          </p>
          
          <p className="inline-block bg-[#121212] border border-[#C8A96A]/30 text-[#C8A96A] font-bold tracking-widest uppercase text-sm px-6 py-2 rounded-[4px]">
            Fast responses. Real support.
          </p>
        </motion.div>
      </section>

      {/* SECTION 2 — CONTACT OPTIONS & SECTION 3 — FORM */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Options */}
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get In Touch
            </h2>
            
            <div className="space-y-6">
              {/* Option 1 */}
              <div className="bg-[#121212] p-8 rounded-[8px] border border-white/5 hover:border-[#C8A96A]/30 transition-colors flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C8A96A]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-white/80 font-medium text-lg mb-2">support@alphagrooming.com</p>
                  <p className="text-white/40 text-sm">Best for detailed queries</p>
                </div>
              </div>

              {/* Option 2 */}
              <div className="bg-[#121212] p-8 rounded-[8px] border border-white/5 hover:border-[#C8A96A]/30 transition-colors flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C8A96A]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Call / WhatsApp</h3>
                  <p className="text-white/80 font-medium text-lg mb-2">+91 98765 43210</p>
                  <p className="text-white/40 text-sm">Quick responses during working hours</p>
                </div>
              </div>

              {/* Option 3 */}
              <div className="bg-[#121212] p-8 rounded-[8px] border border-white/5 hover:border-[#C8A96A]/30 transition-colors flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#C8A96A]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Connect</h3>
                  <p className="text-white/80 font-medium text-lg mb-2">@alphagrooming</p>
                  <p className="text-white/40 text-sm">Stay updated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#050505] border border-[#C8A96A]/20 p-10 md:p-12 rounded-[12px] flex flex-col justify-start">
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Send Us A Message
            </h2>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-white/60 text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your Name"
                  className="w-full bg-[#121212] border border-white/10 rounded-[4px] px-4 py-4 text-white focus:outline-none focus:border-[#C8A96A] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/60 text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full bg-[#121212] border border-white/10 rounded-[4px] px-4 py-4 text-white focus:outline-none focus:border-[#C8A96A] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/60 text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full bg-[#121212] border border-white/10 rounded-[4px] px-4 py-4 text-white focus:outline-none focus:border-[#C8A96A] transition-colors resize-none"
                />
              </div>

              <button type="submit" className="flex items-center justify-center gap-3 w-full bg-[#C8A96A] text-[#050505] font-bold py-4 rounded-[4px] text-lg hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(200,169,106,0.2)] mt-2">
                Send Message <Send className="w-4 h-4" />
              </button>
              
              <p className="text-white/40 text-center text-xs mt-2">
                We usually respond within 24 hours.
              </p>
            </form>
          </div>

        </div>
      </section>

      {/* SECTION 4 — FAQ (SUPPORT FOCUSED) */}
      <section className="py-24 px-6 border-y border-white/5 bg-[#050505]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Quick Answers
          </h2>
          
          <div className="space-y-6">
            <div className="bg-[#121212] p-6 border border-white/5 rounded-[8px]">
              <p className="text-white font-bold text-lg mb-2">Q: How long does delivery take?</p>
              <p className="text-white/60">A: Typically 3–7 working days.</p>
            </div>
            
            <div className="bg-[#121212] p-6 border border-white/5 rounded-[8px]">
              <p className="text-white font-bold text-lg mb-2">Q: Can I return a product?</p>
              <p className="text-white/60">A: Contact support for assistance.</p>
            </div>
            
            <div className="bg-[#121212] p-6 border border-white/5 rounded-[8px]">
              <p className="text-white font-bold text-lg mb-2">Q: Are your products safe?</p>
              <p className="text-white/60">A: Yes, made with clean ingredients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — TRUST REINFORCEMENT */}
      <section className="py-24 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why You Can Trust ALPHA
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center bg-[#121212] p-8 border border-white/5 rounded-[8px]">
              <ShieldCheck className="w-8 h-8 text-[#C8A96A] mb-4" />
              <p className="text-white font-bold text-lg">Secure payments</p>
            </div>
            <div className="flex flex-col items-center bg-[#121212] p-8 border border-white/5 rounded-[8px]">
              <Package className="w-8 h-8 text-[#C8A96A] mb-4" />
              <p className="text-white font-bold text-lg">Reliable delivery</p>
            </div>
            <div className="flex flex-col items-center bg-[#121212] p-8 border border-white/5 rounded-[8px]">
              <CheckCircle className="w-8 h-8 text-[#C8A96A] mb-4" />
              <p className="text-white font-bold text-lg">Responsive support</p>
            </div>
          </div>
          
          <p className="text-[#C8A96A] font-bold text-xl">
            We&apos;re here before and after your purchase.
          </p>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="py-24 px-6 text-center border-t border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ready To Upgrade?
        </h2>
        <p className="text-2xl text-[#C8A96A] font-medium mb-10">
          Start your ALPHA routine today.
        </p>
        
        <Link href="/shop" className="inline-block bg-white text-black font-bold py-5 px-16 rounded-[4px] text-xl hover:bg-[#C8A96A] transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Shop ALPHA Products
        </Link>
      </section>

    </main>
  );
}


