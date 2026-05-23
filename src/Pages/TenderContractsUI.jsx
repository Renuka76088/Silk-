import React, { useState, useEffect } from "react";
import { tenderApi, tenderHeaderApi, IMAGE_BASE_URL } from "../utils/api";
import { Calendar, MapPin, CheckCircle, FileText } from "lucide-react";

export default function TenderContractsUI() {
  const [tenders, setTenders] = useState([]);
  const [headerData, setHeaderData] = useState({
    title: "EXPRESSION OF INTEREST",
    description: "CORPORATE TENDERS | Textile Sector"
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const [headerRes, tendersRes] = await Promise.all([
          tenderHeaderApi.get('ParekhSilk07'),
          tenderApi.getAll('ParekhSilk07')
        ]);
        if (headerRes.data && headerRes.data.success && headerRes.data.data) {
          setHeaderData(headerRes.data.data);
        }
        if (tendersRes.data && tendersRes.data.success && tendersRes.data.data) {
          setTenders(tendersRes.data.data);
        }
      } catch (error) {
        console.error("Tenders fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTenders();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-28 pb-6 md:pb-28 px-6 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="border-b-4 border-[#8B5E3C] pb-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                {headerData.title || "EXPRESSION OF INTEREST"}
              </h1>
              {headerData.description && (
                <div 
                  className="rich-text-content text-lg font-bold text-[#8B5E3C] mt-2 whitespace-pre-wrap break-words overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: headerData.description.replace(/&nbsp;/g, ' ') }}
                />
              )}
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="w-10 h-10 border-4 border-[#8B5E3C] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : tenders.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {tenders.map((tender) => (
              <div key={tender._id} className="bg-white border border-[#EADBC8] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="p-6">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-xl font-bold text-gray-900 break-words">{tender.title}</h3>
                    <span className="shrink-0 px-3 py-1 bg-[#fdfaf7] text-[#8B5E3C] text-xs font-bold uppercase tracking-widest border border-[#EADBC8] rounded-full">
                      {tender.status || 'Active'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {tender.date && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={16} className="text-[#8B5E3C]" />
                        <span>Date: {new Date(tender.date).toLocaleDateString()}</span>
                      </div>
                    )}
                    {tender.referenceNo && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FileText size={16} className="text-[#8B5E3C]" />
                        <span>Ref: {tender.referenceNo}</span>
                      </div>
                    )}
                  </div>

                  <div 
                    className="rich-text-content text-sm text-gray-600 leading-relaxed mb-6 whitespace-pre-wrap break-words overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: (tender.description || '').replace(/&nbsp;/g, ' ') }}
                  />

                  {tender.keyPoints && tender.keyPoints.length > 0 && (
                    <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="text-sm font-bold text-gray-900 mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {tender.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle size={16} className="text-[#8B5E3C] mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tender.documentUrl && (
                    <div className="pt-4 border-t border-[#EADBC8]">
                      <a
                        href={tender.documentUrl.startsWith('http') ? tender.documentUrl : `${IMAGE_BASE_URL}/${tender.documentUrl.replace(/\\/g, '/')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#8B5E3C] hover:text-gray-900 transition-colors uppercase tracking-widest"
                      >
                        <FileText size={16} /> View Document
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-24 bg-[#FAF9F6] border border-[#EADBC8] rounded-lg shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-4">
              At present, No EOI published
            </h2>
            <p className="text-gray-600 text-lg max-w-md">
              There are currently no active Expressions of Interest available.
              Please check back later for upcoming opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
