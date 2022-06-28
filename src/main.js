import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const mock = false 
if(mock){
  require('./mock/api')
}

// 请求拦截器
axios.interceptors.request.use(config=>{
  // config为请求对象 拦截后必须return
  config.headers.Authorization=window.localStorage.getItem('token')
  return config;
})
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
