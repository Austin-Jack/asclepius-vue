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
                   <ul>
                    <li @click="getTable">肾病内科</li>
                    <li @click="getTable">风湿科</li>
                    <li>感染病科</li>
                    <li>感染控制中心</li>
                    <li>呼吸内科</li>
                    <li>内分泌课</li>
                    <li>神经内科</li>
                    <li>消化内科</li>
                    <li>心血管内科</li>
                    <li>血液科</li>
                   </ul>
                </div>
                <div class="table-wrap" style="display: none;">
                <table></table>
                </div>
               </li>
               <li class="menu-item"></li>
               <li class="menu-item"></li>
               <li class="menu-item"></li>
               <li class="menu-item"></li>
               <li class="menu-item"></li>
               <li class="menu-item"></li>
               <li class="menu-item"></li>
               <li class="menu-item"></li>
               <li class="menu-item"></li>
            </ul>
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
      height: 1000px;
      padding: 0 97.5px;
      background-color: aqua;
      position: relative;
      .main{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background-color: bisque;
        .nav-menu{
           box-sizing: border-box;
           position: absolute;
           width: 264px;
           height: 500px;
           padding: 25px 0;
           background-color: #55585A7A;
           top:200px;
           .menu-wrap{
            .menu-item{
               height: 45px;
               line-height: 50px;
               background-color: blue;
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
                background-color: $colorA;
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
                  }  
                }
               }
               .table-wrap{
                  position: absolute;
                  width:800px;
                  height: 500px;
                  top: 0;
                  left: 264px;
                  background-color: #f22;
               } 
            }
           }
        }
      }  
    }
</style>
