import React from 'react'

function Range() {
  return (
    <>
    
    <div className="py-10 md:py-16 px-4 md:px-8 bg-[#faf7f5]">

  {/* Heading */}
  <div className="text-center mb-10">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
      Vast Range of Quality Fabrics
    </h2>

    <p className="text-gray-500 text-sm mt-2">
      Explore our premium collection crafted for elegance
    </p>

    <div className="w-20 h-[2px] bg-[#d6bfa9] mx-auto mt-3"></div>
  </div>

  {/* Categories Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">

    {[
      {
        name: "Silk Fabric",
        img: "https://images.unsplash.com/photo-1620763050148-af058ab2fff0?w=600",
      },
      {
        name: "Cotton Fabric",
        img: "https://images.unsplash.com/photo-1612654516785-0e1a96be21d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q290dG9uJTIwRmFicmljfGVufDB8fDB8fHww",
      },
      {
        name: "Linen Fabric",
        img: "https://images.unsplash.com/photo-1763928801196-c4e2922a99b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JTIyTGluZW4lMjBGYWJyaWN8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Dyeable Fabric",
        img: "https://images.unsplash.com/photo-1619043518800-7f14be467dca?w=600",
      },
    ].map((item, index) => (

      <div
        key={index}
        className="group relative overflow-hidden rounded-lg cursor-pointer"
      >
        {/* Image */}
        <img
          src={item.img}
          className="w-full h-[160px] md:h-[220px] object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-end p-3">
          <h3 className="text-white text-sm md:text-lg font-medium">
            {item.name}
          </h3>
        </div>
      </div>

    ))}
  </div>
</div>
    
    </>
  )
}

export default Range