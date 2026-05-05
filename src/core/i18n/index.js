import { createI18n } from 'vue-i18n'
import ptBR from '@/shared/locales/pt-BR.json'
import enUS from '@/shared/locales/en-US.json'
import arSA from '@/shared/locales/ar-SA.json'
import idID from '@/shared/locales/id-ID.json'

const i18n = createI18n({
  legacy: false, 
  locale: 'pt-BR', 
  fallbackLocale: 'en-US', //second language
  messages: {
    'pt-BR': ptBR,
    'en-US': enUS,
    'ar-SA': arSA,
    'id-ID': idID
  }
})

export default i18n