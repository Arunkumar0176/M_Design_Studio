import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const contentAPI = {
  getContent: (section) => api.get(`/content/${section}`),
  updateContent: (section, data) => api.put(`/content/${section}`, data),
};

export const galleryAPI = {
  getImages: () => api.get('/gallery'),
  uploadImage: (formData) => api.post('/gallery', formData),
};

export const contactAPI = {
  submitForm: (data) => api.post('/contact', data),
  getContacts: () => api.get('/contact'),
};

export default api;