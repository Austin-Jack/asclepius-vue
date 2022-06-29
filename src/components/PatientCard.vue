<template>
  <el-form ref="form" :model="form" :rules="pcardRules" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model.number="form.age"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.sex">
        <el-radio :label="1" >男</el-radio>
        <el-radio :label="0">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input v-model="form.tel"></el-input>
    </el-form-item>
    <el-form-item label="证件号码">
      <el-input v-model="form.identityID"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确认提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
    data(){
        return {
            form: {
                name:"",
                age:null,
                sex:1,
                tel:null,
                identityID:null
            },
            pcardRules:{
              name: [
                { required: true, message: '请输入姓名', trigger: 'blur' }
              ],
              age: [
                { required: true, message: '请输入年龄', trigger: 'blur' },
              ],
              sex: [

              ],
              tel: [
                { required: true, message: '请输入号码', trigger: 'blur' },
              ],
              identityID: [

              ]
            }
        }
    },
    methods:{
        onSubmit(){
            
        }
    }
};
</script>

<style lang="scss" scoped>
.el-input {
  width: 180px;
}
</style>

