import React from "react";
import { Send, Plus, Trash2 } from "lucide-react";

export default function EQuotationForm() {
  return (
    // Naya background color aur subtle silk texture pattern
    <div className="min-h-screen bg-[#FAF9F6] py-10 px-4 font-sans text-gray-900 relative">
      {/* Subtle Silk Pattern Blur */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='even-odd'%3E%3Cg fill='%23B8860B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

      <div className="max-w-4xl mx-auto bg-white border border-[#EADBC8] shadow-lg rounded-2xl overflow-hidden relative z-10">
        
        {/* Header - deep bronze/gold silk color */}
        <div className="bg-[#8B5E3C] p-8 text-white">
          <h1 className="text-3xl font-bold tracking-tight">e-QUOTATION FORM</h1>
          <p className="text-sm text-[#F3E5D8] mt-1 font-medium">Parekh Textile Chambers - Official Estimate</p>
        </div>

     <form className="p-8 space-y-10">

  {/* Section 1: Basic Info (Updated Fields) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Name of Trader */}
    <div className="space-y-4">
      <label className="block text-lg font-semibold text-gray-800">
        Name of the Trader
      </label>
      <input 
        type="text" 
        placeholder="Enter Name" 
        className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]"
      />
    </div>

    {/* Business Name */}
    <div className="space-y-4">
      <label className="block text-lg font-semibold text-gray-800">
        Business Name
      </label>
      <input 
        type="text" 
        placeholder="Enter Business Name" 
        className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]"
      />
    </div>

    {/* Address */}
    <div className="md:col-span-2 space-y-4">
      <label className="block text-lg font-semibold text-gray-800">
        Business Address with Pin Code
      </label>
      <textarea 
        rows="2"
        placeholder="Full Address with PIN Code"
        className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]"
      />
    </div>

    {/* GST */}
    <div className="space-y-4">
      <label className="block text-lg font-semibold text-gray-800">
        GST No.
      </label>
      <input 
        type="text" 
        placeholder="Enter GST Number" 
        className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]"
      />
    </div>

    {/* Mobile */}
    <div className="space-y-4">
      <label className="block text-lg font-semibold text-gray-800">
        Mobile No.
      </label>
      <input 
        type="tel" 
        placeholder="+91 00000 00000" 
        className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]"
      />
    </div>

    {/* Email */}
    <div className="md:col-span-2 space-y-4">
      <label className="block text-lg font-semibold text-gray-800">
        Email ID
      </label>
      <input 
        type="email" 
        placeholder="example@email.com" 
        className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]"
      />
    </div>

    {/* Options Dropdown */}
    <div className="md:col-span-2 space-y-4">
      <label className="block text-lg font-semibold text-gray-800">
        Options
      </label>
      <select className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]">
        <option>Select Option</option>
        <option>Quotation for Finished Silk Products</option>
        <option>Quotation for Raw Silk Products</option>
        <option>Particulars of the Products</option>
      </select>
    </div>

  </div>

  
  {/* Buttons */}
  <div className="flex justify-end gap-4 pt-6 border-t border-[#F3E5D8]">
    <button type="button" className="px-6 py-3 border-2 border-[#EADBC8] rounded-full text-lg font-bold hover:bg-[#FAF9F6] transition-all text-gray-700">
      Print / Save PDF
    </button>

    <button type="submit" className="px-10 py-3 bg-[#B8860B] hover:bg-[#8B5E3C] text-white rounded-full text-lg font-bold transition-all flex items-center gap-2 shadow-md hover:shadow-lg">
      Submit Quotation <Send size={20} />
    </button>
  </div>

</form>
      </div>
      {/* Small subtle gold footer line */}
      <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-10 rounded-full"></div>
    </div>
  );
}