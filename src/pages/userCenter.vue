<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div>
    <div class="wrap">
      <div class="nav-menu">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <template slot="title">
              <i class="iconfont icon-yonghuzhongxin"></i>
              <span>用户中心</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2" @click="show(1)">
            <i class="iconfont icon-jiuzhenqia"></i>
            <span slot="title">就诊卡管理</span>
          </el-menu-item>

          <el-menu-item index="3" @click="show(2)">
            <i class="iconfont icon-yuyueguahao"></i>
            <span slot="title">预约管理</span>
          </el-menu-item>
          <el-menu-item index="4" @click="show(3)">
            <i class="iconfont icon-yaowan"></i>
            <span slot="title">处方药信息</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content">
        <div class="back">
          <el-page-header @back="goBack" content="用户中心" class="back-bar">
          </el-page-header>
        </div>
        <div class="head-logo"></div>
        <div class="card" v-show="card">
          <div class="addCard">
            <el-button class="add" type="success" @click="dialogVisible = true">添加就诊卡</el-button>
            <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
              <PatientCard @cardCancel="reflashCards"></PatientCard>
              <!-- <PatientCard @cancelCard = "dialogVisible= false"></PatientCard> -->
            </el-dialog>

          </div>
          <div class="card-wrap">
            <el-card class="box-card information" v-for="item in cardForm" :key="item.cId">
              <div slot="header" class="clearfix">
                <span>就诊卡</span>
                <el-button style="float: right; padding: 3px 0" type="danger" @click="open1(item.cId)">删除就诊卡</el-button>
              </div>
              <div class="text item">就诊卡号: {{ item.cId }}</div>
              <div class="text item">身份证号: {{ item.identityID }}</div>
              <div class="text item">就诊人姓名: {{ item.name }}</div>
              <div class="text item">
                就诊人性别: {{ item.sex ? "男" : "女" }}
              </div>
              <div class="text item">就诊人年龄: {{ item.age }}</div>
              <div class="text item">手机号: {{ item.telNumber }}</div>
            </el-card>
          </div>
        </div>
        <div class="appoint" v-show="appoint">
          <div class="appoint-wrap">
            <el-descriptions class="margin-top detail" title="预约信息" :column="3" :size="size" border
              v-for="item in appointForm" :key="item.apId">
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-time"></i>
                  预约号
                </template>
                {{ item.apId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-time"></i>
                  就诊卡号
                </template>
                {{ item.cId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-time"></i>
                  预约时间
                </template>
                {{ item.apTime | formatTime }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-user"></i>
                  就诊人姓名
                </template>
                {{ item.patient }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-user-solid"></i>
                  医生名称
                </template>
                {{ item.docName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-tickets"></i>
                  科室名称
                </template>
                {{ item.dName }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-tickets"></i>
                  门诊类型
                </template>
                <span v-text="
                  item.cLevel <= 1
                    ? item.cLevel == 0
                      ? '普通门诊'
                      : '专家门诊'
                    : '国际门诊'
                "></span>
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-tickets"></i>
                  订单状态
                </template>
                <span v-text="
                  item.apStatus <= 1
                    ? item.apStatus == 0
                      ? '已创建'
                      : '已取消'
                    : item.apStatus == 2
                      ? '已取消'
                      : '已完成'
                "></span>
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-star-off"></i>
                  挂号费
                </template>
                {{ item.apCost }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-warning"></i>
                  操作
                </template>
                <el-button type="danger" size="small" @click="open(item.sId, item.cId)" v-show="item.apStatus == 0">取消预约
                </el-button>
              </el-descriptions-item>
            </el-descriptions>
          </div>
          <el-pagination layout="prev, pager, next" :total="total" :pageSize="pageSize" @current-change="handleChange">
          </el-pagination>
        </div>
        <div class="medcine" v-show="medcine">
          <div class="medcine-wrap">
            <el-descriptions class="margin-top detail" title="处方药信息" :column="3" :size="size" border
              v-for="item in medcineForm" :key="item.apId">
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-time"></i>
                  预约号
                </template>
                {{ item.apId }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-user"></i>
                  就诊人姓名
                </template>
                {{ item.patient }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-user"></i>
                  处方详细描述
                </template>
                {{ item.preComment }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-star-off"></i>
                  处方费
                </template>
                {{ item.preCost }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-star-off"></i>
                  处方状态
                </template>
                {{ item.preStatus ? '已取药' : '待取药' }}
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import PatientCard from '../components/PatientCard.vue'
import {
  Descriptions,
  DescriptionsItem,
  Card,
  Button,
  PageHeader,
  Menu,
  MenuItem,
  Dialog,
  Input,
  Icon,
  Pagination
} from "element-ui";
export default {
  name: "user",
  components: {
    [Descriptions.name]: Descriptions,
    [DescriptionsItem.name]: DescriptionsItem,
    [Card.name]: Card,
    [Button.name]: Button,
    [PageHeader.name]: PageHeader,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Dialog.name]: Dialog,
    [Input.name]: Input,
    [Icon.name]: Icon,
    [Pagination.name]: Pagination,
    PatientCard,
  },
  data() {
    return {
      card: true,
      appoint: false,
      medcine: false,
      cardForm: [], //就诊卡信息
      appointForm: [],  //预约信息
      medcineForm: [], //处方药信息
      u_id: "",
      size: "",
      dialogVisible: false,
      pageSize: 3,
      pageNum: 1,
      total: 0
    };
  },
  created() {
    this.u_id = window.localStorage.getItem("uId")
  },
  mounted() {
    this.getCard();
    this.getAppoint();
    this.getMedcine()
  },
  methods: {
    //路由回退
    goBack() {
      this.$router.go(-1);
    },
    //侧边栏操作
    show(id) {
      if (id == 1) {
        this.appoint = false;
        this.medcine = false;
        this.card = true;
        this.getCard();
      } else if (id == 2) {
        this.card = false;
        this.medcine = false;
        this.appoint = true;
        this.getAppoint();

      } else if (id == 3) {
        this.card = false;
        this.appoint = false;
        this.medcine = true;
        this.getMedcine()

      }
    },
    //获取就诊卡信息
    getCard() {
      this.axios.get(`/private/user/getCards?uId=${this.u_id}`).then((res) => {
        if (res.data.code == 200 || res.data.code == 201) {
          this.cardForm = res.data.data;
        } else {
          this.$message.error('获取就诊卡失败')
        }
      });
    },
    reflashCards(res) {
      this.dialogVisible = false
      this.cardForm = res
    },
    //获取预约信息
    getAppoint() {
      this.axios.get(`/private/user/aplist/${this.u_id}/${this.pageNum}`).then((res) => {
        if (res.data.code == 200) {
          this.appointForm = res.data.data;
          this.total = Number(res.data.message)
        } else {
          this.$message.error('获取预约失败')
        }
      });
    },
    //获取处方药信息
    getMedcine() {
      this.axios.get(`/private/user/prescribe?uId=${this.u_id}`).then((res) => {
        this.medcineForm = res.data.data;
      });
    },
    //删除就诊卡
    deleteCard(id) {
      // let message = "";
      this.axios.delete(`/private/user/deleteCard/${this.u_id}/${id}`).then((res) => {
        this.cardForm = res.data.data
      });
    },
    //取消预约
    cancelAppoint(sId, cId) {
      this.axios.delete(`/private/user/cancel/${sId}/${cId}/${this.pageNum}`).then((res) => {
        this.appointForm = res.data.data;
      })
    },
    //重新请求数据
    renderData() { },
    //取消预约弹窗
    open(sId, cId) {
      this.$confirm("此操作将取消该预约, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.cancelAppoint(sId, cId);
          this.$message({
            type: "success",
            message: "取消成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },
    //删除就诊卡弹窗
    open1(id) {
      this.$confirm("此操作将删除该就诊卡, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deleteCard(id);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },
    handleChange(pageNum) {
      this.pageNum = pageNum
      this.getAppoint()
    }
  },
};
</script>

<style lang="scss">
@import "../assets/scss/reset.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";

.wrap {
  display: flex;
  width: 100%;

  .nav-menu {
    flex: 1;

    .el-menu {
      height: 900px;

      .el-submenu__icon-arrow {
        display: none;
      }

      .iconfont {
        padding-right: 10px;
      }
    }
  }

  .content {
    flex: 4;
    position: relative;

    .back {
      width: 100%;
      box-sizing: border-box;
      border: 1px solid $colorF;

      .back-bar {
        height: 50px;
        line-height: 50px;
      }
    }

    .head-logo {
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(-50%);
      cursor: pointer;
      @include bgImg(50px, 50px, "../assets/imgs/head/head2.png");
    }

    .card {
      position: absolute;
      width: 100%;
      height: 848px;
      background-color: antiquewhite;

      .add {
        position: absolute;
        top: 0;
        left: 5px;
      }

      .card-wrap {
        padding-top: 25px;
        display: flex;

        .information {
          display: inline-block;
          width: 48%;
          margin: 0 20px;
          margin-top: 20px;
          line-height: 40px;
          font-size: 16px;
          font-weight: 400;
          border: 1px solid black;
        }

        .cancle {
          position: absolute;
          top: 55px;
          right: 5px;
        }
      }
    }

    .appoint {
      position: absolute;
      width: 100%;
      height: 848px;

      .appoint-wrap {
        .detail {
          border: 1px solid rgb(235, 238, 245);
          margin-top: 20px;
        }
      }
    }

    .medcine {
      position: absolute;
      width: 100%;
      height: 848px;

      .medcine-wrap {
        .detail {
          border: 1px solid rgb(235, 238, 245);
          margin-top: 20px;
        }
      }
    }
  }
}
</style>