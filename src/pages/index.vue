<template>
<div class="index">
   <NavHeader></NavHeader>
   <div class="swiper-box">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../assets/imgs/swiper/3.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/imgs/swiper/4.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/imgs/swiper/5.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/imgs/swiper/1.png" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
   </div>
   <div class="content">
    <div class="img">

    </div>
   </div>
   <nav-footer></nav-footer>
</div>
</template>


<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default{
    name:"index",
    components:{
        swiper,
        swiperSlide,
        NavHeader,
        NavFooter,
    },
    data(){
      return {
        swiperOption:{
          autoplay:true,
          loop:true,
          effect:'fade',
          fadeEffect:{
            crossFade:true
          },
          pagination:{
            el:'.swiper-pagination',
            clickable:true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }  
        }
      }
    }
}
</script>

<style lang="scss" >
.swiper-box{
    width:1430px;
    height:500px;
    // background-color: blue;
    margin-top: 1px;
    --swiper-pagination-color: #00ff33;
    --swiper-navigation-color: #b0b0b0;
    .swiper-pagination-bullet,
    .swiper-pagination-bullet-active {
      width: pxToRem(10);
      height: pxToRem(3);
      background: #ccc;
      border-radius: pxToRem(15);
    }
    img{
     width: 100%;
     height: 100%;
    }
}
.content{
    width: 1430px;
    .img{
    width: 100%;
    height: 800px;
    background-image:url('../assets/imgs/content.png');
    background-position-x: center;
    background-size: cover;
    }
}
</style>