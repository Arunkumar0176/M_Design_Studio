import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/company_logo/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed w-full top-0 z-50 bg-blue-900/95 backdrop-blur-sm shadow-lg border-b border-blue-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 text-2xl font-serif font-bold text-white hover:text-accent transition-colors">
              <img src={logo} alt="M Design Studio Logo" className="h-11 w-11 rounded-full object-cover" />
              <span>M DESIGN STUDIO</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`transition-colors font-medium ${
              isActive('/') ? 'text-accent' : 'text-blue-100 hover:text-accent'
            }`}>
              Home
            </Link>
            <Link to="/about" className={`transition-colors font-medium ${
              isActive('/about') ? 'text-accent' : 'text-blue-100 hover:text-accent'
            }`}>
              About
            </Link>
            <Link to="/services" className={`transition-colors font-medium ${
              isActive('/services') ? 'text-accent' : 'text-blue-100 hover:text-accent'
            }`}>
              Services
            </Link>
            <Link to="/gallery" className={`transition-colors font-medium ${
              isActive('/gallery') ? 'text-accent' : 'text-blue-100 hover:text-accent'
            }`}>
              Gallery
            </Link>
            <Link to="/contact" className={`transition-colors font-medium ${
              isActive('/contact') ? 'text-accent' : 'text-blue-100 hover:text-accent'
            }`}>
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-blue-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-blue-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-blue-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900 border-t border-blue-800">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 font-medium ${
                isActive('/') ? 'text-accent' : 'text-blue-100 hover:text-accent'
              }`}>
                Home
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 font-medium ${
                isActive('/about') ? 'text-accent' : 'text-blue-100 hover:text-accent'
              }`}>
                About
              </Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 font-medium ${
                isActive('/services') ? 'text-accent' : 'text-blue-100 hover:text-accent'
              }`}>
                Services
              </Link>
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 font-medium ${
                isActive('/gallery') ? 'text-accent' : 'text-blue-100 hover:text-accent'
              }`}>
                Gallery
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 font-medium ${
                isActive('/contact') ? 'text-accent' : 'text-blue-100 hover:text-accent'
              }`}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;