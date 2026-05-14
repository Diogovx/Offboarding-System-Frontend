<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });

onMounted(() => {
  const currentLang = localStorage.getItem('app_lang') || 'pt';
  locale.value = currentLang;

  if (currentLang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
  }
});
</script>