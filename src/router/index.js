import { createRouter, createWebHistory } from 'vue-router'
import TheCandidateView from '@/views/candidates/TheCandidateView.vue'
import TheHomepageView from '@/views/home/TheHomepageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHomepageView,
    },
    {
      path: '/candidates',
      name: 'candidate',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TheCandidateView,
    },
  ],
})

export default router;
