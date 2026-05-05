"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[#C8A96A] font-serif text-5xl md:text-7xl font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Playfair Display', 'Cinzel', serif" }}
            >
              ALPHA
            </motion.div>
            <motion.div 
              className="w-12 h-px bg-white/20 relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.div 
                className="absolute inset-0 bg-[#C8A96A]"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
