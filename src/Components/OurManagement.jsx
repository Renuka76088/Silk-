import React from "react";
import { ShieldCheck, Zap, Globe, Heart, Award, Layers } from "lucide-react";

export default function OurManagement() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#4A4A4A]">
      
      {/* --- Aesthetic Hero Section --- */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#F3E5D8] via-[#FFFBF5] to-[#E8D5C4] py-20 px-6 border-b border-[#EADBC8]">
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
     
          <h5 className="text-2xl text-[#6B6B6B] leading-relaxed  mx-auto font-light">
         Parekh Silk is administered and governed by the highly skilled, experienced and
qualified Management.
          </h5>
        </div>
      </div>


    </div>
  );
}
