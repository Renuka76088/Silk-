import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogApi, blogHeaderApi, IMAGE_BASE_URL } from "../utils/api";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [headerData, setHeaderData] = useState({
    title: "Our Blog",
    description: "Insights into the world of luxury fabrics and silk craftsmanship."
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const [headerRes, blogsRes] = await Promise.all([
          blogHeaderApi.get('ParekhSilk07'),
          blogApi.getAll('ParekhSilk07')
        ]);
        
        if (headerRes.data && headerRes.data.success && headerRes.data.data) {
          setHeaderData(headerRes.data.data);
        }

        if (blogsRes.data && blogsRes.data.success && blogsRes.data.data.length > 0) {
          const dynamicPosts = blogsRes.data.data.map(post => ({
            id: post._id,
            title: post.title,
            excerpt: post.content || "Insights into the world of luxury fabrics and silk craftsmanship.",
            date: post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "Recently Added",
            image: post.thumbnail?.startsWith("http") ? post.thumbnail : `${IMAGE_BASE_URL}/${post.thumbnail}`,
          }));
          setBlogPosts(dynamicPosts);
        } else {
          setBlogPosts([]);
        }
      } catch (error) {
        console.error("Blog fetch error:", error);
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

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
            {headerData.title || "Our Blog"}
          </h1>
          
          <div className="max-w-3xl mx-auto">
            {headerData.description && (
              <div 
                className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic mb-6 break-words overflow-hidden"
                dangerouslySetInnerHTML={{ __html: headerData.description.replace(/&nbsp;/g, ' ') }}
              />
            )}
            
            {/* HC Parekh Signature */}
            <div className="flex flex-col items-center mt-6">
               <h4 className="text-[#2C3E50] font-serif text-xl font-bold tracking-wide uppercase">
                 {headerData.authorName || "HC Parekh"}
               </h4>
               <p className="text-[#8b5a2b] text-sm font-medium tracking-[0.1em] mt-1">
                 {headerData.authorRole || "Textile Manufacturer & Entrepreneur"}
               </p>
               <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">
                 {headerData.country || "India"}
               </p>
            </div>
          </div>

          <div className="w-32 h-[1px] bg-[#d6bfa9] mx-auto mt-10 rounded-full"></div>
        </div>

        {/* Blog Grid - Dynamic Rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              onClick={() => navigate(`/page/blog/${post.id}`)}
              className="group cursor-pointer bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[#e9dede]/60 flex flex-col"
            >
              
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
                <h2 className="text-2xl font-serif text-[#2d0a4e] mb-4 leading-tight group-hover:text-[#8b5a2b] transition-colors">
                  {post.title}
                </h2>

                <div 
                  className="text-gray-600 mb-6 line-clamp-3 leading-relaxed font-sans overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: (post.excerpt || '').replace(/&nbsp;/g, ' ') }}
                />

                <div className="mt-auto">
                  <span className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[#2d0a4e] group-hover:text-[#8b5a2b] transition-all">
                    Read Article <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Loading state if needed */}
        {loading && blogPosts.length === 0 && (
          <div className="text-center py-20 text-[#8b5a2b] font-medium animate-pulse">
            Fetching latest silk stories...
          </div>
        )}

        {/* Empty state */}
        {!loading && blogPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-medium text-lg">
            No blogs available at the moment.
          </div>
        )}

      </main>
    </div>
  );
}
