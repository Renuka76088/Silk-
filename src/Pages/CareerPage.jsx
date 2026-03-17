// CareerPage.jsx
import React from "react";


export default function CareerPage() {
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
      <main className="relative pt-10 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-[5px] uppercase text-[#8b5a2b] mb-4">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-700 tracking-wide max-w-3xl mx-auto">
            Explore opportunities to grow with HC Parekh & Associates – where tradition meets excellence in the world of pure silk.
          </p>
          <div className="w-20 h-1 bg-[#d6bfa9] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Job Opening Card – HR Manager */}
        <section className="mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-[#e9dede]/60 overflow-hidden">
            <div className="bg-[#8b5a2b] text-white px-6 py-4">
              <h2 className="text-2xl font-medium">Management | Full Time</h2>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-3xl font-semibold text-[#8b5a2b] mb-2">HR Manager</h3>
              <p className="text-lg text-gray-600 mb-4">
                Bengaluru, Karnataka • CTC: ₹ 5.25 L.P.A.
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-gray-800">Essential Criteria</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>MBA (HR) or Graduate with 8+ years net experience in Recruitment.</li>
                  <li>Proficiency in English, Hindi, and Regional language equally.</li>
                  <li>Acquainted with official Tour & Travel within India.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3 text-gray-800">Job Responsibilities</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>End-to-End Recruitment & Payroll Management.</li>
                  <li>Labour Law Compliance (EPF, ESI, Relieving).</li>
                  <li>Plan & coordinate Campus Interviews in Colleges.</li>
                </ul>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <a
                  href="mailto:hemant.parekh2012@gmail.com?subject=Application for HR Manager Position"
                  className="bg-[#8b5a2b] text-white px-8 py-3 rounded-md font-medium hover:bg-[#a16a3a] transition inline-flex items-center"
                >
                  Apply Via Email
                  <span className="ml-2">→</span>
                </a>
                <p className="text-sm text-gray-600">
                  Send your resume to: <strong>hemant.parekh2012@gmail.com</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Influencer / Brand Promotion Section */}
        <section className="mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-[#e9dede]/60 overflow-hidden">
            <div className="bg-[#d6bfa9] text-gray-800 px-6 py-4">
              <h2 className="text-2xl font-medium">Campaign | Brand Promotion</h2>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-3xl font-semibold text-[#8b5a2b] mb-4">
                Social Media Influencer
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Long-term Online Business Advertisements on
                <span className="font-medium"> Facebook • Instagram • YouTube</span>
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 text-gray-800">Target Sectors</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Textile & Garments",
                    "Pulp & Paper",
                    "Medical & Healthcare",
                    "F.M.C.G.",
                    "Industrial Projects",
                    "Tenders & M.O.U.",
                  ].map((sector) => (
                    <span
                      key={sector}
                      className="bg-[#f5ede3] text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3 text-gray-800">
                  Submit Quotation
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>PDF format, excluding GST.</li>
                  <li>Include all T&C.</li>
                </ul>
              </div>

              <a
                href="mailto:hemant.parekh2012@gmail.com?subject=Quotation for Social Media Influencer Campaign"
                className="bg-[#8b5a2b] text-white px-8 py-3 rounded-md font-medium hover:bg-[#a16a3a] transition inline-flex items-center"
              >
                Apply Now
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Closing Note */}
        <div className="text-center text-gray-600 mt-12">
          <p className="text-lg">
            Be a part of the legacy – where passion for silk meets professional growth.
          </p>
          <p className="mt-2">
            We look forward to welcoming talented individuals to the HC Parekh & Associates family.
          </p>
        </div>
      </main>

      {/* Footer Accent */}
      <footer className="relative py-8 text-center text-sm text-gray-500 border-t border-[#e9dede]/50 bg-white/30 backdrop-blur-sm">
        © {new Date().getFullYear()} HC Parekh & Associates – Parekh Silk | The Fabric Store
      </footer>
    </div>
  );
}