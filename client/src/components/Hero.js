import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-black/70 to-black/50 absolute z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Event Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6">
          M DESIGN STUDIO
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-light">
          Creating Extraordinary Events & Exhibitions
        </p>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Transform your vision into reality with our professional event planning and exhibition design services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary w-full sm:w-auto"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;