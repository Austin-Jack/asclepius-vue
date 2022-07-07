import Mock from "mockjs";

Mock.mock("/api/user", {
  data: {
    dId: "2",
    name: "肾病内科",
    data: [
      { am: ["韩淑英", "叶鹏"] },
      { pm: ["陈秀云", "尉坤"] },
      { am: [""] },
      { pm: [""] },
      { am: ["韩淑英", "叶鹏"] },
      { pm: [""] },
      { am: [""] },
      { pm: [""] },
      { am: [""] },
      { pm: [""] },
      { am: ["韩淑英", "叶鹏"] },
      { pm: [""] },
      { am: [""] },
      { pm: [""] },
    ],
  },
});
Mock.mock("/api/roomList", {
  data: [
    {
      name: "内科",
      data: [
        {
          dId: "2",
          name: "肾病内科",
        },
        {
          dId: "3",
          name: "消化内科",
        },
        {
          dId: "4",
          name: "风湿科",
        },
      ],
    },
    {
      name: "外科",
      data: [
        {
          dId: "5",
          name: "腿外科",
          data: [],
        },
        {
          dId: "6",
          name: "手部外科",
          data: [],
        },
      ],
    },
  ],
});
// 获取科室列表
Mock.mock(RegExp("/api/department/showAllByLevel/0"), {data:[
  {
    cliName: "全科医学科",
    departments: [
      {
        dId: 1,
        name: "全科医学科门诊",
      },
    ],
  },
  {
    cliName: "内科",
    departments: [
      {
        dId: 2,
        name: "肾病内科",
      },
      {
        dId: 3,
        name: "风湿科",
      },
      {
        dId: 4,
        name: "感染病科",
      },
      {
        dId: 5,
        name: "感染控制中心",
      },
      {
        dId: 6,
        name: "呼吸内科",
      },
      {
        dId: 7,
        name: "内分泌科",
      },
      {
        dId: 8,
        name: "神经内科",
      },
      {
        dId: 9,
        name: "消化内科",
      },
      {
        dId: 10,
        name: "心血管内科",
      },
      {
        dId: 11,
        name: "血液科",
      },
    ],
  },
  {
    cliName: "外科",
    departments: [
      {
        dId: 12,
        name: "骨科",
      },
      {
        dId: 13,
        name: "脊柱外科",
      },
      {
        dId: 14,
        name: "心脏大血管外科",
      },
      {
        dId: 15,
        name: "胸外科",
      },
      {
        dId: 16,
        name: "肝胆肠中心",
      },
      {
        dId: 17,
        name: "泌尿外科",
      },
      {
        dId: 18,
        name: "普通外科",
      },
      {
        dId: 19,
        name: "器官移植中心",
      },
      {
        dId: 20,
        name: "烧伤重建外科",
      },
      {
        dId: 21,
        name: "神经外科",
      },
      {
        dId: 22,
        name: "整形美容科",
      },
    ],
  },
  {
    cliName: "专家门诊",
    departments: [
      {
        dId: 23,
        name: "专家门诊",
      },
    ],
  },
  {
    cliName: "耳鼻咽喉头颈外科",
    departments: [
      {
        dId: 24,
        name: "耳鼻咽喉科",
      },
    ],
  },
  {
    cliName: "妇产科",
    departments: [
      {
        dId: 25,
        name: "产科",
      },
      {
        dId: 26,
        name: "妇科",
      },
      {
        dId: 27,
        name: "生殖医学中心",
      },
    ],
  },
  {
    cliName: "儿科",
    departments: [
      {
        dId: 28,
        name: "儿科",
      },
    ],
  },
  {
    cliName: "眼科",
    departments: [
      {
        dId: 29,
        name: "眼科",
      },
    ],
  },
  {
    cliName: "口腔科",
    departments: [
      {
        dId: 30,
        name: "口腔医学中心",
      },
    ],
  },
  {
    cliName: "皮肤性病科",
    departments: [
      {
        dId: 31,
        name: "皮肤科",
      },
    ],
  },
]});

Mock.mock(RegExp("/api/department/showAllByLevel/1"), {data:[
  {
    cliName: "内科",
    departments: [
      {
        dId: 2,
        name: "肾病内科",
      },
      {
        dId: 3,
        name: "风湿科",
      },
      {
        dId: 4,
        name: "感染病科",
      },
      {
        dId: 5,
        name: "感染控制中心",
      },
      {
        dId: 6,
        name: "呼吸内科",
      },
    ],
  },
  {
    cliName: "外科",
    departments: [
      {
        dId: 12,
        name: "骨科",
      },
      {
        dId: 13,
        name: "脊柱外科",
      },
      {
        dId: 14,
        name: "心脏大血管外科",
      },
      {
        dId: 15,
        name: "胸外科",
      },
      {
        dId: 16,
        name: "肝胆肠中心",
      },
    ],
  },
  {
    cliName: "儿科",
    departments: [
      {
        dId: 28,
        name: "儿科",
      },
    ],
  },
  {
    cliName: "眼科",
    departments: [
      {
        dId: 29,
        name: "眼科",
      },
    ],
  },
  {
    cliName: "口腔科",
    departments: [
      {
        dId: 30,
        name: "口腔医学中心",
      },
    ],
  },
  {
    cliName: "皮肤性病科",
    departments: [
      {
        dId: 31,
        name: "皮肤科",
      },
    ],
  },
]});

// 获取医生列表
Mock.mock("/api/doctor/1/1",{data: [
  {
    docId: "2",
    docName: "游鹏",
    docSex: "1",
    docRank: 0,
    docImage:
      "https://www.pumch.cn/Uploads/Picture/2017/12/07/s5a2949df6909f.jpg",
    docDetail:
      "孩子只是合作这些网上.在线电话安全那些国家.开始一样来源业务为了支持.   关系有限学习一般应该这种网络标准.全部研究原因企业不过不断.语言虽然但是没有.不会作品没有类别这种今天特别.最新内容有些北京服务.地址教育一起文章这些.制作手机只有感觉系列可是需要.简介是一都是文件.各种是一以及部门等级没有. 电话这个一种专业.个人增加联系全国一直阅读.技术名称组织作品.",
  },
  {
    docId: "3",
    docName: "游鹏",
    docSex: "1",
    docRank: 0,
    docImage:
      "https://www.pumch.cn/Uploads/Picture/2017/12/07/s5a2949df6909f.jpg",
    docDetail:
      "孩子只是合作这些网上.在线电话安全那些国家.开始一样来源业务为了支持.   关系有限学习一般应该这种网络标准.全部研究原因企业不过不断.语言虽然但是没有.不会作品没有类别这种今天特别.最新内容有些北京服务.地址教育一起文章这些.制作手机只有感觉系列可是需要.简介是一都是文件.各种是一以及部门等级没有. 电话这个一种专业.个人增加联系全国一直阅读.技术名称组织作品.",
  },
  {
    docId: "4",
    docName: "游鹏",
    docSex: "1",
    docRank: 0,
    docImage:
      "https://www.pumch.cn/Uploads/Picture/2017/12/07/s5a2949df6909f.jpg",
    docDetail:
      "孩子只是合作这些网上.在线电话安全那些国家.开始一样来源业务为了支持.   关系有限学习一般应该这种网络标准.全部研究原因企业不过不断.语言虽然但是没有.不会作品没有类别这种今天特别.最新内容有些北京服务.地址教育一起文章这些.制作手机只有感觉系列可是需要.简介是一都是文件.各种是一以及部门等级没有. 电话这个一种专业.个人增加联系全国一直阅读.技术名称组织作品.",
  },
  {
    docId: "5",
    docName: "游鹏",
    docSex: "1",
    docRank: 0,
    docImage:
      "https://www.pumch.cn/Uploads/Picture/2017/12/07/s5a2949df6909f.jpg",
    docDetail:
      "孩子只是合作这些网上.在线电话安全那些国家.开始一样来源业务为了支持.   关系有限学习一般应该这种网络标准.全部研究原因企业不过不断.语言虽然但是没有.不会作品没有类别这种今天特别.最新内容有些北京服务.地址教育一起文章这些.制作手机只有感觉系列可是需要.简介是一都是文件.各种是一以及部门等级没有. 电话这个一种专业.个人增加联系全国一直阅读.技术名称组织作品.",
  },
]
});

Mock.mock("/api/doctor/2",{data:[
  {
    docId: "6",
    docName: "黄丽华",
    docSex: "0",
    docRank: 0,
    docImage:
      "https://www.pumch.cn/Uploads/Picture/2018/11/26/s5bfb9b59b5c5c.jpg",
    docDetail:
      "浏览出来人员基本最新.一起城市正在发生类别今年业务现在.帖子安全进入.简介一样部门发生详细.必须业务免费方面论坛.经营怎么积分专业广告免费.欢迎系列产品一直一样服务客户.查看这种一个完成帮助资源有限.更多进入已经你的感觉更新发表.就是基本软件能够研究应该解决这个.一直国家应用因此处理他的参加.这里国际中国类型可以价格.分析最大我的责任规定.用户评论能够可以觉得那个.",
  },
  {
    docId: "7",
    docName: "黄丽华",
    docSex: "0",
    docRank: 0,
    docImage:
      "https://www.pumch.cn/Uploads/Picture/2018/11/26/s5bfb9b59b5c5c.jpg",
    docDetail:
      "浏览出来人员基本最新.一起城市正在发生类别今年业务现在.帖子安全进入.简介一样部门发生详细.必须业务免费方面论坛.经营怎么积分专业广告免费.欢迎系列产品一直一样服务客户.查看这种一个完成帮助资源有限.更多进入已经你的感觉更新发表.就是基本软件能够研究应该解决这个.一直国家应用因此处理他的参加.这里国际中国类型可以价格.分析最大我的责任规定.用户评论能够可以觉得那个.",
  },
  {
    docId: "8",
    docName: "黄丽华",
    docSex: "0",
    docRank: 0,
    docImage:
      "https://www.pumch.cn/Uploads/Picture/2018/11/26/s5bfb9b59b5c5c.jpg",
    docDetail:
      "浏览出来人员基本最新.一起城市正在发生类别今年业务现在.帖子安全进入.简介一样部门发生详细.必须业务免费方面论坛.经营怎么积分专业广告免费.欢迎系列产品一直一样服务客户.查看这种一个完成帮助资源有限.更多进入已经你的感觉更新发表.就是基本软件能够研究应该解决这个.一直国家应用因此处理他的参加.这里国际中国类型可以价格.分析最大我的责任规定.用户评论能够可以觉得那个.",
  },
  {
    docId: "9",
    docName: "黄丽华",
    docSex: "0",
    docRank: 0,
    docImage:
      "https://www.pumch.cn/Uploads/Picture/2018/11/26/s5bfb9b59b5c5c.jpg",
    docDetail:
      "浏览出来人员基本最新.一起城市正在发生类别今年业务现在.帖子安全进入.简介一样部门发生详细.必须业务免费方面论坛.经营怎么积分专业广告免费.欢迎系列产品一直一样服务客户.查看这种一个完成帮助资源有限.更多进入已经你的感觉更新发表.就是基本软件能够研究应该解决这个.一直国家应用因此处理他的参加.这里国际中国类型可以价格.分析最大我的责任规定.用户评论能够可以觉得那个.",
  },
]
} );

// 获取就诊人信息
Mock.mock(RegExp("/api/private/user/getCards" + ".*"), {data:[
  {
    cId: 10001, //卡片id
    identityID: "451423194408201455", //身份证
    sex: 0, //性别
    age: 34, //年龄
    name: "徐凤英", //姓名
    telNumber: "15797887094", //电话号码
  },
  {
    cId: 10007, //卡片id
    identityID: "360803194502028138", //身份证
    sex: 1, //性别
    age: 80, //年龄
    name: "卢成", //姓名
    telNumber: "18101632437", //电话号码
  },
]
});

// 添加就诊人
Mock.mock("/api/private/user/addCard", "post", (options) => {
  console.log(options.body);
  return {
    code: 200,
    message: "",
    data: null,
    // form:{
    //   "uId":uId,
    //   "cId": "@increment()",
    //   "identityID": identityID, //身份证
    //   "sex": sex, //性别
    //   "age": age, //年龄
    //   "name": name, //姓名
    //   "telNumber": telNumber //电话号码
    // }
  };
});

Mock.mock("/api/schedule/doctor/2/2", "get", () => {
  return {
    code: 200,
    message: "",
    data: {
      dName: "内科",
      cLevel: 0,
      docName: "刘德华",
      docRank: 0,
      apCost: 30,
      times: [
        {
          sId: 11,
          time: 1658557800000,
        },
        {
          sId: 14,
          time: 1658557800000,
        },
      ],
    },
  };
});

//获取预约信息
Mock.mock("/api/user/aplist","get",[
  {
    "apId":1000,		//预约号
    "cId":1021,
    "sId":10021,
    "patient":"病人名字",
    "apTime":1657238400000,  //预约时间
    "docName":"", //医生名称
    "dName":"老年科", //科室名称
    "cLevel":3, //门诊类型 0普通,1专家,2国际
    "apCost":30, //挂号费
    "apStatus":3 //状态 0已创建,1已取消,2已过期(没有去而且时间到了),3已完成
},
{
      "apId":1000,
      "cId":1021,
      "sId":10021, //排班号		
      "patient":"病人名字", 
      "apTime":1657238400000,
      "docName":"",
      "dName":"老年科",
      "cLevel":0,
      "apCost":30, 
      "apStatus":0
  }
]);
