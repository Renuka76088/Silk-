import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Loader2 } from 'lucide-react';
import { blogApi, IMAGE_BASE_URL } from '../utils/api';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const cleanHtml = (html) => {
    if (!html) return '';
    return html.replace(/&nbsp;/g, ' ').replace(/\u00a0/g, ' ');
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await blogApi.getById(id);
        if (res.data && res.data.success) {
          setBlog(res.data.data);
        } else {
          setBlog(null);
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center pt-32">
        <Loader2 className="w-10 h-10 animate-spin text-[#8b5a2b] mb-4" />
        <p className="text-xs font-bold uppercase tracking-widest text-[#8b5a2b]">Loading Article...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center pt-32 px-6 text-center">
        <h2 className="text-2xl font-black text-[#2d0a4e] uppercase tracking-tight mb-4">Article Not Found</h2>
        <button
          onClick={() => navigate('/page/blog')}
          className="flex items-center gap-2 text-sm font-bold text-[#8b5a2b] uppercase tracking-wider hover:text-[#2d0a4e] transition-colors"
        >
          <ArrowLeft size={16} /> Back to Articles
        </button>
      </div>
    );
  }

  const blogImage = blog.imageUrl ||
    (blog.thumbnail ? (blog.thumbnail.startsWith('http') ? blog.thumbnail : `${IMAGE_BASE_URL}/${blog.thumbnail}`) :
    (blog.image ? (blog.image.startsWith('http') ? blog.image : `${IMAGE_BASE_URL}/${blog.image}`) : null));

  const formatDate = (d) => {
    if (!d) return '';
    const parsed = new Date(d);
    if (!isNaN(parsed.getTime())) {
      return parsed.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
    return d;
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen overflow-x-hidden font-sans relative">

      {/* Scoped CSS for rich-text content safety */}
      <style>{`
        .blog-body,
        .blog-body * {
          word-break: normal !important;
          overflow-wrap: break-word !important;
          word-wrap: break-word !important;
          white-space: normal !important;
          max-width: 100% !important;
        }
        .blog-body {
          width: 100%;
          overflow-x: hidden;
        }
        .blog-body p {
          margin-bottom: 1rem;
          font-weight: 400;
          color: #4a4a4a;
          line-height: 1.85;
          font-size: 1.05rem;
        }
        .blog-body h2,
        .blog-body h3,
        .blog-body h4 {
          color: #2d0a4e;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .blog-body h2 { font-size: 1.6rem; border-bottom: 2px solid #eaeaea; padding-bottom: 0.5rem; }
        .blog-body h3 { font-size: 1.3rem; }
        .blog-body strong { color: #8b5a2b; font-weight: 700; }
        .blog-body blockquote {
          border-left: 4px solid #8b5a2b;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          background: #fdfaf7;
          border-radius: 0 1rem 1rem 0;
          font-style: italic;
          color: #2d0a4e;
          font-size: 1.1rem;
        }
        .blog-body ul, .blog-body ol {
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .blog-body ul li { list-style-type: disc; margin-bottom: 0.5rem; color: #4a4a4a; }
        .blog-body ol li { list-style-type: decimal; margin-bottom: 0.5rem; color: #4a4a4a; }
        .blog-body a { color: #8b5a2b; text-decoration: underline; font-weight: 600; }
        .blog-body a:hover { color: #2d0a4e; }
        .blog-body img { max-width: 100%; height: auto; border-radius: 1rem; margin: 2rem 0; }
      `}</style>

      {/* Background elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://thumbs.dreamstime.com/b/luxury-golden-silk-satin-gradient-background-premium-minimalist-abstract-designs-383118494.jpg')",
            backgroundBlendMode: "soft-light",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/90 via-[#FAF9F6]/95 to-[#FAF9F6]"></div>
      </div>

      {/* ── BREADCRUMB NAV ── */}
      <div className="pt-20 pb-4 px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigate('/page/blog')}
            className="group flex items-center gap-2 text-xs font-bold text-[#8b5a2b] uppercase tracking-widest hover:text-[#2d0a4e] transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </button>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <span>Home</span>
            <span className="text-gray-300">/</span>
            <span>Blog</span>
            <span className="text-gray-300">/</span>
            <span className="text-[#8b5a2b] truncate max-w-[140px]">{blog.title}</span>
          </div>
        </div>
      </div>

      {/* ── ARTICLE HEADER ── */}
      <div className="pb-8 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-[10px] font-bold text-[#8b5a2b] uppercase tracking-[0.3em] bg-[#fdfaf7] border border-[#e8ded2] px-4 py-1.5 rounded-full">
            {blog.tag || blog.category || 'Pure Silk Insights'}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#2d0a4e] leading-[1.1] break-words"
            style={{ wordBreak: 'normal', overflowWrap: 'break-word' }}>
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-5 text-gray-500 text-xs font-bold uppercase tracking-wider pt-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#8b5a2b]" />
              {formatDate(blog.date) || formatDate(blog.createdAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-[#8b5a2b]" />
              {blog.author || 'HC Parekh'}
            </span>
          </div>
          <div className="w-24 h-[1px] bg-[#d6bfa9] mx-auto mt-6"></div>
        </div>
      </div>

      {/* ── CONTENT AREA ── */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-2 pb-16 relative z-10">

        {/* Banner Image */}
        {blogImage && (
          <div className="max-w-3xl mx-auto mb-8 rounded-[2rem] overflow-hidden shadow-lg border border-[#e8ded2] bg-white">
            <img
              src={blogImage}
              alt={blog.title}
              className="w-full h-auto max-h-[500px] object-cover transition-all duration-700 hover:scale-105"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        )}

        {/* Rich Text Body */}
        <article className="blog-body max-w-full overflow-hidden bg-white/60 backdrop-blur-sm p-6 md:p-10 rounded-3xl border border-[#e8ded2] shadow-sm">
          <div dangerouslySetInnerHTML={{ __html: cleanHtml(blog.content) }} />
        </article>

        {/* Footer back button */}
        <div className="pt-10 flex justify-center">
          <button
            onClick={() => navigate('/page/blog')}
            className="group inline-flex items-center gap-3 bg-[#8b5a2b] text-white hover:bg-[#2d0a4e] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl active:scale-95"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Return to Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
