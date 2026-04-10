import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const formsApi = {
  submitTradeEnquiry: (data) => api.post('/trade-enquiry', data),
  submitQuotation: (data) => api.post('/quotation', data),
  submitAuction: (data) => api.post('/auction', data),
  submitAppointment: (data) => api.post('/appointment', data),
};

export const productApi = {
  getAll: (siteId) => api.get(`/product?siteId=${siteId}`),
};

export default api;
