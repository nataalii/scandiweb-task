import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://scandiweb--natali.000webhostapp.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
