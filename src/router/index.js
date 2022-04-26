import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../views/GameView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
