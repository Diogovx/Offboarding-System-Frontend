<template>
  <nav class="bg-cladtek shadow-lg text-white">
    <div class="px-4 py-3 flex items-center justify-between">
      
      <div class="flex items-center gap-6">
        <span class="font-bold text-lg tracking-wide">
          <img src="data:image/png;base64, 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" alt="logo" class="max-h-8">
        </span>

        <div class="hidden sm:flex items-center gap-4 text-sm">
          <router-link to="/offboarding" class="text-white/80 hover:text-white transition-colors" :class="{ 'font-semibold border-b-2 border-white text-white': currentPath.includes('offboarding') }">{{ $t('navbar.offboarding') }}</router-link>
          <router-link v-if="isAdmin" to="/users" class="text-white/80 hover:text-white transition-colors" :class="{ 'font-semibold border-b-2 border-white text-white': currentPath.includes('users') }">{{ $t('navbar.users') }}</router-link>
          <router-link v-if="isAdmin" to="/logs" class="text-white/80 hover:text-white transition-colors" :class="{ 'font-semibold border-b-2 border-white text-white': currentPath.includes('logs') }">{{ $t('navbar.audit') }}</router-link>
        </div>
      </div>

      <div class="flex items-center gap-3 text-sm">
        <span class="hidden sm:inline">{{ $t('navbar.hello') }} <strong>{{ currentUser }}</strong></span>
        <button @click="logout" class="hidden cursor-pointer sm:block bg-white/20 hover:bg-white/30 px-3 py-1 rounded transition-colors">{{ $t('navbar.logout') }}</button>
        
        <button @click="menuOpen = !menuOpen" class="sm:hidden p-1 rounded hover:bg-white/20 transition-colors">
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>

    <div v-show="menuOpen" class="sm:hidden border-t border-white/20 py-2 px-4 flex flex-col gap-2 text-sm">
      <span class="text-white/70">{{ $t('navbar.hello') }} <strong class="text-white">{{ currentUser }}</strong></span>
      <router-link to="/offboarding" class="text-white/80 hover:text-white py-1 transition-colors">{{ $t('navbar.offboarding') }}</router-link>
      <router-link v-if="isAdmin" to="/users" class="text-white/80 cursor-pointer hover:text-white py-1 transition-colors">{{ $t('navbar.users') }}</router-link>
      <router-link v-if="isAdmin" to="/logs" class="text-white/80 hover:text-white py-1 transition-colors">{{ $t('navbar.audit') }}</router-link>
      <button @click="logout" class="text-start text-white/80 hover:text-white py-1 transition-colors">{{ $t('navbar.logout') }}</button>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'; 
import { useRouter, useRoute } from 'vue-router';

import { currentUser, isAdmin, performLogout, checkAdmin } from '@/core/storage/auth.js';

const router = useRouter();
const route = useRoute(); 

const menuOpen = ref(false);
const currentPath = computed(() => route.path);

onMounted(() => {
  checkAdmin();
});

const logout = () => {
  performLogout(router);
};
</script>