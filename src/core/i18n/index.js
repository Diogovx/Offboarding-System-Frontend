import { createI18n } from 'vue-i18n';


import pt from '@/shared/locales/pt-BR.json';
import en from '@/shared/locales/en-US.json';
import id from '@/shared/locales/id-ID.json';
import ar from '@/shared/locales/ar-SA.json';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'; 

const savedLocale = localStorage.getItem('app_lang') || 'pt';
const isLangMenuOpen = ref(false)
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

const selectLanguage = (code) => {
  currentLocale.value = code; 
  switchLanguage();          
  isLangMenuOpen.value = false; 
};

export function useLanguage() {
  const { locale } = useI18n({ useScope: 'global' });
  
  const currentLocale = ref(locale.value);

  const switchLanguage = () => {
    locale.value = currentLocale.value;
    localStorage.setItem('app_lang', currentLocale.value);

    if (currentLocale.value === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', currentLocale.value);
    }
  };

  return {
    currentLocale,
    switchLanguage
  };
}

export default i18n;