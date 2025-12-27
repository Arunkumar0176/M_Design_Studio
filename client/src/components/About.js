import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6">
              About M Design Studio
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              We are a premier events and exhibition company based in GTB Nagar, New Delhi. Under the leadership of our CEO & Founder Dheeraj Kumar, we specialize in creating memorable experiences through innovative event planning and stunning exhibition designs.
            </p>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-accent mb-1 sm:mb-2">10+ Years</div>
                <div className="text-xs sm:text-sm text-gray-600">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-accent mb-1 sm:mb-2">500+ Events</div>
                <div className="text-xs sm:text-sm text-gray-600">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-accent mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-primary mb-2">CEO & Founder</h3>
              <p className="text-accent font-medium">Dheeraj Kumar</p>
              <p className="text-sm text-gray-600 mt-2">
                Leading M Design Studio with vision and expertise in creating exceptional events and exhibitions.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="About M Design Studio"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-accent rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;