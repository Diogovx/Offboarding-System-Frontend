import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/features/pages/login/login.vue'
import Onboarding from '@/features/pages/onboarding/onboarding.vue'
import Offboarding from '@/features/pages/offboarding/offboarding.vue'
import Audit from '@/features/pages/audit/audit.vue' 
import User from '@/features/pages/users/users.vue' 

const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/onboarding', name: 'onboarding', component: Onboarding },
  { path: '/offboarding', name: 'offboarding', component: Offboarding },
  { path: '/audit', name: 'audit', component: Audit },
  { path: '/users', name: 'users', component: User },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router