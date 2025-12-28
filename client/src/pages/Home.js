import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      {/* Customer Satisfaction Image - Fixed Position */}
      <div className="fixed bottom-0 left-6 z-50">
        <img
          src="https://thefabulousconcept.com/wp-content/uploads/2025/08/images-7-Picsart-AiImageEnhancer-2.jpg"
          alt="Customer Satisfaction"
          className="w-28 h-28 sm:w-32 sm:h-32 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;