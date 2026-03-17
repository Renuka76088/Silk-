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

      <p className="text-sm tracking-widest text-[#b89b84] mb-2">
        ABOUT PAREKH SILK
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Timeless Fabrics Crafted with Tradition & Excellence
      </h2>

      <p className="text-gray-600 text-sm md:text-base mb-4">
        Parekh Silk is a trusted name in premium fabrics, offering pure silk,
        cotton, and linen materials crafted with elegance and quality.
      </p>

      <p className="text-gray-600 text-sm md:text-base mb-6">
        With years of expertise, we deliver rich textures and timeless designs
        trusted by designers and wholesalers.
      </p>

      <div className="grid grid-cols-2 gap-4 text-sm mb-6">
        <div>✔ Premium Quality</div>
        <div>✔ Trusted Brand</div>
        <div>✔ Wide Range</div>
        <div>✔ Wholesale</div>
      </div>

      <button className="bg-[#d6bfa9] px-6 py-2 text-sm font-medium">
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