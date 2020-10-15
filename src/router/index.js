import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'
import detailRouter from './routes/detail'
import cityRouter from './routes/city'
import vuexRouter from "./routes/vuex"
import loginRouter from "./routes/login"
import logOutRouter from "./routes/logout"


const routes = [
  {
    path: '/',
    redirect:'/film'
  },
  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,
  cityRouter,
  vuexRouter,
  loginRouter,
  logOutRouter
]

const router = new VueRouter({
  mode: 'history',
  // 前缀
//   base: process.env.BASE_URL,
  routes
})

export default router
