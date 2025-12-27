import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-blue-900/95 backdrop-blur-sm shadow-lg border-b border-blue-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-white">
              M DESIGN STUDIO
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-blue-100 hover:text-accent transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-blue-100 hover:text-accent transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-blue-100 hover:text-accent transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-blue-100 hover:text-accent transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-blue-100 hover:text-accent transition-colors font-medium">
              Contact
            </button>
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
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-blue-100 hover:text-accent font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-blue-100 hover:text-accent font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-blue-100 hover:text-accent font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-blue-100 hover:text-accent font-medium">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-blue-100 hover:text-accent font-medium">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;