// BlogPage.jsx
import React from "react";
import { Link } from "react-router-dom";

// Sample blog posts (aap apne data se replace kar dena)
const blogPosts = [
  {
    id: 1,
    title: "The Timeless Elegance of Pure Banarasi Silk",
    excerpt:
      "Explore why Banarasi silk remains the first choice for weddings and special occasions...",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1617055407123-3d7130c1f940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2lsa3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "How to Care for Your Silk Sarees This Monsoon",
    excerpt:
      "Monsoon tips to keep your precious silk collection safe from humidity and stains...",
    date: "February 28, 2026",
    image: "https://images.unsplash.com/photo-1620763050148-af058ab2fff0?w=800",
  },
  {
    id: 3,
    title: "From Cocoon to Couture: The Journey of Silk",
    excerpt:
      "A behind-the-scenes look at how silk is made and why it's so luxurious...",
    date: "January 15, 2026",
    image: "https://plus.unsplash.com/premium_photo-1661962431511-32e4ebf7e5b0?w=800",
  },
  {
    id: 4,
    title: "Trending Silk Blouses for 2026",
    excerpt:
      "Latest designs and color combinations that are ruling the fashion scene...",
    date: "December 5, 2025",
    image: "https://images.unsplash.com/photo-1619043518800-7f14be467dca?w=800",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      {/* Header (same as homepage) */}
     

      {/* Silk-like Background + Overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Silk texture background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://thumbs.dreamstime.com/b/luxury-golden-silk-satin-gradient-background-premium-minimalist-abstract-designs-383118494.jpg')`,
            backgroundBlendMode: "soft-light",
          }}
        ></div>

        {/* Subtle gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f5f0]/90 via-[#f5ede3]/85 to-[#efe5df]/80"></div>
      </div>

 {/* Main Content */}
<main className="relative pt-8 pb-16 px-4 md:px-8 max-w-7xl mx-auto">

  {/* Page Title */}
  <div className="text-center mb-12 md:mb-16">
    <h1 className="text-4xl md:text-5xl font-light tracking-[4px] uppercase text-[#8b5a2b] mb-3">
      Our Blog
    </h1>
    <p className="text-lg md:text-xl text-gray-600 tracking-wide">
      Stories, Tips & Insights from the World of Pure Silk
    </p>
    <div className="w-24 h-1 bg-[#d6bfa9] mx-auto mt-6 rounded-full"></div>
  </div>

  {/* Blog Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

    {/* Default Blog Card */}
    <article className="group bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#e9dede]/60">
      
      <div className="relative h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1617055407123-3d7130c1f940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2lsa3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Textile Industry"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <div className="text-xs text-gray-500 mb-2">HC Parekh • India</div>

        <h2 className="text-xl font-medium mb-3 group-hover:text-[#8b5a2b] transition-colors">
          Blog & Article
        </h2>

        <p className="text-gray-600 mb-4">
          Join and participate in our nation-wide campaign to digitalize the Textile Sector, one of the largest sectors of India.
        </p>

        <Link
          to="#"
          className="inline-flex items-center text-[#8b5a2b] font-medium hover:text-[#a16a3a] transition-colors"
        >
          Read More
          <span className="ml-2">→</span>
        </Link>
      </div>
    </article>

  </div>

</main>

    </div>
  );
}