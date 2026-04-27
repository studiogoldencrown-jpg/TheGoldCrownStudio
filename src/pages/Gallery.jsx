import React, { useState } from 'react';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const images = [
    { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Bridal" },
    { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Makeup" },
    { src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Hair" },
    { src: "https://images.unsplash.com/photo-1512496015851-a1dc8a477d81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Makeup" },
    { src: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Bridal" },
    { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Hair" },
    { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Makeup" },
    { src: "https://images.unsplash.com/photo-1516975080661-46b0a7019dc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Bridal" },
    { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Hair" }
  ];

  const categories = ['All', 'Bridal', 'Makeup', 'Hair'];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="bg-white pt-24 md:pt-36 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif mb-4">Our Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore some of our finest work and get inspired for your next transformation.</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="masonry-grid">
          {filteredImages.map((image, idx) => (
            <div key={idx} className="masonry-item relative group overflow-hidden rounded-lg shadow-sm cursor-pointer mb-6 inline-block w-full">
              <img 
                src={image.src} 
                alt={`${image.category} work`} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wider uppercase text-sm border border-white px-4 py-2 rounded-sm">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
