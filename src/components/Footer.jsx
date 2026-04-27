import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">Gold Crown Studio</h2>
            <p className="text-sm mb-4 leading-relaxed">
              Premium makeup salon enhancing your natural beauty with luxury services and an elegant experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/goldcrownstudio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/goldcrownstudio01/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://in.pinterest.com/goldcrownstudio_makeupstudio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-gold transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/service/bridal-makeup" className="hover:text-gold transition-colors">Bridal Makeup</Link></li>
              <li><Link to="/service/party-makeup" className="hover:text-gold transition-colors">Party Makeup</Link></li>
              <li><Link to="/service/hair-styling" className="hover:text-gold transition-colors">Hair Styling</Link></li>
              <li><Link to="/service/skincare-treatments" className="hover:text-gold transition-colors">Skincare Treatments</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-gold flex-shrink-0 mt-0.5" />
                <span>120 / 220, Lajpat Nagar, Narainpurwa, Kanpur</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gold flex-shrink-0" />
                <span>098395 50961</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gold flex-shrink-0" />
                <span>info@thegoldcrownstudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <h3 className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-widest">Popular Searches in Kanpur</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
            {[
              "Wedding Bridal Makeup Artist in Kanpur", "Freelance Makeup in Kanpur Sunita Gupta", "Gold Crown Studio",
              "Professional Bridal Makeup", "Top Makeup Artist In Kanpur", "Make-up Artist In Kanpur", "Bridal Makeup", 
              "Engagement Makeup Price Near Me", "Kanpur Best Makeup Artist", "Makeup Courses in Kanpur", 
              "Wedding Makeup", "Parlour for Bridal Makeup Near Me", "Best Bridal Makeup in Kanpur", 
              "Best Makeup Salon in Kanpur", "Best Parlour in Kanpur for Bridal Makeup", "Bridal Makeup Artist in Kanpur", 
              "Top 10 Makeup Artist In Kanpur", "Bridal Makeup for Bride", "Beautician Course in Kanpur", 
              "Beauty Parlour", "Best Makeup Academy in Kanpur", "Bridal Make Up Services", 
              "Engagement Bridal & Party Makeup", "Freelance Makeup in Kanpur", "Kanpur Makeup Artist", 
              "Make Up and Beautician Courses", "Makeup Artist Services", "Makeup Studio & Academy", 
              "Professional Bridal & Beauty Services", "Sunita Gupta Makeup Artist"
            ].map((keyword, idx) => (
              <Link key={idx} to="/services" className="hover:text-gold transition-colors">{keyword}</Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Gold Crown Studio. All rights reserved.</p>
        </div>
      </div>
      
      {/* WhatsApp Button Fixed */}
      <a 
        href="https://wa.me/919839550961" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </footer>
  );
};

export default Footer;
