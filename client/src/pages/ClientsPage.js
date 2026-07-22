import React, { useState, useEffect } from 'react';
import defaultReviews from '../data/reviewsData';

// Import client logos
import abbLogo from '../assets/images/client_logo/ABB.webp';
import alankarLogo from '../assets/images/client_logo/alankar.jpg.avif';
import delvalLogo from '../assets/images/client_logo/Delval.png';
import rshabhLogo from '../assets/images/client_logo/Rshabh.png';
import solexLogo from '../assets/images/client_logo/Solex.png';
import suryaLogo from '../assets/images/client_logo/Surya.jpeg';

// Import exhibition images
import exhibition1 from '../assets/images/gallery/Exhibition-10.jpeg';
import exhibition2 from '../assets/images/gallery/Exhibition-11.jpeg';
import exhibition3 from '../assets/images/gallery/Exhibition-12.jpeg';
import exhibition4 from '../assets/images/gallery/Exhibition-13.jpeg';
import exhibition5 from '../assets/images/gallery/Exhibition-14.jpeg';
import exhibition6 from '../assets/images/gallery/Exhibition-15.jpeg';

const ClientsPage = () => {
  const [reviews, setReviews] = useState(defaultReviews);
  const [showAll, setShowAll] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', rating: 5, comment: '', photo: null });
  const [photoPreview, setPhotoPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5003/api/reviews')
      .then(res => res.json())
      .then(data => { if (Array.isArray(data)) setReviews(data); })
      .catch(() => setReviews(defaultReviews));
  }, []);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result);
      setForm(prev => ({ ...prev, photo: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) return;
    fetch('http://localhost:5003/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(saved => {
        setReviews(prev => [saved, ...prev]);
        setShowAll(true);
        setForm({ name: '', company: '', rating: 5, comment: '', photo: null });
        setPhotoPreview(null);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(() => alert('Failed to save review. Please try again.'));
  };

  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);
  const clients = [
    {
      name: "ABB",
      logo: abbLogo,
      services: "Corporate Events, Product Launch"
    },
    {
      name: "Alankar",
      logo: alankarLogo,
      services: "Exhibition Design, Trade Shows"
    },
    {
      name: "Delval",
      logo: delvalLogo,
      services: "Brand Activation, Conferences"
    },
    {
      name: "Rshabh",
      logo: rshabhLogo,
      services: "Corporate Meetings, Seminars"
    },
    {
      name: "Solex",
      logo: solexLogo,
      services: "Tech Exhibitions, Workshops"
    },
    {
      name: "Surya",
      logo: suryaLogo,
      services: "Leadership Events, Networking"
    }
  ];

  const exhibitions = [
    {
      name: "Delhi Tech Expo 2024",
      date: "March 2024",
      location: "Pragati Maidan, New Delhi",
      description: "Major technology exhibition featuring 200+ exhibitors",
      image: exhibition1
    },
    {
      name: "India Business Summit",
      date: "January 2024",
      location: "India Expo Centre, Greater Noida",
      description: "Premier business networking and exhibition event",
      image: exhibition2
    },
    {
      name: "Healthcare Innovation Fair",
      date: "November 2023",
      location: "NSIC Exhibition Complex, Okhla",
      description: "Healthcare technology and innovation showcase",
      image: exhibition3
    },
    {
      name: "Education & Career Expo",
      date: "September 2023",
      location: "Thyagaraj Sports Complex, New Delhi",
      description: "Educational institutions and career opportunities fair",
      image: exhibition4
    },
    {
      name: "Green Energy Conference",
      date: "August 2023",
      location: "India Habitat Centre, New Delhi",
      description: "Renewable energy and sustainability exhibition",
      image: exhibition5
    },
    {
      name: "Fashion & Lifestyle Show",
      date: "June 2023",
      location: "Aerocity, New Delhi",
      description: "Fashion brands and lifestyle products exhibition",
      image: exhibition6
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              Our Clients & Exhibitions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies and proud to have executed prestigious exhibitions across India
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Valued Clients</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're honored to work with industry leaders who trust us with their most important events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-48 h-24 object-contain mb-4 rounded"
                  />
                  <h3 className="text-xl font-bold text-primary mb-2">{client.name}</h3>
                  <p className="text-gray-600 text-sm">{client.services}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Major Exhibitions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Successfully executed large-scale exhibitions and events across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibitions.map((exhibition, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={exhibition.image}
                  alt={exhibition.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{exhibition.name}</h3>
                  <div className="text-accent font-medium mb-2">{exhibition.date}</div>
                  <div className="text-gray-600 text-sm mb-3">{exhibition.location}</div>
                  <p className="text-gray-600 text-sm">{exhibition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-blue-700 rounded-lg p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Achievement Numbers</h2>
              <p className="text-blue-100">Delivering excellence across all our projects</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-blue-100">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100+</div>
                <div className="text-blue-100">Exhibitions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-blue-100">Events Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What Our Clients Say */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Real experiences from our valued clients</p>
          </div>

          {/* Review Form */}
          <div className="max-w-2xl mx-auto mb-16 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-primary mb-6">Share Your Experience</h3>
            {submitted && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                ✅ Thank you! Your review has been submitted.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  style={{ display: 'block', width: '100%', border: '1px solid #d1d5db', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#111' }}
                />
                <input
                  type="text"
                  placeholder="Company (optional)"
                  value={form.company}
                  onChange={e => setForm({ ...form, company: e.target.value })}
                  style={{ display: 'block', width: '100%', border: '1px solid #d1d5db', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#111' }}
                />
              </div>
              {/* Photo Upload */}
              <div className="flex items-center gap-4">
                <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
                  {photoPreview
                    ? <img src={photoPreview} alt="preview" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid #d4af37' }} />
                    : <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#f3f4f6', border: '2px dashed #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>📷</div>
                  }
                  <span style={{ fontSize: 13, color: '#6b7280' }}>{photoPreview ? 'Change Photo' : 'Upload Profile Photo (optional)'}</span>
                  <input type="file" accept="image/*" onChange={handlePhoto} style={{ display: 'none' }} />
                </label>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Rating:</span>
                {[1,2,3,4,5].map(star => (
                  <button type="button" key={star} onClick={() => setForm({ ...form, rating: star })}>
                    <span className={`text-2xl ${star <= form.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  </button>
                ))}
              </div>
              <textarea
                placeholder="Write your review here... *"
                value={form.comment}
                onChange={e => setForm({ ...form, comment: e.target.value })}
                required
                rows={4}
                style={{ display: 'block', width: '100%', border: '1px solid #d1d5db', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#111', resize: 'none' }}
              />
              <button
                type="submit"
                style={{ backgroundColor: '#d4af37', color: '#fff', padding: '8px 32px', borderRadius: '8px', fontWeight: '500', cursor: 'pointer' }}
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  {review.photo
                    ? <img src={review.photo} alt={review.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                    : <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff', fontSize: 16, flexShrink: 0 }}>
                        {review.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                      </div>
                  }
                  <div>
                    <p className="font-semibold text-primary text-sm">{review.name}</p>
                    {review.company && <p className="text-gray-500 text-xs">{review.company}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(star => (
                    <span key={star} className={`text-lg ${star <= review.rating ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">"{review.comment}"</p>
                <p className="text-gray-400 text-xs">{review.date}</p>
              </div>
            ))}
          </div>

          {/* Show More / Less */}
          {reviews.length > 6 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 rounded-full border-2 border-accent text-accent font-medium hover:bg-accent hover:text-white transition-all duration-300"
              >
                {showAll ? 'Show Less' : `Show More (${reviews.length - 6} more)`}
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default ClientsPage;