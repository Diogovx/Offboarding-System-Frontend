import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/features/pages/login/login.vue'
import Onboarding from '@/features/pages/onboarding/onboarding.vue'
import Offboarding from '@/features/pages/offboarding/offboarding.vue'
import Audit from '@/features/pages/audit/audit.vue' 
import User from '@/features/pages/users/users.vue' 

const routes = [
  { path: '/', name: 'home', redirect: '/login' },
  { path: '/login', name: 'login', component: Login },
  { path: '/onboarding', name: 'onboarding', component: Onboarding },
  { path: '/offboarding', name: 'offboarding', component: Offboarding, meta: { requiresAuth: true } },
  { path: '/logs', name: 'logs', component: Audit, meta: { requiresAuth: true } },
  { path: '/users', name: 'users', component: User, meta: { requiresAuth: true } },

  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/login' 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token');

  if (to.meta.requiresAuth && !token) {
    next('/login');
  } 
  else if (to.path === '/login' && token) {
    next('/offboarding');
  } 
  else {
    next();
  }
})

export default router