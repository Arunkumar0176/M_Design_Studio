import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      _id: '1',
      title: 'Corporate Event',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'corporate'
    },
    {
      _id: '2',
      title: 'Wedding Ceremony',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'wedding'
    },
    {
      _id: '3',
      title: 'Exhibition Stand',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'exhibition'
    },
    {
      _id: '4',
      title: 'Trade Show',
      image: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'tradeshow'
    },
    {
      _id: '5',
      title: 'Brand Activation',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'branding'
    },
    {
      _id: '6',
      title: 'Conference Setup',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'corporate'
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