"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _index = _interopRequireDefault(require("./pages/index"));

var _appointment = _interopRequireDefault(require("./pages/appointment"));

var _scheduling = _interopRequireDefault(require("./pages/scheduling"));

var _AppointDetail = _interopRequireDefault(require("./pages/AppointDetail"));

var _home = _interopRequireDefault(require("./pages/home"));

var _userCenter = _interopRequireDefault(require("./pages/userCenter"));

var _introduction = _interopRequireDefault(require("./pages/introduction"));

var _history = _interopRequireDefault(require("./pages/history"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: [{
    path: '/',
    name: 'home1',
    component: _index["default"],
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: _index["default"]
    }]
  }, {
    path: '/home',
    name: 'home',
    component: _home["default"]
  }, {
    path: '/appointment/:level',
    name: 'appointment',
    component: _appointment["default"]
  }, {
    path: '/detail/:dId/:docId',
    name: 'detail',
    component: _AppointDetail["default"]
  }, {
    path: '/scheduling',
    name: 'scheduling',
    component: _scheduling["default"]
  }, {
    path: '/userCenter',
    component: _userCenter["default"]
  }, {
    path: '/introduction',
    component: _introduction["default"]
  }, {
    path: '/history',
    component: _history["default"]
  }]
}); // router.beforeEach((to,from,next)=>{
//      if(to.path === '/userCenter'){
//         const id = localStorage.getItem('token')
//         if(id){ next()}
//         else { alert('请先进行登录') }
//      }else{
//         next()
//      }
//   })

var _default = router;
exports["default"] = _default;