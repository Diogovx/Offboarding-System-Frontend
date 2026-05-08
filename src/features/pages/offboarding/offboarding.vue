<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    
   <div class="absolute top-18 sm:top-18 end-4 sm:end-5 z-50">
      <LanguageSwitcher /> 
    </div>
    <nav class="bg-cladtek shadow-lg text-white">
      <div class="px-4 py-3 flex items-center justify-between">
        
        <div class="flex items-center gap-6">
          <span class="font-bold text-lg tracking-wide">
            <img src="data:image/png;base64,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" alt="logo">
          </span>

          <div class="hidden sm:flex items-center gap-4 text-sm">
            <router-link to="/offboarding" class="text-white/80 hover:text-white transition-colors" :class="{ 'font-semibold border-b-2 border-white text-white': currentPage === 'offboarding' }">{{ $t('navbar.offboarding') }}</router-link>
            <router-link v-if="isAdmin" to="/users" class="text-white/80 hover:text-white transition-colors" :class="{ 'font-semibold border-b-2 border-white text-white': currentPage === 'users_management' }">{{ $t('navbar.users') }}</router-link>
            <router-link v-if="isAdmin" to="/logs" class="text-white/80 hover:text-white transition-colors" :class="{ 'font-semibold border-b-2 border-white text-white': currentPage === 'logs' }">{{ $t('navbar.audit') }}</router-link>
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

    <main class="flex-1 max-w-3xl w-full mx-auto p-6 mt-10">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">{{ $t('offboarding.title') }}</h1>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('offboarding.search_label') }}</label>
        <div class="flex gap-2">
          <input v-model="searchQuery" @keyup.enter="searchUser" type="text" :placeholder="$t('offboarding.registration_placeholder')"
              class="block w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-cladtek transition-all">
          <button @click="searchUser" :disabled="isLoading" class="bg-cladtek cursor-pointer hover:bg-cladtek-dark text-white px-6 py-2 rounded-lg font-bold transition-all disabled:opacity-50 min-w-[100px]">
            {{ isLoading ? '...' : $t('offboarding.btn_search') }}
          </button>
        </div>
        <p v-if="searchMessage" class="mt-2 text-sm" :class="searchStatusClass">{{ searchMessage }}</p>
      </div>

      <div v-if="isLoading" class="bg-white rounded-xl shadow-md border border-gray-200 p-6 mt-6 animate-pulse">
        <div class="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div class="space-y-2">
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
          <div class="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>

      <div v-if="foundUser && foundUser.id_system" class="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden mt-6 fade-in">
        <div class="p-6">
          <div class="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
            <div>
              <p class="text-2xl font-bold text-gray-900">{{ $t('offboarding.user_name') }} {{ foundUser.name }}</p>
              <br>
              <p class="text-xl text-gray-500 font-mono">{{ $t('offboarding.user_id') }} {{ foundUser.registration }}</p>
              <p class="text-xl text-gray-500 font-mono">{{ $t('offboarding.user_dept') }} {{ foundUser.role}} </p>
              <p class="text-xl text-gray-500 font-mono">{{ $t('offboarding.user_status') }} {{ foundUser.current_status }}</p>
              <p class="text-xl text-gray-500 font-mono">{{ $t('offboarding.user_email') }} {{ foundUser.email }}</p>
            </div>
            
            <button 
              @click="executeOffboarding" 
              :disabled="isOffboarded"
              class="shrink-0 cursor-pointer border px-4 py-2 rounded-lg font-bold transition-all text-sm"
              :class="isOffboarded 
                ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' 
                : 'bg-red-50 text-red-600 border-red-200 hover:bg-red-600 hover:text-white cursor-pointer'">
              {{ isOffboarded ? 'Desativado' : $t('offboarding.btn_offboard') }}
            </button>
          </div>

          <div class="mt-6">
            <template v-if="isOffboarded">
              <div class="flex items-center gap-2 mb-3">
                <p class="text-[13px] font-bold text-red-500 uppercase tracking-widest">
                  ⚠ Serviços desativados
                  <span v-if="lastOffboarding">
                    (em {{ new Date(lastOffboarding.offboarded_at).toLocaleDateString('pt-BR') }} 
                    por {{ lastOffboarding.performed_by }})
                  </span>
                  <span v-else>
                    (Status atual: {{ foundUser.current_status }})
                  </span>
                </p>
              </div>
              <div class="flex flex-wrap gap-2">
                <template v-if="displayServices && displayServices.length > 0">
                  <span v-for="service in displayServices" :key="service.name" 
                        class="px-4 py-1 text-sm font-bold rounded-full border transition-colors"
                        :class="service.active
                        ? 'bg-cladtek/10 text-cladtek border-cladtek/20'
                        : 'bg-red-50 text-red-600 border-red-200'">
                    {{ service.name }}
                  </span>
                </template>
                <span v-else class="text-sm text-gray-400 italic font-light">
                  Nenhum sistema registrado.
                </span>
              </div>
            </template>

            <template v-else>
              <p class="text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                {{ $t('offboarding.systems_identified') }}
              </p>
              <div class="flex flex-wrap gap-2">
                <template v-if="displayServices && displayServices.length > 0">
                  <span v-for="service in displayServices" :key="service.name" 
                        class="px-6 py-1 bg-cladtek/10 text-cladtek text-sm font-bold rounded-full border border-cladtek/20">
                    {{ service.name }}
                  </span>
                </template>
                <span v-else class="text-sm text-gray-400 italic font-light">
                  Nenhum sistema identificado.
                </span>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div v-if="actionMessage" class="mt-6 p-4 rounded-lg border-s-4 shadow-sm fade-in" :class="actionClass">
        <p class="font-medium">{{ actionMessage }}</p>
      </div>
    </main>

    <div v-if="showConfirmModal" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"></div>
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-gray-200">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0">
                  <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ms-4 sm:text-start">
                  <h3 class="text-lg font-bold text-cladtek" id="modal-title">Desativação do Colaborador</h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Tem certeza que deseja desativar o usuário <strong>{{ foundUser?.name }} ({{foundUser?.registration}})</strong>? 
                      Acesso a serem desativados: 
                      <span class="text-cladtek-dark font-semibold">
                        {{ servicesToDeactivateString || 'Nenhum sistema ativo detectado' }}
                      </span>. 
                      Essa ação não poderá ser desfeita.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t border-gray-100">
              <button type="button" @click="confirmOffboarding" 
                      class="inline-flex w-full cursor-pointer justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 sm:ms-3 sm:w-auto transition-colors">
                {{ isProcessing ? 'Processando...' : 'Desativar' }}
              </button>
              <button type="button" @click="showConfirmModal = false" 
                      class="mt-3 cursor-pointer inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-bold text-cladtek ring-1 ring-inset ring-cladtek hover:bg-cladtek hover:text-white sm:mt-0 sm:w-auto transition-all">
                Cancelar 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useLanguage } from '@/core/i18n/index.js';

const router = useRouter();

// ---- Lógica do Idioma Customizado ----
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

// -------------------------------------

const currentUser = ref(localStorage.getItem("username") || "");
const isAdmin = ref(false);
const menuOpen = ref(false);
const currentPage = ref('offboarding');

const searchQuery = ref("");
const foundUser = ref(null);

const isLoading = ref(false);
const isProcessing = ref(false);
const showConfirmModal = ref(false);

const lastOffboarding = ref(null);

const searchMessage = ref("");
const searchStatusClass = ref("");
const actionMessage = ref("");
const actionClass = ref("");
const listServices = ref([]);

import LanguageSwitcher from '@/shared/components/languageSwitcher.vue';

onMounted(() => {
  const token = localStorage.getItem("access_token");
  
  if (!token) {
    router.push('/login');
    return;
  }
  
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("access_token");
        router.push('/login');
      }
      return Promise.reject(error);
    }
  );

  checkAdmin();
});

const checkAdmin = async () => {
  try {
    const { data } = await axios.get("/users/me");
    isAdmin.value = data.userRole === 1;
  } catch {
    isAdmin.value = false;
  }
};

const isOffboarded = computed(() => {
  if (foundUser.value && foundUser.value.is_active === true) {
    return false;
  }
  if (lastOffboarding.value) {
    return true;
  }
  if (foundUser.value && foundUser.value.is_active === false) {
    return true;
  }
  return false;
});

const displayServices = computed(() => {
  if (listServices.value && listServices.value.length > 0) {
    return listServices.value;
  }
  if (lastOffboarding.value && lastOffboarding.value.revoked_systems) {
    return lastOffboarding.value.revoked_systems.map(s => ({ name: s, active: false }));
  }
  return [];
});

const servicesToDeactivateString = computed(() => {
  if (!listServices.value || listServices.value.length === 0) return "";
  
  return listServices.value
    .filter(s => s.active)
    .map(s => s.name)
    .join(', ');
});

const searchUser = async () => {
  if (!searchQuery.value.trim()) return;

  isLoading.value = true;
  searchMessage.value = "";
  actionMessage.value = "";
  foundUser.value = null;
  listServices.value = [];
  lastOffboarding.value = null;

  try {
    const response = await axios.get(`/intouch/${searchQuery.value}`);
    const response_services = await axios.get(`/offboarding/search/${searchQuery.value}`);
    const response_history = await axios.get(`/offboarding/history/`, {
      params: { registration: searchQuery.value, limit: 1 }
    });

    if (response.data && response.data.found === true) {
      foundUser.value = response.data;
      const servicesObj = response_services.data || {};
      listServices.value = Object.keys(servicesObj).map(key => ({
        name: key,
        active: servicesObj[key]
      }));

      if (response_history.data && response_history.data.total > 0){
        lastOffboarding.value = response_history.data.items[0];
      }
    } else {
      searchMessage.value = "Matrícula não encontrada no sistema.";
      searchStatusClass.value = "text-red-500 font-medium";
    }
  } catch (error) {
    console.error("Search error:", error);
    searchMessage.value = "Erro de conexão.";
    searchStatusClass.value = "text-red-500 font-medium";
  } finally {
    isLoading.value = false;
  }
};

const executeOffboarding = () => {
  showConfirmModal.value = true;
};

const confirmOffboarding = async () => {
  if (!foundUser.value) return;

  isProcessing.value = true;

  try {
    const registration = foundUser.value.registration;
    const response = await axios.post(`/offboarding/execute/${registration}`);
    
    if (response.data.success) {
      showConfirmModal.value = false;
      actionMessage.value = `Sucesso! Sistemas afetados: ${response.data.details.join(", ")}.`;
      actionClass.value = "bg-green-50 border-green-500 text-green-700";
      foundUser.value = null;
      lastOffboarding.value = null;
    }
  } catch (error) {
    const msg = error.response?.data?.detail || "Erro ao processar.";
    actionMessage.value = `Falha: ${msg}`;
    actionClass.value = "bg-red-50 border-red-500 text-red-700";
    showConfirmModal.value = false;
  } finally {
    isProcessing.value = false;
  }
};

const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("username");
  router.push('/login'); 
};
</script>