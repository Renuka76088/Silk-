import React from "react";
import { ShieldCheck } from "lucide-react";

export default function OurManagement() {
  return (
    <div className="bg-[#FAF9F6] flex items-center justify-center px-6 py-20">

      <div className="max-w-4xl w-full">

        {/* Card */}
        <div className="bg-gradient-to-br from-[#F3E5D8] via-[#FFFBF5] to-[#E8D5C4] 
                        border border-[#EADBC8] rounded-[2rem] shadow-xl p-10 md:p-14 text-center relative overflow-hidden">

          {/* Soft Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-2xl"></div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-full shadow-sm">
              <ShieldCheck className="text-[#D4AF37]" size={32} />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#4A4A4A] mb-6">
            Our Management
          </h2>

          {/* Content */}
          <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed font-medium max-w-2xl mx-auto">
            Parekh Silk is administered and governed by the highly skilled,
            experienced and qualified Management.
          </p>
        </div>
      </div>
    </div>
  );
}