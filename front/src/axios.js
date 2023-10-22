import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://scandiweb-natali.000webhostapp.com',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
