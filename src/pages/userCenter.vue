<template>
  <div>
    <div class="wrap">
      <div class="nav-menu">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <template slot="title">
              <i class="iconfont icon-yonghuzhongxin"></i>
              <span>用户中心</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2" @click="show(1)">
            <i class="iconfont icon-jiuzhenqia"></i>
            <span slot="title">就诊卡管理</span>
          </el-menu-item>
          
          <el-menu-item index="3" @click="show(2)">
            <i class="iconfont icon-yuyueguahao"></i>
            <span slot="title">预约管理</span>
          </el-menu-item>
          <el-menu-item index="4" @click="show(3)">
            <i class="iconfont icon-yaowan"></i>
            <span slot="title">处方药信息</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content">
        <div class="back">
        <el-page-header @back="goBack" content="用户中心" class="back-bar"> </el-page-header>
        </div>
        <div class="head-logo">
        </div>
        <div class="card" v-show="card"></div>
        <div class="appoint" v-show="appoint"></div>
        <div class="medcine" v-show="medcine"></div>
      </div>
    </div>
    
  </div>
</template>


<script>
export default {
  name: "user",
  data(){
    return{
      card:true,
      appoint:false,
      medcine:false
    }
  },
  methods: {
     goBack(){
      this.$router.go(-1);
     },
     show(id){
       if(id == 1){
        this.appoint = false
        this.medcine = false
        this.card = true
       }else if(id == 2){
        this.card = false
        this.medcine = false
        this.appoint = true
       }else if(id == 3){
        this.card = false
        this.appoint = false
        this.medcine  = true
       }
     },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/reset.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";

.wrap{
  display: flex;
  width: 100%;
  .nav-menu {
    flex: 1;
    .el-menu{
     height: 900px; 
     .el-submenu__icon-arrow{
      display: none;
    }
    .iconfont{
      padding-right: 10px;
    }
    }
    
  }
  .content {
    flex: 4;
    position: relative;
    .back{
      width: 100%;
      box-sizing: border-box;
      border: 1px solid $colorF;
      .back-bar{
        height: 50px;
        line-height: 50px;
      }
    }
    .head-logo{
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(-50%);
      cursor: pointer;
      @include bgImg(50px,50px,'../assets/imgs/head/head2.png')
    }
    .card{
      position: absolute;
      width: 100%;
      height: 200px;
      background-color:antiquewhite;
    }
    .appoint{
      position: absolute;
      width: 100%;
      height: 200px;
      background-color: aquamarine;
    }
    .medcine{
      position: absolute;
      width: 100%;
      height: 200px;
      background-color: red;
    }
  }
}
</style>