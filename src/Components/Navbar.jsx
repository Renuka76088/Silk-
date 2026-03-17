import React, { useState } from "react";
import { FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import { Menu, Search, ShoppingCart, Heart, User, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
    {
      name: "PRODUCT PAGE",
      path: "/products",
      dropdown: ["Silk & Its Products"],
    },
    {
      name: "PAGES",
      path: "#",
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
    <>
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
        <div className="md:hidden">
          <Menu size={22} onClick={() => setMenuOpen(true)} />
        </div>

        <div className="text-center flex-1 md:flex-none">
          <div className="text-lg md:text-2xl tracking-widest font-medium">
            PAREKH SILK
          </div>
          <div className="text-[10px] md:text-xs tracking-[2px]">
            THE FABRIC STORE
          </div>
        </div>

        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/3">
          <Search size={18} className="mr-2" />
          <input className="bg-transparent outline-none w-full text-sm" />
        </div>

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

      {/* Desktop Navbar */}
      <div className="hidden md:flex bg-[#efe5df] py-3 px-6 justify-center gap-6 lg:gap-9 text-sm uppercase">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group">
            <Link to={item.path}>{item.name}</Link>

            {item.dropdown && (
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1">
                {item.dropdown.map((sub, i) => (
                  <Link key={i} to="#" className="block px-4 py-2">
                    {sub}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between p-5 border-b">
          <span>Menu</span>
          <X onClick={() => setMenuOpen(false)} />
        </div>

        <div className="p-5 space-y-5">
          {menuItems.map((item, i) => (
            <div key={i}>
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
