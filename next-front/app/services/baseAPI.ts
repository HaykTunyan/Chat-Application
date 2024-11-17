import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://127.0.0.1:5000'; // Base URL of your API

// Create an Axios instance
const baseApi: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor (optional)
baseApi.interceptors.request.use(
  (config) => {
    // Modify the request config if needed, e.g., add authentication token
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor (optional)
baseApi.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle errors globally, e.g., show a toast message or redirect to login
    return Promise.reject(error);
  }
);

export default baseApi;
