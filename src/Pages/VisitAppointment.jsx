import React, { useState } from "react";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { API_BASE_URL } from "../utils/api";

export default function VisitAppointment() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg('');

    const formData = new FormData();
    formData.append("siteId", "ParekhSilk07");
    formData.append("visitorName", data.visitorName);
    formData.append("businessName", data.businessName);
    formData.append("visitorAddress", data.visitorAddress);
    formData.append("mobileNo", data.mobileNo);
    formData.append("email", data.email);
    formData.append("proofType", data.proofType);
    formData.append("reasonForVisit", data.reasonForVisit);

    if (data.proofFile && data.proofFile.length > 0) {
      formData.append("proofFile", data.proofFile[0]);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/appointment`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Failed to submit appointment request.');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] py-32 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#8B5E3C] block mb-4">Silk Corporate Office</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">Visit with <br /><span className="text-slate-400">Appointment.</span></h1>
        </div>

        <div className="bg-white p-8 md:p-14 shadow-2xl border-t-8 border-[#8B5E3C] rounded-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-slate-100 pb-8 gap-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 leading-none">Book Appointment</h2>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-[#8B5E3C]" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest lowercase">appointment@parekhsilk.com</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-24 h-24 bg-[#FCFBF7] rounded-full flex items-center justify-center mb-8 border border-[#8B5E3C]/20 shadow-inner">
                  <CheckCircle size={48} className="text-[#8B5E3C]" />
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-6 leading-none">Request Sent Successfully</h3>
                <p className="text-slate-500 max-w-sm mx-auto text-[11px] font-bold uppercase tracking-widest leading-relaxed">
                  Our team will evaluate your visit request and send a confirmation to your registered email shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10" encType="multipart/form-data">
                {errorMsg && (
                  <div className="p-4 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest border-l-4 border-red-500">
                    {errorMsg}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative border-b-2 border-slate-100 pb-2 focus-within:border-[#8B5E3C] transition-all">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block leading-none">Name of the Visitor *</label>
                    <input type="text" {...register("visitorName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-black uppercase tracking-widest" placeholder="Your Full Name" />
                    {errors.visitorName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                  <div className="relative border-b-2 border-slate-100 pb-2 focus-within:border-[#8B5E3C] transition-all">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block leading-none">Name of the Business *</label>
                    <input type="text" {...register("businessName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-black uppercase tracking-widest" placeholder="Company Name" />
                    {errors.businessName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                </div>

                <div className="relative border-b-2 border-slate-100 pb-2 focus-within:border-[#8B5E3C] transition-all">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block leading-none">Visitor Address with Pin code *</label>
                  <input type="text" {...register("visitorAddress", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-black uppercase tracking-widest" placeholder="Complete Address including pincode" />
                  {errors.visitorAddress && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative border-b-2 border-slate-100 pb-2 focus-within:border-[#8B5E3C] transition-all">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block leading-none">Mobile No. *</label>
                    <input type="tel" {...register("mobileNo", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-black uppercase tracking-widest" placeholder="+91" />
                    {errors.mobileNo && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                  <div className="relative border-b-2 border-slate-100 pb-2 focus-within:border-[#8B5E3C] transition-all">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block leading-none">Email Id *</label>
                    <input type="email" {...register("email", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-black uppercase tracking-widest" placeholder="your@email.com" />
                    {errors.email && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative border-b-2 border-slate-100 pb-2 focus-within:border-[#8B5E3C] transition-all">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block leading-none">Option</label>
                    <select {...register("proofType", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-black uppercase tracking-widest appearance-none cursor-pointer">
                      <option value="">Select ID Proof</option>
                      <option value="Aadhaar Card">Aadhaar Card</option>
                      <option value="ECI Card">ECI Card</option>
                      <option value="DL">DL</option>
                    </select>
                    {errors.proofType && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                  </div>
                  <div className="relative pb-2 flex flex-col justify-end">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 leading-none">Upload Residential / Business Proof</label>
                    <input type="file" {...register("proofFile")} className="w-full text-[10px] font-black uppercase text-slate-400 file:mr-4 file:py-2 file:px-6 file:rounded-md file:border-0 file:text-[9px] file:uppercase file:font-black file:tracking-widest file:bg-slate-900 file:text-white hover:file:bg-[#8B5E3C] cursor-pointer transition-all border border-slate-100 p-2" />
                  </div>
                </div>

                <div className="relative border-b-2 border-slate-100 pb-2 focus-within:border-[#8B5E3C] transition-all">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block leading-none">Describe the reason for Visit *</label>
                  <textarea rows="3" {...register("reasonForVisit", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-black uppercase tracking-widest resize-none" placeholder="Provide details here..."></textarea>
                  {errors.reasonForVisit && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>

                <div className="pt-8 flex flex-col gap-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 text-white py-6 rounded-md font-black uppercase text-[12px] tracking-[0.5em] hover:bg-[#8B5E3C] transition-all disabled:opacity-70 shadow-2xl"
                  >
                    {loading ? "Requesting..." : "Submit"}
                  </button>
                  <div className="text-center">
                    <a href="mailto:appointment@parekhsilk.com" className="text-[10px] font-black text-[#B8860B] uppercase tracking-[0.3em] hover:text-[#8B5E3C] transition-colors pb-2 border-b-2 border-[#B8860B]/10">
                      appointment@parekhsilk.com
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