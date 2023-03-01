import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  /*{
    path: '/mf-advertising/advertising/summary',
    name: 'AdvertisingWhatsapp',
    component: () => import('../views/vw-whatsapp/vw-whatsapp.vue')
  },*/
  {
    //path: '/mf-whatsapp',
    path: '/whatsapp',
    name: 'Whatsapp',
    component: () => import('../views/vw-whatsapp/vw-whatsapp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
