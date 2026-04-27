import React from 'react';

const About = () => {
  return (
    <div className="bg-white pt-24 md:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-4">About Us</h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif mb-6 text-gray-900">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Gold Crown Studio was born out of a passion for beauty and a desire to make every woman feel like royalty. Established in Kanpur, our salon has grown to become a trusted destination for premium makeup and beauty services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that beauty is not just about looking good, but feeling confident and empowered. Our team of expert stylists and makeup artists are dedicated to providing personalized services that cater to your unique needs and preferences.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* Editorial two-image layout */}
            <div className="relative pb-10">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://freelancemakeupartistinkanpursunitagupta.wordpress.com/wp-content/uploads/2024/06/meet-sunita-gupta-the-heart-and-soul-of-gold-crown-studio.jpg?w=1024" 
                  alt="Gold Crown Studio - Sunita Gupta" 
                  className="w-full h-[400px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-4 w-48 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://freelancemakeupartistinkanpursunitagupta.wordpress.com/wp-content/uploads/2024/06/sunita-gupta-transforming-kanpurs-makeup-scene.jpg" 
                  alt="Sunita Gupta at work" 
                  className="w-full h-36 object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-black text-gold border border-gold/30 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg">
                Since 2010
              </div>
            </div>
          </div>
        </div>

        {/* Owner Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">Meet the Founder</h3>
            <h2 className="text-3xl font-serif mb-6 text-gray-900">Sunita Gupta</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over a decade of experience in the beauty industry, Sunita Gupta brings her artistic vision and meticulous attention to detail to every client. Her expertise ranges from traditional bridal makeovers to contemporary party looks.
            </p>
            <p className="text-gray-600 leading-relaxed">
              "My goal is to create a space where clients can relax, rejuvenate, and leave feeling their absolute best. At Gold Crown Studio, we don't just transform your look; we enhance your natural beauty."
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://freelancemakeupartistinkanpursunitagupta.wordpress.com/wp-content/uploads/2024/06/sunita-gupta-transforming-kanpurs-makeup-scene.jpg" 
              alt="Sunita Gupta" 
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-12 rounded-lg">
          <div>
            <h3 className="text-2xl font-serif mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide exceptional beauty services using top-quality products in a luxurious and welcoming environment, ensuring every client leaves feeling confident and beautiful.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4 text-gray-900">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the premier destination for luxury beauty and wellness in Kanpur, recognized for our artistry, professionalism, and commitment to client satisfaction.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
