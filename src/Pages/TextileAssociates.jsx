import React from "react";
// Video import sahi hai
import vedio from "../Assets/Vedio.mp4";

export default function Associates() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container: 
        paddingTop: Header se gap dene ke liye
        overflow-hidden: Taaki koi element screen se bahar na jaye
      */}
      <div 
        className="relative mx-auto overflow-hidden"
        style={{ 
          maxWidth: "1000px", 
          paddingTop: "120px", // Header height adjustment
          paddingBottom: "50px"
        }}
      >
        
        {/* --- Map & Video Section --- */}
        <div className="relative w-full flex justify-center items-center">
          
          {/* SVG Start (Iske bina foreignObject nahi chalega) */}
          <svg 
            viewBox="0 0 1000 1000" 
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background Decoration (Optional: Halka sa border/frame) */}
            <rect x="10" y="10" width="980" height="980" fill="none" stroke="#f0f0f0" stroke-width="1" />

            {/* Title inside SVG for perfect alignment */}
            <text 
              x="500" y="60" 
              textAnchor="middle" 
              className="text-2xl font-bold fill-gray-800 uppercase tracking-[0.3em]"
              style={{ fontFamily: 'serif' }}
            >
              Our Associates Network
            </text>

            {/* 🗺️ VIDEO IMPLEMENTATION */}
            <foreignObject x="50" y="100" width="900" height="850">
              <div 
                xmlns="http://www.w3.org/1999/xhtml" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain", 
                  
                  }}
                >
                  <source src={vedio} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </foreignObject>

            {/* Pins Layer (Future mein points add karne ke liye) */}
            <g id="pins-layer">
              {/* Example Pin: 
              <circle cx="500" cy="500" r="8" fill="#800000" /> 
              */}
            </g>
          </svg>

        </div>

        {/* Bottom Text (Optional) */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm italic tracking-widest">
            Connecting Excellence Across India
          </p>
        </div>

      </div>
    </div>
  );
}