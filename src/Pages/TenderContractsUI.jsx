import React from "react";
import { Scissors, Box, CreditCard, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function TenderContractsUI() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] py-12 px-6 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Header - Industrial Consultant Style */}
        <div className="border-b-4 border-[#8B5E3C] pb-6 mb-10">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">EXPRESSION OF INTEREST</h1>
              <h2 className="text-xl font-bold text-[#8B5E3C] mt-1">CORPORATE TENDERS | Textile Sector</h2>
            </div>
            <div className="text-right">
              <p className="font-bold text-sm text-gray-500">HC Parekh & Associates</p>
              <p className="text-xs text-gray-400">Leading Industrial Consultant Since 2007</p>
            </div>
          </div>
        </div>

        {/* Main Invite Text */}
        <div className="mb-10 text-lg leading-relaxed text-gray-700">
          Sealed Tenders are invited from the reputed and registered **Tailoring Agencies** for the work as detailed below under the **Rate Contract**.
        </div>

        {/* Technical Details Table */}
        <div className="bg-white border border-[#EADBC8] shadow-sm rounded-lg overflow-hidden mb-10">
          <div className="bg-[#8B5E3C] px-6 py-3 text-white font-bold text-lg uppercase tracking-wider">
            Work Specifications
          </div>
          <table className="w-full border-collapse">
            <tbody className="divide-y divide-gray-100">
              <tr className="flex flex-col md:flex-row">
                <td className="md:w-1/3 p-4 bg-[#FAF9F6] font-bold text-gray-700 border-r border-gray-100">Name of Work</td>
                <td className="md:w-2/3 p-4">Double Bedsheets, Pillowcover Stitching, Packing</td>
              </tr>
              <tr className="flex flex-col md:flex-row">
                <td className="md:w-1/3 p-4 bg-[#FAF9F6] font-bold text-gray-700 border-r border-gray-100">Quantity</td>
                <td className="md:w-2/3 p-4">30,000 Sets per EOI <span className="text-sm text-gray-500">(1 Set = 1 Double Bedsheet + 2 Pillowcovers)</span></td>
              </tr>
              <tr className="flex flex-col md:flex-row">
                <td className="md:w-1/3 p-4 bg-[#FAF9F6] font-bold text-gray-700 border-r border-gray-100">Tenure</td>
                <td className="md:w-2/3 p-4 font-semibold">01 Year</td>
              </tr>
              <tr className="flex flex-col md:flex-row">
                <td className="md:w-1/3 p-4 bg-[#FAF9F6] font-bold text-gray-700 border-r border-gray-100">Fabric Issued</td>
                <td className="md:w-2/3 p-4 italic">Pure Fine Cotton, Printed, 144 TC and above (Supplied to Agency)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Sizes & Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-bold text-[#8B5E3C] border-b border-[#EADBC8] pb-2">
              <Scissors size={18} /> Dimensions & Sizes
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>Double Bedsheets:</span> <b>90” x 100”</b></li>
              <li className="flex justify-between"><span>Pillowcover:</span> <b>18” x 24”</b></li>
              <li className="flex justify-between"><span>Inner Lid:</span> <b>6”</b></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-bold text-[#8B5E3C] border-b border-[#EADBC8] pb-2">
              <CheckCircle size={18} /> Quality Standards
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between"><span>Stitching:</span> <b>Double lined / Zigzag</b></li>
              <li className="flex justify-between"><span>Thread:</span> <b>Moon Brand or Equivalent</b></li>
              <li className="flex justify-between"><span>Packing:</span> <b>3-Ply Laminated Box</b></li>
            </ul>
          </div>
        </div>

        {/* Commercial Terms Box */}
        <div className="bg-[#F3E5D8]/30 border-l-4 border-[#8B5E3C] p-6 mb-10">
          <h3 className="flex items-center gap-2 font-bold text-[#8B5E3C] mb-4">
            <CreditCard size={18} /> Commercial Terms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-bold mb-1">Transportation:</p>
              <p className="text-gray-600">Company bears upto Transporters. Local Transport by Tailoring Agency.</p>
            </div>
            <div>
              <p className="font-bold mb-1">Payment Terms:</p>
              <p className="text-gray-600 underline">50% Advance with each W.O. | 50% on Inspection and L.R.</p>
            </div>
          </div>
        </div>

        {/* Important Dates & Documents */}
        <div className="space-y-6 mb-12">
          <h3 className="flex items-center gap-2 font-bold text-gray-800 uppercase tracking-widest text-sm">
            <Calendar size={18} /> Important Event Schedule
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white border border-gray-200 rounded">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Issuance Start</p>
              <p className="font-bold text-sm">--</p>
            </div>
            <div className="p-3 bg-white border border-gray-200 rounded">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Last Date Obt.</p>
              <p className="font-bold text-sm">--</p>
            </div>
            <div className="p-3 bg-white border border-gray-200 rounded">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Bid Submission</p>
              <p className="font-bold text-sm text-red-600">--</p>
            </div>
            <div className="p-3 bg-white border border-gray-200 rounded">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Bid Opening</p>
              <p className="font-bold text-sm">--</p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center border-t border-gray-200 pt-8 space-y-4">
          <p className="text-sm text-gray-500 italic">
            Tender Documents can be obtained <b>In-person</b> on payment of prescribed fee (Non-refundable).
          </p>
          <div className="flex justify-center gap-8 text-xs font-bold text-[#8B5E3C] uppercase tracking-tighter">
            <span>Our Trade Invitation</span>
            <span>Our Social Services</span>
            <span>Donations</span>
          </div>
        </div>

      </div>
    </div>
  );
}