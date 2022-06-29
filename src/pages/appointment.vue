<template>
  <div class="wrap">
    <div class="department">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#9e8660"
        text-color="#fff"
        :unique-opened="true"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location" style="color: #fff"></i>
            <span>内科</span>
          </template>
          <el-menu-item index="1-1" @click="getDoctorSchedule"
            >血液科</el-menu-item
          >
          <el-menu-item index="1-2">消化内科</el-menu-item>
          <el-menu-item index="1-3">呼吸内科</el-menu-item>
          <el-menu-item index="1-4">心血管科</el-menu-item>
          <el-menu-item index="1-5">神经内科</el-menu-item>
          <el-menu-item index="1-6">肾病内科</el-menu-item>
          <el-menu-item index="1-7">内分泌科</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu" style="color: #fff"></i>
            <span slot="title">外科</span>
          </template>
          <el-menu-item index="2-1">普通外科</el-menu-item>
          <el-menu-item index="2-2">心胸外科</el-menu-item>
          <el-menu-item index="2-3">神经外科</el-menu-item>
          <el-menu-item index="2-4">泌尿外科</el-menu-item>
          <el-menu-item index="2-5">骨科</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document" style="color: #fff"></i>
            <span slot="title">妇产科</span>
          </template>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting" style="color: #fff"></i>
            <span slot="title">儿科</span>
          </template>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-setting" style="color: #fff"></i>
            <span slot="title">眼科</span>
          </template>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-setting" style="color: #fff"></i>
            <span slot="title">口腔科</span>
          </template>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main">
      <div class="doctor">
        <div class="doctor_item" v-for="item in doctorList" :key="item.id">
          <img :src="item.photoUrl" class="photo" />
          <div class="introduction">
            <div class="doctorName">{{ item.name }}</div>
            <div class="doctorPosition">{{ item.position }}</div>
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit-outline "
              @click="getUid"
              >挂号</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="扫码获取验证码"
      :visible.sync="dialogFormVisible"
      center=""
      width="30%"
    >
      <div class="codeform">
        <img src="../assets/images/weixin.png" alt="" />
        <div class="codelock">
          <el-input
            placeholder="请输入验证码"
            prefix-icon="el-icon-unlock"
            v-model="verificationCode"
            @focus="showError = false"
            oninput="value=value.replace(/[^0-9]/g,'')"
            style="width: 180px"
          >
          </el-input>
          <span v-show="showError">验证码错误！</span>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="gotoRegister">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import "../assets/scss/reset.scss";
export default {
  data() {
    return {
      doctorList: [
        {
          id: 1,
          name: "费贵军",
          position: "血液科副主任 主任医师",
          photoUrl: require("../assets/images/doctor.jpg"),
        },
        {
          id: 2,
          name: "费贵军",
          position: "血液科副主任 主任医师",
          photoUrl: require("../assets/images/li.jpg"),
        },
        {
          id: 3,
          name: "费贵军",
          position: "血液科副主任 主任医师",
          photoUrl: require("../assets/images/liji.jpg"),
        },
        {
          id: 4,
          name: "费贵军",
          position: "血液科副主任 主任医师",
          photoUrl: require("../assets/images/wu.jpg"),
        },
        {
          id: 5,
          name: "费贵军",
          position: "血液科副主任 主任医师",
          photoUrl: require("../assets/images/ke.jpg"),
        },
        {
          id: 6,
          name: "费贵军",
          position: "血液科副主任 主任医师",
          photoUrl: require("../assets/images/yang.jpg"),
        },
      ],
      dialogFormVisible: false,
      verificationCode: null,
      uid: null,
      showError: false,
    };
  },
  methods: {
    getDoctorSchedule() {},
    getUid() {
      // ...此处为获取token
      const token = window.localStorage.getItem("token");
      console.log(token)
      if (token === null) {
        this.dialogFormVisible = true;
      } else {
        this.$router.push("/detail");
      }
    },
    async gotoRegister() {
      //... 此处请求获取验证结果 验证成功则获取卡信息跳转至预约界面
      const res = await this.axios.get(`/login/${this.verificationCode}`);
      if (res.code === 422) {
        this.showError = true;
      } else {
        // this.uid = res.data.u_id; 
        this.uid = 1445  //先伪造uid等待接口完善
        // window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("token", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE1MTI1NDQyOTksImV4cCI6MTUxMjYzMDY5OX0.eGrsrvwHm-tPsO9r_pxHIQ5i5L1kX9RX444uwnRGaIM")
        this.dialogFormVisible = false;
        this.$router.push("/detail");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
html {
  .wrap {
    display: flex;
    margin: 0 auto;
    width: 1226px;
    height: 700px;
    .department {
      flex: 1;
      background-color: #9e8660;
      overflow: auto;
    }
    .main {
      flex: 4;
      background-color: #9e86602d;
      .doctor {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-content: flex-start;
        flex-wrap: wrap;
        padding-top: 20px;
        .doctor_item {
          position: relative;
          margin: 10px 15px;
          width: 220px;
          height: 300px;
          background-color: rgb(230, 201, 201);
          .photo {
            width: 100%;
            height: 100%;
          }
          .introduction {
            position: absolute;
            bottom: 0;
            width: 100%;
            min-height: 100px;
            text-align: center;
            background-color: rgba(153, 149, 149, 0.5);
            .doctorName {
              margin: 10px;
              text-align: center;
              color: #fff;
              font-size: 18px;
            }
            .doctorPosition {
              text-align: center;
              color: #fff;
              font-size: 14px;
            }
            .el-button {
              margin: 5px;
              background: #9e8660;
              border: #9e8660;
              &:hover {
                background: #cb3737;
                border: #cb3737;
              }
            }
          }
        }
      }
    }
    .el-dialog {
      display: flex;
      justify-content: center;
      align-items: center;
      .codeform {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          // margin: 0 160px;
          width: 220px;
          height: 220px;
        }
        .codelock {
          display: flex;
          justify-content: center;
          span {
            margin-left: 5px;
            color: #cb3737;
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }
}
</style>
>
