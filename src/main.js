import { createApp } from 'vue'
import App from './App.vue'
import router from '@/core/router'
import i18n from '@/core/i18n'
import axios from 'axios'
import '@/shared/styles/global.css'

axios.defaults.baseURL = 'http://127.0.0.1:8000';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('username');
            router.push('/login');
        }
        return Promise.reject(error);
    }
);

const app = createApp(App)

app.use(router)
app.use(i18n) 
app.mount('#app')