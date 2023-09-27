import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DashboardView.vue'
import { useAuthStore } from '../stores/auth';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (authStore.currentUser) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/todos',
      component: () => import('../views/TodoApp.vue'),
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (authStore.currentUser) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
