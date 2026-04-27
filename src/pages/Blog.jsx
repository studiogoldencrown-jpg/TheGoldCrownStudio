import React, { useState, useMemo } from 'react';
import { Search, Calendar, User, ArrowRight, Tag, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArchive, setSelectedArchive] = useState(null);

  const posts = [
    {
      id: 1,
      title: "Top 5 Bridal Makeup Trends for 2024",
      excerpt: "Discover the latest bridal makeup trends that will make you look stunning on your big day. From minimalist glass skin looks to bold graphic eyes, find your perfect style.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
      date: "October 2023",
      author: "Sunita Gupta",
      category: "Bridal"
    },
    {
      id: 2,
      title: "Essential Skincare Routine for Glowing Skin",
      excerpt: "A step-by-step guide to achieving and maintaining naturally glowing skin. Learn about the right products, order of application, and techniques for your specific skin type.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
      date: "September 2023",
      author: "Beauty Team",
      category: "Skincare"
    },
    {
      id: 3,
      title: "Choosing the Right Hairstyle for Your Face Shape",
      excerpt: "Not sure which hairstyle suits you best? Read our comprehensive guide on matching haircuts and styling techniques with oval, round, square, and heart-shaped faces.",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80",
      date: "September 2023",
      author: "Sunita Gupta",
      category: "Hair"
    },
    {
      id: 4,
      title: "The Ultimate Guide to Long-Lasting Party Makeup",
      excerpt: "Get ready for the festive season with our expert tips on creating glamorous party makeup looks that survive dancing, sweating, and eating.",
      image: "https://images.unsplash.com/photo-1512496015851-a1dc8a477d81?auto=format&fit=crop&w=1200&q=80",
      date: "August 2023",
      author: "Beauty Team",
      category: "Makeup"
    },
    {
      id: 5,
      title: "Why You Need a Pre-Bridal Package",
      excerpt: "Thinking of skipping the pre-bridal prep? Here is why investing in body polishing, deep cleansing, and hair spas weeks before your wedding makes a massive difference.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
      date: "July 2023",
      author: "Sunita Gupta",
      category: "Bridal"
    }
  ];

  // Derive categories and their counts dynamically
  const categories = useMemo(() => {
    const counts = {};
    posts.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [posts]);

  // Derive archives and their counts dynamically
  const archives = useMemo(() => {
    const counts = {};
    posts.forEach(post => {
      counts[post.date] = (counts[post.date] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [posts]);

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    const matchesArchive = selectedArchive ? post.date === selectedArchive : true;
    return matchesSearch && matchesCategory && matchesArchive;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedArchive(null);
  };

  return (
    <div className="bg-gray-50 pb-20">
      
      {/* Page Header */}
      <div className="bg-black text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gold">Beauty & Style Blog</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Expert tips, latest trends, and comprehensive tutorials from Sunita Gupta and the Gold Crown Studio team.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* ── Main Content (Left) ── */}
          <div className="lg:w-2/3">
            
            {/* Active Filters Display */}
            {(selectedCategory || selectedArchive || searchTerm) && (
              <div className="mb-8 flex items-center gap-3 flex-wrap">
                <span className="text-gray-500 text-sm">Showing results for:</span>
                {selectedCategory && (
                  <span className="bg-gold/20 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory(null)} className="ml-2 hover:text-black">&times;</button>
                  </span>
                )}
                {selectedArchive && (
                  <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    Month: {selectedArchive}
                    <button onClick={() => setSelectedArchive(null)} className="ml-2 hover:text-black">&times;</button>
                  </span>
                )}
                {searchTerm && (
                  <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    Search: "{searchTerm}"
                    <button onClick={() => setSearchTerm('')} className="ml-2 hover:text-black">&times;</button>
                  </span>
                )}
                <button onClick={resetFilters} className="text-sm text-blue-600 hover:underline">Clear All</button>
              </div>
            )}

            {/* Blog Posts Feed */}
            <div className="space-y-12">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="h-64 sm:h-80 lg:h-96 overflow-hidden relative cursor-pointer">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded text-black">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center text-xs text-gray-500 mb-4 space-x-6">
                        <span className="flex items-center"><Calendar size={14} className="mr-1.5 text-gold" /> {post.date}</span>
                        <span className="flex items-center"><User size={14} className="mr-1.5 text-gold" /> By {post.author}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-gray-900 group-hover:text-gold transition-colors cursor-pointer">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <button className="inline-flex items-center text-black font-bold text-sm uppercase tracking-wider hover:text-gold transition-colors">
                        Read Article <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                  <div className="text-gray-400 mb-4 flex justify-center"><Search size={48} /></div>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your filters or search terms.</p>
                  <button onClick={resetFilters} className="mt-6 border border-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition-colors">
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ── Sidebar (Right) ── */}
          <aside className="lg:w-1/3 space-y-8">
            
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow bg-gray-50"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3 flex items-center">
                <Tag size={18} className="mr-2 text-gold" /> Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => setSelectedCategory(cat.name === selectedCategory ? null : cat.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-sm ${
                        selectedCategory === cat.name 
                          ? 'bg-black text-gold font-semibold' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                      }`}
                    >
                      <span className="flex items-center">
                        <ChevronRight size={14} className={`mr-2 ${selectedCategory === cat.name ? 'opacity-100' : 'opacity-0'}`} />
                        {cat.name}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${selectedCategory === cat.name ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {cat.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Archives Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3 flex items-center">
                <Calendar size={18} className="mr-2 text-gold" /> Archives
              </h3>
              <ul className="space-y-2">
                {archives.map((arch, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => setSelectedArchive(arch.name === selectedArchive ? null : arch.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-sm ${
                        selectedArchive === arch.name 
                          ? 'bg-black text-gold font-semibold' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                      }`}
                    >
                      <span>{arch.name}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${selectedArchive === arch.name ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {arch.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Banner in Sidebar */}
            <div className="bg-black text-white p-8 rounded-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl translate-x-10 -translate-y-10"></div>
              <h3 className="text-2xl font-serif font-bold mb-3 relative z-10 text-gold">Need a Makeover?</h3>
              <p className="text-gray-300 text-sm mb-6 relative z-10 leading-relaxed">Book a consultation with Sunita Gupta and let us enhance your natural beauty.</p>
              <a 
                href="https://wa.me/919839550961" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gold hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg transition-colors relative z-10 shadow-lg"
              >
                Book Appointment
              </a>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
