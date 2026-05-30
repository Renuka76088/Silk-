import axios from 'axios';

export const API_BASE_URL = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? 'http://localhost:2000/api'
  : 'https://api.parekhchamber.com/api';

export const IMAGE_BASE_URL = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? 'http://localhost:2000'
  : 'https://api.parekhchamber.com';

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
  getById: (id) => api.get(`/blogs/${id}`),
};

export const blogHeaderApi = {
  get: (siteId) => api.get(`/blog-header/${siteId}`),
};

export const careerApi = {
  getAll: (siteId) => api.get(`/careers?siteId=${siteId}`),
};

export const productApi = {
  getAll: (siteId) => api.get(`/product?siteId=${siteId}`),
};

export const managementApi = {
  getContent: (siteId) => api.get(`/management/content?siteId=${siteId}`),
  getMembers: (siteId) => api.get(`/management/members?siteId=${siteId}`),
};

export const eQuotationApi = {
  getHeader: (siteId) => api.get(`/equotation-header/${siteId}`),
  getAll: (siteId) => api.get(`/equotations?siteId=${siteId}`),
};

export const eAuctionApi = {
  getHeader: (siteId) => api.get(`/eauction-header/${siteId}`),
  getAll: (siteId) => api.get(`/eauctions?siteId=${siteId}`),
};

export const tenderHeaderApi = {
  get: (siteId) => api.get(`/tender-header/${siteId}`),
};

export const tenderApi = {
  getAll: (siteId) => api.get(`/tenders?siteId=${siteId}`),
};

export const careerHeaderApi = {
  get: (siteId) => api.get(`/career-header/${siteId}`),
};

export const circularHeaderApi = {
  get: (siteId) => api.get(`/circular-header/${siteId}`),
};

export const circularApi = {
  getAll: (siteId) => api.get(`/circulars?siteId=${siteId}`),
};

export default api;
