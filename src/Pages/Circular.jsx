// Circulars.jsx
import React from "react";


// Sample circulars data (aap real list ya API se replace kar dena)
const circulars = [
  {
    id: 1,
    title: "Circular No. 12/2025-26 – Festival Season Discount Policy",
    date: "March 10, 2026",
    description:
      "Special discount structure for wholesalers and retailers during upcoming festive season. Valid from April 1 to June 30, 2026.",
    pdfLink: "#", // Replace with actual PDF URL
  },
  {
    id: 2,
    title: "Circular No. 11/2025-26 – Updated Payment Terms for New Clients",
    date: "February 25, 2026",
    description:
      "Revised credit policy and advance payment requirements for first-time buyers. Effective immediately.",
    pdfLink: "#",
  },
  {
    id: 3,
    title: "Circular No. 10/2025-26 – Raw Material Price Revision Notice",
    date: "January 15, 2026",
    description:
      "Due to fluctuations in silk cocoon prices, minor revision in base rates for pure silk fabrics. Details inside.",
    pdfLink: "#",
  },
  {
    id: 4,
    title: "Circular No. 09/2025-26 – New Product Launch: Designer Tussar Collection",
    date: "December 5, 2025",
    description:
      "Introducing exclusive tussar silk range with natural textures and eco-friendly dyes. Order samples now.",
    pdfLink: "#",
  },
];

export default function Circular() {
  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Header */}
   

      {/* White Silk Texture Background – Multiple Layers for Depth */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Main smooth white satin layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/abstract-background-luxury-cloth-liquid-wave-wavy-folds-grunge-silk-texture-satin-velvet-material-luxurious-christmas-148049945.jpg')",
            backgroundBlendMode: "soft-light",
          }}
        ></div>

        {/* Ivory draped silk overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/luxurious-elegant-background-featuring-soft-cream-colored-silk-satin-fabric-material-beautifully-draped-folded-420411511.jpg')",
            backgroundBlendMode: "overlay",
          }}
        ></div>

        {/* Gentle wave/crinkle layer for extra silk feel */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "https://thumbs.dreamstime.com/b/white-silk-fabric-background-soft-waves-flowing-drapery-luxury-satin-cloth-texture-white-silk-fabric-background-soft-327039071.jpg",
            backgroundPosition: "center top",
          }}
        ></div>

        {/* Light white tint to keep background bright & readable */}
        <div className="absolute inset-0 bg-white/75"></div>
      </div>

{/* Main Content */}
<main className="relative pt-10 pb-20 px-4 md:px-8 max-w-5xl mx-auto">

  {/* Page Title (Same) */}
  <div className="text-center mb-12 md:mb-16">
    <h1 className="text-4xl md:text-5xl font-light tracking-[5px] uppercase text-[#8b5a2b] mb-4">
      Circulars
    </h1>
    <p className="text-lg md:text-xl text-gray-700 tracking-wide">
      Official Notices & Updates from HC Parekh & Associates – Parekh Silk
    </p>
    <div className="w-24 h-1 bg-[#d6bfa9] mx-auto mt-6 rounded-full"></div>
  </div>

  {/* Empty State */}
  <div className="flex flex-col items-center justify-center text-center py-24 bg-[#FAF9F6] border border-[#f0e9e0]/60 rounded-xl shadow-sm">

    <h2 className="text-2xl md:text-3xl font-semibold text-[#8b5a2b] mb-4">
      At present, No circular
    </h2>

    <p className="text-gray-600 text-lg max-w-md">
      There are currently no circulars available. 
      Please check back later for official updates and notices.
    </p>

  </div>



</main>

    </div>
  );
}