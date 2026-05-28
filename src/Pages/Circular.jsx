import React, { useState, useEffect } from "react";
import { circularApi, circularHeaderApi, IMAGE_BASE_URL } from "../utils/api";
import { Eye, Printer, FileText, Calendar } from "lucide-react";

export default function Circular() {
  const [circulars, setCirculars] = useState([]);
  const [headerData, setHeaderData] = useState({
    title: "Circular",
    description: "There are currently no circulars available. Please check back later for official updates and notices."
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCirculars = async () => {
      try {
        const [headerRes, circsRes] = await Promise.all([
          circularHeaderApi.get('ParekhSilk07'),
          circularApi.getAll('ParekhSilk07')
        ]);
        if (headerRes.data && headerRes.data.success && headerRes.data.data) {
          setHeaderData(headerRes.data.data);
        }
        if (circsRes.data && circsRes.data.success && circsRes.data.data) {
          setCirculars(circsRes.data.data);
        }
      } catch (error) {
        console.error("Circular fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCirculars();
  }, []);

  const getFullUrl = (url) => {
    if (!url) return '';
    return url.startsWith('http') ? url : `${IMAGE_BASE_URL}/${url.replace(/\\/g, '/')}`;
  };

  const handlePrint = async (e, url) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const fullUrl = getFullUrl(url);
    
    try {
      const response = await fetch(fullUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = blobUrl;
      document.body.appendChild(iframe);
      
      iframe.onload = () => {
        setTimeout(() => {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
          setTimeout(() => document.body.removeChild(iframe), 1000);
        }, 100);
      };
    } catch (error) {
      console.error("Print failed via iframe:", error);
      window.open(fullUrl, '_blank');
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString();
    }
    return dateStr; // fallback to raw string if it's not a standard date
  };

  return (
    <div className="font-sans text-gray-800 relative min-h-screen">

      {/* --- Silk Background --- */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/abstract-background-luxury-cloth-liquid-wave-wavy-folds-grunge-silk-texture-satin-velvet-material-luxurious-christmas-148049945.jpg')",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/luxurious-elegant-background-featuring-soft-cream-colored-silk-satin-fabric-material-beautifully-draped-folded-420411511.jpg')",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/white-silk-fabric-background-soft-waves-flowing-drapery-luxury-satin-cloth-texture-white-silk-fabric-background-soft-327039071.jpg')",
          }}
        ></div>

        <div className="absolute inset-0 bg-white/75"></div>
      </div>

      {/* --- Main Content --- */}
      <main className="relative pt-24 pb-6 md:pb-16 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-[5px] text-[#8b5a2b] mb-4">
            {headerData.title || "Circular"}
          </h1>
          {headerData.description && (
            <div 
              className="text-lg text-gray-700 tracking-wide max-w-3xl mx-auto break-words overflow-hidden"
              dangerouslySetInnerHTML={{ __html: headerData.description.replace(/&nbsp;/g, ' ') }}
            />
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-[#8B5E3C] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : circulars.length > 0 ? (
          <div className="grid gap-6">
            {circulars.map((circular) => (
              <div key={circular._id} className="bg-[#FAF9F6]/90 backdrop-blur-md border border-[#e8ded2] rounded-2xl shadow-sm p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-4 flex-grow">
                  <div className="p-3 bg-[#8b5a2b]/10 text-[#8b5a2b] rounded-xl shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full mb-2">
                      <Calendar className="w-3 h-3" />
                      {formatDate(circular.publishDate)}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 break-words">
                      {circular.subject}
                    </h3>
                  </div>
                </div>
                
                <div className="flex gap-3 w-full md:w-auto shrink-0">
                  <a
                    href={getFullUrl(circular.pdfUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[#8b5a2b] text-[#8b5a2b] hover:bg-[#8b5a2b] hover:text-white rounded-xl text-sm font-bold uppercase tracking-widest transition-colors"
                  >
                    <Eye className="w-4 h-4" /> View
                  </a>
                  <button
                    onClick={(e) => handlePrint(e, circular.pdfUrl)}
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#8b5a2b] text-white hover:bg-[#6b4521] rounded-xl text-sm font-bold uppercase tracking-widest transition-colors"
                  >
                    <Printer className="w-4 h-4" /> Print
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div className="bg-[#FAF9F6]/90 backdrop-blur-md border border-[#e8ded2] rounded-2xl shadow-sm px-8 py-12 md:px-12 text-center max-w-xl w-full">
              <p className="inline-block bg-[#f3e5d8] text-[#8b5a2b] px-6 py-2 rounded-full text-base md:text-lg font-medium mb-6 shadow-sm">
                ( No Circular, at present )
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                There are currently no circulars available. <br />
                Please check back later for official updates and notices.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
