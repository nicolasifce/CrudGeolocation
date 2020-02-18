import axios from 'axios';

const IP = '192.168.1.77';

const api = axios.create({
  baseURL: `http://${IP}:3131`,
});

export default api;
