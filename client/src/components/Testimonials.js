import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultReviews from '../data/reviewsData';

const Avatar = ({ name, image, size = 'md' }) => {
  const [imgError, setImgError] = useState(false);
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  const style = size === 'md'
    ? { width: 48, height: 48, fontSize: 16 }
    : { width: 40, height: 40, fontSize: 12 };

  if (!image || imgError) {
    return (
      <div style={{ ...style, backgroundColor: '#d4af37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, flexShrink: 0, fontWeight: 'bold', color: '#fff' }}>
        {initials}
      </div>
    );
  }
  return (
    <img
      src={image}
      alt={name}
      onError={() => setImgError(true)}
      style={{ ...style, borderRadius: '50%', objectFit: 'cover', marginBottom: 12 }}
    />
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();
  const toTestimonial = (r) => ({
    id: r.id,
    name: r.name,
    company: r.company || '',
    image: r.photo || null,
    text: r.comment,
    rating: r.rating,
  });

  const [testimonials, setTestimonials] = useState(defaultReviews.map(toTestimonial));

  useEffect(() => {
    fetch('http://localhost:5003/api/reviews')
      .then(res => res.json())
      .then(data => { if (Array.isArray(data) && data.length > 0) setTestimonials(data.map(toTestimonial)); })
      .catch(() => setTestimonials(defaultReviews.map(toTestimonial)));
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-slate-800 via-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Trusted by industry leaders for exceptional event experiences
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-2xl mx-auto mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-white/20">
            <div className="flex flex-col items-center text-center">
              <Avatar name={testimonials[currentSlide].name} image={testimonials[currentSlide].image} size="md" />
              
              <div className="flex mb-3">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm sm:text-base text-gray-200 mb-3 leading-relaxed italic line-clamp-3">
                "{testimonials[currentSlide].text}"
              </blockquote>

              <div>
                <h4 className="font-semibold text-white text-base">{testimonials[currentSlide].name}</h4>
                <p className="text-gray-300 text-sm">{testimonials[currentSlide].company}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border ${
                index === currentSlide ? 'border-yellow-400 bg-white/20' : 'border-white/20 hover:border-white/40'
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex flex-col items-center text-center">
                <Avatar name={testimonial.name} image={testimonial.image} size="sm" />
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h5 className="font-semibold text-white text-xs mb-1">{testimonial.name}</h5>
                <p className="text-gray-300 text-xs">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        {/* View More Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/clients')}
            className="px-8 py-3 rounded-full border-2 border-yellow-400 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
          >
            View More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;