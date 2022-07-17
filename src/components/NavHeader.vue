<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="top-left">
          <a href="/#/home" class="logo">
            <img
              src="../assets/imgs/logo.jpg"
              class="logo-img"
              title="林大医院"
            />
          </a>
          <div class="logo-detail">
            <a href="/#/home">
              <img src="../assets/imgs/logo1.png"/>
            </a>     
          </div>
        </div>
        <div class="top-right">
          <a href="javascript:;" class="items">中文版</a>
          <a href="javascript:;" class="items">EN</a>
          <a href="/#/home" class="items">欢迎页</a>
          <a href="javascript:;" @click="confirm">个人中心</a>
          <a href="javascript:;"><span class="item"></span></a>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="nav-bar">
        <a href="/#/index" class="intro">首页</a>
        <a href="/#/introduction" class="intro">医院概况</a>
        <a href="/#/scheduling" class="intro">门诊排班</a>
        <div class="intro in-menu"> 
          <div>预约门诊</div>
          <ul class="menu">
            <li class="level line"><a href="/#/appointment/0" @click="sendLevel(0)">普通门诊</a></li>
            <li class="level line"><a href="/#/appointment/1" @click="sendLevel(1)">专家门诊</a></li>
            <li class="level"><a href="/#/appointment/2" @click="sendLevel(2)">国际门诊</a></li></ul
        ></div>
        <a href="/#/history" class="intro">发展历史</a>
        <a href="javascript:;" class="intro">学术交流</a>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
    }
  },
  methods:{
    sendLevel(level){
      this.$emit('sendLevel',level)
    },
    confirm(){
      const id = window.localStorage.getItem('token')
      if(id){
      this.axios.get(`/login/validity`).then(res => {
        if(res.data.code == 403){
          this.$router.push('/login')
        }else{
          this.$router.push('/usercenter')
        }
      })
    }else{
      this.$router.push('/login')
    }
    }
  }
}
</script>

<style lang="scss" >
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.header {
  box-sizing: border-box;
  width: 100%;
  padding: 0 97.5px;
  border-bottom: 1px rgb(229, 229, 229) solid;
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 132px;
    border: 1px #ffffff solid;
    background-color: #ffffff;
    .top-left {
      box-sizing: border-box;
      width: 100%;
      height: 132px;
      line-height: 132px;
      font-size: 14px;
      font-weight: 400;
      flex: 1;
      .logo {
        position: absolute;
        width: 350px;
        height: 90px;
        top: 5px;
        .logo-img {
          width: 90px;
          height: 90px;
        }
      }
      .logo-detail {
        position: absolute;
        margin-left: 100px;
        top: 10px;
      }
    }
    .top-right {
      position: absolute;
      box-sizing: border-box;
      right: 0;
      width: 400px;
      height: auto;
      line-height: auto;
      font-size: 14px;
      font-weight: 400;
      a {
        display: inline-block;
        color: #000000;
        margin-right: 25px;
        font-size: 17px;
        height: 20px;
        line-height: 20px;
      }
      .items {
        border-right: 1px solid #000000;
        padding-right: 10px;
      }
      .item {
        position: absolute;
        display: inline-block;
        width: 20px;
        height: 20px;
        top: 4px;
        background: url(../assets/imgs/search.png) no-repeat center;
      }
    }
  }
  .nav-bar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    .in-menu{
      position: relative;
      &::after{
        position: absolute;
        right: 50px;
        top:5px;
        content: '';
        @include bgImg(13px,15px, '../assets/imgs/arrow.png')
      }
      .menu{
        width: 205px;
        height: 0;
        opacity: 0;
        position:absolute;
        background-color: $colorG;
        border: 1px solid $colorH;
        top: 42px;
        overflow: hidden;
        z-index: 100;
        transition: all 0.5s;
        a{
          color: black;
        }
      }
      &:hover{
        color: $colorA;
        .menu{
          height: 100px;
          opacity: 1;
          li:hover{
            a{
              color: $colorA;
            }    
          }
        }
      }
      ul{
        .line{
        padding-bottom: 10px;
      }
      }
      
    }
    .intro {
      flex: 1;
      display: inline-block;
      color: #000000;
      font-size: 17px;
      text-align: center;
      &:hover{
        color: $colorA;
      }
      
    }
    
  }
}
</style>
