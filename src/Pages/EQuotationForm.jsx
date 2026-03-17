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
          <h1 className="text-3xl font-bold tracking-tight">E-QUOTATION FORM</h1>
          <p className="text-sm text-[#F3E5D8] mt-1 font-medium">Parekh Textile Chambers - Official Estimate</p>
        </div>

        <form className="p-8 space-y-10">
          
          {/* Section 1: Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-800">Vendor Name</label>
              <input 
                type="text" 
                placeholder="Enter your business name" 
                // Border color ko matching soft bronze shade diya hai
                className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-800">Quotation Date</label>
              <input 
                type="date" 
                className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray-800">Client / Department Name</label>
            <input 
              type="text" 
              placeholder="Name of the person or department" 
              className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]"
            />
          </div>

          {/* Section 2: Items Table - Soft Silk Colors */}
          <div className="border-t border-[#F3E5D8] pt-8">
            <h2 className="text-xl font-bold mb-6 underline text-[#8B5E3C]">Itemized List</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#EADBC8]">
                {/* Soft cream background table header ke liye */}
                <thead className="bg-[#FAF9F6]">
                  <tr>
                    <th className="border border-[#EADBC8] p-3 text-left font-bold text-gray-700">Item Description</th>
                    <th className="border border-[#EADBC8] p-3 text-center font-bold w-24 text-gray-700">Qty</th>
                    <th className="border border-[#EADBC8] p-3 text-right font-bold w-40 text-gray-700">Rate (₹)</th>
                    <th className="border border-[#EADBC8] p-3 text-right font-bold w-40 text-gray-700">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#EADBC8] p-3">
                      <input type="text" placeholder="Enter item name" className="w-full outline-none text-lg bg-transparent" />
                    </td>
                    <td className="border border-[#EADBC8] p-3">
                      <input type="number" placeholder="0" className="w-full text-center outline-none text-lg bg-transparent" />
                    </td>
                    <td className="border border-[#EADBC8] p-3">
                      <input type="number" placeholder="0.00" className="w-full text-right outline-none text-lg bg-transparent" />
                    </td>
                    <td className="border border-[#EADBC8] p-3 text-right font-bold text-lg bg-[#FAF9F6] text-[#8B5E3C]">
                      ₹ 0.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Soft bronze-gold color button ke liye */}
            <button type="button" className="mt-4 flex items-center gap-2 text-[#B8860B] font-bold hover:text-[#8B5E3C] transition-colors">
              <Plus size={18} /> Add New Row
            </button>
          </div>

          {/* Section 3: Totals & Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#F3E5D8] pt-8">
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-800">Terms & Conditions</label>
              <textarea 
                rows="4" 
                placeholder="Validity, Payment Terms, Delivery etc." 
                className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none resize-none bg-[#FAF9F6]"
              ></textarea>
            </div>

            {/* Soft cream-gold background total section ke liye */}
            <div className="bg-[#FAF9F6] p-6 rounded-md border border-[#EADBC8] space-y-4">
              <div className="flex justify-between text-lg text-gray-700">
                <span>Subtotal:</span>
                <span className="font-bold text-gray-900">₹ 0.00</span>
              </div>
              <div className="flex justify-between text-lg text-gray-700">
                <span>Tax (GST):</span>
                <span className="font-bold text-gray-900">₹ 0.00</span>
              </div>
              {/* Main total in deep bronze silk color */}
              <div className="flex justify-between text-2xl font-black border-t-2 border-[#EADBC8] pt-4 text-[#8B5E3C]">
                <span>GRAND TOTAL:</span>
                <span>₹ 0.00</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t border-[#F3E5D8]">
            <button type="button" className="px-6 py-3 border-2 border-[#EADBC8] rounded-full text-lg font-bold hover:bg-[#FAF9F6] transition-all text-gray-700">
              Print / Save PDF
            </button>
            {/* Luxurious gold/bronze button */}
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