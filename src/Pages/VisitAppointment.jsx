// VisitAppointment.jsx
import React, { useState } from "react";


export default function VisitAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    purpose: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap backend API call ya email service (e.g., EmailJS) laga sakte ho
    alert("Appointment request submitted! We will contact you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      purpose: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Header */}
  

      {/* White Silk Texture Background – Layered for Luxurious Feel */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Main satin silk layer with shine */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/luxurious-creamy-white-silk-fabric-soft-folds-waves-close-up-smooth-elegant-off-satin-gentle-flowing-drapes-395648821.jpg')",
            backgroundBlendMode: "soft-light",
          }}
        ></div>

        {/* Additional draped silk overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/close-up-full-frame-shot-elegant-luxurious-silk-satin-fabric-soft-creamy-off-white-ivory-hue-textile-420059815.jpg')",
            backgroundBlendMode: "overlay",
          }}
        ></div>

        {/* Soft wave/crinkle silk layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/white-silk-fabric-background-soft-smooth-texture-flowing-waves-light-shadow-331831717.jpg')",
            backgroundPosition: "center top",
          }}
        ></div>

        {/* Bright white tint for readability */}
        <div className="absolute inset-0 bg-white/75"></div>
      </div>

      {/* Main Content */}
      <main className="relative pt-10 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-[5px] uppercase text-[#8b5a2b] mb-4">
            Visit Appointment
          </h1>
          <p className="text-lg md:text-xl text-gray-700 tracking-wide max-w-3xl mx-auto">
            Schedule a personal visit to our showroom and experience the elegance of pure silk fabrics firsthand.
          </p>
          <div className="w-24 h-1 bg-[#d6bfa9] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-[#f0e9e0]/60 overflow-hidden p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-medium text-[#8b5a2b] mb-8 text-center">
            Book Your Visit
          </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

  {/* Visitor Name */}
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Name of the Visitor *
    </label>
    <input
      type="text"
      name="visitorName"
      value={formData.visitorName}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d6bfa9]"
      placeholder="Enter full name"
    />
  </div>

  {/* Business Name */}
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Name of the Business *
    </label>
    <input
      type="text"
      name="businessName"
      value={formData.businessName}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d6bfa9]"
      placeholder="Business / Company name"
    />
  </div>

  {/* Address */}
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Visitor Address with Pin Code *
    </label>
    <textarea
      name="address"
      value={formData.address}
      onChange={handleChange}
      required
      rows={3}
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d6bfa9]"
      placeholder="Full address with PIN code"
    ></textarea>
  </div>

  {/* Mobile + Email */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Mobile No. *
      </label>
      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d6bfa9]"
        placeholder="+91 XXXXX XXXXX"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Email Id *
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d6bfa9]"
        placeholder="your@email.com"
      />
    </div>
  </div>

  {/* ID Proof Upload */}
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Upload Residential / Business Proof *
    </label>
    <input
      type="file"
      name="proof"
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white"
    />
  </div>

  {/* ID Type Dropdown */}
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Select Proof Type *
    </label>
    <select
      name="proofType"
      value={formData.proofType}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#d6bfa9]"
    >
      <option value="">Select option</option>
      <option value="Aadhaar Card">Aadhaar Card</option>
      <option value="ECI Card">ECI Card</option>
      <option value="Driving License">DL</option>
    </select>
  </div>

  {/* Reason */}
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Describe the Reason for Visit *
    </label>
    <textarea
      name="reason"
      value={formData.reason}
      onChange={handleChange}
      required
      rows={4}
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d6bfa9]"
      placeholder="Explain purpose of your visit..."
    ></textarea>
  </div>

  {/* Submit */}
  <div className="text-center">
    <button
      type="submit"
      className="bg-[#8b5a2b] text-white px-10 py-4 rounded-md font-medium hover:bg-[#a16a3a] transition"
    >
      Submit Appointment Request
    </button>
  </div>

</form>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 text-gray-700">
          <p className="text-lg mb-4">
            Showroom Address: HC Parekh & Associates, Parekh Silk – The Fabric Store
          </p>
          <p className="text-sm">
            Contact: 6353778329 | Email: hemant.parekh2012@gmail.com
          </p>
        </div>
      </main>

     
    </div>
  );
}