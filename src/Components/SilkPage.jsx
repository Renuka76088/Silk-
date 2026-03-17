import React from "react";
import { Search, ChevronDown } from "lucide-react";

const products = [
  { id: 1, name: "DUPIONI SILK FABRIC", count: "37 PRODUCTS", img: "https://images.unsplash.com/photo-1619043518800-7f14be467dca?w=600&auto=format&fit=crop&q=60" },
  { id: 2, name: "RAW SILK CHECKS FABRIC", count: "4 PRODUCTS", img: "https://images.unsplash.com/photo-1620763050148-af058ab2fff0?w=600&auto=format&fit=crop&q=60" },
  { id: 3, name: "SEMI RAW SILK FABRIC", count: "14 PRODUCTS", img: "https://images.unsplash.com/photo-1617055407123-3d7130c1f940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2lsa3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 4, name: "TISSUE RAW SILK FABRIC", count: "16 PRODUCTS", img: "https://plus.unsplash.com/premium_photo-1661962431511-32e4ebf7e5b0?w=600&auto=format&fit=crop&q=60" },
  {
    id: 5,
    category: "Dupioni Silk Fabric",
    name: "Black Raw Silk Fabric",
    price: "₹899.00",
    img: "https://images.unsplash.com/photo-1637750586228-179a1a7aef84?w=600&auto=format&fit=crop&q=60",
    isProduct: true
  },
  // ... you can remove duplicates or keep as many as you want
];

export default function SilkPage() {
  return (
    <div className="bg-[#f2f4f7] min-h-screen font-sans">
      {/* 1. Header Banner */}
      <div className="bg-[#fcd4d4] py-10 md:py-12 px-5 md:px-6 text-center">
        <h1 className="text-xl md:text-[22px] font-bold tracking-tight text-black mb-3 uppercase">
          RAW SILK FABRIC
        </h1>
        <p className="text-[13px] md:text-[14px] text-black max-w-5xl mx-auto leading-relaxed font-normal">
          Raw silk or Dupioni silk fabrics from Fabenzo are luxurious fabrics that are made with 100% silk fibers.
          Buy raw silk fabrics at the best rates from Fabenzo for your fashion projects or home decor.
          Kindly contact us at +91 8217771201 to order as per your needs.
        </p>
      </div>

      {/* 2. Results Counter & Search Bar */}
      <div className="max-w-[1350px] mx-auto mt-6 md:mt-8 px-4">
        <p className="text-center text-[#4a4a4a] text-[14px] md:text-[15px] mb-4">
          Showing 1–40 of 78 results
        </p>

        <div className="flex border border-[#e0e0e0] bg-white shadow-sm overflow-hidden rounded">
          <div className="bg-[#e9e9e9] p-3 md:p-4 flex items-center justify-center border-r border-[#e0e0e0]">
            <Search size={18} className="text-[#333]" />
          </div>
          <input
            type="text"
            placeholder="Search for Products..."
            className="flex-grow px-3 md:px-4 py-2.5 md:py-3 text-[13px] md:text-[14px] outline-none placeholder:text-gray-400 text-gray-700"
          />
          <div className="flex items-center px-4 md:px-6 border-l border-[#e0e0e0] cursor-pointer min-w-[160px] md:min-w-[200px] justify-between">
            <span className="text-[13px] md:text-[14px] text-[#333]">Raw Silk Fabric</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* 3. Product Grid - Compact cards */}
  <div className="max-w-[1350px] mx-auto px-4 py-6 md:py-8">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
    
    {products.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
      >

        {/* ✅ CATEGORY CARD (Full Image Cover) */}
        {!item.isProduct && (
          <div className="relative h-[290px] md:h-[350px] overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[88%] bg-white/95 py-2 px-3 text-center shadow-sm rounded">
              <h3 className="text-[11px] font-bold text-black">
                {item.name}
              </h3>
              <p className="text-[10px] text-gray-600 mt-0.5">
                {item.count}
              </p>
            </div>
          </div>
        )}

        {/* ✅ PRODUCT CARD (same as before) */}
        {item.isProduct && (
          <>
            <div className="relative h-[200px] overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-3 flex flex-col flex-grow">
              <p className="text-[11px] text-gray-500 mb-1">
                {item.category}
              </p>

              <h3 className="text-[13px] font-medium text-gray-800 mb-1 line-clamp-2">
                {item.name}
              </h3>

              <p className="text-[14px] font-bold text-black mb-2">
                {item.price}
              </p>

              <button className="mt-auto bg-[#ff7ba1] hover:bg-[#ff6290] text-white text-[12px] py-2 rounded">
                Add To Cart
              </button>
            </div>
          </>
        )}

      </div>
    ))}

  </div>
</div>

    </div>
  );
}