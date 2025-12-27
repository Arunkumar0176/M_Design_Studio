import React, { useState, useEffect } from 'react';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/contact');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8">Loading contacts...</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Contact Submissions ({contacts.length})</h1>
      
      {contacts.length === 0 ? (
        <p className="text-gray-500">No contact submissions yet.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact._id} className="bg-white p-6 rounded-lg shadow border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Name:</strong> {contact.name}</p>
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>Phone:</strong> {contact.phone || 'Not provided'}</p>
                </div>
                <div>
                  <p><strong>Submitted:</strong> {new Date(contact.createdAt).toLocaleString()}</p>
                  <p><strong>Status:</strong> {contact.status}</p>
                </div>
              </div>
              <div className="mt-4">
                <p><strong>Message:</strong></p>
                <p className="bg-gray-50 p-3 rounded mt-2">{contact.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminContacts;