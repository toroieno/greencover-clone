import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomePage from '@/views/HomePage.vue'
// import Dashboard from '@/components/Dashboard.vue'
import MapBox from '@/components/overview/MapBox.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'HomePage',
  //   component: HomePage,
  //   // beforeEnter: checkAuth,
  // },
  {
    path: '/map',
    name: 'MapBox',
    component: MapBox,
    // beforeEnter: checkAuth,
  },
  {path: '*', component: () => import('../views/error/NotFound.vue')}
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
})

export default router