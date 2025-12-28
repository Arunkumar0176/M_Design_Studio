import React from 'react';

// Import service background images from gallery
import eventPlanningBg from '../assets/images/gallery/corportate-1.jpeg';
import exhibitionBg from '../assets/images/gallery/exhibition-1.jpeg';
import corporateBg from '../assets/images/gallery/corporate-2.jpg';
import weddingBg from '../assets/images/gallery/Branding-1.jpeg';
import tradeShowBg from '../assets/images/gallery/Exhibition-6.jpeg';
import brandActivationBg from '../assets/images/gallery/Branding-3.jpeg';

const Services = () => {
  const services = [
    {
      title: 'Event Planning',
      description: 'Complete event management from concept to execution, ensuring every detail is perfect.',
      icon: '🎯',
      bgImage: eventPlanningBg
    },
    {
      title: 'Exhibition Design',
      description: 'Creative and functional exhibition stands that capture attention and drive engagement.',
      icon: '🎨',
      bgImage: exhibitionBg
    },
    {
      title: 'Corporate Events',
      description: 'Professional corporate event solutions including conferences, seminars, and product launches.',
      icon: '🏢',
      bgImage: corporateBg
    },
    {
      title: 'Wedding Planning',
      description: 'Make your special day unforgettable with our comprehensive wedding planning services.',
      icon: '💒',
      bgImage: weddingBg
    },
    {
      title: 'Trade Shows',
      description: 'Strategic trade show planning and execution to maximize your business impact.',
      icon: '🤝',
      bgImage: tradeShowBg
    },
    {
      title: 'Brand Activations',
      description: 'Innovative brand activation campaigns that create lasting connections with your audience.',
      icon: '⚡',
      bgImage: brandActivationBg
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive event and exhibition solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-2 border-l-4 border-accent"
              style={{
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end text-white">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to bring your vision to life?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;