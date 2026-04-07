// CareerPage.jsx
import React from "react";


export default function CareerPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
  

      {/* Silk-like Background with Overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Main silk texture layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url('https://thumbs.dreamstime.com/b/golden-silk-fabric-texture-background-gold-cream-elegant-luxury-satin-cloth-wave-prestigious-award-luxurious-abstract-283717403.jpg')`,
            backgroundBlendMode: "soft-light",
          }}
        ></div>

        {/* Softer cream silk overlay for readability */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('https://thumbs.dreamstime.com/b/luxurious-elegant-background-featuring-soft-cream-colored-silk-satin-fabric-material-beautifully-draped-folded-420411511.jpg')`,
            backgroundBlendMode: "overlay",
          }}
        ></div>

        {/* Gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf5]/95 via-[#f9f5f0]/90 to-[#f5ede3]/85"></div>
      </div>

      {/* Main Content */}
<main className="relative pt-10 pb-16 px-4 md:px-8 max-w-6xl mx-auto">

  {/* Page Header (Same) */}
  <div className="text-center mb-12 md:mb-16">
    <h1 className="text-4xl md:text-5xl font-light tracking-[5px] uppercase text-[#8b5a2b] mb-4">
      Join Our Team
    </h1>
    <p className="text-lg md:text-xl text-gray-700 tracking-wide max-w-3xl mx-auto">
      Explore opportunities to grow with HC Parekh & Associates – where tradition meets excellence in the world of pure silk.
    </p>
    <div className="w-20 h-1 bg-[#d6bfa9] mx-auto mt-6 rounded-full"></div>
  </div>

  {/* Empty State */}
  <div className="flex flex-col items-center justify-center text-center py-28 bg-[#FAF9F6] border border-[#e9dede]/60 rounded-xl shadow-sm">

    <h2 className="text-2xl md:text-3xl font-semibold text-[#8b5a2b] mb-4">
      At present, No Vacancy
    </h2>

    <p className="text-gray-600 text-lg max-w-md">
      There are currently no job openings available. 
      Please revisit this page for future career opportunities.
    </p>

  </div>

  {/* Optional Closing Note (Same Feel) */}


</main>

  
    </div>
  );
}