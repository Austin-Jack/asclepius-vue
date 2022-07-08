<template>
  <div class="appoint_wrap">
    <NavHeader></NavHeader>
    <div class="appoint_box">
      <div class="appoint_form">
        <div class="title">提交挂号信息</div>
        <div class="form_main">
          <el-card class="box-card">
            <div class="item">医院：林大医院</div>
            <div class="item">科室：{{ doctorDetail.dName }}</div>
            <div class="item">医生：{{ doctorDetail.docName }}</div>
            <div class="item">
              医生职称：
              {{ doctorRank[doctorDetail.docRank]}}
            </div>
            <div class="item">
              门诊时间：
              <el-select
                v-model="sId"
                placeholder="请选择就诊时间"
              >
                <el-option
                  v-for="item in doctorDetail.times"
                  :key="item.sId"
                  :label="item.time | formatTime"
                  :value="item.sId"
                ></el-option>
              </el-select>
            </div>
            <div class="item">费用：￥{{ doctorDetail.apCost }}</div>
            <el-divider content-position="center"
              ><span style="color: #6375b7">选择就诊人</span></el-divider
            >
            <el-select v-model="cId" placeholder="请选择就诊人">
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
import {Dialog,Button,Card,Select,Option,Divider} from 'element-ui'

export default {
  data() {
    return {
      doctorRank:["主任医师","副主任医师","普通医师"],
      // 预约信息
      cId: null,
      sId: null,
      // 医生及排班信息
      doctorDetail:{},
      access_time: [],
      // 就诊人信息
      ofPatient: [],
      dialogVisible:false
    };
  },
  created(){
    this.dId = this.$route.params.dId
    this.docId = this.$route.params.docId
    this.getPatients()
    this.getSingleSchedul()
  },
  methods: {
    // 获取该医生信息及排班
    async getSingleSchedul(){
      const res = await this.axios.get(`/schedule/doctor/${this.dId}/${this.docId}`,)
      this.doctorDetail = res.data.data
    },
    // 获取就诊人信息
    async getPatients(){
      const uId = window.localStorage.getItem("uId")
      const res = await this.axios.get(`/private/user/getCards?uId=${uId}`)
      this.ofPatient = res.data.data
    },
    // 打开添加就诊人弹窗
    addCard() {
      this.dialogVisible = true
    },
    // 确认就诊人信息后关闭弹窗
    getCardInfo(patients){
      this.dialogVisible= false
      // 更新就诊人信息
      this.ofPatient = patients
    },
    // 确认提交预约信息
    async confirmAppoint(){
      if(this.cId === null || this.sId === null){
        // 提示错误
        this.$message.error('请填写完整！')
      }else {
        // 请求预约
        const res = await this.axios.post('/private/user/appointment/add',
        {cId:this.cId,
        sId:this.sId,
        docName:this.doctorDetail.docName,
        dName:this.doctorDetail.dName,
        apCost:this.doctorDetail.apCost
        })
        if(res.data.code === 200){
          this.$message.success('挂号成功！')
        }else{
          this.$message.error('抱歉，预约已满！')
        }
      }
    }
  },
  components: {
    NavHeader,
    PatientCard,
    [Button.name]:Button,
    [Dialog.name]:Dialog,
    [Card.name]:Card,
    [Select.name]:Select,
    [Option.name]:Option,
    [Divider.name]:Divider,
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
