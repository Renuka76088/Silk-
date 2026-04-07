import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 bg-[#f8f3ed] flex items-center justify-center z-[9999] overflow-hidden"
    >
      {/* 1. SILK FABRIC BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 transition-scale duration-[5000ms] ease-out scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1619043518800-7f14be467dca?w=600&auto=format&fit=crop&q=60')",
          backgroundBlendMode: "multiply",
        }}
      ></div>

      {/* 2. OVERLAY GRADIENT (Premium Feel ke liye) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f3ed]/60 via-transparent to-[#f8f3ed]/60"></div>

      <div className="text-center w-full px-4 relative z-10">
        
        {/* 3. GOLD LINE ANIMATION (Red ki jagah Gold) */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "200px", opacity: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="h-[2px] bg-[#C5A27D] mx-auto mb-10 rounded-full shadow-[0_0_15px_rgba(197,162,125,0.5)]"
        ></motion.div>

        {/* 4. MAIN HEADING (Matching Navbar Colors) */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-x-3 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter"
          >
            <span className="text-[#4A4238]">PAREKH</span>
            <span className="text-[#C5A27D]">SILK</span>
          </motion.h1>
        </div>

        {/* 5. SUBTEXT (Surat, India - Elegant Style) */}
        <div className="max-w-[1000px] mx-auto overflow-hidden">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="text-[#8b8175] text-xs md:text-sm uppercase font-bold text-center mt-4"
          >
            Surat • GJ, India
          </motion.p>
        </div>

      </div>

      {/* 6. BOTTOM DECORATIVE ELEMENT */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 text-[10px] tracking-[0.3em] text-[#C5A27D] font-bold uppercase opacity-60"
      >
        Excellence in Every Thread
      </motion.div>
    </motion.div>
  );
}