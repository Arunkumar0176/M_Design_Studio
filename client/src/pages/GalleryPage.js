import React from 'react';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
  return (
    <div className="pt-20">
      {/* Customer Satisfaction Image - Fixed Position */}
      <div className="fixed bottom-0 left-6 z-50">
        <img
          src="https://thefabulousconcept.com/wp-content/uploads/2025/08/images-7-Picsart-AiImageEnhancer-2.jpg"
          alt="Customer Satisfaction"
          className="w-28 h-28 sm:w-32 sm:h-32 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <Gallery />
    </div>
  );
};

export default GalleryPage;