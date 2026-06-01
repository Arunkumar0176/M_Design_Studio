import React, { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      company: "Sharma Industries Ltd",
      image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "M Design Studio ne hamare corporate event ko bilkul perfect banaya. Sunil ji aur unki team ka dedication aur creativity kamal ka hai. Hamari company ke saath kaam karke bahut khushi hui.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Agarwal",
      company: "Wedding Client, Delhi",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Hamari shadi ke liye M Design Studio se behtar koi nahi mil sakta tha. Dheeraj sir ne har detail ka khayal rakha. Decoration se lekar management tak sab kuch perfect tha. Highly recommend karte hain!",
      rating: 5
    },
    {
      id: 3,
      name: "Vikram Singh",
      company: "Trade Fair Organizer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Exhibition mein hamara stall sabse attractive tha. M Design Studio ki team ne itna beautiful design banaya ki visitors khud-ba-khud attract ho rahe the. Business leads bhi bahut acche mile.",
      rating: 5
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      company: "Brand Manager, Mumbai",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Brand activation event ke liye M Design Studio choose karna best decision tha. Professional approach, creative ideas aur timely delivery - sab kuch perfect. Nandan ji ka coordination excellent tha.",
      rating: 5
    },
    {
      id: 5,
      name: "Arjun Mehta",
      company: "Corporate Client, Gurgaon",
      image: "https://images.unsplash.com/photo-1616002851413-ebcc9611139d?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Company ke annual function ke liye M Design Studio se contact kiya tha. Unka work quality aur dedication dekhkar impressed ho gaye. Budget ke andar itna accha event organize kiya ki sab praise kar rahe the.",
      rating: 5
    },
    {
      id: 6,
      name: "Kavita Joshi",
      company: "Event Organizer, Noida",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "M Design Studio team ke saath kaam karna bahut accha experience raha. Puja ji ka sales support aur team ka execution dono hi outstanding hai. Future mein bhi inke saath kaam karna chahenge.",
      rating: 5
    }
  ];

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
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-12 h-12 rounded-full object-cover mb-3"
              />
              
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
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mb-2"
                />
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
      </div>
    </section>
  );
};

export default Testimonials;