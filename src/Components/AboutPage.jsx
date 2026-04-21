import React from 'react'

function AboutPage() {
  return (
<>
<div className="bg-[#f8f3ef] py-12 md:py-20 px-4 md:px-8 overflow-hidden">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

    {/* Left Image */}
    <div className="opacity-0 animate-[fadeLeft_0.8s_ease-out_forwards]">
      <img
        src="https://images.unsplash.com/photo-1617055407123-3d7130c1f940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2lsa3xlbnwwfHwwfHx8MA%3D%3D"
        className="w-full h-[300px] md:h-[420px] object-cover rounded-lg"
      />
    </div>

    {/* Right Content */}
   <div className="opacity-0 animate-[fadeRight_0.8s_ease-out_forwards] delay-200">
  {/* TOP SUBHEADING */}
  {/* <p className="text-sm tracking-[0.2em] text-[#b89b84] mb-3 font-bold">
    ABOUT PAREKH SILK
  </p> */}

  {/* MAIN HEADING */}
  <h2 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight">
       ABOUT PAREKH 
    <span className="ms-3 text-[#b89b84]">SILK</span>
  </h2>

  {/* NEW DETAILED CONTENT */}
  <p className="text-gray-700 text-sm md:text-lg mb-5 leading-relaxed">
Parekh Silk is a trusted Manufacturer & Supplier of the high standard quality
of the Silk Products from lower range to higher range at reasonable and low
price range with best and  <span className="font-medium text-black">premium quality, with Quality Assurance and a
Quality Seal.
   </span>
  </p>


  {/* BUTTON */}
  <button className="bg-[#d6bfa9] hover:bg-[#b89b84] transition-colors px-8 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-lg">
    Explore Collection
  </button>
</div>
  </div>

  {/* Custom CSS */}
  <style>
    {`
      @keyframes fadeLeft {
        from {
          opacity: 0;
          transform: translateX(-60px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeRight {
        from {
          opacity: 0;
          transform: translateX(60px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `}
  </style>
</div>

</>
  )
}

export default AboutPage