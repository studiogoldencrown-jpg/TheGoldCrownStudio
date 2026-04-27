import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const base = import.meta.env.BASE_URL;

  const slides = [
    {
      desktop: `${base}images/home-banner-2.png`,
      tablet: `${base}images/home-banner-2.png`,
      mobile: `${base}images/home-banner-2-mobile.png`
    },
    {
      desktop: `${base}images/home-banner.png`,
      tablet: `${base}images/home-banner-tablet.png`,
      mobile: `${base}images/home-banner-mobile.png`
    }
  ];

  const reviews = [
    { name: "Priya Sharma", text: "Absolutely loved my bridal makeup! Sunita ma'am understood exactly what I wanted. The makeup lasted all night and looked flawless in photos." },
    { name: "Neha Verma", text: "Best salon in Kanpur! The staff is very professional and the hygiene standards are excellent. Highly recommend for party makeup." },
    { name: "Aditi Singh", text: "I had a wonderful experience. The hair spa and styling were amazing. The ambiance of the studio is very relaxing and luxurious." },
    { name: "Meenakshi Dixit", text: "Very good service. The facial was very relaxing and my skin felt amazing afterwards. Will definitely visit again." },
    { name: "Shruti Agarwal", text: "Got my engagement makeup done here. Got so many compliments! The team is very polite and skilled." },
    { name: "Kavya Tiwari", text: "Premium services at reasonable prices. The quality of products used is top-notch. Loved the overall experience." }
  ];

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(heroTimer);
  }, [slides.length]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: 'clamp(420px, 70vh, 700px)' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <picture>
              <source media="(min-width: 1024px)" srcSet={slide.desktop} />
              <source media="(min-width: 768px)" srcSet={slide.tablet} />
              <img
                src={slide.mobile}
                alt="Salon Hero"
                className="object-cover w-full h-full"
              />
            </picture>
          </div>
        ))}
        

      </section>

      {/* About Preview & Video */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/20">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/5LJlp4SSdrY" 
                title="Gold Crown Studio Makeup Showcase" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="border-0"
              ></iframe>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">The Expert Touch</h3>
            <h2 className="text-4xl font-serif mb-6">Meet Sunita Gupta & Gold Crown Studio</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With <strong>over a decade of professional experience</strong> in the beauty industry, renowned makeup artist Sunita Gupta has established Gold Crown Studio as Kanpur's premier destination for luxury bridal and party makeup.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Her signature style focuses on enhancing natural beauty rather than masking it. Using only high-end, premium international products, she ensures every bride looks absolutely flawless, radiant, and confident on her special day. Watch our showcase video to see the magic happen!
            </p>
            <Link to="/about" className="inline-flex items-center bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gold hover:text-black transition-colors shadow-md">
              Read Our Full Story <ChevronRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">Our Offerings</h3>
            <h2 className="text-4xl font-serif">Premium Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Bridal Makeup", 
                img: "https://freelancemakeupartistinkanpursunitagupta.wordpress.com/wp-content/uploads/2024/06/the-art-of-bridal-makeup-insights-from-sunita-gupta.jpg", 
                desc: "Flawless perfection for your big day." 
              },
              { 
                title: "Party Makeup", 
                img: "https://freelancemakeupartistinkanpursunitagupta.wordpress.com/wp-content/uploads/2024/06/sunita-guptas-golden-touch-elevating-kanpurs-beauty-scene.jpg", 
                desc: "Stand out at any event." 
              },
              { 
                title: "Hair Styling", 
                img: "https://freelancemakeupartistinkanpursunitagupta.wordpress.com/wp-content/uploads/2024/06/sunita-gupta-where-creativity-meets-makeup-artistry.jpg", 
                desc: "Elegant styles for every occasion." 
              },
              { 
                title: "Skin Care", 
                img: "https://freelancemakeupartistinkanpursunitagupta.wordpress.com/wp-content/uploads/2024/06/the-magic-of-makeup-with-sunita-gupta.jpg", 
                desc: "Rejuvenating treatments for a natural glow." 
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg shadow-md bg-white">
                <div className="h-64 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border border-black hover:bg-black hover:text-white px-8 py-3 rounded-md transition-colors font-medium">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Follow CTA */}
      <section className="py-20 overflow-hidden relative" style={{background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}>
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center text-white">
          {/* Instagram icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-5 shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="white">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="none" stroke="white" strokeWidth="1.5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="white" strokeWidth="1.5"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <p className="text-white/80 uppercase tracking-widest text-sm font-semibold mb-3">Follow us on Instagram</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">@goldcrownstudio</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            See our latest bridal transformations, makeup tutorials, and behind-the-scenes moments. Updated daily!
          </p>

          {/* Stats row */}
          <div className="flex justify-center gap-10 md:gap-20 mb-12">
            {[
              { label: "Posts", value: "500+" },
              { label: "Followers", value: "10K+" },
              { label: "Happy Brides", value: "1000+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://www.instagram.com/goldcrownstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-pink-600 font-bold px-10 py-4 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Follow for Daily Updates
          </a>
        </div>
      </section>

      {/* YouTube Shorts Carousel */}

      <section className="py-20 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">Our Portfolio</h3>
              <h2 className="text-4xl font-serif">Trending Reels & Shorts</h2>
            </div>
            <a href="https://www.youtube.com/@user-yt8mw6bd8x/shorts" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-sm font-medium hover:text-gold transition-colors">
              View All on YouTube <ChevronRight className="ml-1" size={16} />
            </a>
          </div>

          {/* Horizontal scroll container */}
          <div 
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Displaying the most recent Shorts dynamically fetched from the channel */}
            {[
              "ptI8t3Wfdxs", "IjI10GioDGU", "vxfhpQy0iuA", "NXn05Syrk-I", 
              "Lf7MCdKj8FI", "AKoKe80iKHQ", "JeWKBjEA_bA", "7M3oC2Exy6E"
            ].map((videoId, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] md:w-[320px] aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?loop=1&playlist=${videoId}&modestbranding=1`}
                  title={`Gold Crown Studio Short ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-2 md:hidden">
            <a href="https://www.youtube.com/@user-yt8mw6bd8x/shorts" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium hover:text-gold transition-colors">
              View All on YouTube <ChevronRight className="ml-1" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Reviews - Live Elfsight Widget */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">What Our Clients Say</h2>
            <div className="flex justify-center text-gold mb-2">
              <Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} />
            </div>
            <p className="text-gray-600">Live Google Reviews</p>
          </div>

          {/* Elfsight Google Reviews Widget */}
          <div className="elfsight-app-75cb162e-8b2a-4952-ab69-1e166692a617" data-elfsight-app-lazy></div>
          
        </div>
      </section>

    </div>
  );
};

export default Home;
