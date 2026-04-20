import React from "react";
import { Scissors, Box, CreditCard, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function TenderContractsUI() {
  return (
    <div className=" bg-[#FAF9F6] py-12  px-6 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto">

        {/* Header Same */}
        <div className="border-b-4 border-[#8B5E3C] pb-6 mb-10">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                EXPRESSION OF INTEREST
              </h1>
              <h2 className="text-xl font-bold text-[#8B5E3C] mt-1">
                CORPORATE TENDERS | Textile Sector
              </h2>
            </div>
          
          </div>
        </div>

        {/* Empty State Message */}
        <div className="flex flex-col items-center justify-center text-center py-24 bg-[#FAF9F6] border border-[#EADBC8] rounded-lg shadow-sm">

          <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4">
            At present, No EOI published
          </h2>

          <p className="text-gray-600 text-lg max-w-md">
            There are currently no active Expressions of Interest available.
            Please check back later for upcoming opportunities.
          </p>

        </div>

      </div>
    </div>
  );
}