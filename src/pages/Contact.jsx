import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bridal Makeup',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello! I would like to inquire about your services.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Email:* ${formData.email}
*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/919839550961?text=${encodeURIComponent(text)}`, '_blank');
    setFormData({ name: '', email: '', phone: '', service: 'Bridal Makeup', message: '' });
  };

  return (
    <div className="bg-white pt-24 md:pt-36 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-4 text-gray-900">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">We'd love to hear from you. Book an appointment or send us your queries.</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Information */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-serif mb-6 text-gray-900">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-full mr-4 text-gold-dark">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <a href="https://maps.app.goo.gl/UjN3EQ2uC3nW8omJ8" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm leading-relaxed hover:text-gold transition-colors block">
                      120 / 220, Lajpat Nagar,<br />
                      Narainpurwa,<br />
                      Kanpur, Uttar Pradesh
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-full mr-4 text-gold-dark">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+919839550961" className="text-gray-600 text-sm hover:text-gold transition-colors block mb-1">+91 98395 50961</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-full mr-4 text-gold-dark">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 text-sm">info@thegoldcrownstudio.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-full mr-4 text-gold-dark">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-600 text-sm">Mon - Sun: 10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-xl overflow-hidden h-64 border border-gray-100 shadow-sm">
              <iframe 
                title="Gold Crown Studio Location"
                src="https://maps.google.com/maps?q=Gold%20Crown%20Studio,%20Kanpur&t=m&z=15&output=embed&iwloc=near" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-serif mb-6 text-gray-900">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow bg-white"
                    >
                      <option>Bridal Makeup</option>
                      <option>Party Makeup</option>
                      <option>Hair Styling</option>
                      <option>Skin Care</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-900 text-white font-medium py-4 px-6 rounded-md transition-colors flex justify-center items-center group"
                >
                  Send Message
                  <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
