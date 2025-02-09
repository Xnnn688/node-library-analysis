import { createRouter, createWebHistory } from 'vue-router'
import ShowAnalysis from '../views/showAnalysis.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/showAnalysis',
      name: 'showAnalysis',
      component: ShowAnalysis,
    },
  ],
})

export default router

