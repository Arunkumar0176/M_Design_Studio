import React from 'react';
import { Link } from 'react-router-dom';

const openings = [
  {
    title: 'Exhibition Designer',
    type: 'Full-Time',
    location: 'New Delhi',
    description:
      'Design and conceptualize exhibition stands, booths, and event environments for leading brands across India.',
  },
  {
    title: 'Event Coordinator',
    type: 'Full-Time',
    location: 'New Delhi',
    description:
      'Plan, coordinate, and execute corporate events, trade shows, and conferences from concept to completion.',
  },
  {
    title: 'Business Development Executive',
    type: 'Full-Time',
    location: 'New Delhi / Remote',
    description:
      'Identify new business opportunities, build client relationships, and drive revenue growth for the studio.',
  },
  {
    title: 'Graphic Designer',
    type: 'Full-Time / Freelance',
    location: 'New Delhi / Remote',
    description:
      'Create compelling visual content including branding materials, event collaterals, and digital assets.',
  },
];

const CareerPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Careers at M Design Studio
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Join a passionate team that transforms ideas into extraordinary experiences.
            We are always looking for talented individuals who share our vision and drive.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Meaningful Work',
                desc: 'Every project is unique. You will work on high-profile exhibitions, corporate events, and brand activations that make a real impact.',
              },
              {
                icon: '🚀',
                title: 'Growth Opportunities',
                desc: 'We invest in our people. From skill development to leadership roles, your career growth is our priority.',
              },
              {
                icon: '🤝',
                title: 'Collaborative Culture',
                desc: 'Work alongside a diverse, creative team that values your ideas and encourages innovation at every level.',
              },
              {
                icon: '🏆',
                title: 'Industry Recognition',
                desc: 'Be part of a studio with a proven track record of delivering award-worthy events across India.',
              },
              {
                icon: '📍',
                title: 'Prime Location',
                desc: 'Our studio is based in GTB Nagar, New Delhi — well connected and at the heart of the events industry.',
              },
              {
                icon: '💡',
                title: 'Creative Freedom',
                desc: 'We encourage bold ideas. Bring your creativity to the table and see it come to life on the ground.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-orange-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-4">
            Current Openings
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Don't see a role that fits? We still want to hear from you — send us your profile.
          </p>
          <div className="space-y-6">
            {openings.map((job, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full">
                      📍 {job.location}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Interested in Joining Our Team?
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-4">
            We would love to hear from you. Send us your resume along with a brief introduction
            about yourself and the role you are interested in. Tell us what makes you the right
            fit for M Design Studio.
          </p>
          <p className="text-blue-200 text-sm mb-10">
            Please mention the <span className="text-yellow-300 font-semibold">position you are applying for</span> in
            the subject line of your email.
          </p>

          <a
            href="mailto:mdesignstudio.delhi@gmail.com?subject=Job Application — [Position Name]&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to express my interest in joining M Design Studio. Please find my details below:%0D%0A%0D%0AName:%0D%0APosition Applying For:%0D%0AExperience:%0D%0ALinkedIn / Portfolio:%0D%0A%0D%0AThank you for considering my application.%0D%0A%0D%0ARegards,"
            className="inline-block bg-accent hover:bg-opacity-90 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            ✉ Apply Now — mdesignstudio.delhi
          </a>

          <p className="text-blue-300 text-sm mt-6">
            We review every application carefully and will get back to you within 5–7 business days.
          </p>

          <div className="mt-10 border-t border-blue-700 pt-8">
            <p className="text-blue-200 text-sm">
              Have questions before applying?{' '}
              <Link to="/contact" className="text-yellow-300 hover:text-yellow-200 underline transition-colors">
                Contact us here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
