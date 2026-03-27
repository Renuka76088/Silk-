import React from "react";

const products = [
  {
    id: 1,
    title: "Pink Embroidered Velvet Fabric",
    price: "",
    img: "https://images.unsplash.com/photo-1620763050148-af058ab2fff0?w=600", // Replace with exact image url
  },
  {
    id: 2,
    title: "Dark Green Embroidered Velvet Fabric",
    price: "",
    img: "https://images.unsplash.com/photo-1619043518800-7f14be467dca?w=600",
  },
  {
    id: 3,
    title: "Maroon Embroidered Velvet Fabric",
    price: "",
    img: "https://plus.unsplash.com/premium_photo-1769025877486-9d22b7734b0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Dark Wine Embroidered Velvet Fabric",
    price: "",
    img: "https://images.unsplash.com/photo-1637750586228-179a1a7aef84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbGt8ZW58MHx8MHx8fDA%3D",
  },
];

export default function NewArrivals() {
  return (
    <div className="bg-[#f9f2f6] py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-3xl font-extrabold mb-2">New Arrivals</h2>
        <div className="w-16 mx-auto h-1 bg-pink-500 mb-12 rounded"></div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map(({ id, title, price, img }) => (
            <div key={id} className="flex flex-col items-center text-center">
              <div className="relative group w-full max-w-[280px] cursor-pointer">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-[280px] object-cover rounded-md"
                  draggable={false}
                />
                {/* Wishlist text on hover */}
           
              </div>

              <h3 className="mt-4 font-semibold text-sm">{title}</h3>
              <p className="text-gray-700 mt-1 mb-6">{price}</p>

           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}