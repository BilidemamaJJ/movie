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
import settingRouter from "./routes/setting"


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
  logOutRouter,
  settingRouter,
]

const router = new VueRouter({
  mode: 'history',
  // 前缀
//   base: process.env.BASE_URL,
  routes
})

// 路由守卫 防止用户翻墙
router.beforeEach((to,from,next)=>{
    let arr =[
        // 需要登录才能访问的路由集合，
        "/cinema",
        "/center/setting",
    ]
    if(arr.includes(to.path)){
        if(localStorage.getItem("_token")){
            next()
        }else{
            next({path:"/center/login",query:{refer:encodeURI(to.fullPath)}})
        }
    }else{
        next()
    }
})

export default router