<template>
<div>
    <nav-header></nav-header>
    <div class="container">
       <div class="main">
          <div class="nav-menu">
            <ul class="menu-wrap">
               <li class="menu-item">
                <a href="javascript:;">内科</a>
                <div class="children">
                   <ul v-for = "(item,index) in menuList" :key = "index">
                    <li @click="getTable" v-for = "(sub,id) in item" :key="id">{{sub.name}}</li>
                   </ul>
                </div>
                <div class="table-wrap" style="display: none;">
                <table class="table-main" cellpadding="20" cellspacing="0">
                    <tr class="head">
                      <th class="head">班次/周次</th>
                      <td class="head">周一</td>
                      <td class="head">周二</td>
                      <td class="head">周三</td>
                      <td class="head">周四</td>
                      <td class="head">周五</td>
                      <td class="head">周六</td>
                      <td class="head">周日</td>
                    </tr>
                    <tr>
                      <th class="doc" rowspan="2">上午</th>
                      <td class="doc" rowspan="2"></td>
                      <td class="doc" rowspan="2"></td>
                      <td class="doc" rowspan="2"></td>
                      <td class="doc" rowspan="2"></td>
                      <td class="doc" rowspan="2"></td>
                      <td class="doc" rowspan="2"></td>
                      <td class="doc" rowspan="2"></td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                    <tr>
                      <th class="doc" rowspan="2">下午</th>
                      <td class="doc" rowspan="2"></td>
                      <td class="doc" rowspan="2"></td>
                      <td class="doc" rowspan="2"></td>
                      <td class="doc" rowspan="2"></td>
                      <td class="doc" rowspan="2"></td>
                      <td class="doc" rowspan="2"></td>
                      <td class="doc" rowspan="2"></td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                </table>
                </div>
               </li>
               <!-- <li class="menu-item">
                <a href="javascript:;">内科</a>
               </li>
               <li class="menu-item">
                <a href="javascript:;">内科</a>
               </li>
               <li class="menu-item">
                <a href="javascript:;">内科</a>
               </li>
               <li class="menu-item">
                <a href="javascript:;">内科</a>
               </li>
               <li class="menu-item">
                <a href="javascript:;">内科</a>
               </li>
               <li class="menu-item">
                <a href="javascript:;">内科</a>
               </li>
               <li class="menu-item">
                <a href="javascript:;">内科</a>
               </li>
               <li class="menu-item">
                <a href="javascript:;">内科</a>
               </li> -->
            </ul>
          </div>
          <div class="nav-type">
            <div class="list">
              <h2 class="title">门诊排班</h2>
              <ul class="ul">
                <li><a href="javascript:;">普通门诊</a></li>
                <li><a href="javascript:;">专家门诊</a></li>
                <li><a href="javascript:;">国际门诊</a></li>
              </ul>
            </div>
            <div class="blank"></div>
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
        menuList: [
          [
          {
            id:'1',
            name:'肾病内科',
            data:{
              
            }
          },
          {
            id:'2',
            name:'消化内科'
          },
          {
            id:'3',
            name:'风湿科'
          }
          ]
        ]
      }
    },
    components:{
        NavHeader,
        NavFooter
    },
    mounted(){
      
    },
    methods:{
      getTable(){
          let tab = document.getElementsByClassName('table-wrap')
          tab[0].attributes[1].nodeValue = 'display : none'
          setTimeout(function(){
            tab[0].attributes[1].nodeValue = 'display : block'
          },1000)
      },
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
      height: 1000px;
      padding: 0 97.5px;
      background-color: antiquewhite;
      position: relative;
      .main{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        .nav-menu{
           box-sizing: border-box;
           position: absolute;
           width: 264px;
           height: 500px;
           padding: 40px 0;
           margin-left:10px ;
           background-color: #55585A7A;
           top:280px;
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
               width: 600px;
               height: 500px;
               background-color: $colorG;
               position: absolute;
               top: 0px;
               left: 264px;
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
                 }
               }
              }
              .table-wrap{
                 position: absolute;
                 width:900px;
                 height: 500px;
                 top: 0;
                 left: 264px;
                 background: url('../assets/imgs/typebk.jpg') no-repeat center;
                 background-size: cover;
                 .table-main{
                   width: 100%;
                   td{
                    width: 12.5%;
                    border: 1px black solid;
                    text-align: center;
                   }
                   th{
                    width:12.5%;
                    border-top:1px black solid;
                    border-right:1px black solid;
                    border-bottom:1px black solid;
                    text-align: center;
                   }
                   .doc{
                    height: 200px;
                   }
                   .head{
                    height: 96px;
                   }
                 }
              }
              .table-wrap:hover{
                z-index: 10;
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
               width: 400px;
               font-size: 18px;
               text-align: center;
               border:1px solid rgb(238, 238, 238);
               a{
                 height: 50px;
                 line-height: 50px;
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
