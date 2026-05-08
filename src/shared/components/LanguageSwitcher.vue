<template>
  <div class="relative inline-block text-left">
    
    <button 
      @click="isLangMenuOpen = !isLangMenuOpen" 
      class="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-600 hover:text-cladtek hover:bg-white shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-cladtek cursor-pointer"
      title="Mudar Idioma"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    </button>

    <div v-if="isLangMenuOpen" @click="isLangMenuOpen = false" class="fixed inset-0 z-40"></div>

    <div 
      v-show="isLangMenuOpen" 
      class="absolute end-0 mt-2 w-48 rounded-xl shadow-lg bg-white border border-gray-100 z-50 overflow-hidden fade-in"
    >
      <div class="py-1">
        <button 
          v-for="lang in availableLanguages" 
          :key="lang.code"
          @click="selectLanguage(lang.code)"
          class="w-full text-start px-4 py-2.5 text-sm transition-colors cursor-pointer flex items-center justify-between"
          :class="currentLocale === lang.code ? 'bg-blue-50 text-cladtek font-bold' : 'text-gray-700 hover:bg-gray-50 hover:text-cladtek'"
        >
          {{ lang.label }}
          <svg v-if="currentLocale === lang.code" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useLanguage } from '@/core/i18n/index.js'; 

const { currentLocale, switchLanguage } = useLanguage();
const isLangMenuOpen = ref(false);

const availableLanguages = [
  { code: 'pt', label: 'Português 🇧🇷' },
  { code: 'en', label: 'English 🇺🇸' },
  { code: 'id', label: 'Bahasa Indonesia 🇮🇩' },
  { code: 'ar', label: 'العربية 🇸🇦' }
];

const selectLanguage = (code) => {
  currentLocale.value = code;
  switchLanguage();
  isLangMenuOpen.value = false;
};
</script>