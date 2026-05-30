import React, { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import { managementApi, IMAGE_BASE_URL } from "../utils/api";

export default function OurManagement() {
  const [managementData, setManagementData] = useState({
    title: "Our Management",
    description: "Parekh Silk is administered and governed by the highly skilled, experienced and qualified Management.",
  });
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchManagementData = async () => {
      try {
        const [contentRes, membersRes] = await Promise.all([
          managementApi.getContent("ParekhSilk07"),
          managementApi.getMembers("ParekhSilk07")
        ]);
        
        if (contentRes.data?.success && contentRes.data?.data) {
          setManagementData({
            title: contentRes.data.data.title || "Our Management",
            description: contentRes.data.data.description || managementData.description,
          });
        }

        if (membersRes.data?.success && membersRes.data?.data) {
          setMembers(membersRes.data.data);
        }
      } catch (error) {
        console.error("Error fetching management data:", error);
      }
    };

    fetchManagementData();
  }, []);

  return (
    <div className="bg-[#FAF9F6] flex items-center justify-center px-6 py-20">

      <div className="max-w-4xl w-full">

        {/* Card */}
        <div className="bg-gradient-to-br from-[#F3E5D8] via-[#FFFBF5] to-[#E8D5C4] 
                        border border-[#EADBC8] rounded-[2rem] shadow-xl p-10 md:p-14 text-center relative overflow-hidden">

          {/* Soft Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-2xl"></div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-full shadow-sm">
              <ShieldCheck className="text-[#D4AF37]" size={32} />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#4A4A4A] mb-6">
            {managementData.title}
          </h2>

          {/* Content */}
          <style>{`
            .rich-text-content * {
              background-color: transparent !important;
            }
          `}</style>
          <div 
            className="rich-text-content text-left text-lg md:text-xl text-[#6B6B6B] leading-relaxed font-medium max-w-2xl mx-auto whitespace-pre-wrap break-words overflow-hidden"
            dangerouslySetInnerHTML={{ __html: (managementData.description || '').replace(/&nbsp;/g, ' ') }}
          />

          {/* Members Grid */}
          {members.length > 0 && (
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member) => (
                <div key={member._id} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-[#EADBC8] flex flex-col items-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#F3E5D8] shadow-inner bg-gray-100 flex items-center justify-center">
                    {member.image ? (
                      <img 
                        src={member.image.startsWith('http') ? member.image : `${IMAGE_BASE_URL}/${member.image.replace(/\\/g, '/')}`}
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/150?text=No+Image";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-1 text-center">{member.name}</h3>
                  <p className="text-[#D4AF37] font-medium text-center">{member.role}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
