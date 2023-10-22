import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://scandiweb-natali.000webhostapp.com/products/',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;
