import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const serviceData = {
  'bridal-makeup': {
    title: "Bridal Makeup",
    description: "Your wedding day is one of the most important days of your life, and we are here to ensure you look absolutely breathtaking. Our signature bridal packages are tailored to match your unique style, whether you prefer a traditional, contemporary, or minimalist look. We use only premium, long-lasting products to ensure your makeup stays flawless from the ceremony to the reception.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    services: [
      { name: "HD Bridal Makeup", price: "₹15,000", detail: "High-definition makeup that looks perfect on camera and in person." },
      { name: "Airbrush Bridal Makeup", price: "₹20,000", detail: "Flawless, water-resistant base that feels incredibly lightweight." },
      { name: "Pre-Bridal Package", price: "₹10,000", detail: "Complete grooming including facials, waxing, and body polishing." },
      { name: "Engagement Makeup", price: "₹8,000", detail: "A softer, glowing look perfect for your engagement ceremony." }
    ]
  },
  'party-makeup': {
    title: "Party Makeup",
    description: "Get ready to turn heads at your next event with our customized party makeup services. Whether you're attending a gala, a cocktail party, or a family function, our expert artists will create a look that perfectly complements your outfit and personal style. From bold glamour to subtle elegance, we've got you covered.",
    image: "https://images.unsplash.com/photo-1512496015851-a1dc8a477d81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    services: [
      { name: "Light Party Makeup", price: "₹3,500", detail: "A subtle and elegant look for daytime events." },
      { name: "Heavy Party / Reception Makeup", price: "₹5,000", detail: "Glamorous makeup with bold eyes and a flawless base." },
      { name: "Saree Draping", price: "₹1,000", detail: "Professional draping in various traditional and modern styles." },
      { name: "Eye Makeup Special", price: "₹2,000", detail: "Focus exclusively on dramatic or smokey eye looks." }
    ]
  },
  'hair-styling': {
    title: "Hair Styling",
    description: "Your hair is your best accessory. Our professional hair stylists specialize in creating stunning looks that range from classic, elegant updos to modern, bouncy waves. We also offer premium hair care treatments to ensure your hair is healthy, shiny, and ready to be styled.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    services: [
      { name: "Basic Hair Styling", price: "₹1,500", detail: "Simple straightening, curls, or blowouts." },
      { name: "Advanced Updo", price: "₹2,500", detail: "Intricate buns and braids for weddings and major events." },
      { name: "Hair Spa", price: "₹1,200", detail: "Deep conditioning treatment to restore moisture and shine." },
      { name: "Keratin Treatment", price: "Starts at ₹4,000", detail: "Semi-permanent hair smoothing and frizz reduction." }
    ]
  },
  'skincare-treatments': {
    title: "Skincare Treatments",
    description: "Radiant makeup starts with great skin. At Gold Crown Studio, we offer rejuvenating skincare treatments designed to cleanse, exfoliate, and deeply hydrate your skin. Our estheticians analyze your skin type to provide personalized treatments that leave you with a natural, healthy glow.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    services: [
      { name: "Gold Facial", price: "₹2,500", detail: "Infused with gold particles for an instant, radiant glow." },
      { name: "Diamond Facial", price: "₹3,500", detail: "Skin brightening and polishing for a youthful appearance." },
      { name: "O3+ Bridal Facial", price: "₹4,500", detail: "Intensive treatment designed specifically for brides-to-be." },
      { name: "Basic Cleanup", price: "₹800", detail: "Quick exfoliation and pore cleansing for regular maintenance." }
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) {
    return (
      <div className="bg-white pt-32 pb-20 min-h-screen text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-serif mb-4 text-gray-900">Service Not Found</h1>
        <p className="text-gray-600 mb-8">We couldn't find the service you're looking for.</p>
        <Link to="/services" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
          Back to All Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pt-24 md:pt-36 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-gold transition-colors mb-8 text-sm font-medium">
          <ArrowLeft size={16} className="mr-2" /> Back to Services
        </Link>

        {/* Hero Image */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12 shadow-lg">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white drop-shadow-lg">{service.title}</h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Description */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif mb-6 text-gray-900">About this Service</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {service.description}
            </p>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-serif mb-4 text-gray-900">Ready to Book?</h3>
              <p className="text-gray-600 mb-6 text-sm">Contact us directly on WhatsApp to book an appointment or ask any questions.</p>
              <a 
                href={`https://wa.me/919839550961?text=Hello! I am interested in your ${service.title} services.`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded-md font-medium transition-colors w-full text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Pricing List */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif mb-6 text-gray-900">Pricing Options</h2>
            <div className="space-y-4">
              {service.services.map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                    <span className="text-gold font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;
