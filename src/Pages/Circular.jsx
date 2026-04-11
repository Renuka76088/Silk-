// Circulars.jsx
import React from "react";

export default function Circular() {
  return (
    <div className=" font-sans text-gray-800 relative">

      {/* --- Silk Background --- */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/abstract-background-luxury-cloth-liquid-wave-wavy-folds-grunge-silk-texture-satin-velvet-material-luxurious-christmas-148049945.jpg')",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/luxurious-elegant-background-featuring-soft-cream-colored-silk-satin-fabric-material-beautifully-draped-folded-420411511.jpg')",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/white-silk-fabric-background-soft-waves-flowing-drapery-luxury-satin-cloth-texture-white-silk-fabric-background-soft-327039071.jpg')",
          }}
        ></div>

        <div className="absolute inset-0 bg-white/75"></div>
      </div>

      {/* --- Main Content --- */}
      <main className="relative pt-10  px-4 md:px-8 max-w-5xl mx-auto">

        {/* Empty State */}
        <div className="flex items-center justify-center ">
          <div className="bg-[#FAF9F6]/90 backdrop-blur-md border border-[#e8ded2] 
                          rounded-2xl shadow-xl px-8 py-12 md:px-12 text-center max-w-xl w-full">

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-[#8b5a2b] mb-4 tracking-tight">
              Circular
            </h2>

            {/* Highlight */}
            <p className="inline-block bg-[#f3e5d8] text-[#8b5a2b] px-6 py-2 rounded-full 
                          text-base md:text-lg font-medium mb-6 shadow-sm">
              ( No Circular, at present )
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              There are currently no circulars available. <br />
              Please check back later for official updates and notices.
            </p>

          </div>
        </div>

      </main>
    </div>
  );
}