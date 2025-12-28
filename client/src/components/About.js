import React from 'react';
import { Link } from 'react-router-dom';

//Import team images
import sunilImage from '../assets/images/team/sunil.jpg';
import dheerajImage from '../assets/images/team/dheeraj.jpg';
import nandanImage from '../assets/images/team/nandan.jpg';
// import salesImage from '../assets/images/team/sales-executive.jpg';

const About = () => {
  const teamMembers = [
    {
      name: "Sunil Kumar",
      position: "Founder & CEO",
      image: sunilImage
    },
    {
      name: "Dheeraj Kumar",
      position: "Director",
      image: dheerajImage
    },
    {
      name: "Nandan Prajatpati",
      position: "Operation Manager",
      image: nandanImage
    },
    {
      name: "Puja Gupta",
      position: "Sales Executive",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6">
              About M Design Studio
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              We are a premier events and exhibition company based in GTB Nagar, New Delhi. Under the leadership of our CEO & Founder Sunil Kumar, we specialize in creating memorable experiences through innovative event planning and stunning exhibition designs.
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
              <h3 className="font-semibold text-primary mb-2">Founder & CEO</h3>
              <p className="text-accent font-medium">Sunil Kumar</p>
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
            {/* Customer Satisfaction Image */}
            {/* <div className="absolute top-8 right-4">
              <img
                src="https://thefabulousconcept.com/wp-content/uploads/2025/08/images-7-Picsart-AiImageEnhancer-2.jpg"
                alt="Customer Satisfaction"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg shadow-lg object-cover"
              />
            </div> */}
          </div>
        </div>

        {/* Our Team Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Team</h3>
          <p className="text-gray-600 mb-8">Meet the professionals behind our success</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-48 transition-transform duration-300 hover:scale-110 ${
                      member.name === 'Dheeraj Kumar' || member.name === 'Puja Gupta' ? 'object-cover object-top' : 'object-cover'
                    }`}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-1">{member.name}</h4>
                  <p className="text-accent text-sm font-medium">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Link 
              to="/about" 
              className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Learn More About Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;