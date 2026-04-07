import React, {useState} from "react";
import { Send, FileText, Briefcase, User, Mail, MapPin, Link as LinkIcon, Phone } from "lucide-react";

export default function TradeEnquiryForm() {
  const [fileName, setFileName] = useState("");
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
          
         {/* Section: Trade Details */}
<div>
  <h3 style={{fontSize:'20px'}} className="text-[#B8860B] text-xs font-black uppercase mb-6 flex items-center gap-2">
    Trade Details
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Name of Trader */}
    <div className="space-y-2">
      <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">
        Name of the Trader
      </label>
      <input type="text" placeholder="Enter Name" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm" />
    </div>

    {/* Business Name */}
    <div className="space-y-2">
      <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">
        Business Name
      </label>
      <input type="text" placeholder="Business Name" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm" />
    </div>

    {/* Address */}
    <div className="md:col-span-2 space-y-2">
      <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">
        Business Address with Pin Code
      </label>
      <textarea rows="2" placeholder="Full Address with PIN Code" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm resize-none"></textarea>
    </div>

    {/* GST No */}
    <div className="space-y-2">
      <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">
        GST No.
      </label>
      <input type="text" placeholder="Enter GST Number" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm" />
    </div>

    {/* Mobile */}
    <div className="space-y-2">
      <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">
        Mobile No.
      </label>
      <input type="tel" placeholder="+91 00000 00000" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm" />
    </div>

    {/* Email */}
    <div className="md:col-span-2 space-y-2">
      <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">
        Email ID
      </label>
      <input type="email" placeholder="example@email.com" className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm" />
    </div>

    {/* Options Dropdown */}
    <div className="md:col-span-2 space-y-2">
      <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">
        Options
      </label>
      <select className="w-full bg-[#FAF9F6] border border-[#EADBC8] rounded-xl px-4 py-3 outline-none focus:border-[#B8860B] transition-all text-sm appearance-none">
        <option>Select Option</option>
        <option>For Bulk Purchase</option>
        <option>For Retail Purchase</option>
        <option>For Job Work Contract</option>
        <option>Others</option>
      </select>
    </div>

    {/* Upload GST */}
 {/* Upload GST */}
<div className="md:col-span-2 space-y-2">
  <label style={{fontSize:'17px'}} className="text-[13px] font-bold text-gray-700">
    Upload GST Certificate
  </label>

  <label className="border-2 border-dashed border-[#EADBC8] rounded-2xl p-6 text-center bg-[#FAF9F6] hover:bg-[#F3E5D8]/30 transition-all cursor-pointer block">
    
    <input 
      type="file" 
      accept=".pdf,.jpg,.jpeg,.png"
      className="hidden"
      onChange={(e) => console.log(e.target.files[0])} 
    />

    <p className="text-xs text-gray-500">
      Click to upload or drag and drop GST Certificate
    </p>
  </label>
</div>

{/* Submit Button */}
<div className="md:col-span-2 flex justify-end pt-4">
  <button 
    type="submit" 
    className="bg-[#8B5E3C] hover:bg-[#1A1A1A] text-white px-10 py-3 rounded-full text-sm font-bold shadow-lg shadow-[#8B5E3C]/20 transition-all uppercase tracking-widest flex items-center gap-2"
  >
    Submit Form
  </button>
</div>

  </div>
</div>

        </form>
      </div>
    </div>
  );
}