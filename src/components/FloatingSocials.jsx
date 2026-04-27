import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const FloatingSocials = () => {
  const btnClass =
    'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-r-md shadow-lg transition-all duration-200 transform hover:scale-105 group relative';

  const tooltipClass =
    'absolute left-full ml-2 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block';

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-1 md:space-y-1.5 p-0">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/goldcrownstudio/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} bg-black text-white hover:bg-gold hover:text-black`}
        aria-label="Instagram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
        <span className={`${tooltipClass} bg-black`}>Instagram</span>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/goldcrownstudio01/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} bg-black text-white hover:bg-gold hover:text-black`}
        aria-label="Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
        <span className={`${tooltipClass} bg-black`}>Facebook</span>
      </a>

      {/* Google Maps */}
      <a
        href="https://maps.app.goo.gl/UjN3EQ2uC3nW8omJ8"
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} bg-black text-white hover:bg-gold hover:text-black`}
        aria-label="Google Maps"
      >
        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <span className={`${tooltipClass} bg-black`}>Google Maps</span>
      </a>

      {/* Phone */}
      <a
        href="tel:+919839550961"
        className={`${btnClass} bg-black text-white hover:bg-gold hover:text-black`}
        aria-label="Call Us"
      >
        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <span className={`${tooltipClass} bg-black`}>Call Us</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919839550961"
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} bg-green-500 text-white hover:bg-green-600`}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <span className="absolute left-full ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
          WhatsApp
        </span>
      </a>

    </div>
  );
};

export default FloatingSocials;
