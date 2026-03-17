import React from "react";
import { ShieldCheck, Zap, Globe, Heart, Award, Layers } from "lucide-react";

export default function OurManagement() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#4A4A4A]">
      
      {/* --- Aesthetic Hero Section --- */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#F3E5D8] via-[#FFFBF5] to-[#E8D5C4] py-20 px-6 border-b border-[#EADBC8]">
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[12px] tracking-[0.4em] text-[#B8860B] font-bold uppercase mb-4 block">
            The Art of Excellence
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-[#2D2D2D] tracking-tight mb-6">
            How <span className="font-semibold text-[#8B5E3C]">Parekh Silk</span> Manages Quality
          </h1>
          <p className="text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto font-light">
            Our management process is crafted with the same precision as our silk. 
            A perfect blend of tradition and modern excellence.
          </p>
        </div>
      </div>

      {/* --- Management Pillars --- */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Pillar 1 */}
          <div className="group">
            <div className="w-14 h-14 bg-white shadow-sm border border-[#F3E5D8] flex items-center justify-center rounded-2xl mb-6 group-hover:bg-[#8B5E3C] transition-all duration-500">
              <ShieldCheck className="text-[#B8860B] group-hover:text-white transition-colors" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#2D2D2D]">Quality Curation</h3>
            <p className="text-[15px] leading-relaxed text-[#7A7A7A] font-light">
              Every thread undergoes a 12-point quality check. We select only those silk fabrics that meet our standards of luster and durability.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group">
            <div className="w-14 h-14 bg-white shadow-sm border border-[#F3E5D8] flex items-center justify-center rounded-2xl mb-6 group-hover:bg-[#8B5E3C] transition-all duration-500">
              <Layers className="text-[#B8860B] group-hover:text-white transition-colors" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#2D2D2D]">Inventory Mastery</h3>
            <p className="text-[15px] leading-relaxed text-[#7A7A7A] font-light">
              Our warehouse is temperature-controlled to maintain silk’s natural moisture. Smart tagging ensures every meter of fabric is accurately tracked.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group">
            <div className="w-14 h-14 bg-white shadow-sm border border-[#F3E5D8] flex items-center justify-center rounded-2xl mb-6 group-hover:bg-[#8B5E3C] transition-all duration-500">
              <Zap className="text-[#B8860B] group-hover:text-white transition-colors" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#2D2D2D]">Direct Distribution</h3>
            <p className="text-[15px] leading-relaxed text-[#7A7A7A] font-light">
              We eliminate middlemen and connect directly with weavers. This helps maintain fair pricing while ensuring artisans receive their rightful value.
            </p>
          </div>

        </div>
      </div>

      {/* --- Management Flow --- */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-white border border-[#F3E5D8] rounded-[2rem] p-8 md:p-16 shadow-sm relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#F3E5D8] opacity-40 rounded-tl-full"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-[#2D2D2D] mb-6">
                Ethical <span className="font-semibold underline decoration-[#D4AF37] decoration-2 underline-offset-8">Sourcing</span>
              </h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full border border-[#B8860B] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#B8860B] rounded-full"></div>
                  </div>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    <strong className="text-[#2D2D2D]">Pure Origins:</strong> Silk is sourced directly from authentic clusters in Karnataka and Banaras.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full border border-[#B8860B] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#B8860B] rounded-full"></div>
                  </div>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    <strong className="text-[#2D2D2D]">Transparent Pricing:</strong> Our management ensures pricing remains fair, competitive, and fully transparent.
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#FAF9F6] p-8 rounded-2xl border border-dashed border-[#D4AF37]/40 flex flex-col items-center text-center">
              <Award className="text-[#B8860B] mb-4" size={40} />
              <h4 className="font-medium text-[#2D2D2D] mb-2">Parekh Promise</h4>
              <p className="text-xs text-[#9A9A9A] leading-relaxed">
                Our core philosophy is simple—"Customer trust is built through product quality." We guarantee 100% authenticity in every delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center pb-12">
        <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-6"></div>
        <p className="text-[11px] tracking-[0.2em] text-[#B8860B] uppercase font-bold">
          Parekh Silk Management System &copy; 2026
        </p>
      </footer>
    </div>
  );
}
