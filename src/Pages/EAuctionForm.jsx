import React from "react";
import { Send, Gavel, Calendar, Clock, Landmark, ShieldCheck } from "lucide-react";

export default function EAuctionForm() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10 px-4 font-sans text-gray-900 relative">
      {/* Silk Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='even-odd'%3E%3Cg fill='%23B8860B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

      <div className="max-w-4xl mx-auto bg-white border border-[#EADBC8] shadow-lg rounded-2xl overflow-hidden relative z-10">
        
        {/* Header - Silk Bronze */}
        <div className="bg-[#8B5E3C] p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Gavel size={28} />
            <h1 className="text-3xl font-bold tracking-tight uppercase">E-Auction Registration</h1>
          </div>
          <p className="text-sm text-[#F3E5D8] font-medium">Parekh Textile Chambers - Inventory & Asset Auction Portal</p>
        </div>

        <form className="p-8 space-y-10">
          
          {/* Section 1: Item & Auction Details */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold border-b-2 border-[#F3E5D8] pb-2 text-[#8B5E3C]">Asset Information</h2>
            
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-800">Item / Asset Description</label>
              <textarea 
                rows="2" 
                placeholder="Ex: Lot of 500 Meters Pure Banarasi Silk Fabric (Grade A+)" 
                className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6] resize-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-gray-800">Auction Start Date</label>
                <div className="relative">
                  <input type="date" className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-gray-800">Auction Duration (Hours)</label>
                <input type="number" placeholder="Ex: 24" className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]" />
              </div>
            </div>
          </div>

          {/* Section 2: Pricing & Bidding Rules */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold border-b-2 border-[#F3E5D8] pb-2 text-[#8B5E3C]">Bidding Parameters</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-gray-800">Reserve Price (₹)</label>
                <input type="number" placeholder="Min. Price" className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg font-bold text-[#8B5E3C] focus:border-[#B8860B] outline-none bg-[#FAF9F6]" />
              </div>
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-gray-800">Increment Value (₹)</label>
                <input type="number" placeholder="Min. Raise" className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]" />
              </div>
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-gray-800">EMD Amount (₹)</label>
                <input type="number" placeholder="Security Deposit" className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none bg-[#FAF9F6]" />
              </div>
            </div>
          </div>

          {/* Section 3: Legal & Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#F3E5D8] pt-8">
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-800 text-flex items-center gap-2">
                <ShieldCheck size={20} className="text-[#B8860B]" /> Auction Terms
              </label>
              <textarea 
                rows="4" 
                placeholder="Enter rules for participation, payment deadlines, and delivery conditions..." 
                className="w-full border-2 border-[#EADBC8] rounded-md p-3 text-lg focus:border-[#B8860B] outline-none resize-none bg-[#FAF9F6]"
              ></textarea>
            </div>

            <div className="bg-[#FAF9F6] p-6 rounded-md border border-[#EADBC8] flex flex-col justify-center text-center">
              <Landmark size={48} className="mx-auto text-[#8B5E3C] mb-4 opacity-30" />
              <p className="text-sm text-gray-600 italic">
                All auctions under Parekh Textile Chambers follow the Standard Bidding Protocol. 
                Please ensure all bank details for EMD are verified.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t border-[#F3E5D8]">
            <button type="button" className="px-8 py-3 border-2 border-[#EADBC8] rounded-full text-lg font-bold hover:bg-[#FAF9F6] transition-all text-gray-700">
              Save Draft
            </button>
            <button type="submit" className="px-10 py-3 bg-[#B8860B] hover:bg-[#8B5E3C] text-white rounded-full text-lg font-bold transition-all flex items-center gap-2 shadow-md">
              Publish Auction <Send size={20} />
            </button>
          </div>

        </form>
      </div>
      
      {/* Footer Decoration */}
      <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-10 rounded-full opacity-50"></div>
    </div>
  );
}