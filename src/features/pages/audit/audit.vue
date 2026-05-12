<template>
  <div class="min-h-screen flex flex-col bg-gray-50">

    <nav class="bg-cladtek shadow-lg text-white">
      <div class="px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <span class="font-bold text-lg tracking-wide">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAeCAQAAAAGaMHzAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+oCGg8KIPSy+aAAAAYASURBVFjDzZZ9bNXlFYCfe28/oLSlpdBiDRQ62oSJEqeOMnSKxEHmNOCcE5N9JE7Z1GXqHG6d2XTLps5gzDIyNtyWbS7ZRhbDYBvCUJygqNCIsJYOgTbaQl2x9ru39/Y+++P+er239AOTJfTcP27e877nfZ9z3vM75w0xKcXkXw4rWUkpEWSAo2yhESB0vvHGgZ7BXVQAuUgI6CXCNrZB+HzjjSmFPEA5BUTpJEYHu5Awq/kMZJ1vttFEgHmEKeE4czhEA3FeoZ9ryOEGGiclNJBNMyGamMMG3gAgxByi5NHDzZMyp4Vr+ARVdPMyf0ypC9hAG2XkTtacnkc5veTxKkAoWS+6qSeLyOSFjgBDSDxD208YcLJCnyHEFAZYmBwKEGIBgwwRm6zQDUSYSiu3UJZqNasopph/sWGyVo9jtDKTKhqpZIDpTGE5y3iLhXRzZNTqYcboXAuM/zcbAapYT4xcfkU5nyZBJ1Eq6aCRn44NXcQ0Epxh8EMAFFAAvMfAuTotTKUY6KJnBDTUcDsxiumnnzDTGCJOM0/RM3ZOf4u9/IOPniNxUr7IXp7n6hTtufh7LS+wly+M4uZ+HqOFLuLkkk2UHnbyBD3jtfEy5tHH1A8FXcJ8JB+AW7mRKE9yeAKbAqqBGZnKUDLax/kx86immBjvcJTO5GxWxoWkSwJIDE+Mla8j7EyzuZy1JPhTOvSou0iC8NkAAbac5OTIW8gaFfgskrPHoYns4kCM2Fj7ew66sbIrK1g4l+VcRB7tHOCl4WtI2ZaymIWUEOJdDnKQaOqAaVzFUkpoYzcvB0qZxiouBiJ8ijIi1PFvACpYwUVk8zZ7qGNoFOQI1zKbMIepGzeOZnu7DSZMStQdflz8pdptjbjcQ/Y7LJ3+2tki4gK32Bfo37PWR9W4q632v6bLt8Wwt1mf0rT7qIUift4htTbY8Su+rx70Ese7SUPeZ786aL2v2aLqNvPSoJfYbcwW/+PbxlTdaJY4y52qdlvna3Y4aHMAXemb9qgJ223xtPeIa31fbffvPmuzqo8bGQG91jPqIT+WdGFs6BW2qae8wzILXegmG1yREelp3usaq7zA+d7pKfW0i8RvqnrY6y2y0GXuUTXuTYatcLMa9cvOd4HTnWu9+pbXmWPEi31R7fDKDOgbPK0e8YoJkMG/qHHvDq4H86ySDOjkL2SWIfGH6pA3m+c+tdOVqRWLPBlAIz6uDnhdMLdOHXJdau1yu9SfpKAf9Gqb1XqXTohMFp8EjvNsStPHsRFrIizleqrJo59jzETCFDKbSqCOl1LrjvAc60Z8+sMFYAnQTR81yccleZyhgEtTfaKGLzGXQR7hlfHqxjB0CdBKx1m9/wO5j1qKSb5vP2hG+UwFWuhPWgpkVtSMU2YChWxO0+UCpUwJDruRMJDDKrZmPgJG326QXPLJod/Rau8QS6ilmCY28gZyAWtYQ4gQMeJAARHiDjs8fawcZACIspvOtNiEOMlgMA7TQi/V3MY+ngbHjXUWR1lMFZeyJxXhSEYFXUYxCX7E08F4gNWECPEubZSwmI/QGFgWp14d6bhJ148CsIntAc3IDnWKr9LLn5lJLa9zaPxIh3mGONP5PlWB5ko2ZjyT8oBEqt3ksJIwEOIMe4AKHqI0SJcHqBmBm82FQJgIO+hgCvdQHnyJRdzN5WkX+3u28wJPIfN5mIIJ+rQl/lXVeh/zXn9uq/qcRf5C7fYKVxtTD3iLl7nK3xhV9Q5xsU1qwv3+wIfc6aA9adXjflWP+TOf8XPik6ru8+uu8S53qW+6IFU9viNikX9T494/UZ3GSrcGTSMprX7NLDervdaY5x9UjdnpoO2+qOqdIt5kU5rddjerCT8r4iWeSM18Q5zhpqB7xoOW9ISF4q2qfjcohZfZrLZ51XjQkYehg120U8p0wnTwT9azhQSLKOIEW2lhH0OUk48c4EH2UUkLO2gEGniVAmaRTRu/ZT3ZXEgz22kC2jhBBfn08Tq/4x36eZ4mSphBDl3s53tspA+YTRWn2R3k8SmizKKLIfaSeGQM6P8BllYXUXds3l0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjYtMDItMjZUMTU6MDk6MTgrMDA6MDAOBPT2AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI2LTAyLTI2VDE1OjA5OjE4KzAwOjAwf1lMSgAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNi0wMi0yNlQxNToxMDozMiswMDowMPOCwawAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC" alt="logo" />
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

    <div class="absolute top-20 sm:top-24 end-4 sm:end-8 z-50">
      <LanguageSwitcher />
    </div>

    <main class="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 mt-10">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h1 class="text-2xl font-bold text-gray-800">{{ $t('audit.title') }}</h1>
        
        <div class="flex flex-wrap gap-2">
          <button @click="exportLogs('csv')" :disabled="exporting" class="bg-white cursor-pointer border border-gray-300 hover:border-cladtek hover:text-cladtek text-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 disabled:opacity-50">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            CSV
          </button>
          <button @click="exportLogs('jsonl')" :disabled="exporting" class="bg-white cursor-pointer border border-gray-300 hover:border-cladtek hover:text-cladtek text-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 disabled:opacity-50">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            JSONL
          </button>
          <button @click="exportLogs('pdf')" :disabled="exporting" class="bg-white cursor-pointer border border-gray-300 hover:border-cladtek hover:text-cladtek text-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 disabled:opacity-50">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            PDF
          </button>
          <button @click="exportLogs('xlsx')" :disabled="exporting" class="bg-white cursor-pointer border border-gray-300 hover:border-cladtek hover:text-cladtek text-gray-700 text-sm font-medium px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 disabled:opacity-50">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            XLSX
          </button>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-5 fade-in">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          
          <div class="relative inline-block flex-1 sm:flex-none sm:w-full text-sm group">
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{{ $t('audit.label_action') }}</label>
            <button type="button" class="peer w-full h-[38px] flex items-center justify-between px-4 cursor-pointer border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cladtek transition-all">
              <span class="font-medium truncate">{{ filters.action === '' ? $t('audit.filter_all') : $t(`audit.action_${filters.action}`) }}</span>
              <svg class="w-4 h-4 ms-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <ul class="hidden absolute z-50 w-full bg-white border border-gray-200 rounded-lg shadow-xl mt-1 py-1 peer-focus:block hover:block">
              <li @mousedown="filters.action = ''" class="flex items-center gap-2 px-4 py-2 hover:bg-cladtek hover:text-white cursor-pointer transition-colors" :class="{'bg-blue-50 text-cladtek font-bold': filters.action === ''}">
                {{ $t('audit.filter_all') }}
              </li>
              <li v-for="action in availableActions" :key="action.value" @mousedown="filters.action = action.value" class="flex items-center gap-2 px-4 py-2 hover:bg-cladtek hover:text-white cursor-pointer transition-colors" :class="{'bg-blue-50 text-cladtek font-bold': filters.action === action.value}">
                {{ $t(`audit.action_${action.value}`) }}
              </li>
            </ul>
          </div>
            
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{{ $t('audit.label_login') }}</label>
            <input v-model="filters.username" type="text" :placeholder="$t('audit.login_placeholder')" class="peer w-full h-[38px] flex items-center justify-between px-4 cursor-pointer border border-gray-200 rounded-lg bg-transparent text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cladtek transition-all text-sm">
          </div>

          <div class="relative inline-block flex-1 sm:flex-none sm:w-full text-sm group">
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{{ $t('audit.label_status') }}</label>
            <button type="button" class="peer w-full h-[38px] flex items-center justify-between px-4 cursor-pointer border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cladtek transition-all">
              <span class="font-medium truncate">{{ filters.status === '' ? $t('audit.filter_all') : (filters.status === 'SUCCESS' ? $t('audit.status_success') : $t('audit.status_failed')) }}</span>
              <svg class="w-4 h-4 ms-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <ul class="hidden absolute z-50 w-full bg-white border border-gray-200 rounded-lg shadow-xl mt-1 py-1 peer-focus:block hover:block">
              <li @mousedown="filters.status = ''" class="flex items-center gap-2 px-4 py-2 hover:bg-cladtek hover:text-white cursor-pointer transition-colors" :class="{'bg-blue-50 text-cladtek font-bold': filters.status === ''}">
                {{ $t('audit.filter_all') }}
              </li>
              <li @mousedown="filters.status = 'SUCCESS'" class="flex items-center gap-2 px-4 py-2 hover:bg-cladtek hover:text-white cursor-pointer transition-colors" :class="{'bg-blue-50 text-cladtek font-bold': filters.status === 'SUCCESS'}">
                {{ $t('audit.status_success') }}
              </li>
              <li @mousedown="filters.status = 'FAILED'" class="flex items-center gap-2 px-4 py-2 hover:bg-cladtek hover:text-white cursor-pointer transition-colors" :class="{'bg-blue-50 text-cladtek font-bold': filters.status === 'FAILED'}">
                {{ $t('audit.status_failed') }}
              </li>
            </ul>
          </div>
          
          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{{ $t('audit.label_date_from') }}</label>
            <input v-model="filters.date_from" type="date" class="peer w-full h-[38px] cursor-pointer rounded-lg px-3 py-2 text-sm border border-gray-200 bg-transparent text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cladtek transition-all">
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{{ $t('audit.label_date_to') }}</label>
            <input v-model="filters.date_to" type="date" class="peer w-full h-[38px] cursor-pointer rounded-lg px-3 py-2 text-sm border border-gray-200 bg-transparent text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cladtek transition-all">
          </div>
        </div>
        
        <div class="flex gap-2 mt-3">
          <button @click="applyFilters" class="bg-cladtek cursor-pointer hover:bg-cladtek-dark text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">{{ $t('audit.btn_filter') }}</button>
          <button @click="clearFilters" class="bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors">{{ $t('audit.btn_clear') }}</button>
        </div>
      </div>

      <div v-if="exportMsg" class="mb-4 p-3 rounded-lg text-sm font-medium fade-in" :class="exportError ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'">
        {{ exportMsg }}
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden fade-in">
        <div v-if="loading" class="flex items-center justify-center py-20">
          <div class="animate-spin w-7 h-7 border-2 border-cladtek border-t-transparent rounded-full"></div>
        </div>

        <div v-else-if="error" class="py-16 text-center text-red-500">
          <p class="font-medium">{{ error }}</p>
        </div>

        <div v-else-if="logs?.length === 0" class="py-16 text-center text-gray-400">
          <svg class="w-10 h-10 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          <p class="font-medium">{{ $t('audit.empty_state') }}</p>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full text-sm text-start">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="text-start text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">{{ $t('audit.table_date') }}</th>
                <th class="text-start text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">{{ $t('audit.table_login') }}</th>
                <th class="text-start text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">{{ $t('audit.table_action') }}</th>
                <th class="text-start text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">{{ $t('audit.table_user') }}</th>
                <th class="text-start text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">{{ $t('audit.table_status') }}</th>
                <th class="text-start text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3 hidden md:table-cell">{{ $t('audit.table_ip') }}</th>
                <th class="text-start text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-3 hidden lg:table-cell">{{ $t('audit.table_message') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="log in logs" :key="log.id" class="hover:bg-gray-50 transition-colors">
                <td class="px-4 py-3 text-gray-600 whitespace-nowrap font-mono text-xs">{{ formatDate(log.created_at) }}</td>
                <td class="px-4 py-3 text-gray-800 font-medium">{{ log.username }}</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md text-xs font-semibold">
                    {{ $t(`audit.action_${log.action}`) }}
                  </span>
                </td>
                <td class="px-4 py-3 text-gray-800 font-medium">{{ log.target_username }}</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-0.5 rounded-md text-xs font-bold"
                      :class="log.status === 'SUCCESS' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
                    {{ log.status === 'SUCCESS' ? $t('audit.status_success') : $t('audit.status_failed') }}
                  </span>
                </td>
                <td class="px-4 py-3 text-gray-500 font-mono text-xs hidden md:table-cell">{{ log.ip_address || '—' }}</td>
                <td class="px-4 py-3 text-gray-600 max-w-xs truncate hidden lg:table-cell" :title="log.message">{{ log.message || '—' }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="logs?.length > 0" class="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t border-gray-200 bg-gray-50">
          <p class="text-sm text-gray-500">
            {{ $t('audit.page') }} <strong>{{ filters.page }}</strong> — {{ logs?.length }} {{ $t('audit.records') }}
          </p>
          <div class="flex gap-1">
            <button @click="prevPage" :disabled="filters.page <= 1"
                class="px-3 py-1.5 text-sm rounded-lg border border-gray-200 bg-white hover:border-cladtek hover:text-cladtek transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
              {{ $t('audit.btn_prev') }}
            </button>
            <button @click="nextPage" :disabled="logs?.length < filters.limit"
                class="px-3 py-1.5 text-sm rounded-lg border border-gray-200 bg-white hover:border-cladtek hover:text-cladtek transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
              {{ $t('audit.btn_next') }}
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import LanguageSwitcher from '@/shared/components/LanguageSwitcher.vue';

const router = useRouter();

const currentUser = ref(localStorage.getItem('username') || '');
const isAdmin = ref(false);
const currentPage = ref('logs');
const menuOpen = ref(false);

const logs = ref([]);
const loading = ref(false);
const error = ref('');
const exporting = ref(false);
const exportMsg = ref('');
const exportError = ref(false);

const availableActions = ref([
  { value: 'system_login' },
  { value: 'disable_ad_user' },
  { value: 'disable_intouch_user' },
  { value: 'disable_turnstile_user' },
  { value: 'create_user' },
  { value: 'update_user' },
  { value: 'export_audit_logs' }
]);

const filters = reactive({
  action: '',
  username: '',
  status: '',
  date_from: '',
  date_to: '',
  page: 1,
  limit: 20,
});

onMounted(async () => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    router.push('/login');
    return;
  }
  
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  
  axios.interceptors.response.use(
    response => response,
    err => {
      if (err.response?.status === 401) {
        localStorage.removeItem('access_token');
        router.push('/login');
      }
      return Promise.reject(err);
    }
  );

  await checkAdmin();
  if (isAdmin.value) {
    fetchLogs();
  }
});

const checkAdmin = async () => {
  try {
    const { data } = await axios.get("/users/me");
    if (data.userRole === 1) {
      isAdmin.value = true;
    } else {
      router.push('/offboarding');
    }
  } catch {
    router.push('/login');
  }
};

const buildParams = () => {
  const params = { page: filters.page, limit: filters.limit };
  if (filters.action) params.action = filters.action;
  if (filters.username) params.username = filters.username;
  if (filters.status) params.status = filters.status;
  if (filters.date_from) params.date_from = filters.date_from;
  if (filters.date_to) params.date_to = filters.date_to;
  return params;
};

const fetchLogs = async () => {
  loading.value = true;
  error.value = '';
  try {
    const { data } = await axios.get("/logs", { params: buildParams() });
    logs.value = data.items || [];
  } catch (e) {
    error.value = e.response?.data?.detail || 'Erro ao carregar logs.';
  } finally {
    loading.value = false;
  }
};

const applyFilters = () => {
  error.value = '';
  filters.page = 1;
  if (filters.date_from && filters.date_to) {
    if (new Date(filters.date_to) < new Date(filters.date_from)) {
      error.value = "A data final não pode ser anterior à data inicial.";
      return;
    }
  }
  fetchLogs();
};

const clearFilters = () => {
  Object.assign(filters, { action: '', username: '', status: '', date_from: '', date_to: '', page: 1 });
  fetchLogs();
};

const prevPage = () => { if (filters.page > 1) { filters.page--; fetchLogs(); } };
const nextPage = () => { filters.page++; fetchLogs(); };

const formatDate = (iso) => {
  if (!iso) return '—';
  let dateStr = iso;
  if (!iso.includes('Z') && !iso.includes('+')) {
    dateStr = iso + 'Z';
  }
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return iso;
  
  return d.toLocaleString('pt-BR', { 
    dateStyle: 'short', 
    timeStyle: 'medium' 
  });
};

const exportLogs = async (format) => {
  exporting.value = true;
  exportMsg.value = 'Preparando exportação...';
  exportError.value = false;
  try {
    const payload = {
      format,
      filters: {
        action: filters.action || null,
        username: filters.username || null,
        status: filters.status || null,
        date_from: filters.date_from || null,
        date_to: filters.date_to || null,
        page: 1,
        limit: 10000, 
      }
    };
    const { data } = await axios.post("/logs/export", payload);
    exportMsg.value = 'Gerando arquivo, aguarde...';
    await pollDownload(data.download_url, data.job_id);
  } catch (e) {
    exportMsg.value = e.response?.data?.detail || 'Erro ao iniciar exportação.';
    exportError.value = true;
  } finally {
    exporting.value = false;
  }
};

const pollDownload = async (url, jobId, attempts = 0) => {
  if (attempts > 20) {
    exportMsg.value = 'Timeout na exportação. Tente novamente.';
    exportError.value = true;
    return;
  }
  try {
    const resp = await axios.get(`${url}`, { responseType: 'blob' });
    const blob = new Blob([resp.data]);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = url.split('/').pop();
    a.click();
    exportMsg.value = 'Download iniciado com sucesso!';
    setTimeout(() => exportMsg.value = '', 4000);
  } catch (e) {
    if (e.response?.status === 404) {
      await new Promise(r => setTimeout(r, 1500));
      await pollDownload(url, jobId, attempts + 1);
    } else {
      exportMsg.value = 'Erro ao baixar arquivo.';
      exportError.value = true;
    }
  }
};

const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('username');
  router.push('/login');
};
</script>