import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Manage from '@/views/Manage.vue'
import Song from '@/views/Song.vue'
import useUserStore from '@/stores/user'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    name: 'song',
    path: '/song/:id',
    component: Song
  },
  {
    path: '/manage',
    alias: '/manage-music',
    name: 'manage',
    component: Manage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next()
    return
  }

  const store = useUserStore()
  if (store.userLoggedIn) {
    next()
  } else {
    next({ name: 'home' })
  }
})

export default router
