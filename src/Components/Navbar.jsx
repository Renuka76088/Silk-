// Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaWhatsapp, FaYoutube, FaInstagram , FaRegCommentDots } from "react-icons/fa";
import { Menu, Search, ShoppingCart, Heart, User,Send, X, LocationEdit } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
    { name: "PRODUCT PAGE", path: "/products" },
    {
      name: "PAGES",
      path: "#",
      dropdown: [
        "OUR MANAGEMENT",
        "TRADE ENQUIRY",
        "e-QUOTATION",
        "e-AUCTION",
        "TENDER & CONTRACT",
        "CAREER",
        "CIRCULAR",
        "BLOG",
        "CUSTOMER REVIEW",
      ],
    },
    { name: "VISIT APPOINTMENT", path: "/appointment" },
    { name: "MEDIA GALLERY", path: "/media" },
    { name: "TEXTILE ASSOCIATES", path: "/associates" },
  ];
  
  // --- Chatbot States ---
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", text: "Namaste! 🙏 Welcome to Parekh Silk. How can I help you today?" }
  ]);
  const chatEndRef = useRef(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // AI Simulated Reply (You can connect your API here)
    setTimeout(() => {
      let aiResponse = "Thank you for reaching out! Our team will assist you with your query about silk products shortly.";
      if (input.toLowerCase().includes("price") || input.toLowerCase().includes("rate")) {
        aiResponse = "Our silk collection starts from ₹520. You can check the Product Page for detailed pricing.";
      } else if (input.toLowerCase().includes("location") || input.toLowerCase().includes("address")) {
        aiResponse = "We are located in Surat, Gujarat, India. 🇮🇳";
      }
      
      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    }, 1000);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="flex justify-between items-center px-3 md:px-8 py-2 text-[10px] md:text-sm bg-[#e9dede]">
        <a href="https://wa.me/916353778329" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-600 font-medium transition cursor-pointer">
          <FaWhatsapp className="text-green-600" size={14} /> 6353778329
        </a>
        <div className="hidden md:block">
          HC PAREKH & ASSOCIATES - PAREKH SILK (SURAT, GUJRAT)
        </div>
        <div className="flex items-center gap-3">
          <FaInstagram className="text-pink-500 cursor-pointer" />
          <FaFacebook className="text-blue-500 cursor-pointer" />
          <FaYoutube className="text-red-500 cursor-pointer" />
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between gap-1 px-3 md:px-8 py-2 md:py-4 bg-white w-full">

        {/* LEFT (Mobile Toggle) */}
        <div className="flex items-center md:hidden shrink-0">
          <Menu
            size={22}
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer"
          />
        </div>

        {/* LEFT (Desktop Logo) */}
        <div className="hidden md:flex items-center">
          <Link to="/" className="z-[130] flex items-center no-underline">
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(113, 127, 224, 0.15) 0%, rgba(113, 127, 224, 0.05) 100%)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.5)'
              }}
              className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-xl flex items-center justify-center mr-3 shrink-0 transition-all duration-300 hover:scale-105 border border-black/5"
            >
              <span className="text-[#C5A27D] font-black text-2xl md:text-3xl leading-none">P</span>
            </div>

            <div className="flex flex-col justify-center">
           <h1 className="flex items-center gap-x-1 text-xl md:text-2xl font-black tracking-tighter leading-none">
  <span className="text-[#4A4238]">PAREKH</span>
  <span className="text-[#C5A27D]">SILK</span>
</h1>
              <span className="text-[9px] md:text-[11px] font-bold tracking-[0.3em] text-[#8b8175] mt-1">
                SURAT • GJ, INDIA
              </span>
            </div>
          </Link>
        </div>

        {/* CENTER (Mobile Logo) */}
        <div className="flex md:hidden justify-center items-center flex-1 mx-1 shrink-0 overflow-hidden">
          <Link to="/" className="z-[130] flex items-center no-underline">
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(113, 127, 224, 0.15) 0%, rgba(113, 127, 224, 0.05) 100%)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.5)'
              }}
              className="w-[34px] h-[34px] rounded-lg flex items-center justify-center mr-1.5 shrink-0 border border-black/5"
            >
              <span className="text-[#C5A27D] font-black text-lg leading-none">P</span>
            </div>

            <div className="flex flex-col justify-center whitespace-nowrap">
              <h1 className="flex items-center gap-x-0.5 text-[16px] font-black tracking-tighter leading-none m-0">
                <span className="text-[#4A4238]">PAREKH</span>
                <span className="text-[#C5A27D]">SILK</span>
              </h1>
              <span className="text-[7.5px] font-bold tracking-[0.2em] text-[#8b8175] mt-[2px]">
                SURAT • GJ, INDIA
              </span>
            </div>
          </Link>
        </div>

        {/* RIGHT (Get a Quote Button) */}
        <div className="flex items-center shrink-0">
          <Link to="/page/trade-enquiry">
            <button className="bg-[#C5A27D] hover:bg-[#a8845f] text-white px-2 py-1.5 md:px-6 md:py-2 rounded-md text-[10px] md:text-sm font-semibold transition whitespace-nowrap">
              Get a Quote
            </button>
          </Link>
        </div>

      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex bg-[#efe5df] py-3 px-6 justify-center items-center gap-6 lg:gap-9 text-sm font-medium  tracking-wide">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group">
            <Link
              to={item.path}
              className={`hover:text-[#8b5a2b] transition-colors duration-200 whitespace-nowrap ${
                item.dropdown ? "cursor-default" : ""
              }`}
            >
              {item.name}
            </Link>

            {item.dropdown && (
              <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-xl rounded-md py-3 min-w-[220px] z-50 border border-gray-200">
                {item.dropdown.map((sub, i) => (
                  <Link
                    key={i}
                    to={`/page/${sub.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#8b5a2b] transition"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* WhatsApp Button */}
<div className="fixed bottom-6 right-6 z-[200]">
  <a
    href="https://wa.me/918217771201"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 transition-all duration-300 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110"
  >
    <FaWhatsapp size={26} />
  </a>
</div>

{/* --- AI CHATBOT IMPLEMENTATION --- */}
      <div className="fixed bottom-24 right-6 z-[200] flex flex-col items-end">
        {/* Chat Window */}
        {chatOpen && (
          <div className="w-[300px] md:w-[350px] h-[400px] md:h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 mb-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
            {/* Header */}
            <div className="bg-[#C5A27D] p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-bold text-sm">Parekh AI Assistant</span>
              </div>
              <X size={20} className="cursor-pointer hover:rotate-90 transition-transform" onClick={() => setChatOpen(false)} />
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-xs md:text-sm shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-[#C5A27D] text-white rounded-br-none' 
                    : 'bg-white text-gray-800 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 border-t bg-white flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..." 
                className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-[#C5A27D]"
              />
              <button type="submit" className="bg-[#C5A27D] text-white p-2 rounded-full hover:scale-110 transition shadow-md">
                <Send size={18} />
              </button>
            </form>
          </div>
        )}

        {/* Chat Toggle Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-[#4A4238] hover:bg-black transition-all duration-300 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 group relative"
        >
          {chatOpen ? <X size={26} /> : <FaRegCommentDots size={26} />}
          {!chatOpen && <span className="absolute -top-12 right-0 bg-white text-[#4A4238] text-[10px] py-1 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-bold border border-gray-100">Chat with AI</span>}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-gray-50 z-[300] transform transition-transform duration-300 ${
        menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="flex justify-between items-center p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white relative z-10">
          <Link to="/" className="flex items-center no-underline" onClick={() => setMenuOpen(false)}>
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(113, 127, 224, 0.15) 0%, rgba(113, 127, 224, 0.05) 100%)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
              }}
              className="w-[38px] h-[38px] rounded-lg flex items-center justify-center mr-2 shrink-0 border border-black/5"
            >
              <span className="text-[#C5A27D] font-black text-xl leading-none">P</span>
            </div>
            <div className="flex flex-col justify-center whitespace-nowrap">
              <h1 className="flex items-center gap-x-0.5 text-[18px] font-black tracking-tighter leading-none m-0">
                <span className="text-[#4A4238]">PAREKH</span>
                <span className="text-[#C5A27D]">SILK</span>
              </h1>
              <span className="text-[8px] font-bold tracking-[0.2em] text-[#8b8175] mt-[2px]">
                SURAT • GJ, INDIA
              </span>
            </div>
          </Link>
          <div className="w-[38px] h-[38px] rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center cursor-pointer hover:scale-105 transition-all text-gray-700" onClick={() => setMenuOpen(false)}>
            <X size={20} />
          </div>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-80px)] bg-[#fdfbf9]">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300">
              <Link to={item.path || "#"} className="font-semibold text-[15px] flex items-center px-6 py-4 hover:bg-[#C5A27D]/5 transition-colors text-gray-800 tracking-wide" onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>

              {item.dropdown && (
                <div className="px-5 pb-5 pt-1 space-y-1.5 text-[13px] flex flex-col font-medium bg-[#faf8f5]/50 border-t border-gray-50/50">
                  {item.dropdown.map((sub, i) => (
                    <Link
                      key={i}
                      to={`/page/${sub.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                      className="cursor-pointer text-gray-500 hover:text-[#8b5a2b] hover:bg-white px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm border border-transparent hover:border-gray-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Duplicate WhatsApp Button removed */}
    </>
  );
}
