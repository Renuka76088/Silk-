import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

export default function TradeEnquiryForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg('');

    const formData = new FormData();
    formData.append("siteId", "ParekhSilk07");
    formData.append("traderName", data.traderName);
    formData.append("businessName", data.businessName);
    formData.append("businessAddress", data.businessAddress);
    formData.append("gstNo", data.gstNo || "");
    formData.append("mobileNo", data.mobileNo);
    formData.append("email", data.email);
    formData.append("enquiryType", data.enquiryType);

    if (data.gstCertificate && data.gstCertificate.length > 0) {
      formData.append("gstCertificate", data.gstCertificate[0]);
    }

    try {
      const response = await fetch("http://localhost:5000/api/trade-enquiry", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Failed to send enquiry. Please try again.');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] py-28 px-6 font-sans selection:bg-[#B8860B]/20">
      <div className="max-w-4xl mx-auto bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-[2rem] overflow-hidden border border-[#EADBC8]">
        
        {/* Form Header */}
        <div className="p-10 bg-[#8B5E3C] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <h2 className="text-4xl mb-2 font-black uppercase tracking-tighter">Trade <span className="text-[#F3E5D8]">Enquiry</span></h2>
          <p className="text-[#F3E5D8]/80 text-sm font-bold uppercase tracking-widest leading-none">Membership Application (e-Form)</p>
        </div>

        <div className="p-10">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 bg-[#FAF9F6] rounded-full flex items-center justify-center mb-6 border-2 border-[#B8860B]/20">
                  <CheckCircle size={40} className="text-[#B8860B]" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-[#8B5E3C] mb-4">Inquiry Received</h3>
                <p className="text-gray-500 max-w-sm mx-auto text-sm leading-relaxed font-medium uppercase tracking-tight">
                  Thank you! Your trade inquiry has been successfully submitted. Our silk commercial team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" encType="multipart/form-data">
                {errorMsg && (
                  <div className="p-4 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest border-l-4 border-red-500 mb-6">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <h3 className="text-[#B8860B] text-[10px] font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                    <span className="w-10 h-[1px] bg-[#B8860B]/30"></span> Trade Identification
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2 relative">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Name of the Trader *</label>
                      <input 
                        type="text" 
                        {...register("traderName", { required: true })}
                        placeholder="Full Name" 
                        className="w-full bg-[#FAF9F6] border-b-2 border-[#EADBC8] px-0 py-3 outline-none focus:border-[#B8860B] transition-all text-xs font-bold uppercase tracking-widest placeholder:text-gray-200" 
                      />
                      {errors.traderName && <span className="absolute right-0 bottom-3 text-[8px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                    </div>

                    <div className="space-y-2 relative">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Business Name *</label>
                      <input 
                        type="text" 
                        {...register("businessName", { required: true })}
                        placeholder="Company Title" 
                        className="w-full bg-[#FAF9F6] border-b-2 border-[#EADBC8] px-0 py-3 outline-none focus:border-[#B8860B] transition-all text-xs font-bold uppercase tracking-widest placeholder:text-gray-200" 
                      />
                      {errors.businessName && <span className="absolute right-0 bottom-3 text-[8px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                    </div>

                    <div className="md:col-span-2 space-y-2 relative">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Business Address with Pin code *</label>
                      <input 
                        type="text"
                        {...register("businessAddress", { required: true })}
                        placeholder="Complete industrial address with PIN" 
                        className="w-full bg-[#FAF9F6] border-b-2 border-[#EADBC8] px-0 py-3 outline-none focus:border-[#B8860B] transition-all text-xs font-bold uppercase tracking-widest placeholder:text-gray-200" 
                      />
                      {errors.businessAddress && <span className="absolute right-0 bottom-3 text-[8px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                    </div>

                    <div className="space-y-2 relative">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">GST No.</label>
                      <input 
                        type="text" 
                        {...register("gstNo")}
                        placeholder="Optional" 
                        className="w-full bg-[#FAF9F6] border-b-2 border-[#EADBC8] px-0 py-3 outline-none focus:border-[#B8860B] transition-all text-xs font-bold uppercase tracking-widest placeholder:text-gray-200" 
                      />
                    </div>

                    <div className="space-y-2 relative">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mobile No. *</label>
                      <input 
                        type="tel" 
                        {...register("mobileNo", { required: true })}
                        placeholder="+91" 
                        className="w-full bg-[#FAF9F6] border-b-2 border-[#EADBC8] px-0 py-3 outline-none focus:border-[#B8860B] transition-all text-xs font-bold uppercase tracking-widest placeholder:text-gray-200" 
                      />
                      {errors.mobileNo && <span className="absolute right-0 bottom-3 text-[8px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                    </div>

                    <div className="md:col-span-2 space-y-2 relative">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email id *</label>
                      <input 
                        type="email" 
                        {...register("email", { required: true })}
                        placeholder="commercial@email.com" 
                        className="w-full bg-[#FAF9F6] border-b-2 border-[#EADBC8] px-0 py-3 outline-none focus:border-[#B8860B] transition-all text-xs font-bold uppercase tracking-widest placeholder:text-gray-200" 
                      />
                      {errors.email && <span className="absolute right-0 bottom-3 text-[8px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                    </div>

                    <div className="md:col-span-2 space-y-2 relative">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Options (Roll-down mode) *</label>
                      <select 
                        {...register("enquiryType", { required: true })}
                        className="w-full bg-[#FAF9F6] border-b-2 border-[#EADBC8] px-0 py-3 outline-none focus:border-[#B8860B] transition-all text-xs font-bold uppercase tracking-widest appearance-none cursor-pointer"
                      >
                        <option value="">Select Option</option>
                        <option value="For Bulk Purchase">For Bulk Purchase</option>
                        <option value="For Retail Purchase">For Retail Purchase</option>
                        <option value="For Job Work Contract">For Job Work Contract</option>
                        <option value="Others">Others</option>
                      </select>
                      {errors.enquiryType && <span className="absolute right-0 bottom-3 text-[8px] text-red-500 font-bold uppercase tracking-widest">Required</span>}
                    </div>

                    <div className="md:col-span-2 space-y-4 pt-4">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Upload GST Certificate</label>
                      <div className="relative group">
                        <input 
                          type="file" 
                          {...register("gstCertificate")}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="w-full text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 file:mr-6 file:py-3 file:px-8 file:rounded-md file:border-0 file:text-[10px] file:uppercase file:font-black file:tracking-[0.2em] file:bg-[#8B5E3C] file:text-[#F3E5D8] group-hover:file:bg-[#1A1A1A] transition-all cursor-pointer" 
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2 pt-10 border-t border-[#FAF9F6]">
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-[#8B5E3C] hover:bg-[#1A1A1A] text-white py-5 rounded-md text-[11px] font-black shadow-2xl transition-all uppercase tracking-[0.4em] flex items-center justify-center gap-4 disabled:opacity-50"
                      >
                        {loading ? "Processing..." : "Submit"} <Send size={14} className={loading ? "animate-pulse" : ""} />
                      </button>
                      <div className="mt-8 text-center">
                        <a href="mailto:trade-enquiry@parekhsilk.com" className="text-[10px] font-black text-[#B8860B] uppercase tracking-[0.3em] hover:text-[#8B5E3C] transition-colors pb-2 border-b-2 border-[#B8860B]/10">
                          trade-enquiry@parekhsilk.com
                        </a>
                      </div>
                    </div>
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