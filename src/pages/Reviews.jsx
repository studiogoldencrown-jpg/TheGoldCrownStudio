import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      date: "2 weeks ago",
      rating: 5,
      text: "Absolutely loved my bridal makeup! Sunita ma'am understood exactly what I wanted. The makeup lasted all night and looked flawless in photos.",
      source: "Google"
    },
    {
      name: "Neha Verma",
      date: "1 month ago",
      rating: 5,
      text: "Best salon in Kanpur! The staff is very professional and the hygiene standards are excellent. Highly recommend for party makeup.",
      source: "Google"
    },
    {
      name: "Aditi Singh",
      date: "2 months ago",
      rating: 5,
      text: "I had a wonderful experience. The hair spa and styling were amazing. The ambiance of the studio is very relaxing and luxurious.",
      source: "Google"
    },
    {
      name: "Meenakshi Dixit",
      date: "3 months ago",
      rating: 4,
      text: "Very good service. The facial was very relaxing and my skin felt amazing afterwards. Will definitely visit again.",
      source: "Google"
    },
    {
      name: "Shruti Agarwal",
      date: "4 months ago",
      rating: 5,
      text: "Got my engagement makeup done here. Got so many compliments! The team is very polite and skilled.",
      source: "Google"
    },
    {
      name: "Kavya Tiwari",
      date: "5 months ago",
      rating: 5,
      text: "Premium services at reasonable prices. The quality of products used is top-notch. Loved the overall experience.",
      source: "Google"
    }
  ];

  return (
    <div className="bg-gray-50 pt-24 md:pt-36 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-4 text-gray-900">Client Testimonials</h1>
          <div className="flex justify-center items-center gap-2 mb-4 text-gold">
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <div className="flex">
              <Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} /><Star fill="currentColor" size={24} />
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">Based on 150+ reviews on Google</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        {/* Live Elfsight Reviews Widget */}
        <div className="elfsight-app-75cb162e-8b2a-4952-ab69-1e166692a617" data-elfsight-app-lazy></div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="https://share.google/WTabQO1MByYzGYOmU" target="_blank" rel="noopener noreferrer" className="inline-block border border-black hover:bg-black hover:text-white px-8 py-3 rounded-md transition-colors font-medium">
            Write a Review
          </a>
        </div>

        {/* Google Maps Embed — shows live rating, reviews & directions. 100% free, no API key needed */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif text-center mb-2 text-gray-900">Find Us on Google</h2>
          <p className="text-center text-gray-500 text-sm mb-6">See our live Google rating and read all reviews directly from Google Maps</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100" style={{ height: '500px' }}>
            <iframe
              title="Gold Crown Studio Google Maps"
              src="https://maps.google.com/maps?q=Gold%20Crown%20Studio,%20Kanpur&t=m&z=15&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center mt-4">
            <a
              href="https://maps.app.goo.gl/wyreBZ37jjiqTdhu5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gold transition-colors"
            >
              <svg className="w-4 h-4 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Open our full Google Business Profile to see all reviews →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Reviews;
