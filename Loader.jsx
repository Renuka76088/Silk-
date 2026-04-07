import React from "react";
import { motion } from "framer-motion";

export default function Loader({ onFinished }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-[#020b1c] flex items-center justify-center z-[9999]"
    >
      <div className="text-center w-full px-4">
        
        {/* 1. LINE ANIMATION (Pehle line load hogi) */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 1, ease: "circOut" }}
          className="h-[4px] bg-red-600 mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"
        ></motion.div>

        {/* 2. MAIN HEADING (Line ke baad text reveal) */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-white font-extrabold uppercase tracking-tight
                       text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
          >
          PAREKH SILK
          </motion.h1>
        </div>

        {/* 3. SUBTEXT (Right side se slide in) */}
        <div className="mt-4 max-w-[900px] mx-auto overflow-hidden">
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-white text-sm md:text-lg tracking-[0.3em] font-mono text-right border-r-4 border-red-600 pr-4"
          >
            Surat, India
          </motion.p>
        </div>

      </div>
    </motion.div>
  );
}