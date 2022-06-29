import Mock from 'mockjs'

Mock.mock('/api/user',{
    "status":0,
    "data":{
        "id":12
    }
})

Mock.mock('/doctor',{
    "status":0,
    "data":{
       "list":[
        {
          "name":"张三",
          "level":"主任医师",
          "time": "0",
          "data":"1"  
        },
        {
            "name":"李四",
            "level":"主任医师",
            "time": "0",
            "data":"1"  
        },
        {
            "name":"王五",
            "level":"主任医师",
            "time": "1",
            "data":"1"  
        },
        {
            "name":"赵六",
            "level":"主任医师",
            "time": "0",
            "data":"2"  
        }
       ]    
    }
})