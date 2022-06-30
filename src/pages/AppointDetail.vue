<template>
  <div class="appoint_wrap">
    <NavHeader></NavHeader>
    <div class="appoint_box">
      <div class="appoint_form">
        <div class="title">提交挂号信息</div>
        <div class="form_main">
          <el-card class="box-card">
            <div class="item">医院：{{ appointForm.hospital }}</div>
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
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
            </div>
            <div class="item">费用：￥{{ appointForm.price }}</div>
            <el-divider content-position="center"
              ><span style="color: #6375b7">选择就诊人</span></el-divider
            >
            <el-select v-model="cid" placeholder="请选择就诊人">
              <el-option
                v-for="p in ofPatient"
                :key="p.cid"
                :label="p.name"
                :value="p.cid"
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
          <el-button type="primary" class="subBtn">确认提交</el-button>
        </div>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <PatientCard @getCard="getCardInfo"></PatientCard>
    </el-dialog>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader.vue";
import PatientCard from '../components/PatientCard.vue'

export default {
  data() {
    return {
      appointForm: {
        hospital: "林大医院",
        department: "普通内科",
        doctorName: "吴晓波",
        position: "主任医师",
        time: "",
        price: 30,
      },
      access_time: [
        "2022-6-29 周三 8:00-9:00",
        "2022-6-30 周四 8:00-9:00",
        "2022-6-30 周四 8:00-9:00",
        "2022-6-30 周四 8:00-9:00",
        "2022-6-30 周四 8:00-9:00",
        "2022-6-30 周四 8:00-9:00",
        "2022-6-30 周四 8:00-9:00",
        "2022-6-30 周四 8:00-9:00",
      ],
      ofPatient: [
        {
          cid: 10001,
          identityID: "451423194408201455",
          name: "徐凤英",
          sex: 0,
          age: 34,
          tel: "15797887094",
        },
        {
          cid: 10002,
          identityID: "451423194408201456",
          name: "徐小妹",
          sex: 0,
          age: 30,
          tel: "15797888134",
        },
      ],
      cid: null,
      dialogVisible:false
    };
  },
  methods: {
    addCard() {
      this.dialogVisible = true
    },
    getCardInfo(){
      this.dialogVisible= false
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
