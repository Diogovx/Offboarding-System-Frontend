<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    
    <div class="absolute top-18 sm:top-18 end-4 sm:end-5 z-50">
      <LanguageSwitcher /> 
    </div>
    
    <Navbar />

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
import axios from 'axios';

import LanguageSwitcher from '@/shared/components/LanguageSwitcher.vue';
import Navbar from '@/shared/components/Navbar.vue';

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

onMounted(() => {
  fetchLogs();
});

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
</script>