import axios from 'axios';

export const getToken = () => {
    return localStorage.getItem('token');
}

export const setToken = (token) => {
    return localStorage.setItem('token', token);
}

export const removeToken = () => {
    localStorage.removeItem('token');
}

export const api = axios.create({
    baseURL: 'http://localhost/ultra-api/public'
});

api.interceptors.request.use(function (config) {
    const token = getToken();
    if (!token) {
        return config;
    }

    config.headers.Authorization =  `Bearer ${token}`;
    return config;
});