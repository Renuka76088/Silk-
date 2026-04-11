import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  // Stagger animation for the letters
  const logoText = "PAREKH";
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 bg-[#fdfaf6] flex items-center justify-center z-[9999] overflow-hidden"
    >
      {/* 1. ANIMATED TEXTURE BACKGROUND */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1619043518800-7f14be467dca?w=1200')",
          filter: "sepia(20%) contrast(1.1)",
        }}
      ></motion.div>

      {/* 2. PREMIUM OVERLAY LAYER */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#fdfaf6] via-transparent to-[#fdfaf6]/80"></div>

      {/* 3. CENTER CONTENT CONTAINER */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* TOP ORNAMENTAL LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="h-[1px] bg-[#C5A27D] mb-8"
        ></motion.div>

        {/* MAIN LOGO ANIMATION */}
        <div className="flex flex-col items-center overflow-hidden">
          <motion.div className="flex gap-x-2 md:gap-x-4 mb-2">
            {logoText.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-[#4A4238] font-serif"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.4em] text-[#C5A27D] font-serif"
          >
            SILK
          </motion.h2>
        </div>

        {/* 4. ELEVATED SUBTEXT */}
        <div className="mt-8 text-center overflow-hidden">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.6em" }}
            transition={{ delay: 1.5, duration: 1.2 }}
            className="text-[#8b8175] text-[10px] md:text-xs uppercase font-bold"
          >
            Surat • GJ • India
          </motion.p>
        </div>

        {/* BOTTOM ORNAMENTAL LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
          className="h-[1px] bg-[#C5A27D] mt-8"
        ></motion.div>
      </div>

      {/* 5. FLOATING PROGRESS INDICATOR (Minimalist) */}
      <div className="absolute bottom-20 w-48 h-[1px] bg-gray-200 overflow-hidden">
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#C5A27D] to-transparent"
        ></motion.div>
      </div>

      {/* 6. CORNER ACCENTS (Optional for that extra detail) */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.4 }} 
        transition={{ delay: 2 }}
        className="absolute top-10 left-10 border-l border-t border-[#C5A27D] w-10 h-10"
      />
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.4 }} 
        transition={{ delay: 2 }}
        className="absolute bottom-10 right-10 border-r border-b border-[#C5A27D] w-10 h-10"
      />
    </motion.div>
  );
}