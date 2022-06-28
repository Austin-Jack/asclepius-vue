<template>
<div class="footer">
    <div class="footer1">
        <div class="main">
            <div class="list">
                <ul>
                  <li class="l1">
                    通讯地址: 湖南省长沙市天心区韶山南路498号林大医院 
                  </li>
                  <li class="l2">
                    联系电话: 18807308888
                  </li>
                </ul>
                <ul>
                  <li class="l3">来院导航</li>
                  <li class="l4">24小时咨询电话: 0730-88888888</li>
                </ul>
                <ul>
                  <li class="l5">邮编 (Zip Code) 4100008</li>
                </ul>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    <div class="footer2">
      <div class="logo-left">
        <img src="../assets/imgs/logo3.png" alt="">
      </div>
      <div class="logo-right">
      </div>
    </div>
    <div class="footer3">
        <div class="main">
        <div class="left">
          <a href="javascript:;" class="items">法律声明</a>
          <a href="javascript:;" class="items">网站地图</a>
          <a href="javascript:;" class="item">联系我们</a>
        </div>
        <div class="right">
           <a href="javascript">
            <img src="../assets/imgs/footer/foot-logo.png" alt="">
            湘公网安备 43010502000766号
           </a> 
        </div>
        <div class="clearfix"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'nav-footer'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/reset.scss';
.footer{
  width:100%;
  line-height: 24px;
  background-image:url('../assets/imgs/footer/foot.png');
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: cover;
  color: rgb(255, 255, 255);
  .footer1{
    box-sizing: border-box;
    width: 100%;
    padding:20px 0;
    border-bottom: solid 1px rgba(255, 255, 255, .2);
    .main{
        width:80%;
        margin:0 97.5px;
        .list{
          font-size: 14px;
          width: 100%;
          float: left;
          ul:last-child{
            width: 20%;
          }  
          ul{
            display: block;
            width: 40%;
            float: left;
            li{
               display: list-item;
               background-repeat: no-repeat;
               background-position: left center;
               margin:3px 0;
               padding-left: 25px; 
               width: 100%;
            }
            .l1{
               background-image: url('../assets/imgs/footer/f2.png'); 
            }
            .l2{
               background-image: url('../assets/imgs/footer/f3.png'); 
            }
            .l3{
               background-image: url('../assets/imgs/footer/f4.png'); 
            }
            .l4{
               background-image: url('../assets/imgs/footer/f5.png'); 
            }
            .l5{
               background-image: url('../assets/imgs/footer/f6.png'); 
            }
            
          }
        }
    }
}
   .footer2{
    box-sizing: border-box;
    width: 100%;
    padding: 30px 0;
    border-bottom: solid 1px rgba(255, 255, 255, .2);
    .logo-left{
      margin-left: 40px;
    }
}
   .footer3{
    box-sizing: border-box;
    width: 100%;
    padding: 15px 0;
    .main{
        width:80%;
        margin:0 97.5px;
        .left{ 
         float: left;    
         a{
            font-size: 14px;
            color: #ffffff;
         }   
         .items{
            padding:0 10px;
            border-right:1px solid #ffffff;
         }
         .item{
            padding-left: 10px;
         }
        }
        .right{
         float: right;
         margin-right: 10px;
         a{
            font-size: 14px;
            color: rgb(255, 255, 255,.5);
         }  
        }
    }
}
  
}
</style>