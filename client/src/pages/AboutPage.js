import React from 'react';

// Import team images
import sunilImage from '../assets/images/team/sunil.jpg';
import dheerajImage from '../assets/images/team/dheeraj.jpg';
import nandanImage from '../assets/images/team/nandan.jpg';
// import salesImage from '../assets/images/team/sales-executive.jpg';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sunil Kumar",
      position: "Founder & CEO",
      image: sunilImage,
      description: "Leading M Design Studio with vision and expertise in creating exceptional events and exhibitions."
    },
    {
      name: "Dheeraj Kumar",
      position: "Director",
      image: dheerajImage,
      description: "Strategic leadership and business development for innovative event solutions."
    },
    {
      name: "Nandan Prajatpati",
      position: "Operator Manager",
      image: nandanImage,
      description: "Ensures seamless operations and project execution from planning to completion."
    },
    {
      name: "Puja Gupta",
      position: "Sales Executive",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      description: "Building client relationships and driving business growth through exceptional service."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              About M Design Studio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating extraordinary experiences through innovative event planning and stunning exhibition designs
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to transform ordinary events into extraordinary experiences, M Design Studio has been at the forefront of the events and exhibition industry for over a decade.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Based in GTB Nagar, New Delhi, we specialize in creating memorable experiences that leave lasting impressions on your guests and clients.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-gray-600">Events Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="About M Design Studio"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the talented professionals who bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-64 object-cover ${
                    member.name === 'Dheeraj Kumar' || member.name === 'Puja Gupta' ? 'object-top' : 'object-center'
                  }`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To create unforgettable experiences through innovative event planning, exceptional design, and flawless execution that exceeds our clients' expectations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading events and exhibition company in India, known for creativity, professionalism, and delivering extraordinary experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;