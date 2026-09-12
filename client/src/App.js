import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import satisfactionSticker from './assets/images/company_logo/satisfaction.jpg';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';
import CareerPage from './pages/CareerPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareerPage />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
        <div className="fixed bottom-0 left-6 z-50">
          <img
            src={satisfactionSticker}
            alt="Customer Satisfaction"
            className="w-28 h-28 sm:w-32 sm:h-32 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
