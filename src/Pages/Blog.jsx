import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Timeless Elegance of Pure Banarasi Silk",
    excerpt: "Explore why Banarasi silk remains the first choice for weddings and special occasions...",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1617055407123-3d7130c1f940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2lsa3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "How to Care for Your Silk Sarees This Monsoon",
    excerpt: "Monsoon tips to keep your precious silk collection safe from humidity and stains...",
    date: "February 28, 2026",
    image: "https://images.unsplash.com/photo-1620763050148-af058ab2fff0?w=800",
  },
  {
    id: 3,
    title: "From Cocoon to Couture: The Journey of Silk",
    excerpt: "A behind-the-scenes look at how silk is made and why it's so luxurious...",
    date: "January 15, 2026",
    image: "https://plus.unsplash.com/premium_photo-1661962431511-32e4ebf7e5b0?w=800",
  },
  {
    id: 4,
    title: "Trending Silk Blouses for 2026",
    excerpt: "Latest designs and color combinations that are ruling the fashion scene...",
    date: "December 5, 2025",
    image: "https://images.unsplash.com/photo-1619043518800-7f14be467dca?w=800",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      
      {/* Silk-like Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://thumbs.dreamstime.com/b/luxury-golden-silk-satin-gradient-background-premium-minimalist-abstract-designs-383118494.jpg')`,
            backgroundBlendMode: "soft-light",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f5f0]/90 via-[#f5ede3]/85 to-[#efe5df]/80"></div>
      </div>

      {/* Main Content */}
      <main className="relative pt-16 pb-16 px-4 md:px-8 max-w-7xl mx-auto">

        {/* Header Section with Campaign & Signature */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-light tracking-[4px] uppercase text-[#8b5a2b] mb-8">
            Our Blog
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic mb-6">
              "Join and participate in our nation-wide campaign to digitalize the Textile Sector, one of the largest sectors of India."
            </p>
            
            {/* HC Parekh Signature */}
            <div className="flex flex-col items-center">
               <h4 className="text-[#2C3E50] font-serif text-xl font-bold tracking-wide uppercase">HC Parekh</h4>
               <p className="text-[#8b5a2b] text-sm font-medium tracking-[0.1em] mt-1">Textile Manufacturer & Entrepreneur</p>
               <p className="text-gray-400 text-xs mt-1">India</p>
            </div>
          </div>

          <div className="w-32 h-[1px] bg-[#d6bfa9] mx-auto mt-10 rounded-full"></div>
        </div>

        {/* Blog Grid - Dynamic Rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[#e9dede]/60 flex flex-col">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#8b5a2b] shadow-sm">
                  {post.date}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b5a2b] mb-3">Pure Silk Insights</div>

                <h2 className="text-2xl font-serif text-[#2d0a4e] mb-4 leading-tight group-hover:text-[#8b5a2b] transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed font-sans">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[#2d0a4e] group-hover:text-[#8b5a2b] transition-all"
                  >
                    Read Article <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </main>
    </div>
  );
}