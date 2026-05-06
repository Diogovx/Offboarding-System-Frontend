import { createI18n } from 'vue-i18n';


import pt from '@/shared/locales/pt-BR.json';
import en from '@/shared/locales/en-US.json';
import id from '@/shared/locales/id-ID.json';
import ar from '@/shared/locales/ar-SA.json'; 

const savedLocale = localStorage.getItem('app_lang') || 'pt';

const i18n = createI18n({
  legacy: false, 
  globalInjection: true, 
  locale: savedLocale, 
  fallbackLocale: 'en', 
  messages: {
   
    pt: pt, 
    en: en, 
    id: id, 
    ar: ar
  }
});

export default i18n;