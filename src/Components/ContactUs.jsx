import React from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"; // Optional: Icons ke liye lucide-react use karein

export default function ContactUs() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16 bg-[#fbf8f6] font-sans">
      <h2 className="text-center text-4xl font-semibold mb-2 tracking-wide text-gray-900">
        Contact Us
      </h2>
      <p className="text-center uppercase tracking-widest mb-16 text-sm" style={{ color: "#d6bfa9" }}>
        We’d love to hear from you
      </p>

      <div className="flex flex-col md:flex-row gap-12 items-stretch">
        {/* Left Section: Map */}
        <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-[#eee] min-h-[400px]">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709471136!2d72.73989466035933!3d21.15934029924376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712820000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0 h-full w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right Section: Contact Details */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#f0ece8]">

          {/* Contact Number */}
          <div className="flex items-start gap-5">
            <div className="p-3 bg-[#fdfaf7] rounded-full">
              <Phone size={24} strokeWidth={1.5} className="text-[#a88d76]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Call Us</h4>
              <p className="text-xl font-medium text-gray-800">6353778329</p>
            </div>
          </div>

          {/* Trade Enquiry */}
          <div className="flex items-start gap-5">
            <div className="p-3 bg-[#fdfaf7] rounded-full">
              <MessageSquare size={24} strokeWidth={1.5} className="text-[#a88d76]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Trade Enquiry</h4>
              <a href="mailto:trade-enquiry@parekhsilk.com" className="text-lg text-gray-700 hover:text-[#d6bfa9] transition-colors">
                trade-enquiry@parekhsilk.com
              </a>
            </div>
          </div>

          {/* Customer Care */}
          <div className="flex items-start gap-5">
            <div className="p-3 bg-[#fdfaf7] rounded-full">
              <Mail size={24} strokeWidth={1.5} className="text-[#a88d76]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Customer Care</h4>
              <a href="mailto:customer-care@parekhsilk.com" className="text-lg text-gray-700 hover:text-[#d6bfa9] transition-colors">
                customer-care@parekhsilk.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-5 pt-4 border-t border-gray-100">
            <div className="p-3 bg-[#fdfaf7] rounded-full">
              <MapPin size={24} strokeWidth={1.5} className="text-[#a88d76]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Location</h4>
              <p className="text-lg font-semibold text-gray-800 tracking-wide">
                SURAT, GJ, INDIA
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}