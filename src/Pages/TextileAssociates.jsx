// TextileAssociates.jsx
import React from "react";


export default function TextileAssociates() {
  return (
    <div className="min-h-screen font-sans text-gray-800 relative overflow-hidden">
      

      {/* Luxurious Silk Background – Creamy/Ivory tones only */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Main soft satin silk layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/luxurious-creamy-white-silk-fabric-soft-folds-waves-close-up-smooth-elegant-off-satin-gentle-flowing-drapes-395648821.jpg')",
            backgroundBlendMode: "soft-light",
          }}
        ></div>

        {/* Additional draped overlay for depth */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/elegant-draped-creamy-white-silk-fabric-texture-background-soft-luxurious-creamy-white-silk-fabric-elegant-drapes-folds-383151300.jpg')",
            backgroundBlendMode: "overlay",
          }}
        ></div>

        {/* Gentle light tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#fdfaf5]/75 to-white/70"></div>
      </div>

      {/* Main Content */}
      <main className="relative pt-10 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-[5px] uppercase text-[#8b5a2b] mb-4">
            Textile Associates
          </h1>
          <p className="text-lg md:text-xl text-gray-700 tracking-wide max-w-4xl mx-auto">
            Our network of trusted associates across India – bringing the finest silk, linen, rayon, and polyfabrics to you.
          </p>
          <div className="w-24 h-1 bg-[#d6bfa9] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Map Section */}
        {/* India Map Section */}
<div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-xl border border-[#f0e9e0]/60 overflow-hidden p-6 md:p-10 mb-12">
  <h2 className="text-2xl md:text-3xl font-medium text-[#8b5a2b] mb-8 text-center">
    Our Associates Across India
  </h2>

  <div className="w-full max-w-5xl mx-auto aspect-[4/5] sm:aspect-[5/6] md:aspect-[3/4] lg:aspect-[4/3] relative rounded-lg overflow-hidden border border-[#e9dede]/50 shadow-inner bg-[#fdfaf5]/30">
    {/* Background map image – fully contained, no crop */}
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/India-map-en.svg/1280px-India-map-en.svg.png" // High-res Wikimedia outline (clear & transparent-friendly)
      // OR your own: "https://img.freepik.com/premium-vector/map-name-india-orange-yellow-vector-illustration_968957-10807.jpg?w=1060"
      alt="India map with associates"
      className="absolute inset-0 w-full h-full object-contain opacity-80" // object-contain = full visible, no cut
    />

    {/* Light overlay for readability of pins (subtle) */}
    <div className="absolute inset-0 bg-white/20"></div>

    {/* SVG layer for pins – viewBox matched to common 1280x~1500 India map ratio */}
    <svg
      viewBox="0 0 1280 1500" // Matches Wikimedia high-res aspect (~0.85 ratio)
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Surat (Gujarat - West) */}
      <g transform="translate(320, 620)">
        <circle cx="0" cy="0" r="14" fill="#c41e3a" stroke="#fff" strokeWidth="3.5" />
        <text x="20" y="6" fill="#222" fontSize="15" fontWeight="500">Surat Hub</text>
      </g>

      {/* Mumbai (Maharashtra) */}
      <g transform="translate(380, 740)">
        <circle cx="0" cy="0" r="14" fill="#c41e3a" stroke="#fff" strokeWidth="3.5" />
        <text x="20" y="6" fill="#222" fontSize="15" fontWeight="500">Mumbai Silk</text>
      </g>

      {/* Indore (Madhya Pradesh - Central) */}
      <g transform="translate(480, 680)">
        <circle cx="0" cy="0" r="14" fill="#c41e3a" stroke="#fff" strokeWidth="3.5" />
        <text x="20" y="6" fill="#222" fontSize="15" fontWeight="500">Indore Rayon</text>
      </g>

      {/* Bengaluru (Karnataka - South) */}
      <g transform="translate(620, 960)">
        <circle cx="0" cy="0" r="14" fill="#c41e3a" stroke="#fff" strokeWidth="3.5" />
        <text x="20" y="6" fill="#222" fontSize="15" fontWeight="500">Bengaluru e-Trade</text>
      </g>

      {/* Chennai (Tamil Nadu) */}
      <g transform="translate(680, 1100)">
        <circle cx="0" cy="0" r="14" fill="#c41e3a" stroke="#fff" strokeWidth="3.5" />
        <text x="20" y="6" fill="#222" fontSize="15" fontWeight="500">Chennai Polyfabrics</text>
      </g>

      {/* Kochi (Kerala) */}
      <g transform="translate(540, 1180)">
        <circle cx="0" cy="0" r="14" fill="#c41e3a" stroke="#fff" strokeWidth="3.5" />
        <text x="20" y="6" fill="#222" fontSize="15" fontWeight="500">Kochi Chamber</text>
      </g>

      {/* Kolkata (West Bengal - East) */}
      <g transform="translate(880, 620)">
        <circle cx="0" cy="0" r="14" fill="#c41e3a" stroke="#fff" strokeWidth="3.5" />
        <text x="20" y="6" fill="#222" fontSize="15" fontWeight="500">Kolkata Linen</text>
      </g>

      {/* Central - HC Parekh (around Indore/Bhopal area) */}
      <g transform="translate(580, 740)">
        <circle cx="0" cy="0" r="18" fill="#8b5a2b" stroke="#fff" strokeWidth="4.5" />
        <text x="28" y="8" fill="#8b5a2b" fontSize="17" fontWeight="bold">HC Parekh</text>
      </g>

      {/* Scale legend bottom-right */}
      <g transform="translate(1000, 1350)">
        <line x1="0" y1="0" x2="180" y2="0" stroke="#444" strokeWidth="4" />
        <text x="90" y="35" fill="#444" fontSize="16" textAnchor="middle">300 km</text>
        <text x="90" y="60" fill="#444" fontSize="16" textAnchor="middle">200 mi</text>
      </g>
    </svg>
  </div>

  <p className="text-center text-sm text-gray-600 mt-6 italic">
    Our introduced associates and key textile hubs across India
  </p>
</div>

        {/* Additional Info / CTA */}
        <div className="text-center text-gray-700">
          <p className="text-lg mb-4">
            Partner with us to explore premium silk, rayon, linen, and more from trusted networks nationwide.
          </p>
          <a
            href="mailto:hemant.parekh2012@gmail.com"
            className="bg-[#8b5a2b] text-white px-8 py-4 rounded-md font-medium hover:bg-[#a16a3a] transition inline-flex items-center"
          >
            Get in Touch
            <span className="ml-2">→</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-8 text-center text-sm text-gray-500 border-t border-[#e9dede]/50 bg-white/40 backdrop-blur-sm">
        © {new Date().getFullYear()} HC Parekh & Associates – Parekh Silk | The Fabric Store
      </footer>
    </div>
  );
}