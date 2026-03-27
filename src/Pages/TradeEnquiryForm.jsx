import React from "react";
import { Send, FileText, Briefcase, User, Mail, MapPin, Link as LinkIcon, Phone } from "lucide-react";

export default function TradeEnquiryForm() {
  return (
    <div className="min-h-screen bg-[#FCFBF7] py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] rounded-[2rem] overflow-hidden border border-[#EADBC8]">
        
        {/* Form Header */}
        <div className="p-10 text-brown relative">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <h2 className="text-4xl mb-2 font-bold">Trade <span className="font-bold">Enquiry</span></h2>
          <p className="text-balck/70 text-sm">Apply for Membership - Chamber of Textile</p>
        </div>

        <form className="p-10 space-y-8">
          
          {/* Section 1: Official Details */}
          <div>
            <h3 style={{fontSize:'20px'}} className="text-[#B8860B] text-xs font-black uppercase [0.1em] mb-6 flex items-center gap-2">
             Official Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label  style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">Authorized Official Name</label>
                <input type="text" placeholder="Name of Chamber Official" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label  style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">Chamber Code No.</label>
                <input type="text" placeholder="Enter Code Number" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm" />
              </div>
            </div>
          </div>

          <hr className="border-[#F3E5D8]" />

          {/* Section 2: Applicant Details */}
          <div>
            <h3  style={{fontSize:'20px'}} className="text-[#B8860B] text-xs font-black uppercase mb-6 flex items-center gap-2">
            Applicant & Business Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">Name of the Applicant</label>
                <input type="text" placeholder="Full Name" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">Title of the Textile Business</label>
                <input type="text" placeholder="Business / Firm Name" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">Business Address</label>
                <textarea rows="2" placeholder="Full Registered Address" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm resize-none"></textarea>
              </div>
              <div className="space-y-2">
                <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">Mobile No.</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">Email ID</label>
                <input type="email" placeholder="example@business.com" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">Website URL (if any)</label>
                <input type="url" placeholder="https://www.yourwebsite.com" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm" />
              </div>
            </div>
          </div>

          <hr className="border-[#F3E5D8]" />

          {/* Section 3: Business Classification */}
          <div>
            <h3 style={{fontSize:'20px'}} className="text-[#B8860B] text-xs font-black uppercase  mb-6 flex items-center gap-2">
     Classification & Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">Nature of Business</label>
                <select className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm appearance-none">
                  <option>Select Nature</option>
                  <option>Retailer</option>
                  <option>Wholesaler</option>
                  <option>Manufacturer</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="space-y-2">
                <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">Category of Business</label>
                <select className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm appearance-none">
                  <option>Select Category</option>
                  <option>Proprietorship</option>
                  <option>Partnership</option>
                  <option>LLP</option>
                  <option>Private Limited</option>
                  <option>Ltd.</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">Upload Documents (GST, MSME, Trade License, etc.)</label>
                <div className="border-2 border-dashed border-[#EADBC8] rounded-2xl p-6 text-center bg-[#FAF9F6] hover:bg-[#F3E5D8]/30 transition-all cursor-pointer">
                  <p className="text-xs text-gray-500">Click to upload or drag and drop your files (LLP, CIN, GST)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Undertaking */}
          <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#F3E5D8]">
            <h4 className="text-[13px] font-black text-[#1A1A1A] mb-3 uppercase tracking-wider underline underline-offset-4">Undertaking</h4>
            <div className="flex gap-4">
              <input type="checkbox" id="agree" className="mt-1 accent-[#B8860B]" />
              <label htmlFor="agree" className="text-[12px] leading-relaxed text-[#555] italic">
                "I have read the Terms & Conditions of subscription for the membership in the Chamber of Textile. 
                All the information provided by me and the documents uploaded thereof are true and authentic 
                to the best of my knowledge and belief."
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-6">
            <button type="button" className="px-8 py-3 rounded-full text-sm font-bold text-gray-500 hover:bg-gray-100 transition-all uppercase tracking-widest">
              Preview
            </button>
            <button type="submit" className="bg-[#8B5E3C] hover:bg-[#1A1A1A] text-white px-10 py-3 rounded-full text-sm font-bold shadow-lg shadow-[#8B5E3C]/20 transition-all flex items-center gap-2 uppercase tracking-widest">
              Submit Form <Send size={16} />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}