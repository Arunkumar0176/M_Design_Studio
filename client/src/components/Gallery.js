import React, { useState } from 'react';

// Import gallery images
import corporate1 from '../assets/images/gallery/corportate-1.jpeg';
import corporate2 from '../assets/images/gallery/corporate-2.jpg';
import corporate3 from '../assets/images/gallery/corporate-3.jpeg';
import corporate4 from '../assets/images/gallery/corporate-4.jpg';
import exhibition1 from '../assets/images/gallery/exhibition-1.jpeg';
import exhibition2 from '../assets/images/gallery/Exibition-2.jpeg';
import exhibition3 from '../assets/images/gallery/exibition-3.jpeg';
import exhibition4 from '../assets/images/gallery/exibition-4.jpeg';
import exhibition5 from '../assets/images/gallery/exibition-5.jpeg';
import exhibition6 from '../assets/images/gallery/Exhibition-6.jpeg';
import exhibition7 from '../assets/images/gallery/Exhibition-7.jpg';
import exhibition8 from '../assets/images/gallery/Exhibition-8.jpg';
import exhibition9 from '../assets/images/gallery/Exhibition-9.jpg';
import exhibition10 from '../assets/images/gallery/Exhibition-10.jpeg';
import exhibition11 from '../assets/images/gallery/Exhibition-11.jpeg';
import exhibition12 from '../assets/images/gallery/Exhibition-12.jpeg';
import exhibition13 from '../assets/images/gallery/Exhibition-13.jpeg';
import exhibition14 from '../assets/images/gallery/Exhibition-14.jpeg';
import exhibition15 from '../assets/images/gallery/Exhibition-15.jpeg';

import branding1 from '../assets/images/gallery/Branding-1.jpeg';
import branding2 from '../assets/images/gallery/Branding-2.jpeg';
import branding3 from '../assets/images/gallery/Branding-3.jpeg';
import branding4 from '../assets/images/gallery/Branding-4.jpeg';
import branding5 from '../assets/images/gallery/Branding-5.jpeg';
import branding6 from '../assets/images/gallery/Branding-6.jpeg';
import branding7 from '../assets/images/gallery/Branding-7.jpeg';
import branding8 from '../assets/images/gallery/Branding-8.jpeg';
import branding9 from '../assets/images/gallery/Branding-9.jpeg';
import branding10 from '../assets/images/gallery/Branding-10.jpeg';
import branding11 from '../assets/images/gallery/Branding-11.jpeg';
import branding12 from '../assets/images/gallery/Branding-12.jpeg';

import weeding1 from '../assets/images/gallery/weeding-1.jpg';
import weeding2 from '../assets/images/gallery/weeding2.jpeg';
import weeding3 from '../assets/images/gallery/weeding3.jpeg';
import weeding4 from '../assets/images/gallery/weeding4.jpeg';
import weeding5 from '../assets/images/gallery/weeding5.jpeg';
import weeding6 from '../assets/images/gallery/weeding6.jpeg';
import weeding7 from '../assets/images/gallery/weeding7.jpeg';
import weeding8 from '../assets/images/gallery/weeding8.jpeg';

import tradeshow1 from '../assets/images/gallery/Exhibition-13.jpeg';
import conference1 from '../assets/images/gallery/conference1.jpeg';
import conference2 from '../assets/images/gallery/conference2.jpeg';
import conference3 from '../assets/images/gallery/conference3.jpeg';
import conference4 from '../assets/images/gallery/conference4.jpeg';

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
    {
      _id: '16',
      title: 'Corporate Meeting',
      image: corporate2,
      category: 'corporate'
    },
    {
      _id: '17',
      title: 'Corporate Conference',
      image: corporate3,
      category: 'corporate'
    },
    {
      _id: '29',
      title: 'Corporate Conference',
      image: corporate4,
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
    {
      _id: '18',
      title: 'Exhibition Booth',
      image: exhibition7,
      category: 'exhibition'
    },
    {
      _id: '19',
      title: 'Exhibition Center',
      image: exhibition8,
      category: 'exhibition, manpower'
    },
    {
      _id: '20',
      title: 'Exhibition Space',
      image: exhibition9,
      category: 'exhibition'
    },
    {
      _id: '21',
      title: 'Exhibition Gallery',
      image: exhibition10,
      category: 'exhibition'
    },
    {
      _id: '22',
      title: 'Exhibition Showcase',
      image: exhibition11,
      category: 'exhibition'
    },
    {
      _id: '23',
      title: 'Exhibition Showcase',
      image: exhibition12,
      category: 'exhibition'
    },
    {
      _id: '24',
      title: 'Exhibition Space',
      image: exhibition13,
      category: 'exhibition'
    },
    {
      _id: '41',
      title: 'Exhibition Space',
      image: exhibition14,
      category: 'exhibition'
    },
    {
      _id: '42',
      title: 'Exhibition Space',
      image: exhibition15,
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
    {
      _id: '25',
      title: 'Brand Event',
      image: branding7,
      category: 'branding'
    },
    {
      _id: '26',
      title: 'Brand Launch',
      image: branding8,
      category: 'branding'
    },
    {
      _id: '43',
      title: 'Brand Launch',
      image: branding9,
      category: 'branding'
    },
    {
      _id: '44',
      title: 'Brand Launch',
      image: branding10,
      category: 'branding'
    },
    {
      _id: '45',
      title: 'Brand Launch',
      image: branding11,
      category: 'branding'
    },
    {
      _id: '46',
      title: 'Brand Launch',
      image: branding12,
      category: 'branding'
    },

    //Wedding Image
     {
      _id: '27',
      title: 'Wedding Ceremony',
      image: weeding1,
      category: 'wedding'
    },
     {
      _id: '34',
      title: 'Wedding Ceremony',
      image: weeding2,
      category: 'wedding'
    },
     {
      _id: '35',
      title: 'Wedding Ceremony',
      image: weeding3,
      category: 'wedding'
    },
     {
      _id: '36',
      title: 'Wedding Ceremony',
      image: weeding4,
      category: 'wedding'
    },
     {
      _id: '37',
      title: 'Wedding Ceremony',
      image: weeding5,
      category: 'wedding'
    },
     {
      _id: '38',
      title: 'Wedding Ceremony',
      image: weeding6,
      category: 'wedding'
    },
     {
      _id: '39',
      title: 'Wedding Ceremony',
      image: weeding7,
      category: 'wedding'
    },
     {
      _id: '40',
      title: 'Wedding Ceremony',
      image: weeding8,
      category: 'wedding'
    },
    

    //TradeShow Image
       {
      _id: '28',
      title: 'Trade Show',
      image: tradeshow1,
      category: 'tradeshow'
    },
    {
      _id: '30',
      title: 'Conference',
      image: conference1,
      category: 'Conference'
    },
    {
      _id: '31',
      title: 'Conference',
      image: conference2,
      category: 'Conference'
    },
    {
      _id: '32',
      title: 'Conference',
      image: conference3,
      category: 'Conference'
    },
    {
      _id: '33',
      title: 'Conference',
      image: conference4,
      category: 'Conference'
    },
    
    // Placeholder for other categories
    // {
    //   _id: '14',
    //   title: 'Wedding Ceremony',
    //   image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //   category: 'wedding'
    // },

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