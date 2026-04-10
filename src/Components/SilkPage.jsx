import React, { useState, useEffect } from "react";
import { Search, ChevronDown, Loader2 } from "lucide-react";
import { productApi } from "../utils/api";

const staticProductData = [
  { id: 1, name: "DUPIONI SILK FABRIC", count: "37 PRODUCTS", img: "https://images.unsplash.com/photo-1619043518800-7f14be467dca?w=600&auto=format&fit=crop&q=60" },
  { id: 2, name: "RAW SILK CHECKS FABRIC", count: "4 PRODUCTS", img: "https://images.unsplash.com/photo-1620763050148-af058ab2fff0?w=600&auto=format&fit=crop&q=60" },
  { id: 3, name: "SEMI RAW SILK FABRIC", count: "14 PRODUCTS", img: "https://images.unsplash.com/photo-1617055407123-3d7130c1f940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2lsa3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 4, name: "TISSUE RAW SILK FABRIC", count: "16 PRODUCTS", img: "https://plus.unsplash.com/premium_photo-1661962431511-32e4ebf7e5b0?w=600&auto=format&fit=crop&q=60" },
];

export default function SilkPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productApi.getAll('ParekhSilk07');
        if (response.data.success && response.data.data.length > 0) {
          const dynamicProducts = response.data.data.map(p => ({
            id: p._id,
            name: p.title,
            category: p.category,
            img: `http://localhost:5000/${p.image}`,
            isProduct: true
          }));
          setProducts(dynamicProducts);
        } else {
          // Add isProduct: true to static data for demonstration if needed, 
          // or just show static categories
          setProducts(staticProductData);
        }
      } catch (error) {
        console.error("Products fetch error:", error);
        setProducts(staticProductData);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (p.category && p.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Group products by category only if they are dynamic products
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (product.isProduct) {
      const cat = product.category || "OTHERS";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(product);
    }
    return acc;
  }, {});

  const isDynamic = products.length > 0 && products[0].isProduct;

  return (
    <div className="bg-[#f2f4f7] min-h-screen font-sans selection:bg-[#ff7ba1]/20">
      {/* 1. Header Banner */}
      <div className="bg-[#fcd4d4] py-16 md:py-20 px-5 md:px-6 text-center shadow-inner">
        <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-black mb-4 uppercase leading-none">
          RAW SILK <span className="opacity-40">COLLECTION</span>
        </h1>
        <p className="text-[12px] md:text-[13px] text-black/70 max-w-3xl mx-auto leading-relaxed font-bold uppercase tracking-widest">
          Luxurious 100% silk fibers from Fabenzo. Premium quality for fashion projects and home decor. 
          Contact us at <span className="text-slate-900 border-b-2 border-slate-900">+91 8217771201</span> to order.
        </p>
      </div>

      {/* 2. Results Counter & Search Bar */}
      <div className="max-w-[1350px] mx-auto mt-8 px-4">
        <div className="flex border border-[#e0e0e0] bg-white shadow-xl rounded-sm overflow-hidden group focus-within:border-[#ff7ba1] transition-all">
          <div className="bg-[#FAF9F6] p-4 flex items-center justify-center border-r border-[#e0e0e0]">
            <Search size={18} className="text-[#333]" />
          </div>
          <input
            type="text"
            placeholder="Search our silk catalog..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow px-6 py-4 text-[13px] md:text-[14px] outline-none placeholder:text-gray-300 font-bold uppercase tracking-widest text-[#333]"
          />
        </div>
      </div>

      {/* 3. Product Grid */}
      <div className="max-w-[1350px] mx-auto px-4 py-12 md:py-16">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-[#ff7ba1]" size={40} />
          </div>
        ) : (
          <div>
            {isDynamic ? (
              Object.keys(groupedProducts).map((category) => (
                <div key={category} className="mb-16 last:mb-0">
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter whitespace-nowrap">
                      {category} <span className="text-[#ff7ba1] opacity-50">/</span>
                    </h2>
                    <div className="h-[2px] w-full bg-slate-200"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {groupedProducts[category].map((item) => (
                      <ProductCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No silk products found matching your search.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductCard({ item }) {
  return (
    <div
      className="bg-white group overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
        <img
          src={item.img}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
        />
        {!item.isProduct && (
          <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-sm p-4 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <h3 className="text-[11px] font-black text-black uppercase tracking-widest">{item.name}</h3>
            <p className="text-[9px] text-gray-400 mt-1 font-bold">{item.count}</p>
          </div>
        )}
      </div>

      {/* Product Info */}
      {item.isProduct && (
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-[9px] font-black text-[#ff7ba1] uppercase tracking-[0.2em] mb-2">
            {item.category}
          </p>
          <h3 className="text-[13px] font-black text-slate-900 mb-4 line-clamp-2 uppercase tracking-tight leading-tight">
            {item.name}
          </h3>
          <button className="mt-auto w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-[10px] font-black py-3 rounded-sm transition-all uppercase tracking-widest">
            Quick Enquiry
          </button>
        </div>
      )}
    </div>
  );
}