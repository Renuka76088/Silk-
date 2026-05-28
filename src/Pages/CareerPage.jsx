import React, { useState, useEffect } from "react";
import { careerApi, careerHeaderApi } from "../utils/api";
import { Briefcase, MapPin, Clock, Mail } from "lucide-react";

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [headerData, setHeaderData] = useState({
    title: "Join Our Team",
    description: "Explore opportunities to grow with HC Parekh & Associates – where tradition meets excellence in the world of pure silk."
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const [headerRes, jobsRes] = await Promise.all([
          careerHeaderApi.get('ParekhSilk07'),
          careerApi.getAll('ParekhSilk07')
        ]);
        if (headerRes.data && headerRes.data.success && headerRes.data.data) {
          setHeaderData(headerRes.data.data);
        }
        if (jobsRes.data && jobsRes.data.success && jobsRes.data.data) {
          setJobs(jobsRes.data.data);
        } else {
          setJobs([]);
        }
      } catch (error) {
        console.error("Careers fetch error:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  const handleApply = (job) => {
    const email = job.contactEmail || job.email || 'careers@parekhsilk.com';
    const subject = encodeURIComponent(`Application for ${job.title} - Parekh Silk`);
    const body = encodeURIComponent(`Hello Team,\n\nI am interested in applying for the position of ${job.title} at Parekh Silk.\n\nPlease find attached my CV/Resume and experience details.\n\nBest Regards,\n[My Name]`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 relative">


      {/* Silk-like Background with Overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Main silk texture layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url('https://thumbs.dreamstime.com/b/golden-silk-fabric-texture-background-gold-cream-elegant-luxury-satin-cloth-wave-prestigious-award-luxurious-abstract-283717403.jpg')`,
            backgroundBlendMode: "soft-light",
          }}
        ></div>

        {/* Softer cream silk overlay for readability */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('https://thumbs.dreamstime.com/b/luxurious-elegant-background-featuring-soft-cream-colored-silk-satin-fabric-material-beautifully-draped-folded-420411511.jpg')`,
            backgroundBlendMode: "overlay",
          }}
        ></div>

        {/* Gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf5]/95 via-[#f9f5f0]/90 to-[#f5ede3]/85"></div>
      </div>

      {/* Main Content */}
      <main className="relative pt-10 pb-6 md:pb-16 px-4 md:px-8 max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-[5px] text-[#8b5a2b] mb-4">
            {headerData.title || "Join Our Team"}
          </h1>
          {headerData.description && (
            <div 
              className="rich-text-content text-lg md:text-xl text-gray-700 tracking-wide max-w-3xl mx-auto break-words overflow-hidden"
              dangerouslySetInnerHTML={{ __html: headerData.description.replace(/&nbsp;/g, ' ') }}
            />
          )}
          <div className="w-20 h-1 bg-[#d6bfa9] mx-auto mt-6 rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-28 bg-white/40 backdrop-blur-md rounded-xl border border-white/60 shadow-sm">
            <div className="w-12 h-12 border-4 border-[#8b5a2b] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500 font-medium uppercase tracking-widest text-xs">Finding opportunities...</p>
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {jobs.map((job) => (
              <div key={job._id} className="bg-white/80 backdrop-blur-md border border-[#e9dede]/60 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-gray-400 text-xs font-medium italic">
                        Posted on {new Date(job.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl text-[#000] mb-4">
                      {job.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {job.location && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin size={16} className="text-[#8b5a2b]" />
                          <span className="text-sm font-medium">{job.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail size={16} className="text-[#8b5a2b]" />
                        <span className="text-sm font-medium">{job.contactEmail || job.email || "careers@parekhsilk.com"}</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b5a2b] mb-3">Description</h4>
                        <div 
                          className="rich-text-content text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-wrap break-words overflow-hidden"
                          dangerouslySetInnerHTML={{ __html: (job.description || '').replace(/&nbsp;/g, ' ') }}
                        />
                      </div>
                      {job.experience && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b5a2b] mb-3">Requirements</h4>
                          <div 
                            className="rich-text-content text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-wrap break-words overflow-hidden"
                            dangerouslySetInnerHTML={{ __html: (job.experience || '').replace(/&nbsp;/g, ' ') }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                    <div className="shrink-0">
                      <button
                        onClick={() => handleApply(job)}
                        className="inline-block bg-[#8b5a2b] hover:bg-[#2d0a4e] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-2xl text-center w-full md:w-auto"
                      >
                        Apply Now
                      </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State - Fallback */
          <div className="flex flex-col items-center justify-center text-center py-28 bg-white/60 backdrop-blur-md border border-[#e9dede]/60 rounded-2xl shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#8b5a2b] mb-4 italic">
              "( At present, No Vacancy )"
            </h2>
            <p className="text-gray-600 p-2 text-lg max-w-md">
              There are currently no job openings available.
              Please revisit this page for future career opportunities.
            </p>
          </div>
        )}

      </main>

    </div>
  );
}
