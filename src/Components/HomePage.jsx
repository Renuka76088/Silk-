import React, { useState } from "react";
import { FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import { Menu, Search, ShoppingCart, Heart, User, X } from "lucide-react";
import { Link } from "react-router-dom"; // ← added (required for <Link>)

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
const menuItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "CONTACT US", path: "/contact" },
  {
    name: "PRODUCT PAGE",
    path: "/products",
   
  },
  {
    name: "PAGES",
    path: "#",           // ← no real link, acts as dropdown parent
    dropdown: [
      "OUR MANAGEMENT",
      "TRADE ENQUIRY",
      "E-QUOTATION",
      "E-AUCTION",
      "TENDER & CONTRACT",
      "CAREER",
      "CIRCULAR",
      "BLOG",
      "CUSTOMER REVIEW",
    ],
  },
  { name: "VISIT APPOINTMENT", path: "/appointment" },
  { name: "MEDIA GALLERY", path: "/media" },
  { name: "TEXTILE ASSOCIATES", path: "/associates" },
];
  return (
    <div className="w-full font-sans text-gray-800 relative min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-2 text-xs md:text-sm bg-[#e9dede]">
        <div>+91-8217771201</div>

        <div className="hidden md:block">
          HC PAREKH & ASSOCIATES - PAREKH SILK.
        </div>

        <div className="flex items-center gap-3">
          <FaInstagram className="text-pink-500 cursor-pointer" />
          <FaFacebook className="text-blue-500 cursor-pointer" />
          <FaYoutube className="text-red-500 cursor-pointer" />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Menu
            size={22}
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer"
          />
        </div>

        {/* Logo */}
        <div className="text-center flex-1 md:flex-none">
          <div className="text-lg md:text-2xl tracking-widest font-medium">
            PAREKH SILK
          </div>
          <div className="text-[10px] md:text-xs tracking-[2px]">
            THE FABRIC STORE
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/3">
          <Search size={18} className="mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 md:gap-5">
          <Search className="md:hidden" size={20} />
          <Heart className="hidden md:block" size={20} />

          <div className="relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 text-[10px] bg-white border px-1">
              0
            </span>
          </div>

          <User className="hidden md:block" size={20} />
        </div>
      </div>

      {/* Desktop Navbar – improved layout */}
      {/* Desktop Navbar */}
<div className="hidden md:flex bg-[#efe5df] py-3 px-6 justify-center items-center gap-6 lg:gap-9 text-sm font-medium uppercase tracking-wide">
  {menuItems.map((item, index) => (
    <div key={index} className="relative group">
      <Link
        to={item.path}
        className={`hover:text-[#8b5a2b] transition-colors duration-200 whitespace-nowrap ${
          item.dropdown ? "cursor-default" : ""
        }`}
      >
        {item.name}
      </Link>

      {item.dropdown && item.dropdown.length > 0 && (
        <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-xl rounded-md py-3 min-w-[220px] z-50 border border-gray-200">
          {item.dropdown.map((sub, i) => (
            <Link
              key={i}
              to={`/page/${sub.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} // ← you can customize paths
              className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#8b5a2b] transition"
            >
              {sub}
            </Link>
          ))}
        </div>
      )}
    </div>
  ))}
</div>
      {/* 📱 Mobile Full Screen Menu – fixed dropdown rendering */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-[100] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <X
            size={28}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          />
        </div>

        <div className="p-5 space-y-5 overflow-y-auto h-[calc(100%-80px)]">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
              <Link
                to={item.path || "#"}
                className="font-medium block py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>

              {item.dropdown && item.dropdown.length > 0 && (
                <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  {item.dropdown.map((sub, i) => (
                    <div key={i} className="cursor-pointer hover:text-[#8b5a2b]">
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-3 md:px-8 mt-2 md:mt-6">
        {/* Mobile Banner */}
        <div className="md:hidden relative">
          <img
            src="https://images.unsplash.com/photo-1620763050148-af058ab2fff0?w=600"
            className="w-full h-[300px] object-cover"
            alt="Silk fabric"
          />

          <div className="absolute inset-0 bg-[#e9d7c7]/80 flex flex-col justify-center px-4">
            <p className="text-xs tracking-widest mb-2">
              MANUFACTURERS & WHOLESALERS OF
            </p>
            <h1 className="text-2xl font-semibold mb-4">
              100% PURE <br /> SILK FABRICS
            </h1>
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm w-fit">
              Shop Now
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-4 items-center">
          <img
            src="https://images.unsplash.com/photo-1620763050148-af058ab2fff0?w=600"
            className="w-[180px] h-[320px] object-cover rounded"
            alt="Silk collection"
          />

          <div className="flex-1 bg-[#e9d7c7] py-16 px-10 text-center">
            <h1 className="text-4xl tracking-[6px] font-light mb-4">
              DESIGNER COLLECTION
            </h1>
            <p className="tracking-widest text-sm mb-6">
              DISCOVER THE NEW YOU
            </p>
            <button className="bg-[#d6bfa9] px-6 py-2 text-sm font-medium">
              SHOP NOW
            </button>
          </div>

          <div className="flex gap-3">
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

      {/* WhatsApp Floating Button – high z-index */}
      <div className="fixed bottom-6 right-6 z-[90]">
        <a
          href="https://wa.me/918217771201"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 transition text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        >
          <FaWhatsapp size={26} />
        </a>
      </div>
    </div>
  );
}