// Header.jsx
import React, { useState } from "react";
import { FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import { Menu, Search, ShoppingCart, Heart, User, X, LocationEdit } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
    { name: "PRODUCT PAGE", path: "/products" },
    {
      name: "PAGES",
      path: "#",
      dropdown: [
        "OUR MANAGEMENT",
        "TRADE ENQUIRY",
        "e-QUOTATION",
        "e-AUCTION",
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
    <>
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-2 text-xs md:text-sm bg-[#e9dede]">
        <div>++91 111111111</div>
        <div className="hidden md:block">
          HC PAREKH & ASSOCIATES - PAREKH SILK (SURAT, GUJRAT)
        </div>
        <div className="flex items-center gap-3">
          <FaInstagram className="text-pink-500 cursor-pointer" />
          <FaFacebook className="text-blue-500 cursor-pointer" />
          <FaYoutube className="text-red-500 cursor-pointer" />
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4 bg-white">

        {/* LEFT (Mobile Toggle) */}
        <div className="flex items-center md:hidden">
          <Menu
            size={22}
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer"
          />
        </div>

        {/* LEFT (Desktop Logo) */}
        <div className="hidden md:flex items-center">
          <Link to="/" className="z-[130] flex items-center no-underline">
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(113, 127, 224, 0.15) 0%, rgba(113, 127, 224, 0.05) 100%)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
              }}
              className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] border-2 border-[#C5A27D] rounded-xl flex items-center justify-center mr-3 shrink-0 transition-all duration-300 hover:scale-105"
            >
              <span className="text-[#C5A27D] font-black text-2xl md:text-3xl leading-none">P</span>
            </div>

            <div className="flex flex-col justify-center">
           <h1 className="flex items-center gap-x-1 text-xl md:text-2xl font-black tracking-tighter leading-none">
  <span className="text-[#4A4238]">PAREKH</span>
  <span className="text-[#C5A27D]">SILK</span>
</h1>
              <span className="text-[9px] md:text-[11px] font-bold tracking-[0.3em] text-[#8b8175] mt-1">
                SURAT • GJ
              </span>
            </div>
          </Link>
        </div>

        {/* CENTER (Mobile Logo) */}
        <div className="flex md:hidden justify-center flex-1">
          <Link to="/" className="z-[130] flex items-center no-underline">
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(113, 127, 224, 0.15) 0%, rgba(113, 127, 224, 0.05) 100%)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
              }}
              className="w-[38px] h-[38px] border-2 border-[#C5A27D] rounded-xl flex items-center justify-center mr-2"
            >
              <span className="text-[#C5A27D] font-black text-xl leading-none">P</span>
            </div>

            <span className="text-lg font-black">
              <span className="text-[#4A4238]">PAREKH</span>
              <span className="text-[#C5A27D]">SILK</span>
            </span>
          </Link>
        </div>

        {/* RIGHT (Get a Quote Button) */}
        <div className="flex items-center">
          <Link to="/page/trade-enquiry">
            <button className="bg-[#C5A27D] hover:bg-[#a8845f] text-white px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-semibold transition">
              Get a Quote
            </button>
          </Link>
        </div>

      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex bg-[#efe5df] py-3 px-6 justify-center items-center gap-6 lg:gap-9 text-sm font-medium  tracking-wide">
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

            {item.dropdown && (
              <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-xl rounded-md py-3 min-w-[220px] z-50 border border-gray-200">
                {item.dropdown.map((sub, i) => (
                  <Link
                    key={i}
                    to={`/page/${sub.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
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

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-[100] transform transition-transform duration-300 ${
        menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="flex justify-between items-center p-5 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <X size={28} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
        </div>

        <div className="p-5 space-y-5 overflow-y-auto h-[calc(100%-80px)]">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
              <Link to={item.path || "#"} className="font-medium block py-1" onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>

              {item.dropdown && (
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

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-[90] md:hidden">
        <a
          href="https://wa.me/918217771201"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 transition text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        >
          <FaWhatsapp size={26} />
        </a>
      </div>
    </>
  );
}
