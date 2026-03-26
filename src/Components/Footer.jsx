import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#fdfaf6] text-gray-800 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand / About */}
        <div>
          <Link to="/" className="z-[130] flex items-center no-underline">
  {/* 🟢 Premium "P" Box with Shadow & Gradient */}
  <div 
    style={{
      background: 'linear-gradient(135deg, rgba(113, 127, 224, 0.15) 0%, rgba(113, 127, 224, 0.05) 100%)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
    }}
    className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] border-2 border-[#C5A27D] rounded-xl flex items-center justify-center mr-3 shrink-0 transition-all duration-300 hover:scale-105"
  >
    <span className="text-[#C5A27D] font-black text-2xl md:text-3xl leading-none">P</span>
  </div>

  {/* 🟢 Text Section (Zero Space) */}
  <div className="flex flex-col justify-center">
    <h1 className="flex items-center text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">
      <span className="text-[#4A4238]">PAREKH</span>
      <span className="text-[#C5A27D]">SILK</span>
    </h1>
    <span className="text-[9px] md:text-[11px] font-bold tracking-[0.3em] text-[#8b8175] uppercase mt-1">
      SURAT • GJ
    </span>
  </div>
</Link>
          <p className="text-sm text-gray-700 mt-3">
            Bringing you the finest silk fabrics with elegance and style. Explore our designer collection and handcrafted embroidered fabrics.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4" style={{ color: "#d6bfa9" }}>Quick Links</h4>
  

<ul className="space-y-2 text-gray-700 text-sm">
  <li>
    <Link 
      to="/" 
      className="hover:text-[#b7ab85] cursor-pointer transition block py-1"
    >
      Home
    </Link>
  </li>
  
  <li>
    <Link
      to="/products" 
      className="hover:text-[#b7ab85] cursor-pointer transition block py-1"
    >
      Shop
    </Link>
  </li>
  
  <li>
    <Link 
      to="/about" 
      className="hover:text-[#b7ab85] cursor-pointer transition block py-1"
    >
      About Us
    </Link>
  </li>
  
  <li>
    <Link 
      to="/contact" 
      className="hover:text-[#b7ab85] cursor-pointer transition block py-1"
    >
      Contact
    </Link>
  </li>
  
  <li>
    <Link 
      to="/wholesale" 
      className="hover:text-[#b7ab85] font-semibold cursor-pointer transition block py-1"
    >
      Wholesale
    </Link>
  </li>
</ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4" style={{ color: "#d6bfa9" }}>Contact</h4>
          <p className="text-sm text-gray-700 mb-2">+91-1111111</p>
          <p className="text-sm text-gray-700 mb-2">parekhsilks@example.com</p>
          <p className="text-sm text-gray-700">Gujrat, India</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4" style={{ color: "#d6bfa9" }}>Follow Us</h4>
          <div className="flex items-center gap-4 text-gray-700">
            <FaInstagram size={20} className="hover:text-[#b7ab85] cursor-pointer transition" />
            <FaFacebook size={20} className="hover:text-[#b7ab85] cursor-pointer transition" />
            <FaYoutube size={20} className="hover:text-[#b7ab85] cursor-pointer transition" />
            <FaWhatsapp size={20} className="hover:text-[#b7ab85] cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8 py-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} PAREKH SILK. All rights reserved.
      </div>
    </footer>
  );
}