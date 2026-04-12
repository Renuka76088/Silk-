import React, { useState } from "react";
import { Send, CheckCircle, Hammer } from "lucide-react";
import { useForm } from "react-hook-form";
import { API_BASE_URL } from "../utils/api";
import { motion, AnimatePresence } from "framer-motion";

export default function EAuctionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg('');

    const formData = new FormData();
    formData.append("siteId", "ParekhSilk07");
    formData.append("participantName", data.participantName);
    formData.append("legalBusinessName", data.legalBusinessName);
    formData.append("businessAddress", data.businessAddress);
    formData.append("gstNo", data.gstNo || "");
    formData.append("mobileNo", data.mobileNo);
    formData.append("email", data.email);

    if (data.gstCertificate && data.gstCertificate.length > 0) {
      formData.append("gstCertificate", data.gstCertificate[0]);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auction`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Failed to submit participation request.');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-28 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#8B5E3C] block mb-2">Liquidation Portal</span>
          <h1 className="text-3xl md:text-5xl font-black  tracking-tighter text-slate-900">e-Auction <span className="text-slate-400">Portal.</span></h1>
          <p className="text-slate-500 font-bold tracking-widest text-[10px] mt-4">( At presently, No e-Auction published )</p>
        </div>

        <div className="bg-white border border-slate-200 overflow-hidden shadow-2xl rounded-sm p-10 md:p-14">
          <div className="flex justify-between items-start mb-10 border-b border-slate-100 pb-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 leading-none">Participation <span className="text-[#8B5E3C] block text-[10px] mt-2 tracking-widest">REQUEST </span></h3>
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Registration Success</h3>
                <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed font-medium uppercase tracking-tight">
                  You have been successfully registered for upcoming silk e-auctions. Notifications will be sent to your registered email.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" encType="multipart/form-data">
                {errorMsg && (
                  <div className="p-4 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest border-l-4 border-red-500">
                    {errorMsg}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-[#8B5E3C] transition-all">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Name of the Participant *</label>
                    <input type="text" {...register("participantName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="Your Name" />
                    {errors.participantName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-[#8B5E3C] transition-all">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Legal Name of the Business *</label>
                    <input type="text" {...register("legalBusinessName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="Company Name" />
                    {errors.legalBusinessName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                </div>

                <div className="relative border-b border-slate-200 pb-2 focus-within:border-[#8B5E3C] transition-all">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Business Address with Pin code *</label>
                  <input type="text" {...register("businessAddress", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="Complete Address" />
                  {errors.businessAddress && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-[#8B5E3C] transition-all">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">GST No.</label>
                    <input type="text" {...register("gstNo")} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="Optional" />
                  </div>
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-[#8B5E3C] transition-all">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mobile No. *</label>
                    <input type="tel" {...register("mobileNo", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="+91" />
                    {errors.mobileNo && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-[#8B5E3C] transition-all">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email id *</label>
                    <input type="email" {...register("email", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="email@address" />
                    {errors.email && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                </div>

                <div className="relative pb-2 focus-within:border-[#8B5E3C] transition-all flex flex-col justify-end">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 leading-none">Upload GST Certificate</label>
                  <input type="file" {...register("gstCertificate")} className="w-full text-[10px] font-black uppercase text-slate-500 file:mr-4 file:py-2 file:px-6 file:rounded-md file:border-0 file:text-[10px] file:uppercase file:font-black file:tracking-widest file:bg-slate-900 file:text-white hover:file:bg-[#8B5E3C] cursor-pointer transition-all border border-slate-100 p-2" />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 text-white py-5 font-black uppercase text-[11px] tracking-[0.4em] hover:bg-[#8B5E3C] transition-all flex items-center justify-center gap-4 disabled:opacity-70 shadow-2xl"
                  >
                    {loading ? "Registering..." : "Submit"} <Hammer size={16} />
                  </button>
                  <div className="mt-8 text-center border-t border-slate-50 pt-8">
                    <a href="mailto:services@parekhsilk.com" className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] hover:text-[#8B5E3C] transition-colors pb-1 border-b border-blue-50">
                      services@parekhsilk.com
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