<template>
  <div>
    <nav-header></nav-header>
    <div class="main1"></div>
    <div class="dialog">
      <el-dialog
        title="扫码登录"
        :visible.sync="dialogVisible"
        width="30%"
        center=""
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
            <span v-show="showError">验证码错误</span>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="back">取 消</el-button>
          <el-button type="primary" @click="setToken">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>


<script>
import NavHeader from "../components/NavHeader.vue";
import NavFooter from "../components/NavFooter.vue";
import { Dialog, Button, Input } from "element-ui";
export default {
  name: "Login",
  data() {
    return {
      dialogVisible: true,
      showError: false,
      verificationCode: null,
    };
  },
  components: {
    NavHeader,
    NavFooter,
    [Dialog.name]: Dialog,
    [Button.name]: Button,
    [Input.name]: Input,
  },
  methods: {
    async setToken() {
      if (!this.verificationCode) this.$message("验证码为空");
      else {
        const res = await this.axios.get(`/login/${this.verificationCode}`);
        if (res.code === 422) {
          this.showError = true;
        } else {
          window.localStorage.setItem("uid", res.data.data.uId);
          window.localStorage.setItem("token", res.data.data.token);
          this.dialogVisible = false;
          this.$router.go(-2);
        }
      }
    },
    back() {
      this.$router.go(-2);
    },
  },
};
</script>


<style lang="scss">
.main1 {
  width: 100%;
  height: 500px;
}
.dialog {
  .el-dialog {
    .el-icon-close {
      display: none;
    }
    .codeform {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
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
</style>