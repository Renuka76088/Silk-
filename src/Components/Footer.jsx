import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fdfaf6] text-gray-800 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand / About */}
        <div>
          <h3 className="text-2xl font-semibold mb-4" style={{ color: "#d6bfa9" }}>
            PAREKH SILK
          </h3>
          <p className="text-sm text-gray-700">
            Bringing you the finest silk fabrics with elegance and style. Explore our designer collection and handcrafted embroidered fabrics.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4" style={{ color: "#d6bfa9" }}>Quick Links</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="hover:text-[#b7ab85] cursor-pointer transition">Home</li>
            <li className="hover:text-[#b7ab85] cursor-pointer transition">Shop</li>
            <li className="hover:text-[#b7ab85] cursor-pointer transition">About Us</li>
            <li className="hover:text-[#b7ab85] cursor-pointer transition">Contact</li>
            <li className="hover:text-[#b7ab85] cursor-pointer transition">Wholesale</li>
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