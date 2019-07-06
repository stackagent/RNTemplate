import axios from 'axios';
import { store } from '../store'
// configure base url
const api = axios.create({
    baseURL: 'https://localhost/api',
});

// intercept requests and add authorization token
api.interceptors.request.use((config) => {
    const user = store.getState().auth.user;
    if (user) {
        
        config.headers.authorization = `Bearer ${user.accessToken}`;
    }
    return config;
});

export default api;
