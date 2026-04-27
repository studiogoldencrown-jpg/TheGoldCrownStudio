import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Menu, X } from 'lucide-react';

const serviceCategories = [
  {
    id: "bridal-makeup",
    label: "Bridal Make Up",
    emoji: "👰",
    description: "Look absolutely radiant on your wedding day with our expert bridal makeup services. Sunita Gupta and her team specialise in HD, Airbrush and traditional bridal looks tailored to your skin tone, outfit and personal style.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    services: [
      { name: "HD Bridal Makeup", price: "₹15,000", desc: "Crystal-clear finish perfect for photos & video." },
      { name: "Airbrush Bridal Makeup", price: "₹20,000", desc: "Flawless long-lasting coverage using airbrush technology." },
      { name: "Pre-Bridal Package", price: "₹10,000", desc: "Complete skin prep session 4–7 days before the big day." },
      { name: "Engagement Makeup", price: "₹8,000", desc: "Elegant, radiant look for your ring ceremony." },
      { name: "Mehendi / Sangeet Makeup", price: "₹6,000", desc: "Colourful, festive makeup for pre-wedding events." },
      { name: "Reception Makeup", price: "₹12,000", desc: "Glamorous evening look for the reception night." },
    ]
  },
  {
    id: "hair-service",
    label: "Hair Service",
    emoji: "💇‍♀️",
    description: "From silky keratin treatments to stunning bridal updos, our experienced hair artists create styles that complement your personality and outfit.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80",
    services: [
      { name: "Basic Hair Styling", price: "₹1,500", desc: "Blowdry, straightening or basic curls." },
      { name: "Advanced Updo / Bridal Hair", price: "₹2,500", desc: "Elaborate pinned styles for weddings & events." },
      { name: "Hair Spa", price: "₹1,200", desc: "Deep conditioning treatment for shine and strength." },
      { name: "Keratin Treatment", price: "Starts ₹4,000", desc: "Frizz-free, silky smooth hair for months." },
      { name: "Rebonding", price: "Starts ₹3,500", desc: "Permanent straightening for unruly hair." },
      { name: "Hair Colouring", price: "Starts ₹2,000", desc: "Global, highlights or ombre colouring." },
    ]
  },
  {
    id: "skin-services",
    label: "Skin Services",
    emoji: "✨",
    description: "Give your skin the royal treatment it deserves. Our certified skin therapists use premium products to deeply cleanse, hydrate and rejuvenate your complexion.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    services: [
      { name: "Gold Facial", price: "₹2,500", desc: "Anti-aging 24K gold-infused facial for a luminous glow." },
      { name: "Diamond Facial", price: "₹3,500", desc: "Microdermabrasion + diamond scrub for flawless skin." },
      { name: "O3+ Bridal Facial", price: "₹4,500", desc: "Professional bridal glow facial for pre-wedding prep." },
      { name: "Basic Cleanup", price: "₹800", desc: "Deep pore cleansing and basic moisturising." },
      { name: "Tan Removal Pack", price: "₹1,200", desc: "Brightening treatment for sun-damaged skin." },
      { name: "Bleach", price: "₹600", desc: "Face and neck brightening bleach treatment." },
    ]
  },
  {
    id: "body-services",
    label: "Body Services",
    emoji: "🌸",
    description: "Pamper yourself from head to toe with our luxurious body treatments. Whether it's relaxation, tan removal or full-body polishing — we've got you covered.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
    services: [
      { name: "Full Body Bleach", price: "₹2,500", desc: "Head-to-toe brightening bleach treatment." },
      { name: "Full Body Wax", price: "₹2,000", desc: "Smooth, long-lasting hair removal." },
      { name: "Body Polishing", price: "₹3,000", desc: "Exfoliation + moisturising for silky soft skin." },
      { name: "Tan Removal Treatment", price: "₹1,800", desc: "Full body de-tan for an even skin tone." },
      { name: "Detan Pack (Face + Neck)", price: "₹800", desc: "Targeted tan removal for face and neck." },
      { name: "Threading (Full Face)", price: "₹150", desc: "Eyebrows, upper lip and full face threading." },
    ]
  },
  {
    id: "pedicure-manicure",
    label: "Pedicure Manicure",
    emoji: "💅",
    description: "Treat your hands and feet to our relaxing and beautifying manicure and pedicure services. From basic care to luxurious spa-level treatments.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
    services: [
      { name: "Basic Manicure", price: "₹500", desc: "Nail shaping, cuticle care, moisturise and polish." },
      { name: "Spa Manicure", price: "₹1,000", desc: "Scrub, mask, massage and premium polish." },
      { name: "Basic Pedicure", price: "₹700", desc: "Soak, scrub, nail care and polish." },
      { name: "Spa Pedicure", price: "₹1,500", desc: "Full spa treatment with mask, massage and polish." },
      { name: "Gel Nail Extension", price: "₹2,500", desc: "Long-lasting gel nails in your choice of shape." },
      { name: "Nail Art", price: "Starts ₹300", desc: "Custom nail art designs per nail." },
    ]
  },
  {
    id: "extension-studio",
    label: "Extension Studio",
    emoji: "🌟",
    description: "Instantly transform your look with our professional hair and eyelash extension services. Our extension studio uses premium, natural-looking materials for stunning results.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    services: [
      { name: "Eyelash Extensions (Classic)", price: "₹2,000", desc: "Natural lash look, one extension per natural lash." },
      { name: "Eyelash Extensions (Volume)", price: "₹3,500", desc: "Dramatic, full volume lash fans." },
      { name: "Clip-in Hair Extensions", price: "₹1,500", desc: "Instant length and volume for events." },
      { name: "Tape-in Hair Extensions", price: "Starts ₹5,000", desc: "Semi-permanent extensions blended with natural hair." },
      { name: "Eyelash Refill", price: "₹1,000", desc: "Maintenance session for existing lash extensions." },
      { name: "Eyebrow Extensions", price: "₹1,200", desc: "Fuller brows with individual hair strokes." },
    ]
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState("bridal-makeup");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && serviceCategories.find(s => s.id === hash)) {
      setActiveId(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  const active = serviceCategories.find(s => s.id === activeId) || serviceCategories[0];

  return (
    <div className="bg-white pb-20">
      {/* Page Header */}
      <div className="bg-black text-white py-14 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-3 text-gold">Our Services</h1>
        <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
          Premium beauty & makeup services by Sunita Gupta — Gold Crown Studio, Kanpur
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Mobile Layout: Scrollable List of All Categories ── */}
        <div className="flex flex-col gap-12 lg:hidden">
          {serviceCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-24">
              {/* Hero image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6 h-56">
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h2 className="text-3xl font-serif text-white font-bold drop-shadow">
                    {category.emoji} {category.label}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{category.description}</p>

              {/* Services list */}
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                Pricing & Services
              </h3>
              <div className="flex flex-col gap-3">
                {category.services.map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                      <span className="text-gold font-bold text-sm ml-2 whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="bg-black text-white rounded-2xl px-6 py-8 text-center mt-4 shadow-xl">
            <h3 className="text-2xl font-serif mb-2">Ready to Book?</h3>
            <p className="text-gray-400 text-sm mb-5">Contact us today and let Sunita Gupta and her team take care of you.</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/919839550961"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Book on WhatsApp
              </a>
              <Link
                to="/contact"
                className="border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* ── Desktop Layout: Sidebar + Detail Panel ── */}
        <div className="hidden lg:flex flex-row gap-8">
          <aside className="w-64 flex-shrink-0">
            <nav className="block">
              <ul className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                {serviceCategories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => { setActiveId(cat.id); }}
                      className={`w-full text-left flex items-center justify-between px-5 py-4 text-sm font-medium border-b border-gray-100 last:border-0 transition-all ${
                        activeId === cat.id
                          ? 'bg-black text-gold font-semibold'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{cat.emoji}</span>
                        {cat.label}
                      </span>
                      {activeId === cat.id && <ChevronRight size={16} />}
                    </button>
                  </li>
                ))}
              </ul>
              {/* Book CTA in sidebar */}
              <a
                href="https://wa.me/919839550961"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center bg-gold hover:bg-yellow-500 text-black font-semibold px-4 py-3 rounded-xl text-sm transition-colors shadow"
              >
                📲 Book on WhatsApp
              </a>
            </nav>
          </aside>

          {/* Service Detail Panel */}
          <div className="flex-1 min-w-0">
            <div key={active.id} className="animate-fadeIn">
              {/* Hero image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8 h-80">
                <img
                  src={active.image}
                  alt={active.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-4xl font-serif text-white font-bold drop-shadow">
                    {active.emoji} {active.label}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8 text-base">{active.description}</p>

              {/* Services list */}
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-3">
                Pricing & Services
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {active.services.map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                      <span className="text-gold font-bold text-sm ml-2 whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA Banner */}
              <div className="bg-black text-white rounded-2xl px-8 py-8 text-center">
                <h3 className="text-2xl font-serif mb-2">Ready to Book {active.label}?</h3>
                <p className="text-gray-400 text-sm mb-5">Contact us today and let Sunita Gupta and her team take care of you.</p>
                <div className="flex flex-row gap-3 justify-center">
                  <a
                    href="https://wa.me/919839550961"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Book on WhatsApp
                  </a>
                  <Link
                    to="/contact"
                    className="border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
