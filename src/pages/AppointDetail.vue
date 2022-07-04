<template>
  <div class="appoint_wrap">
    <NavHeader></NavHeader>
    <div class="appoint_box">
      <div class="appoint_form">
        <div class="title">提交挂号信息</div>
        <div class="form_main">
          <el-card class="box-card">
            <div class="item">医院：林大医院</div>
            <div class="item">科室：{{ appointForm.department }}</div>
            <div class="item">医生：{{ appointForm.doctorName }}</div>
            <div class="item">
              <!-- 门诊类型：
              <el-radio-group v-model="appointForm.type">
                <el-radio :label="0">普通门诊</el-radio>
                <el-radio :label="1">专家门诊</el-radio>
                <el-radio :label="2">国际门诊</el-radio>
              </el-radio-group> -->
              医生职称：
              {{ appointForm.position }}
            </div>
            <div class="item">
              门诊时间：
              <el-select
                v-model="appointForm.time"
                placeholder="请选择就诊时间"
              >
                <el-option
                  v-for="(item, index) in access_time"
                  :key="index"
                  :label="item | formatTime"
                  :value="item"
                ></el-option>
              </el-select>
            </div>
            <div class="item">费用：￥{{ appointForm.price }}</div>
            <el-divider content-position="center"
              ><span style="color: #6375b7">选择就诊人</span></el-divider
            >
            <el-select v-model="appointForm.cId" placeholder="请选择就诊人">
              <el-option
                v-for="p in ofPatient"
                :key="p.cId"
                :label="p.name"
                :value="p.cId"
              ></el-option>
            </el-select>
            <el-button
              type="primary"
              plain
              icon="el-icon-circle-plus"
              style="margin-left: 10px"
              @click="addCard"
              >添加就诊人</el-button
            >
          </el-card>
          <el-button type="primary" class="subBtn" @click="confirmAppoint">确认提交</el-button>
        </div>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <PatientCard @getCard="getCardInfo" @cancelCard = "dialogVisible= false"></PatientCard>
    </el-dialog>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader.vue";
import PatientCard from '../components/PatientCard.vue'

export default {
  data() {
    return {
      // 预约信息
      appointForm: {
        cid: null,
        department: "普通内科",
        doctorName: "吴晓波",
        position: "主任医师",
        time: "",
        price: 30,
      },
      access_time: [],
      // 就诊人信息
      ofPatient: [],
      dialogVisible:false
    };
  },
  created(){
    // 静态测试！！
    // this.docId = this.$route.params.docId
    this.docId = 2
    this.getPatients()
    this.getSingleSchedul()
  },
  methods: {
    // 获取该医生排班
    async getSingleSchedul(){
      const res = await this.axios.post('/doctor/getSch',{docId:this.docId,scope:7})
      console.log(res)
      for (let it of res.data.data){
        this.access_time.push(it.time)
      }
    },
    // 获取就诊人信息
    async getPatients(){
      const uid = window.localStorage.getItem("uid")
      const res = await this.axios.get("/private/user/getCards",{uId:uid})
      this.ofPatient = res.data
    },
    // 打开添加就诊人弹窗
    addCard() {
      this.dialogVisible = true
    },
    // 确认就诊人信息后关闭弹窗
    getCardInfo(){
      this.dialogVisible= false
      // 更新就诊人信息
      this.getPatients()
    },
    // 确认提交预约信息
    confirmAppoint(){
      if(this.appointForm.cId === null || this.appointForm.time === ""){
        // 提示错误
        this.$message.error('请填写完整！')
      }else {
        // 请求获取就诊记录单

      }
    }
  },
  components: {
    NavHeader,
    PatientCard
  },
};
</script>

<style lang="scss">
.appoint_wrap {
  height: 100%;
  .appoint_box {
    display: flex;
    justify-content: center;
    height: 750px;
    background: url("../assets/images/doctorheader.jpg");
    background-size: cover;
    -webkit-background-size: cover;
    .appoint_form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
      width: 800px;
      height: 550px;
      background: url("../assets/images/border.png");
      background-size: 800px;
      .title {
        text-align: center;
        line-height: 60px;
        width: 100%;
        height: 60px;
        font-weight: 600;
        font-size: 20px;
        color: #fff;
      }
      .box-card {
        width: 600px;
        .item {
          font-size: 14px;
          margin-bottom: 16px;
        }
        .patientSelect {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
        }
      }
      .subBtn {
        width: 300px;
        margin: 10px 160px;
      }
    }
  }
}
</style>
