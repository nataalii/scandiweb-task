import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://scandiweb-natali.000webhostapp.com/',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

export default axiosInstance;
