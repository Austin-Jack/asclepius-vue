<template>
  <div class="appoint_wrap">
    <NavHeader></NavHeader>
    <div class="appoint_box">
      <div class="appoint_form">
        <div class="title">确认挂号信息</div>
        <div class="form_main">
          <el-card class="box-card">
            <div class="item">医院：{{ appointForm.hospital }}</div>
            <div class="item">科室：{{ appointForm.department }}</div>
            <div class="item">医生：{{ appointForm.doctorName }}</div>
            <div class="item">
              门诊类型：
              <el-radio-group v-model="appointForm.type">
                <el-radio :label="0">普通门诊</el-radio>
                <el-radio :label="1">专家门诊</el-radio>
                <el-radio :label="2">国际门诊</el-radio>
              </el-radio-group>
            </div>
            <div class="item">
              门诊时间：
              <el-select v-model="appointForm.time" placeholder="请选择就诊时间">
                <el-option v-for="(item,index) in access_time" :key="index" :label="item" :value="item"></el-option>
              </el-select>
            </div>
            <div class="item">
                费用：￥{{appointForm.price}}
            </div>
            <el-divider content-position="left">选择就诊人</el-divider>
          </el-card>
        </div>
      </div>
      <!-- <PatientCard></PatientCard> -->
    </div>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader.vue";
// import PatientCard from '../components/PatientCard.vue'

export default {
  data() {
    return {
      appointForm: {
        hospital: "林大医院",
        department: "普通内科",
        doctorName: "吴晓波",
        type: 0,
        time: "",
        price: 30,
      },
      access_time:[
            "2022-6-29 周三 8:00-9:00",
            "2022-6-30 周四 8:00-9:00"
        ]
    };
  },
  components: {
    NavHeader,
    // PatientCard
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
      }
    }
  }
}
</style>
