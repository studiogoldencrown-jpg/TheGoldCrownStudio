import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBgClass = isScrolled ? 'bg-black text-white shadow-lg py-3' : 'bg-black/95 text-white py-4 md:py-5';

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 transition-all duration-300 bg-black">
      {/* Top Bar */}
      <div className="bg-gold text-black py-2 font-medium text-sm hidden md:block shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+919839550961" className="flex items-center hover:opacity-75 transition-opacity">
              <Phone size={14} className="mr-2" />
              +91 98395 50961
            </a>
            <a href="https://wa.me/919839550961" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-75 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              WhatsApp Us
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-black/80 hidden lg:flex">
              <Clock size={14} className="mr-1.5" />
              Mon-Sat: 10AM - 20PM
            </span>
            <a href="https://maps.app.goo.gl/UjN3EQ2uC3nW8omJ8" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity flex items-center">
              Find Us on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${navBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Gold Crown Studio Logo" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                link.name === 'Services' ? (
                  <div key={link.name} className="relative group">
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-gold ${
                        location.pathname === link.path ? 'text-gold' : 'text-gray-200'
                      }`}
                    >
                      {link.name}
                    </Link>
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-gold ring-opacity-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-2">
                      <div className="py-1 bg-black rounded-md border border-gray-800 shadow-xl">
                        <Link to="/services#bridal-makeup" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold hover:bg-gray-900">Bridal Make Up</Link>
                        <Link to="/services#hair-service" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold hover:bg-gray-900">Hair Service</Link>
                        <Link to="/services#skin-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold hover:bg-gray-900">Skin Services</Link>
                        <Link to="/services#body-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold hover:bg-gray-900">Body Services</Link>
                        <Link to="/services#pedicure-manicure" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold hover:bg-gray-900">Pedicure Manicure</Link>
                        <Link to="/services#extension-studio" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold hover:bg-gray-900">Extension Studio</Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-gold ${
                      location.pathname === link.path ? 'text-gold' : 'text-gray-200'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black/95 absolute w-full`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:text-gold hover:bg-gray-800 ${
                  location.pathname === link.path ? 'text-gold bg-gray-900' : 'text-gray-200'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
              {link.name === 'Services' && (
                <div className="pl-6 space-y-1 mt-1 mb-2">
                  <Link to="/services#bridal-makeup" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gold hover:bg-gray-800">Bridal Make Up</Link>
                  <Link to="/services#hair-service" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gold hover:bg-gray-800">Hair Service</Link>
                  <Link to="/services#skin-services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gold hover:bg-gray-800">Skin Services</Link>
                  <Link to="/services#body-services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gold hover:bg-gray-800">Body Services</Link>
                  <Link to="/services#pedicure-manicure" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gold hover:bg-gray-800">Pedicure Manicure</Link>
                  <Link to="/services#extension-studio" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gold hover:bg-gray-800">Extension Studio</Link>
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-gray-800 mt-2 pt-2 pb-2">
            <a href="tel:+919839550961" className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gold hover:bg-gray-800 flex items-center">
              <Phone size={18} className="mr-3 text-gold" /> Call Us
            </a>
            <a href="https://wa.me/919839550961" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gold hover:bg-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-green-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> WhatsApp
            </a>
          </div>
        </div>
      </div>
      </nav>
    </header>
  );
};

export default Navbar;
