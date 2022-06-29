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
            <img src="../assets/imgs/logo1.png" alt="" />
          </div>
        </div>
        <div class="top-right">
          <a href="javascript:;" class="items">中文版</a>
          <a href="javascript:;" class="items">EN</a>
          <a href="javascript:;" class="items">旧版网站</a>
          <a href="javascript:;">员工通道</a>
          <a href="javascript:;"><span class="item"></span></a>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="nav-bar">
        <a href="/#/index" class="intro">首页</a>
        <a href="javascript:;" class="intro">医院概况</a>
        <a href="/#/scheduling" class="intro">门诊排班</a>
        <a href="/#/appointment" class="intro">预约挂号</a>
        <a href="javascript:;" class="intro">科室导航</a>
        <a href="javascript:;" class="intro">学术交流</a>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
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
    .intro {
      flex: 1;
      display: inline-block;
      color: #000000;
      font-size: 17px;
      text-align: center;
    }
  }
}
</style>
