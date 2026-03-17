// HomePage.jsx
import React from "react";


export default function HomePage() {
  return (
  <div className="w-full font-sans text-gray-800 relative">
    

      {/* Hero Section – reduced top margin on mobile */}
      <div className="px-3 md:px-8 mt-1 md:mt-6">
        {/* Mobile Banner */}
        <div className="md:hidden relative">
          <img
            src="https://images.unsplash.com/photo-1620763050148-af058ab2fff0?w=600"
            className="w-full h-[280px] md:h-[320px] object-cover"
            alt="Silk fabric"
          />

          <div className="absolute inset-0 bg-[#e9d7c7]/75 flex flex-col justify-center px-5">
            <p className="text-xs tracking-widest mb-2">
              MANUFACTURERS & WHOLESALERS OF
            </p>
            <h1 className="text-2xl font-semibold mb-4">
              100% PURE <br /> SILK FABRICS
            </h1>
            <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm w-fit">
              Shop Now
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-5 items-stretch">
          <img
            src="https://images.unsplash.com/photo-1620763050148-af058ab2fff0?w=600"
            className="w-[180px] h-[320px] object-cover rounded"
            alt="Silk collection"
          />

          <div className="flex-1 bg-[#e9d7c7] py-16 px-10 text-center flex flex-col justify-center">
            <h1 className="text-4xl tracking-[6px] font-light mb-4">
              DESIGNER COLLECTION
            </h1>
            <p className="tracking-widest text-sm mb-6">
              DISCOVER THE NEW YOU
            </p>
            <button className="bg-[#d6bfa9] px-6 py-3 text-sm font-medium mx-auto">
              SHOP NOW
            </button>
          </div>

          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1619043518800-7f14be467dca?w=600"
              className="w-[180px] h-[320px] object-cover rounded"
              alt="Silk product 1"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1661962431511-32e4ebf7e5b0?w=600"
              className="w-[180px] h-[320px] object-cover rounded"
              alt="Silk product 2"
            />
          </div>
        </div>
      </div>

    </div>
  );
}