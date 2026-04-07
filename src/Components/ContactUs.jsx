import React from "react";

export default function ContactUs() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16 bg-[#fbf8f6] font-sans">
      <h2 className="text-center text-4xl font-semibold mb-6 tracking-wide text-gray-900">
        Contact Us
      </h2>
      <p className="text-center uppercase tracking-widest mb-12" style={{ color: "#d6bfa9" }}>
        We’d love to hear from you
      </p>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Map Section */}
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-[#eee]">
       <iframe
  title="Surat Location Map"
  src="https://www.google.com/maps?q=Surat%2C%20Gujarat%2C%20India&output=embed"
  width="100%"
  height="100%"
  className="min-h-[400px] md:min-h-full border-0"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </div>

        {/* Form Section */}
        <form className="md:w-1/2 bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-[#eee] p-8 flex flex-col gap-6">
          <label className="flex flex-col text-gray-800 font-medium text-sm">
            Name
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 p-3 border border-[#ddd] rounded-lg focus:outline-none transition"
              style={{
                boxShadow: "0 0 0 3px rgba(214, 191, 169, 0.5)",
              }}
              required
            />
          </label>

          <label className="flex flex-col text-gray-800 font-medium text-sm">
            Email
            <input
              type="email"
              placeholder="Your email"
              className="mt-2 p-3 border border-[#ddd] rounded-lg focus:outline-none transition"
              style={{
                boxShadow: "0 0 0 3px rgba(214, 191, 169, 0.5)",
              }}
              required
            />
          </label>

          <label className="flex flex-col text-gray-800 font-medium text-sm">
            Message
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="mt-2 p-3 border border-[#ddd] rounded-lg resize-none focus:outline-none transition"
              style={{
                boxShadow: "0 0 0 3px rgba(214, 191, 169, 0.5)",
              }}
              required
            />
          </label>

          <button
            type="submit"
            className="font-semibold py-3 rounded-full transition"
            style={{
              backgroundColor: "#d6bfa9",
              color: "#3c3c3c",
              boxShadow: "0 4px 10px rgba(214, 191, 169, 0.5)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#b7ab85")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#d6bfa9")
            }
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}