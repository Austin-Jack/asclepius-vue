<template>
  <div>
    <nav-header @sendLevel="getLevel"></nav-header>
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
          <div class="massage" v-if="msgShow">请选择科室~</div>
          <div class="doctor_item" v-for="item in doctorList" :key="item.docId" >
            <img :src="item.docImage" class="photo" />
            <div class="introduction">
              <div class="doctorName">{{ item.docName }}</div>
              <div class="doctorPosition">{{doctorRank[item.docRank]}}</div>
              <el-button
                size="mini"
                type="primary"
                icon="el-icon-edit-outline "
                @click="getToken(item.docId)"
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
      // 医生列表
      doctorList: [],
      // 科室列表
      departments: [],
      // 门诊等级
      level:0,
      dialogFormVisible: false,
      // 验证码
      verificationCode: null,
      uid: null,
      // 验证码错误控制键
      showError: false,
      // 占位massage控制键
      msgShow: true,
      // 选择的医生id
      docId:null
    };
  },
  components: {
    NavHeader,
    NavFooter,
  },
  created() {
    // ...此处获取level（待完成）
    // this.getLevel()
    // 获取科室列表
    this.getdepartment();
  },
  methods: {
    // 获取门诊等级
    getLevel(level){
      this.level = level
      console.log(this.level,level)
      this.getdepartment()
    },
    // 获取科室列表
    async getdepartment() {
      // const res = await this.axios.get("/department/showAll");
      const res = await this.axios.get(`/department/showAllByLevel/${this.level}`)
      console.log(res);
      this.departments = res.data;
    },
    async getDoctors(dId){
      this.msgShow = false
      const res = await this.axios.get(`/doctor/${dId}`);
      console.log(res)
      this.doctorList = res.data;
    },
    // 获取token验证
    async getToken(docId) {
      // ...此处为获取token
      const token = window.localStorage.getItem("token");
      console.log(token);
      if (token === null) {
        this.dialogFormVisible = true;
      } else {
        // 请求token是否有效
        const res = await this.axios.get(`/login/validity/${token}`);
        if (res.data.code === 200){
          // 有效则跳转
          this.docId = docId
          this.$router.push({
          path: `/detail/${this.docId}`,
        })
        }else{
          // 无效则弹窗重新验证
          this.dialogFormVisible = true;
        }
        
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
        this.$router.push({
          path: `/detail/${this.docId}`,
        });
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
        .massage {
          position: absolute;
          top: 530px;
          left: 830px;
          color: #9e8660;
          font-size: 40px;
          font-weight: bold;
        }
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
