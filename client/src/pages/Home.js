import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ClientsShowcase from '../components/ClientsShowcase';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <ClientsShowcase />
      <Contact />
    </>
  );
};

export default Home;