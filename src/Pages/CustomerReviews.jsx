// CustomerReviews.jsx
import React from "react";


// Sample reviews (aap real data ya API se replace kar dena)
const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    date: "February 15, 2026",
    comment:
      "The Banarasi silk saree I purchased is absolutely divine! The texture, shine and zari work are top-notch. Delivery was super fast. Highly recommended for pure silk lovers!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Amit Patel",
    location: "Delhi",
    rating: 5,
    date: "January 28, 2026",
    comment:
      "Bought a few meters of raw silk for custom tailoring – quality is exceptional. No color bleeding, soft to touch, and exactly as described. Will order again soon!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Sneha Gupta",
    location: "Bengaluru",
    rating: 4,
    date: "March 5, 2026",
    comment:
      "Beautiful collection of tussar silk! Loved the natural texture and earthy tones. Packaging was eco-friendly too. Only suggestion – add more color options in dupattas.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    location: "Indore",
    rating: 5,
    date: "December 20, 2025",
    comment:
      "Best place for wholesale silk fabrics in India. Prices are competitive, quality consistent, and customer service is excellent. HC Parekh team is very professional.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export default function CustomerReviews() {
  return (
    <div className="min-h-screen font-sans text-gray-800 relative">


      {/* Pure White Silk Background with subtle layers */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Base silk layer – soft white satin with shine */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/elegant-closeup-crumpled-pure-white-silk-fabric-luxury-background-texture-design-elegant-closeup-crumpled-pure-white-silk-302387604.jpg')",
            backgroundBlendMode: "soft-light",
          }}
        ></div>

        {/* Overlay silk drape for depth */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/ivory-white-silk-fabric-soft-folds-sheen-texture-image-close-up-view-flowing-material-exhibits-smooth-lustrous-391801479.jpg')",
            backgroundBlendMode: "overlay",
          }}
        ></div>

        {/* Extra gentle wave layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/luxurious-elegant-background-featuring-soft-cream-colored-silk-satin-fabric-material-beautifully-draped-folded-420411511.jpg')",
            backgroundPosition: "center top",
          }}
        ></div>

        {/* Light tint overlay to keep it bright & readable */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Main Content */}
      <main className="relative pt-10 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-[5px] uppercase text-[#8b5a2b] mb-4">
            Customer Reviews
          </h1>
          <p className="text-lg md:text-xl text-gray-700 tracking-wide">
            Hear what our valued customers say about Parekh Silk
          </p>
          <div className="w-24 h-1 bg-[#d6bfa9] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[#f0e9e0]/50 p-6 md:p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#d6bfa9]/50"
                />
                <div>
                  <h3 className="font-medium text-lg text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                  <div className="flex text-yellow-500 mt-1">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                "{review.comment}"
              </p>

              <div className="text-sm text-gray-500 italic">
                {review.date}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action / Leave a Review */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-medium text-gray-800 mb-4">
            Loved your Parekh Silk experience?
          </h2>
          <p className="text-gray-600 mb-6">
            Share your feedback with us and help others discover pure silk excellence.
          </p>
          <a
            href="mailto:hemant.parekh2012@gmail.com?subject=Customer Review - Parekh Silk"
            className="bg-[#8b5a2b] text-white px-8 py-3 rounded-md font-medium hover:bg-[#a16a3a] transition inline-flex items-center"
          >
            Submit Your Review
            <span className="ml-2">→</span>
          </a>
        </div>
      </main>

      {/* Footer Accent */}

    </div>
  );
}