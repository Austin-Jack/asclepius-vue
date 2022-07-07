"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _axios = _interopRequireDefault(require("axios"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

require("./assets/font/iconfont.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mock = false;

if (mock) {
  require("./mock/api");
}

_axios["default"].defaults.baseURL = "/api"; // 请求拦截器

_axios["default"].interceptors.request.use(function (config) {
  // config为请求对象 拦截后必须return
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

_vue["default"].config.productionTip = false;
_vue["default"].prototype.axios = _axios["default"];

_vue["default"].use(_elementUi["default"]); // 时间戳格式化过滤器


_vue["default"].filter("formatTime", function (val) {
  var date = new Date(val);
  var y = date.getFullYear();
  var MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  var h = date.getHours();
  h = h <= 12 ? "上午" : "下午";
  return y + "-" + MM + "-" + d + " " + h;
});

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");