import React, { useState } from "react";
import { Send, CheckCircle, Calculator } from "lucide-react";
import { useForm } from "react-hook-form";
import { API_BASE_URL } from "../utils/api";
import { motion, AnimatePresence } from "framer-motion";

export default function EQuotationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch(`${API_BASE_URL}/quotation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteId: "ParekhSilk07",
          traderName: data.traderName,
          businessName: data.businessName,
          businessAddress: data.businessAddress,
          gstNo: data.gstNo || "",
          mobileNo: data.mobileNo,
          email: data.email,
          quotationType: data.quotationType
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Failed to request quotation. Please try again.');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-28 px-6 font-sans text-gray-900 relative">
      <div className="max-w-4xl mx-auto bg-white border border-[#EADBC8] shadow-2xl rounded-2xl overflow-hidden relative z-10">

        {/* Header - deep bronze/gold silk color */}
        <div className="bg-[#8B5E3C] p-10 text-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <h1 className="text-4xl font-black tracking-tighter leading-none">e-Quotation <span className="text-[#D4AF37] block text-sm mt-2 tracking-widest"></span></h1>
        </div>

        <div className="p-10">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 bg-[#FAF9F6] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-[#8B5E3C]" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-[#8B5E3C] mb-4">Quotation Sent</h3>
                <p className="text-gray-500 max-w-sm mx-auto text-sm leading-relaxed font-medium uppercase tracking-tight">
                  Your quotation request has been successfully generated and sent to our commercial desk. We will revert with pricing details soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                {errorMsg && (
                  <div className="p-4 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest border-l-4 border-red-500">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4 relative">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Name of the Trader *</label>
                    <input
                      type="text"
                      {...register("traderName", { required: true })}
                      placeholder="Full Name"
                      className="w-full border-b-2 border-[#EADBC8] p-3 text-xs font-bold uppercase tracking-widest focus:border-[#B8860B] outline-none bg-transparent"
                    />
                    {errors.traderName && <span className="absolute right-0 bottom-4 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>

                  <div className="space-y-4 relative">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Business Name *</label>
                    <input
                      type="text"
                      {...register("businessName", { required: true })}
                      placeholder="Company Title"
                      className="w-full border-b-2 border-[#EADBC8] p-3 text-xs font-bold uppercase tracking-widest focus:border-[#B8860B] outline-none bg-transparent"
                    />
                    {errors.businessName && <span className="absolute right-0 bottom-4 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>

                  <div className="md:col-span-2 space-y-4 relative">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Business Address with Pin Code *</label>
                    <input
                      type="text"
                      {...register("businessAddress", { required: true })}
                      placeholder="Full Address with PIN Code"
                      className="w-full border-b-2 border-[#EADBC8] p-3 text-xs font-bold uppercase tracking-widest focus:border-[#B8860B] outline-none bg-transparent"
                    />
                    {errors.businessAddress && <span className="absolute right-0 bottom-4 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>

                  <div className="space-y-4 relative">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">GST No.</label>
                    <input
                      type="text"
                      {...register("gstNo")}
                      placeholder="Optional"
                      className="w-full border-b-2 border-[#EADBC8] p-3 text-xs font-bold uppercase tracking-widest focus:border-[#B8860B] outline-none bg-transparent"
                    />
                  </div>

                  <div className="space-y-4 relative">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mobile No. *</label>
                    <input
                      type="tel"
                      {...register("mobileNo", { required: true })}
                      placeholder="+91"
                      className="w-full border-b-2 border-[#EADBC8] p-3 text-xs font-bold uppercase tracking-widest focus:border-[#B8860B] outline-none bg-transparent"
                    />
                    {errors.mobileNo && <span className="absolute right-0 bottom-4 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>

                  <div className="md:col-span-2 space-y-4 relative">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email id *</label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="commercial@email.com"
                      className="w-full border-b-2 border-[#EADBC8] p-3 text-xs font-bold uppercase tracking-widest focus:border-[#B8860B] outline-none bg-transparent"
                    />
                    {errors.email && <span className="absolute right-0 bottom-4 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>

                  <div className="md:col-span-2 space-y-4 relative">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Options</label>
                    <select {...register("quotationType", { required: true })} className="w-full border-b-2 border-[#EADBC8] p-3 text-xs font-bold uppercase tracking-widest focus:border-[#B8860B] outline-none bg-transparent appearance-none cursor-pointer">
                      <option value="">Select Option</option>
                      <option value="Quotation for Finished Silk Products">Quotation for Finished Silk Products</option>
                      <option value="Quotation for Raw Silk Products">Quotation for Raw Silk Products</option>
                      <option value="Particulars of the Products">Particulars of the Products</option>
                    </select>
                    {errors.quotationType && <span className="absolute right-0 bottom-4 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-6 pt-10 border-t border-[#F3E5D8]">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-5 bg-[#8B5E3C] hover:bg-[#1A1A1A] text-white rounded-md text-[11px] font-black transition-all flex items-center justify-center gap-4 shadow-xl uppercase tracking-[0.4em] disabled:opacity-50"
                  >
                    {loading ? "Generating Quote..." : "Submit"} <Calculator size={14} />
                  </button>
                  <div className="text-center">
                    <a href="mailto:trade-enquiry@parekhsilk.com" className="text-[10px] font-black text-[#B8860B] uppercase tracking-[0.3em] hover:text-[#8B5E3C] transition-colors pb-2 border-b-2 border-[#B8860B]/10">
                      trade-enquiry@parekhsilk.com
                    </a>
                  </div>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}