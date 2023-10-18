import axios from 'axios';

const API_URL = 'https://scandiweb-natali.000webhostapp.com';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default axiosInstance;
