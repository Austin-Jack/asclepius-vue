"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mockjs["default"].mock('/api/user', {
  "status": 0,
  "data": {
    "id": 12
  }
});

_mockjs["default"].mock('/doctor', {
  "status": 0,
  "data": {
    "list": [{
      "name": "张三",
      "level": "主任医师",
      "time": "0",
      "data": "1"
    }, {
      "name": "张三",
      "level": "主任医师",
      "time": "0",
      "data": "1"
    }, {
      "name": "张三",
      "level": "主任医师",
      "time": "0",
      "data": "1"
    }, {
      "name": "张三",
      "level": "主任医师",
      "time": "0",
      "data": "1"
    }]
  }
});