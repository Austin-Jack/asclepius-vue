import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import "./assets/font/iconfont.css"
import {Message} from 'element-ui'
import {MessageBox} from 'element-ui'
const mock = false;
if (mock) {
  require("./mock/api");
}
axios.defaults.baseURL = "/api";
// 请求拦截器
axios.interceptors.request.use((config) => {
  // config为请求对象 拦截后必须return
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
// Vue.use(ElementUI);
// 时间戳格式化过滤器
Vue.filter("formatTime", function (val) {
  const date = new Date(val);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h = date.getHours();
  h = h <= 12 ? "上午" : "下午";
  return y + "-" + MM + "-" + d + " " + h;
});
Vue.prototype.$message = Message 
Vue.prototype.$confirm = MessageBox.confirm;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
