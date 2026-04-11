// MediaGallery.jsx
import React from "react";


export default function MediaGallery() {
  // Sample gallery items – aap apne real images se replace kar dena
  const galleryItems = [
    {
      id: 1,
      title: "Pure Silk Satin Drapes",
      description: "Soft flowing ivory silk with gentle shine",
      image: "https://thumbs.dreamstime.com/b/luxurious-elegant-background-featuring-soft-cream-colored-silk-satin-fabric-material-beautifully-draped-folded-420411511.jpg",
    },
    {
      id: 2,
      title: "Creamy White Silk Texture",
      description: "Elegant satin folds in off-white luxury",
      image: "https://media.istockphoto.com/id/160481326/photo/gold-satin-texture-background-with-copy-space.jpg?s=612x612&w=0&k=20&c=IS3obJPlaK59peuM8iMKBhpdxqzRRO_Ga0LgNuau3iY=",
    },
    {
      id: 3,
      title: "Pastel Georgette Layers",
      description: "Sheer georgette in soft pink & lavender",
      image: "https://images.unsplash.com/photo-1617055407123-3d7130c1f940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2lsa3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "Flowy Chiffon Collection",
      description: "Lightweight chiffon in blush, blue & peach tones",
      image: "https://oneyard.shop/uploads/article/2024/06/100d-semi-sheer-chiffon-fabric.webp",
    },
    {
      id: 5,
      title: "Silk & Chiffon Harmony",
      description: "Pastel sheer fabrics draped elegantly",
      image: "https://media.istockphoto.com/id/137860831/photo/beautiful-fabric-folded.jpg?s=612x612&w=0&k=20&c=sNvxfj2wwD2frxpDbwjXDl9Q5_jCK5VPsD26_80Ga_M=",
    },
    {
      id: 6,
      title: "Vibrant Organza & Georgette",
      description: "Rainbow-like sheer organza textures",
      image: "https://images.stockcake.com/public/2/1/8/21820111-fb68-4cf1-8ff4-ce6063f1d8a8/colorful-silk-fabrics-stockcake.jpg",
    },
    {
      id: 7,
      title: "Designer Silk Saree Display",
      description: "Traditional silk with modern elegance",
      image: "https://www.sacredweaves.com/cdn/shop/articles/D75_5200_1600x.jpg?v=1607584949",
    },
    {
      id: 8,
      title: "Chanderi & Silk Fusion",
      description: "Lightweight breezy silk blends",
      image: "http://weaverstory.com/cdn/shop/articles/Chanderi_Saree_Cover.png?v=1685513229",
    },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 relative">


      {/* Soft Creamy Silk Background – No Brown Tones */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Primary ivory silk satin layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65"
          style={{
            backgroundImage: `url('https://thumbs.dreamstime.com/b/luxurious-creamy-white-silk-fabric-soft-folds-waves-close-up-smooth-elegant-off-satin-gentle-flowing-drapes-395648821.jpg')`,
            backgroundBlendMode: "soft-light",
          }}
        ></div>

        {/* Additional sheer overlay for depth */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage: `url('https://thumbs.dreamstime.com/b/elegant-draped-creamy-white-silk-fabric-texture-background-soft-luxurious-creamy-white-silk-fabric-elegant-drapes-folds-383151300.jpg')`,
            backgroundBlendMode: "overlay",
          }}
        ></div>

        {/* Light tint to keep it bright & airy */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#fdfaf5]/70 to-white/75"></div>
      </div>

      {/* Main Content */}
      <main className="relative pt-10 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-[5px] uppercase text-[#8b5a2b] mb-4">
            Media Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-700 tracking-wide max-w-3xl mx-auto">
            Explore our collection of pure silk, georgette, chiffon, organza & other luxurious fabrics – soft, flowing & elegant.
          </p>
          <div className="w-24 h-1 bg-[#d6bfa9] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Gallery Grid – Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white/60 backdrop-blur-sm border border-[#f0e9e0]/50"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Want to see these fabrics in person? Book a visit or contact us today!
          </p>
          <a
            href="/appointment"
            className="bg-[#8b5a2b] text-white px-8 py-4 rounded-md font-medium hover:bg-[#a16a3a] transition inline-flex items-center"
          >
            Book Appointment
            <span className="ml-2">→</span>
          </a>
        </div>
      </main>

      {/* Footer */}

    </div>
  );
}