<template>
  <div>
    <nav-header></nav-header>
    <div class="wrap">
      <div class="department">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#9e8660"
          text-color="#fff"
          active-text-color="	#FFA500"
          :unique-opened="true"
        >
          <el-submenu
            v-for="(cli, idx) in departments"
            :key="idx"
            :index="idx + ''"
          >
            <template slot="title">
              <i class="el-icon-location" style="color: #fff"></i>
              <span>{{ cli.cliName }}</span>
            </template>
            <el-menu-item @click="getDoctors(depart.dId)"
              v-for="depart in cli.departments"
              :key="depart.dId"
              :index="depart.dId + ''"
              >{{ depart.name }}</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </div>
      <div class="main">
        <div class="doctor">
          <div class="doctor_item" v-for="item in doctorList" :key="item.docId" >
            <img :src="item.docImage" class="photo" />
            <div class="introduction">
              <div class="doctorName">{{ item.docName }}</div>
              <div class="doctorPosition">{{doctorRank[item.docRank]}}</div>
              <el-button
                size="mini"
                type="primary"
                icon="el-icon-edit-outline "
                @click="getToken"
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
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import "../assets/scss/reset.scss";
import NavHeader from "../components/NavHeader.vue";
import NavFooter from "../components/NavFooter.vue";
export default {
  data() {
    return {
      doctorRank:["主任医师","副主任医师","普通医师"],
      doctorList: [],
      // 科室列表
      departments: [],
      dialogFormVisible: false,
      verificationCode: null,
      uid: null,
      showError: false,
    };
  },
  components: {
    NavHeader,
    NavFooter,
  },
  created() {
    // 获取科室列表
    this.getdepartment();
    this.getDoctors()
  },
  methods: {
    // 获取科室列表
    async getdepartment() {
      const res = await this.axios.get("/department/showAll");
      console.log(res);
      this.departments = res.data;
    },
    async getDoctors(dId){
      const res = await this.axios.get(`/doctor/${dId}`);
      // const res = await this.axios.get(`/doctor/2`)
      console.log(res)
      this.doctorList = res.data;
    },
    // 获取token验证
    getToken() {
      // ...此处为获取token
      const token = window.localStorage.getItem("token");
      console.log(token);
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
        //等待接口完善
        // window.localStorage.setItem("uid", res.data.uId)
        window.localStorage.setItem("uid", 1225)
        // window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem(
          "token",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE1MTI1NDQyOTksImV4cCI6MTUxMjYzMDY5OX0.eGrsrvwHm-tPsO9r_pxHIQ5i5L1kX9RX444uwnRGaIM"
        );
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
    width: 1250px;
    height: 800px;
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
        justify-content: flex-start;
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
