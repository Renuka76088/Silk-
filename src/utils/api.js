import axios from 'axios';

export const API_BASE_URL = 'https://api.parekhchamber.com/api';
export const IMAGE_BASE_URL = 'https://api.parekhchamber.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const formsApi = {
  submitTradeEnquiry: (data) => api.post('/trade-enquiry', data),
  submitQuotation: (data) => api.post('/quotation', data),
  submitAuction: (data) => api.post('/auction', data),
  submitAppointment: (data) => api.post('/appointment', data),
};

export const mediaApi = {
  getAll: (siteId) => api.get(`/media-events?siteId=${siteId}`),
};

export const blogApi = {
  getAll: (siteId) => api.get(`/blogs?siteId=${siteId}`),
};

export const careerApi = {
  getAll: (siteId) => api.get(`/careers?siteId=${siteId}`),
};

export const productApi = {
  getAll: (siteId) => api.get(`/product?siteId=${siteId}`),
};

export default api;
