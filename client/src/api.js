import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/api' });

api.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt-token');

export default api;
