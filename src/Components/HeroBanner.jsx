import React from "react";

export default function HeroBanner() {
  return (
    <div className="px-3 md:px-8 mt-2 md:mt-6">
      
      {/* Mobile */}
      <div className="md:hidden relative">
        <img
          src="https://images.unsplash.com/photo-1620763050148-af058ab2fff0?w=600"
          className="w-full h-[300px] object-cover"
        />

        <div className="absolute inset-0 bg-[#e9d7c7]/80 flex flex-col justify-center px-4">
          <h1 className="text-2xl font-semibold">100% PURE SILK</h1>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-4 items-center">
        <img
          src="https://images.unsplash.com/photo-1620763050148-af058ab2fff0?w=600"
          className="w-[180px] h-[320px] object-cover"
        />

        <div className="flex-1 bg-[#e9d7c7] py-16 px-10 text-center">
          <h1 className="text-4xl">DESIGNER COLLECTION</h1>
        </div>
      </div>

    </div>
  );
}
