import React, { useState } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1769127518133-db2fa7237be3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RU1CUk9JREVSRUQlMjBGQUJSSUNTfGVufDB8fDB8fHww", // replace with your real image URLs
  "https://media.istockphoto.com/id/814637022/photo/ukrainian-folk-embroidery.webp?a=1&b=1&s=612x612&w=0&k=20&c=9T9TJnr8wCJ2E4tHWTmMD4Mgcknqze3RCTnge3gW5Tk=",
  "https://plus.unsplash.com/premium_photo-1768063983598-a984bde31a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1755192680693-68ab7a2afbc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMXx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1764251084704-189fce82f3aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNXx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1770663987512-4f87e87c5d45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMXx8fGVufDB8fHx8fA%3D%3D",
];

export default function EmbroideredCollection() {
  const [current, setCurrent] = useState(0);

  // Optional: auto slide every 4 sec
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Title */}
      <h2 className="text-center text-3xl font-normal mb-1">THE EMBROIDERED COLLECTION</h2>
      <p className="text-center text-pink-500 uppercase tracking-wide text-sm mb-8">
        EXPLORE OUR RANGE OF EMBROIDERED FABRICS
      </p>

      {/* Images Row */}
      <div className="flex justify-center space-x-4 overflow-x-auto scrollbar-hide">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`embroidered fabric ${idx + 1}`}
            className={`w-[160px] h-[180px] object-cover flex-shrink-0 rounded-md cursor-pointer
              ${current === idx ? "ring-2 ring-white-500" : "opacity-80 hover:opacity-100 transition-opacity duration-300"}`}
            onClick={() => setCurrent(idx)}
            draggable={false}
          />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300
              ${current === idx ? "bg-black" : "bg-gray-300"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}