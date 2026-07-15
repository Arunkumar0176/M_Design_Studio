import React from 'react';
import { Link } from 'react-router-dom';

//Import team images
import sunilImage from '../assets/images/team/sunil.jpg';
import dheerajImage from '../assets/images/team/dheeraj.jpg';
import nandanImage from '../assets/images/team/nandan.jpg';
import unnatiImage from '../assets/images/team/Unnati.jpg';
import arunImage from '../assets/images/team/Arun.jpg';
// Import about section image
import aboutImage from '../assets/images/gallery/About.jpg';

const About = () => {
  const teamMembers = [
    {
      name: "Sunil Kumar",
      position: "Founder & CEO",
      image: sunilImage,
      description: "Visionary leader with 10+ years in events and exhibitions, driving M Design Studio to excellence."
    },
    {
      name: "Dheeraj Kumar",
      position: "Director",
      image: dheerajImage,
      description: "Strategic director overseeing operations and ensuring seamless project execution."
    },
    {
      name: "Nandan Prajatpati",
      position: "Creative Director",
      image: nandanImage,
      description: "Creative mastermind behind innovative designs and captivating exhibition concepts."
    },
    {
      name: "Unnati Rawat",
      position: "Senior Marketing Head (HOD)",
      image: unnatiImage,
      description: "Marketing strategist leading brand development and digital marketing initiatives."
    },
    {
      name: "Arun Kumar",
      position: "Technical Team Head",
      image: arunImage,
      description: "Technical expert managing IT infrastructure and ensuring seamless digital operations."
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
              src={aboutImage}
              alt="M Design Studio Exhibition Work"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            />
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
        <div className="bg-gradient-to-br from-slate-800 via-gray-900 to-blue-900 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4">Our Team</h3>
            <p className="text-gray-300 mb-8">Meet the professionals behind our success</p>
            
            {/* Top row - 4 members */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {teamMembers.slice(0, 4).map((member, index) => (
                <div key={`top-${index}`} className="text-center">
                  <div className="w-36 h-36 lg:w-44 lg:h-44 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover transition-transform duration-300 hover:scale-110 ${
                        member.name === 'Dheeraj Kumar' ? 'object-top' : ''
                      }`}
                    />
                  </div>
                  <h4 className="font-bold text-white mb-1 text-sm">{member.name}</h4>
                  <p className="text-yellow-400 text-xs font-medium">{member.position}</p>
                </div>
              ))}
            </div>
            
            {/* Bottom row - 2 members */}
            <div className="flex justify-center gap-12">
              {teamMembers.slice(4).map((member, index) => (
                <div key={`bottom-${index}`} className="text-center">
                  <div className="w-36 h-36 lg:w-44 lg:h-44 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold text-white mb-1 text-sm">{member.name}</h4>
                  <p className="text-yellow-400 text-xs font-medium">{member.position}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link 
                to="/about" 
                className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition-all duration-300"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;