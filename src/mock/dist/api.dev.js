"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mockjs["default"].mock('/api/user', {
  "data": {
    "dId": '2',
    "name": '肾病内科',
    "data": [{
      "am": ["韩淑英", "叶鹏"]
    }, {
      "pm": ["陈秀云", "尉坤"]
    }, {
      "am": [""]
    }, {
      "pm": [""]
    }, {
      "am": ["韩淑英", "叶鹏"]
    }, {
      "pm": [""]
    }, {
      "am": [""]
    }, {
      "pm": [""]
    }, {
      "am": [""]
    }, {
      "pm": [""]
    }, {
      "am": ["韩淑英", "叶鹏"]
    }, {
      "pm": [""]
    }, {
      "am": [""]
    }, {
      "pm": [""]
    }]
  }
});

_mockjs["default"].mock('/api/roomList', {
  "data": [{
    "name": '内科',
    "data": [{
      "dId": '2',
      "name": '肾病内科'
    }, {
      "dId": '3',
      "name": '消化内科'
    }, {
      "dId": '4',
      "name": '风湿科'
    }]
  }, {
    "name": '外科',
    "data": [{
      "dId": '5',
      "name": '腿外科',
      "data": []
    }, {
      "dId": '6',
      "name": '手部外科',
      "data": []
    }]
  }]
});