import React, { useState } from 'react';

// Import gallery images
import corporate1 from '../assets/images/gallery/corportate-1.jpeg';
import exhibition1 from '../assets/images/gallery/exhibition-1.jpeg';
import exhibition2 from '../assets/images/gallery/Exibition-2.jpeg';
import exhibition3 from '../assets/images/gallery/exibition-3.jpeg';
import exhibition4 from '../assets/images/gallery/exibition-4.jpeg';
import exhibition5 from '../assets/images/gallery/exibition-5.jpeg';
import exhibition6 from '../assets/images/gallery/Exhibition-6.jpeg';
import branding1 from '../assets/images/gallery/Branding-1.jpeg';
import branding2 from '../assets/images/gallery/Branding-2.jpeg';
import branding3 from '../assets/images/gallery/Branding-3.jpeg';
import branding4 from '../assets/images/gallery/Branding-4.jpeg';
import branding5 from '../assets/images/gallery/Branding-5.jpeg';
import branding6 from '../assets/images/gallery/Branding-6.jpeg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    // Corporate Events
    {
      _id: '1',
      title: 'Corporate Event',
      image: corporate1,
      category: 'corporate'
    },
    
    // Exhibition Images
    {
      _id: '2',
      title: 'Exhibition Stand',
      image: exhibition1,
      category: 'exhibition'
    },
    {
      _id: '3',
      title: 'Exhibition Display',
      image: exhibition2,
      category: 'exhibition'
    },
    {
      _id: '4',
      title: 'Exhibition Setup',
      image: exhibition3,
      category: 'exhibition'
    },
    {
      _id: '5',
      title: 'Exhibition Design',
      image: exhibition4,
      category: 'exhibition'
    },
    {
      _id: '6',
      title: 'Exhibition Layout',
      image: exhibition5,
      category: 'exhibition'
    },
    {
      _id: '7',
      title: 'Exhibition Hall',
      image: exhibition6,
      category: 'exhibition'
    },
    
    // Branding Images
    {
      _id: '8',
      title: 'Brand Activation',
      image: branding1,
      category: 'branding'
    },
    {
      _id: '9',
      title: 'Brand Experience',
      image: branding2,
      category: 'branding'
    },
    {
      _id: '10',
      title: 'Brand Campaign',
      image: branding3,
      category: 'branding'
    },
    {
      _id: '11',
      title: 'Brand Launch',
      image: branding4,
      category: 'branding'
    },
    {
      _id: '12',
      title: 'Brand Promotion',
      image: branding5,
      category: 'branding'
    },
    {
      _id: '13',
      title: 'Brand Event',
      image: branding6,
      category: 'branding'
    },
    
    // Placeholder for other categories
    {
      _id: '14',
      title: 'Wedding Ceremony',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'wedding'
    },
    {
      _id: '15',
      title: 'Trade Show',
      image: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'tradeshow'
    }
  ];

  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))];
  
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-green-50 to-teal-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful events and exhibitions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-white text-gray-600 hover:bg-accent hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((image) => (
            <div
              key={image._id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image.image)}
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-accent"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;