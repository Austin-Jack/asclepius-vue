<template>
  <el-form
    ref="addCardform"
    :model="cardForm"
    :rules="pcardRules"
    label-width="80px"
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model="cardForm.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="cardForm.age"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="cardForm.sex">
        <el-radio :label="1">男</el-radio>
        <el-radio :label="0">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="手机号码" prop="telNumber">
      <el-input v-model="cardForm.telNumber"></el-input>
    </el-form-item>
    <el-form-item label="证件号码" prop="identityID">
      <el-input v-model="cardForm.identityID"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确认提交</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {Form,FormItem,Radio,RadioGroup,Button,Input} from 'element-ui'
export default {
  data() {
    var checkMobile = (rule, value, cb) => {
      var regMobile = /^1[3|4|5|7|8][0-9]{9}$/;
      if (regMobile.test(value)) return cb();
      // 手机号不合法
      cb(new Error("请输入合法手机号！"));
    };

     var checkCardID = (rule, value, callback) => {
      if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
        callback(new Error("身份证格式错误!"));
      }
      callback();
    };
   
    return {
      // 就诊卡信息
      cardForm: {
        name: "",
        age: null,
        sex: 1,
        tel: null,
        identityID: null,
      },
      // 就诊卡的验证规则
      pcardRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
        telNumber: [
          { required: true, message: "请输入号码", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
        identityID: [
          { required: true, message: "请输入证件号", trigger: "blur" },
          { validator: checkCardID, trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.cardForm.uId = window.localStorage.getItem("uId")
  },
  methods: {
    
    onSubmit() {
      this.$refs.addCardform.validate(async (valid) => {
        // 提交前验证 未通过则返回
        if (!valid) {
          return;
        } else {
        // 通过验证则发送请求 添加就诊人
          const res = await this.axios.post("/private/user/addCard",this.cardForm)
          if(res.data.code === 200){
            console.log(res.data.data)
          this.$emit("getCard",res.data.data)
          this.$emit('cardCancel',res.data.data)

          }else{
            this.$message.error("您已存在该就诊卡！")
          }
        } 
      });
    },
    cancel(){
      this.$emit("cancelCard")
    }
  },
  components:{
   [Form.name]:Form,
   [FormItem.name]:FormItem,
   [Radio.name]:Radio,
   [Button.name]:Button,
   [RadioGroup.name]:RadioGroup,
   [Input.name]:Input
  }
};
</script>

<style lang="scss" scoped>
.el-input {
  width: 180px;
}
</style>
