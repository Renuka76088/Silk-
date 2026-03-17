import React from "react";
import { Mail, Briefcase, MapPin, GraduationCap, Users, Globe, FileText, CheckCircle, ChevronRight } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 relative">
      {/* Subtle Silk Pattern Overlay (Very Light) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0c50 0 50 100 100 100V0H0z' fill='%23000' fill-rule='even-odd'/%3E%3C/svg%3E')" }}></div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-20">
          <h1 className="text-5xl font-black tracking-tighter text-gray-900 uppercase">Join Our <span className="text-blue-600">Team</span></h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="text-xl text-gray-500 mt-6 font-medium">Explore opportunities to grow with HC Parekh & Associates</p>
        </header>

        <div className="grid grid-cols-1 gap-16">
          
          {/* 1. HR Manager Opening (Corporate Style) */}
          <section className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
              <div>
                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Management | Full Time</span>
                <h2 className="text-4xl font-bold mt-4 text-gray-900">HR Manager</h2>
                <div className="flex flex-wrap gap-6 mt-4 text-gray-600 font-medium">
                  <span className="flex items-center gap-2"><MapPin size={18} /> Bengaluru, Karnataka</span>
                  <span className="flex items-center gap-2 font-bold text-gray-900 text-xl">CTC: ₹ 5.25 L.P.A.</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Apply Via Email</p>
                <p className="text-blue-600 font-bold text-lg">hemant.parekh2012@gmail.com</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2 border-b-2 border-gray-100 pb-2">
                  <GraduationCap className="text-blue-600" /> Essential Criteria
                </h3>
                <ul className="space-y-4 text-gray-700 leading-relaxed">
                  <li className="flex gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                    <span>MBA (HR) or Graduate with <b>8+ years net experience</b> in Recruitment.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                    <span>Proficiency in English, Hindi, and Regional language equally.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                    <span>Acquainted with official Tour & Travel within India.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2 border-b-2 border-gray-100 pb-2">
                  <Briefcase className="text-blue-600" /> Job Responsibilities
                </h3>
                <ul className="grid grid-cols-1 gap-4 text-gray-600">
                  <li className="bg-white p-3 rounded-lg border border-gray-100 italic">End-to-End Recruitment & Payroll Management.</li>
                  <li className="bg-white p-3 rounded-lg border border-gray-100 italic">Labour Law Compliance (EPF, ESI, Relieving).</li>
                  <li className="bg-white p-3 rounded-lg border border-gray-100 italic">Plan & coordinate Campus Interviews in Colleges.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Social Media Influencer (Campaign Style) */}
          <section className="bg-white border-2 border-gray-900 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <div className="text-center md:text-left">
                <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Campaign | Brand Promotion</span>
                <h2 className="text-4xl font-black mt-4 uppercase">Social Media <span className="text-blue-600">Influencer</span></h2>
                <p className="text-xl text-gray-500 mt-2 font-medium">Long-term Online Business Advertisements</p>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold">In</div>
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold">Fb</div>
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold">Ig</div>
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold">Yt</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h3 className="text-sm font-black uppercase text-gray-400 mb-6 tracking-widest">Target Sectors</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Textile & Garments', 'Pulp & Paper', 'Medical & Healthcare', 'F.M.C.G.', 'Industrial Projects', 'Tenders & M.O.U.'].map((sector, i) => (
                    <div key={i} className="border border-gray-200 p-4 rounded-xl text-center font-bold text-gray-700 hover:border-blue-600 transition-all">
                      {sector}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl flex flex-col justify-center border border-blue-100">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2"><FileText size={20} /> Submit Quotation</h4>
                <p className="text-sm text-blue-800 mb-6">PDF format, excluding GST. Include all T&C.</p>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-gray-900 transition-all">
                  Apply Now
                </button>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Links */}
        <footer className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">© 2026 HC Parekh & Associates</p>
          <div className="flex gap-8 text-sm font-bold text-gray-500 uppercase">
            <span className="hover:text-blue-600 cursor-pointer">Trade Invitation</span>
            <span className="hover:text-blue-600 cursor-pointer">Social Services</span>
            <span className="hover:text-blue-600 cursor-pointer">Photo Gallery</span>
          </div>
        </footer>
      </div>
    </div>
  );
}