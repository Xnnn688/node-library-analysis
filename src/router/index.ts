import { createRouter, createWebHistory } from 'vue-router'
import ShowAnalysis from '../views/ShowAnalysis.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'showAnalysis',
      component: ShowAnalysis,
    },
  ],
})

export default router

