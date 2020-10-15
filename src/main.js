import Vue from 'vue'
import App from './App.vue'
import router from './router'
// const load = require('@/assets/timg.gif')
// import load from '@/assets/timg.gif'

Vue.config.productionTip = false

// 使用懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: '/timg.gif',
});

// 使用element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 定义事件总线
Vue.prototype.eventBus = new Vue()

//导入vuex
import store from "@/store/vuex"

// 同步localStorage数据到Vuex
let _token = localStorage.getItem('_token')
if(_token){
    store.commit("updateToken",_token)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
