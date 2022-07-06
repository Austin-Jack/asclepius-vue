"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _index = _interopRequireDefault(require("./pages/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./pages/home.vue'));
      });
    }
  }, {
    path: '/appointment/:level',
    name: 'appointment',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./pages/appointment.vue'));
      });
    }
  }, {
    path: '/detail/:dId/:docId',
    name: 'detail',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./pages/AppointDetail.vue'));
      });
    }
  }, {
    path: '/scheduling',
    name: 'scheduling',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./pages/scheduling.vue'));
      });
    }
  }, {
    path: '/userCenter',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./pages/userCenter.vue'));
      });
    }
  }, {
    path: '/introduction',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./pages/introduction.vue'));
      });
    }
  }, {
    path: '/history',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./pages/history.vue'));
      });
    }
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