<template>
  <div class="min-h-screen flex flex-col bg-gray-50">

 <div class="absolute top-18 sm:top-18 end-4 sm:end-5 z-50">
      <LanguageSwitcher /> 
    </div>
    <nav class="bg-cladtek shadow-lg text-white">
      <div class="px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <span class="font-bold text-lg tracking-wide">
            <img src="data:image/png;base64,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" alt="logo" />
          </span>
          <div class="hidden sm:flex items-center gap-4 text-sm">
            <router-link to="/offboarding" class="text-white/80 hover:text-white transition-colors" :class="{ 'font-semibold border-b-2 border-white text-white': currentPage === 'offboarding' }">{{ $t('navbar.offboarding') }}</router-link>
            <router-link v-if="isAdmin" to="/users" class="text-white/80 hover:text-white transition-colors" :class="{ 'font-semibold border-b-2 border-white text-white': currentPage === 'users_management' }">{{ $t('navbar.users') }}</router-link>
            <router-link v-if="isAdmin" to="/logs" class="text-white/80 hover:text-white transition-colors" :class="{ 'font-semibold border-b-2 border-white text-white': currentPage === 'logs' }">{{ $t('navbar.audit') }}</router-link>
          </div>
        </div>
        <div class="flex items-center gap-3 text-sm">
          <span class="hidden sm:inline">{{ $t('navbar.hello') }} <strong>{{ currentUser }}</strong></span>
          <button @click="logout" class="hidden sm:block cursor-pointer bg-white/20 hover:bg-white/30 px-3 py-1 rounded transition-colors">{{ $t('navbar.logout') }}</button>
          <button @click="menuOpen = !menuOpen" class="sm:hidden cursor-pointer p-1 rounded hover:bg-white/20 transition-colors">
            <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
      <div v-show="menuOpen" class="sm:hidden border-t border-white/20 py-2 px-4 flex flex-col gap-2 text-sm">
        <span class="text-white/70">{{ $t('navbar.hello') }} <strong class="text-white">{{ currentUser }}</strong></span>
        <router-link to="/offboarding" class="text-white/80 cursor-pointer hover:text-white py-1 transition-colors">{{ $t('navbar.offboarding') }}</router-link>
        <router-link v-if="isAdmin" to="/users" class="text-white/80 cursor-pointer hover:text-white py-1 transition-colors">{{ $t('navbar.users') }}</router-link>
        <router-link v-if="isAdmin" to="/logs" class="text-white/80 cursor-pointer hover:text-white py-1 transition-colors">{{ $t('navbar.audit') }}</router-link>
        <button @click="logout" class="text-start text-white/80 hover:text-white cursor-pointer py-1 transition-colors">{{ $t('navbar.logout') }}</button>
      </div>
    </nav>

    <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 mt-10">

      <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between mb-6 sm:mb-8">
        <h1 class="text-xl sm:text-2xl font-bold text-gray-800">{{ $t('users.title') }}</h1>

        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <div class="flex items-center border ps-3 gap-2 bg-white border-gray-300 h-[38px] rounded-lg overflow-hidden w-full sm:w-64 focus-within:ring-2 focus-within:ring-cladtek focus-within:border-cladtek transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input v-model="searchQuery" type="text" :placeholder="$t('users.search_placeholder')" class="w-full h-full outline-none text-gray-700 placeholder-gray-400 text-sm bg-transparent" />
          </div>

          <div class="flex gap-2">
            <div class="relative inline-block flex-1 sm:flex-none sm:w-48 text-sm group">
              <button type="button" class="peer w-full h-[38px] flex items-center justify-between px-4 cursor-pointer border rounded-lg bg-white text-gray-700 border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cladtek transition-all">
                <span class="font-medium truncate">
                  {{ statusFilter === 'all' ? $t('users.filter_all') : (statusFilter === 'active' ? $t('users.filter_active') : $t('users.filter_inactive')) }}
                </span>
                <svg class="w-4 h-4 ms-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
              </button>
              <ul class="hidden absolute z-40 w-full bg-white border border-gray-200 rounded-lg shadow-xl mt-1 py-1 peer-focus:block hover:block">
                <li @mousedown="statusFilter = 'all'" class="flex items-center gap-2 px-4 py-2 hover:bg-cladtek hover:text-white cursor-pointer transition-colors" :class="{'bg-blue-50 text-cladtek font-bold': statusFilter === 'all'}">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>{{ $t('users.filter_all') }}
                </li>
                <li @mousedown="statusFilter = 'active'" class="flex items-center gap-2 px-4 py-2 hover:bg-cladtek hover:text-white cursor-pointer transition-colors" :class="{'bg-blue-50 text-cladtek font-bold': statusFilter === 'active'}">
                  <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>{{ $t('users.filter_active') }}
                </li>
                <li @mousedown="statusFilter = 'inactive'" class="flex items-center gap-2 px-4 py-2 hover:bg-cladtek hover:text-white cursor-pointer transition-colors" :class="{'bg-blue-50 text-cladtek font-bold': statusFilter === 'inactive'}">
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>{{ $t('users.filter_inactive') }}
                </li>
              </ul>
            </div>

            <button @click="openModal('create')" class="bg-cladtek h-[38px] shadow-sm hover:bg-cladtek-dark text-white px-4 sm:px-5 cursor-pointer rounded-lg font-bold transition-all flex items-center gap-2 whitespace-nowrap">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path d="M12 4v16m8-8H4" stroke-linecap="round"/></svg>
              <span class="hidden xs:inline sm:inline">{{ $t('users.btn_new_desktop') }}</span>
              <span class="sm:hidden">{{ $t('users.btn_new_mobile') }}</span>
            </button>
          </div>
        </div>
</div>
        <div class="hidden md:block bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden fade-in">
          <table class="w-full text-start">
            <thead class="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase text-xs font-bold">
              <tr>
                <th class="px-6 py-4 text-start">{{ $t('users.table_user') }}</th>
                <th class="px-6 py-4 text-start">{{ $t('users.table_role') }}</th>
                <th class="px-6 py-4 text-start">{{ $t('users.table_status') }}</th>
                <th class="px-6 py-4 text-end">{{ $t('users.table_actions') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="user in filteredUsers" :key="user.id" :class="{'grayscale opacity-60 bg-gray-50': !user.enabled}">
                <td class="px-6 py-4">
                  <div class="font-bold text-gray-900">{{ user.username }}</div>
                  <div class="text-xs text-gray-500">{{ user.email }}</div>
                </td>
                <td class="px-6 py-4">
                  <span :class="user.userRole === 1 ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'" class="px-2 py-1 rounded text-[10px] font-black uppercase">
                    {{ user.userRole === 1 ? $t('users.role_admin') : $t('users.role_common') }}
                  </span>
                </td>
                <td class="px-6 py-4 text-sm font-medium">
                  <span v-if="user.enabled" class="flex items-center gap-1.5 text-green-600">
                    <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path fill="white" stroke="none" d="M9 12l2 2 4-4"/></svg>{{ $t('users.status_active') }}
                  </span>
                  <span v-else class="flex items-center gap-1.5 text-gray-400">
                    <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/></svg>{{ $t('users.status_inactive') }}
                  </span>
                </td>
                <td class="px-6 py-4 text-end space-x-2 rtl:space-x-reverse">
                  <button @click="viewHistory(user)" class="text-gray-500 cursor-pointer hover:text-cladtek transition-colors" :title="$t('users.action_history')">
                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linecap="round"/></svg>
                  </button>
                  <button @click="openModal('edit', user)" class="text-cladtek cursor-pointer hover:underline font-bold">{{ $t('users.action_edit') }}</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="filteredUsers?.length === 0" class="text-center py-12 text-gray-400 text-sm">
            {{ $t('users.empty_state') }}
          </div>
        </div>

        <div class="md:hidden space-y-3 fade-in">
          <div v-for="user in filteredUsers" :key="'card-' + user.id"
               class="bg-white rounded-xl border border-gray-200 shadow-sm p-4 transition-all"
               :class="{'grayscale opacity-60 bg-gray-50': !user.enabled}">
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0 flex-1">
                <div class="font-bold text-gray-900 truncate">{{ user.username }}</div>
                <div class="text-xs text-gray-500 truncate mt-0.5">{{ user.email }}</div>
                <div class="flex items-center gap-2 mt-2 flex-wrap">
                  <span :class="user.userRole === 1 ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'" class="px-2 py-0.5 rounded text-[10px] font-black uppercase">
                    {{ user.userRole === 1 ? $t('users.role_admin') : $t('users.role_common') }}
                  </span>
                  <span v-if="user.enabled" class="flex items-center gap-1 text-green-600 text-xs font-medium">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path fill="white" stroke="none" d="M9 12l2 2 4-4"/></svg>{{ $t('users.status_active') }}
                  </span>
                  <span v-else class="flex items-center gap-1 text-gray-400 text-xs font-medium">
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/></svg>{{ $t('users.status_inactive') }}
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-3 flex-shrink-0">
                <button @click="viewHistory(user)" class="text-gray-400 hover:text-cladtek transition-colors" :title="$t('users.action_history')">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linecap="round"/></svg>
                </button>
                <button @click="openModal('edit', user)" class="text-sm text-cladtek font-bold hover:underline">{{ $t('users.action_edit') }}</button>
              </div>
            </div>
          </div>
          <div v-if="filteredUsers?.length === 0" class="text-center py-12 text-gray-400 text-sm">
            {{ $t('users.empty_state') }}
          </div>
        </div>

      </main>

      <div v-if="modals.form" @mousedown.self="modals.form = false" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 z-50">
        <div class="bg-white w-full sm:rounded-2xl sm:max-w-md shadow-2xl overflow-hidden fade-in rounded-t-2xl">
          <div class="bg-cladtek px-6 py-4 flex justify-between items-center">
            <h3 class="font-bold text-white">{{ isEditing ? $t('users.modal_edit_title') : $t('users.modal_create_title') }}</h3>
            <button @click="modals.form = false" class="text-white cursor-pointer hover:text-gray-200 text-2xl flex-shrink-0">&times;</button>
          </div>

          <form @submit.prevent="submitForm" class="p-6 space-y-4 overflow-y-auto max-h-[80vh] sm:max-h-none text-start">
            <div v-if="feedback" class="bg-green-100 text-green-700 p-3 rounded-lg text-sm font-bold flex items-center gap-2">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              {{ feedback }}
            </div>
            <div v-if="formError" class="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm font-medium flex items-start gap-2">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              {{ formError }}
            </div>

            <div>
              <label class="text-xs font-bold text-gray-500 uppercase">{{ $t('users.label_username') }}</label>
              <input v-model="form.username" type="text" :placeholder="isEditing ? selectedUser.username : 'Ex: joao.silva'" :disabled="isEditing" class="mt-2 rounded-md ring ring-gray-200 bg-transparent focus:ring-2 focus:ring-cladtek outline-none px-3 py-3 w-full disabled:opacity-50" />
            </div>
            <div>
              <label class="text-xs font-bold text-gray-500 uppercase">{{ $t('users.label_email') }}</label>
              <input v-model="form.email" type="email" :placeholder="isEditing ? selectedUser.email : 'email@cladtek.com'" class="mt-2 rounded-md ring ring-gray-200 bg-transparent focus:ring-2 focus:ring-cladtek outline-none px-3 py-3 w-full" />
            </div>
            <div>
              <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">{{ $t('users.label_password') }}</label>
              <input v-model="form.password" type="password" placeholder="••••••••" class="w-full border border-gray-300 bg-transparent rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-cladtek transition-all">
              <div v-if="form.password || !isEditing" class="mt-2 grid grid-cols-2 gap-1 text-[9px] font-bold">
                <span :class="passwordCriteria.length  ? 'text-green-600' : 'text-gray-400'">● {{ $t('users.pwd_min') }}</span>
                <span :class="passwordCriteria.upper   ? 'text-green-600' : 'text-gray-400'">● {{ $t('users.pwd_upper') }}</span>
                <span :class="passwordCriteria.lower   ? 'text-green-600' : 'text-gray-400'">● {{ $t('users.pwd_lower') }}</span>
                <span :class="passwordCriteria.special ? 'text-green-600' : 'text-gray-400'">● {{ $t('users.pwd_special') }}</span>
              </div>
            </div>
            <div>
              <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">{{ $t('users.label_confirm_password') }}</label>
              <input v-model="confirmPassword" type="password" placeholder="••••••••"
                class="w-full border rounded-lg px-3 py-2 mt-1 bg-transparent outline-none focus:ring-2 transition-all"
                :class="passwordsMatch || !confirmPassword ? 'border-gray-300 focus:ring-cladtek' : 'border-red-500 focus:ring-red-200'">
              <p v-if="!passwordsMatch && confirmPassword" class="text-[10px] text-red-500 mt-1 font-bold animate-pulse">{{ $t('users.pwd_mismatch') }}</p>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{{ $t('users.label_role') }}</label>
                <div class="relative inline-block w-full text-sm group">
                  <button type="button" class="peer w-full h-[38px] flex items-center justify-between px-4 cursor-pointer border rounded-lg bg-white text-gray-700 border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cladtek transition-all">
                    <span class="font-medium truncate">{{ form.userRole === 1 ? $t('users.role_admin') : $t('users.role_common') }}</span>
                    <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                  </button>
                  <ul class="hidden absolute z-50 w-full bg-white border border-gray-200 rounded-lg shadow-xl mt-1 py-1 peer-focus:block hover:block">
                    <li @mousedown="form.userRole = 1" class="flex items-center gap-2 px-4 py-2 hover:bg-cladtek hover:text-white cursor-pointer transition-colors" :class="{'bg-blue-50 text-cladtek font-bold': form.userRole === 1}">
                      {{ $t('users.role_admin') }}
                    </li>
                    <li @mousedown="form.userRole = 3" class="flex items-center gap-2 px-4 py-2 hover:bg-cladtek hover:text-white cursor-pointer transition-colors" :class="{'bg-blue-50 text-cladtek font-bold': form.userRole === 3}">
                      {{ $t('users.role_common') }}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{{ $t('users.table_status') }}</label>
                <div class="flex items-center gap-3 mt-2">
                  <label class="relative inline-flex cursor-pointer items-center gap-3 text-gray-700 text-sm font-medium select-none">
                    <input type="checkbox" v-model="form.enabled" class="peer sr-only" />
                    <div class="peer h-7 w-12 rounded-full bg-slate-300 ring-offset-1 transition-colors duration-200 peer-checked:bg-cladtek peer-focus:ring-2 peer-focus:ring-cladtek"></div>
                    <span class="dot absolute top-1 start-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5 rtl:peer-checked:-translate-x-5 shadow-sm"></span>
                    {{ form.enabled ? $t('users.status_active') : $t('users.status_inactive') }}
                  </label>
                </div>
              </div>
            </div>

            <div class="pt-4 flex gap-3">
              <button type="button" @click="modals.form = false" class="flex-1 py-2.5 font-bold text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">{{ $t('users.btn_cancel') }}</button>
              <button type="submit" :disabled="!isFormValid" class="flex-1 py-2.5 bg-cladtek text-white font-bold rounded-xl shadow-lg transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:grayscale">
                {{ isEditing ? $t('users.btn_confirm') : $t('users.btn_create') }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="modals.history" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 z-50">
        <div class="bg-white w-full sm:rounded-2xl sm:max-w-2xl shadow-2xl overflow-hidden fade-in rounded-t-2xl">
          <div class="bg-cladtek px-6 py-4 text-white flex justify-between items-center text-start">
            <h3 class="font-bold text-base sm:text-lg truncate pr-4">{{ $t('users.modal_history_title') }} {{ selectedUser?.username }}</h3>
            <button @click="modals.history = false" class="text-white cursor-pointer hover:text-gray-200 text-2xl flex-shrink-0">&times;</button>
          </div>
          <div class="p-4 sm:p-6 max-h-[70vh] sm:max-h-[400px] overflow-y-auto text-start">
            <div v-if="loadingHistory" class="text-center py-10 text-gray-400">{{ $t('users.history_loading') }}</div>
            <div v-else-if="userLogs.length === 0" class="text-center py-10 text-gray-400">{{ $t('users.history_empty') }}</div>
            <div v-else class="space-y-3">
              <div v-for="log in userLogs" :key="log.id" class="border-s-4 border-cladtek bg-gray-50 p-3 rounded-e-lg">
                <div class="flex flex-col sm:flex-row sm:justify-between text-xs font-bold text-gray-500 mb-1 gap-0.5">
                  <span>{{ log.action }}</span>
                  <span class="text-gray-400">{{ formatLogDate(log) }}</span>
                </div>
                <p class="text-sm text-gray-700">{{ log.message }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useLanguage } from '@/core/i18n/index.js';

const router = useRouter();
const { currentLocale, switchLanguage } = useLanguage();

const currentUser = ref(localStorage.getItem("username") || "");
const isAdmin = ref(false);
const menuOpen = ref(false);
const currentPage = ref('users_management');

const users = ref([]);
const searchQuery = ref("");
const statusFilter = ref("all");

const modals = ref({ form: false, history: false });
const isEditing = ref(false);
const selectedUser = ref(null);
const feedback = ref("");
const formError = ref("");

const userLogs = ref([]);
const loadingHistory = ref(false);

import LanguageSwitcher from '@/shared/components/LanguageSwitcher.vue';

const form = ref({
  username: "",
  email: "",
  password: "",
  userRole: 3, 
  enabled: true
});
const confirmPassword = ref("");

onMounted(async () => {
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

  await checkAdmin();

  if (!isAdmin.value) {
    router.push('/offboarding');
  } else {
    fetchUsers();
  }
});

const checkAdmin = async () => {
  try {
    const { data } = await axios.get("/users/me");
    isAdmin.value = data.userRole === 1;
  } catch {
    isAdmin.value = false;
  }
};

const fetchUsers = async () => {
  try {
    const response = await axios.get('/users');
    users.value = response.data || [];
  } catch (error) {
    console.error("Erro ao buscar usuários", error);
  }
};

const filteredUsers = computed(() => {

  let filtered = users.value || []; 
  
  if (statusFilter.value === 'active') {
    filtered = filtered.filter(u => u.enabled);
  } else if (statusFilter.value === 'inactive') {
    filtered = filtered.filter(u => !u.enabled);
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(u => 
      (u.username && u.username.toLowerCase().includes(query)) ||
      (u.email && u.email.toLowerCase().includes(query))
    );
  }
  
  return filtered;
});

const passwordCriteria = computed(() => {
  const pwd = form.value.password || ''; 
  
  return {
    length: pwd.length >= 8,
    upper: /[A-Z]/.test(pwd),
    lower: /[a-z]/.test(pwd),
    special: /[@$!%*?]/.test(pwd),
  };
});

const passwordsMatch = computed(() => {
  return form.value.password === confirmPassword.value;
});

const isFormValid = computed(() => {
  if (!form.value.username || !form.value.email) return false;
  if (!isEditing.value) {
    if (!passwordsMatch.value || !form.value.password) return false;
    const crit = passwordCriteria.value;
    if (!crit.length || !crit.upper || !crit.lower || !crit.special) return false;
  } else if (form.value.password) {
    if (!passwordsMatch.value) return false;
    const crit = passwordCriteria.value;
    if (!crit.length || !crit.upper || !crit.lower || !crit.special) return false;
  }
  return true;
});

// Ações
const openModal = (type, user = null) => {
  feedback.value = "";
  formError.value = "";
  confirmPassword.value = "";
  
  if (type === 'create') {
    isEditing.value = false;
    selectedUser.value = null;
    form.value = { username: "", email: "", password: "", userRole: 3, enabled: true };
  } else {
    isEditing.value = true;
    selectedUser.value = user;
    form.value = { ...user, password: "" };
  }
  
  modals.value.form = true;
};

const submitForm = async () => {
  if (!isFormValid.value) return;
  formError.value = "";
  feedback.value = "";

  try {
    const payload = { ...form.value };
    if (!payload.password) delete payload.password; 

    if (isEditing.value) {
      await axios.put(`/users/${selectedUser.value.id}`, payload);
      feedback.value = "Usuário atualizado com sucesso!";
    } else {
      await axios.post('/users', payload);
      feedback.value = "Usuário criado com sucesso!";
    }
    
    fetchUsers();
    setTimeout(() => { modals.value.form = false; }, 1500); 
  } catch (error) {
    formError.value = error.response?.data?.detail || "Erro ao salvar o usuário.";
  }
};

const viewHistory = async (user) => {
  selectedUser.value = user;
  modals.value.history = true;
  loadingHistory.value = true;
  userLogs.value = [];

  try {
    const response = await axios.get(`/audit`, { params: { user_id: user.id } });
    userLogs.value = response.data.items || response.data || [];
  } catch (error) {
    console.error("Erro ao buscar histórico", error);
  } finally {
    loadingHistory.value = false;
  }
};

const formatLogDate = (log) => {
  if (!log.created_at) return "";
  return new Date(log.created_at).toLocaleString();
};

const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("username");
  router.push('/login');
};
</script>