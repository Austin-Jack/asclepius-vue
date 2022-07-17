<template>
<div>
    <nav-header></nav-header>
    <div class="container">
       <div class="main">
          <div class="nav-type">
            <div class="list">
              <h2 class="title">门诊排班</h2>
              <ul class="ul">
                <li><a href="javascript:;" @click="requestData(0)">普通门诊</a></li>
                <li><a href="javascript:;" @click="requestData(1)">专家门诊</a></li>
                <li><a href="javascript:;" @click="requestData(2)">国际门诊</a></li>
              </ul>
            </div>
            <div class="blank"></div>
          </div>
          <div class="wrapper">
          <div class="nav-menu">
            <ul class="menu-wrap" >
               <li class="menu-item" v-for= "(item,index) of roomList" :key = "index">
                <a href="javascript:;">{{item.cliName}}</a>
                <div class="children">
                   <ul>
                    <li @click="getTable(items.dId)"  v-for = "(items,dId) of item.departments" :key = "dId" >{{items.name}}
                    </li>
                   </ul>
                </div>
               </li>
            </ul>
          </div>
          <div class="table-wrap" style="display: none;">
          <table class="table-main" cellpadding="20" cellspacing="0">
              <tr class="head">
                <th class="head">周次/班次</th>
                <td class="head" v-for="(item,index) of Dates" :key="index">{{item}}</td>
              </tr>
              <tr>
                <th class="doc" rowspan="2">上午</th>
                <td class="doc" rowspan="2" v-for = "(item,index) of AM" :key="index">{{item.join('\r')}}</td>
              </tr>
              <tr>
              </tr>
              <tr>
                <th class="doc" rowspan="2">下午</th>
                <td class="doc" rowspan="2" v-for = "(item,index) of PM" :key="index">{{item.join('\r')}}</td>
              </tr>
              <tr>
              </tr>
          </table>
          </div>
          </div>          
       </div> 
    </div>
    <nav-footer></nav-footer>
</div>
</template>


<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
    name:'sche',
    data(){
      return{
        roomList:[], //科室列表
        Data:[], 
        List_data:[], 
        AM:[],
        PM:[],
        Dates:[]
      }
    },
    components:{
        NavHeader,
        NavFooter
    },
    mounted(){
      this.getDate()
      this.axios.get('/department/showAllByLevel/0').then((res) =>{
      this.roomList = res.data.data
      })
      this.axios.get(`schedule/department/1`).then(res =>{
            this.Data = res.data.data
            this.getTableData()
          })
    },
    methods:{
      //获取排班表格
      async getTable(id){
          this.List_data = []
          const res = await this.axios.get(`schedule/department/${id}`)
          this.Data = res.data.data
          this.getTableData()
      },
      getTableData(){
        //  for(let items of this.Data){     
          this.List_data = this.Data
          // }
          this.applyList(this.List_data)  
         },
      
      //保存数据
      applyList(data){
          this.AM = []
          this.PM = []
          this.getAm(data)
          this.getPm(data)
          this.tableOut()
      },
      //获取上午值班医生
      getAm(data){
          for(let i = 0; i < data.length/2; i++){
            this.AM.push(data[i])
        }
      },
      //获取下午值班医生
      getPm(data){ 
           for(let i = 7; i < data.length; i++){
            this.PM.push(data[i])
        }
      },
      tableOut(){
        let tab = document.getElementsByClassName('table-wrap')
          tab[0].attributes[1].nodeValue = 'display : none'
          tab[0].attributes[1].nodeValue = 'display : block'

      },
      //获取当前日期
      getDate(){
          this.Date = []
          let date = new Date();
          let month = date.getMonth() + 1;
          let dates = date.getDate()
          let day = date.getDay()
          var arr = [ "周日","周一","周二","周三","周四","周五","周六",];
          // let Fdate = ( month + "月" + dates + "日" + arr[day])
          for(let i = 0; i < 7; i++){
            // eslint-disable-next-line no-constant-condition
            while(month == 7){
              if((dates + i) > 31){
                let Fdate = ((month + 1) + "月" + ((dates + i)%31) + "日" + arr[(day + i) %7])
                this.Dates.push(Fdate)
                break
              }else{
                let Fdate = ( month + "月" + ((dates + i)) + "日" + arr[(day + i) %7])
                this.Dates.push(Fdate)
                break
              }
            }
          }
      },
      //获取不同等级科室列表
      async requestData(level){
        this.roomList = []
        const res = await this.axios.get(`/department/showAllByLevel/${level}`)
        this.roomList = res.data.data
      }
      } 
}
    
</script>

<style lang="scss">
@import '../assets/scss/reset.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
    .container{
      box-sizing: border-box;  
      width: 100%;
      height: 800px;
      padding: 0 97.5px;
      background-color: antiquewhite;
      position: relative;
      .main{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        .wrapper{
          width: 100%;
          display: flex;
          .nav-menu{
            position: relative;
            box-sizing: border-box;
            width: 20%;
            height: 500px;
            padding: 40px 0;
            margin-left:50px ;
            margin-top: 50px;
            background-color: #55585A7A;
            .menu-wrap{
             .menu-item{
               height: 45px;
               line-height: 50px;
               border-bottom: 1px solid #ffffff;
               a{
                position: relative;
                display: block;   
                font-size: 16px;
                color: #ffffff;
                padding-left: 30px;
                &::after{
                  position: absolute;
                  right: 30px;
                  top: 17.5px;
                  content: '';
                  @include bgImg(10px, 15px, '../assets/imgs/sch/icon-arrow.png')
                }              
               }
               &:hover{
                 .children{
                  display: block;
                }
               }
               .children{
                display: none; 
                width: 500px;
                height: 300px;
                background-color: $colorG;
                position: absolute;
                left:100%;
                top: 0;
                z-index: 10;
                border: 1px solid $colorH;
                ul{
                  display: flex;
                  justify-content: space-between;
                  flex-wrap: wrap;
                  height: 75px;
                  li{
                    height: 100px;
                    line-height: 100px;
                    text-align: center;
                    width: 33.3%;
                    font-size: 18px;
                    cursor: pointer;
                    &:hover{
                      background-color: orange;
                    }
                  }
                }
               }
              
             } 
            } 
         
         }
          .table-wrap{
           width: 80%;
           margin-top: 50px;
           margin-right: 50px;
           height: 500px;
           background: url('../assets/imgs/typebk.jpg') no-repeat center;
           background-size: cover;
           .table-main{
             width: 100%;
             font-size:16px;
             td{
              width: 12.5%;
              border-right:1px black solid;
              border-bottom:1px black solid;
              font-size: 12px;
              text-align: center;
              padding: 0;
             }
             th{
              width:12.5%;
              border-right:1px black solid;
              border-bottom:1px black solid;
              text-align: center;
              padding: 0;
             }
             .doc{
              height: 200px;
             }
             .head{
              height: 96px;
             }
           }
         } 
        }
        .nav-type{
          box-sizing: border-box;
          widows: 100%;
          height: 200px;
          padding-top:30px;
          .list{
            margin:20px 10px;
            height: 100px;
            .title{
              width: 100%;
              padding-bottom: 8px;
              text-align: center;
              background-color: rgb(140, 161, 195);
              color: #ffffff;
            }
            .ul{
             margin-top:25px ;  
             li{
               display: list-item;
               float: left;
               width: 33%;
               font-size: 18px;
               text-align: center;
               border:1px solid rgb(238, 238, 238);
               a{
                 height: 50px;
                 line-height: 50px;
                 color: black;
               }
             }
            }
          }
          .blank{
            height: 1px;
            margin-top: 60px;
            background-color: black;
          }
        }
      }  
    }
</style>
