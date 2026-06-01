import React from 'react';
import { Link } from 'react-router-dom';

// Import all client logos
import abbLogo from '../assets/images/client_logo/ABB.webp';
import alankarLogo from '../assets/images/client_logo/alankar.jpg.avif';
import consortLogo from '../assets/images/client_logo/consort.jpeg';
import delstLogo from '../assets/images/client_logo/Delst.jpeg';
import delvalLogo from '../assets/images/client_logo/Delval.png';
import druidLogo from '../assets/images/client_logo/Druid.png';
import etteilyLogo from '../assets/images/client_logo/Etteily.jpeg';
import indianPolymersLogo from '../assets/images/client_logo/Indian polymers.png';
import jsSolarLogo from '../assets/images/client_logo/JS solar.jpeg';
import logicsPowerLogo from '../assets/images/client_logo/Logics power amr.png';
import lpsLogo from '../assets/images/client_logo/LPS.png';
import niceImportsLogo from '../assets/images/client_logo/niceImports.jpeg';
import omTechnicalLogo from '../assets/images/client_logo/OM technical.png';
import rajBrassLogo from '../assets/images/client_logo/Raj brass.png';
import rajLaxmiLogo from '../assets/images/client_logo/Raj Laxmi.jpeg';
import rshabhLogo from '../assets/images/client_logo/Rshabh.png';
import snpLogo from '../assets/images/client_logo/SNP.png';
import solexLogo from '../assets/images/client_logo/Solex.png';
import spectrochemLogo from '../assets/images/client_logo/spectrochem.jpg';
import suryaLogo from '../assets/images/client_logo/Surya.jpeg';
import svastekLogo from '../assets/images/client_logo/Svastek.png';
import takshviLogo from '../assets/images/client_logo/Takshvi.jpeg';
import topseLogo from '../assets/images/client_logo/Topse.png';
import vicharakLogo from '../assets/images/client_logo/vicharak.png';
import zaischLogo from '../assets/images/client_logo/Zaisch.jpeg';
import zamiraLogo from '../assets/images/client_logo/Zamira.jpeg';
import zenjetLogo from '../assets/images/client_logo/Zenjet.jpeg';

// Import exhibition images
import exhibition1 from '../assets/images/gallery/Exhibition-10.jpeg';
import exhibition2 from '../assets/images/gallery/Exhibition-11.jpeg';
import exhibition3 from '../assets/images/gallery/Exhibition-12.jpeg';
import exhibition4 from '../assets/images/gallery/Exhibition-13.jpeg';

const ClientsShowcase = () => {
  const allClients = [
    { name: "ABB", logo: abbLogo },
    { name: "Alankar", logo: alankarLogo },
    { name: "Consort", logo: consortLogo },
    { name: "Delst", logo: delstLogo },
    { name: "Delval", logo: delvalLogo },
    { name: "Druid", logo: druidLogo },
    { name: "Etteily", logo: etteilyLogo },
    { name: "Indian Polymers", logo: indianPolymersLogo },
    { name: "JS Solar", logo: jsSolarLogo },
    { name: "Logics Power", logo: logicsPowerLogo },
    { name: "LPS", logo: lpsLogo },
    { name: "Nice Imports", logo: niceImportsLogo },
    { name: "OM Technical", logo: omTechnicalLogo },
    { name: "Raj Brass", logo: rajBrassLogo },
    { name: "Raj Laxmi", logo: rajLaxmiLogo },
    { name: "Rshabh", logo: rshabhLogo },
    { name: "SNP", logo: snpLogo },
    { name: "Solex", logo: solexLogo },
    { name: "Spectrochem", logo: spectrochemLogo },
    { name: "Surya", logo: suryaLogo },
    { name: "Svastek", logo: svastekLogo },
    { name: "Takshvi", logo: takshviLogo },
    { name: "Topse", logo: topseLogo },
    { name: "Vicharak", logo: vicharakLogo },
    { name: "Zaisch", logo: zaischLogo },
    { name: "Zamira", logo: zamiraLogo },
    { name: "Zenjet", logo: zenjetLogo }
  ];

  // Split clients into two rows
  const firstRowClients = allClients.slice(0, Math.ceil(allClients.length / 2));
  const secondRowClients = allClients.slice(Math.ceil(allClients.length / 2));

  const recentExhibitions = [
    {
      name: "Delhi Tech Expo 2024",
      location: "Pragati Maidan, New Delhi",
      image: exhibition1
    },
    {
      name: "India Business Summit",
      location: "India Expo Centre, Greater Noida",
      image: exhibition2
    },
    {
      name: "Healthcare Innovation Fair",
      location: "NSIC Exhibition Complex, Okhla",
      image: exhibition3
    },
    {
      name: "Education & Career Expo",
      location: "Thyagaraj Sports Complex, New Delhi",
      image: exhibition4
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Trusted Partners & Exhibitions</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Proud to serve leading companies and execute major exhibitions across India
          </p>
        </div>

        {/* Sliding Clients Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Valued Clients</h3>
          
          {/* First Row - Sliding Right */}
          <div className="overflow-hidden mb-6">
            <div className="flex animate-slide-right">
              {[...firstRowClients, ...firstRowClients].map((client, index) => (
                <div key={`row1-${index}`} className="flex-shrink-0 mx-6">
                  <div className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow duration-300 w-48 h-28 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-40 h-20 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Sliding Left */}
          <div className="overflow-hidden">
            <div className="flex animate-slide-left">
              {[...secondRowClients, ...secondRowClients].map((client, index) => (
                <div key={`row2-${index}`} className="flex-shrink-0 mx-6">
                  <div className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow duration-300 w-48 h-28 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-40 h-20 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exhibitions Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Recent Major Exhibitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentExhibitions.map((exhibition, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <img
                  src={exhibition.image}
                  alt={exhibition.name}
                  className="w-full h-24 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-white text-sm mb-2">{exhibition.name}</h4>
                  <p className="text-xs text-gray-300">{exhibition.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <Link 
            to="/clients" 
            className="inline-block bg-blue-100 text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-200 transition-colors font-medium text-lg"
          >
            View All Clients & Exhibitions
          </Link>
        </div>

        {/* Stats Row */}
        <div className="bg-gradient-to-r from-blue-800/80 to-purple-800/80 backdrop-blur-sm rounded-lg p-8 text-white border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">150+</div>
              <div className="text-gray-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-gray-200">Exhibitions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-200">Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-200">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-slide-right {
          animation: slide-right 30s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientsShowcase;