import { createApp } from 'vue'
import App from './App.vue'
import router from '@/core/router'
import i18n from '@/core/i18n'
import axios from 'axios'
import '@/shared/styles/global.css'

const app = createApp(App)

axios.defaults.baseURL = 'http://127.0.0.1:8000';

app.use(router)
app.use(i18n) 
app.mount('#app')