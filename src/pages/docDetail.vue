<template>
  <div>
    <nav-header></nav-header>
    <div class="part1">
      <div class="detail_wrap">
        <img class="detail_img" :src="doc.docImage" />
        <div class="detail_text">
          <div class="dorname">
            <div class="back">
              <div class="title1">{{ doc.docName }}</div>
              <el-button icon="el-icon-back" type="info" @click="goback">返回</el-button>
            </div>
            <div class="title2">
              {{ rank[doc.docRank] }} 教授 博士研究生导师 Professor
            </div>
            <div class="title2">
              {{ doc.docDetail }}
            </div>
          </div>
          <div class="text">
            <p>
              {{
                doc.docName
              }}，1996年获中国医学博士学位。在林大医院工作的20多年来先后经历主治医师、副教授。热爱、注重临床工作，刻苦专研，注重理论联系实际，奠定了扎实的医学基础，积累了丰富的临床经验，熟悉疾病的诊断与治疗，熟练应用各种血液净化技术，尤其对疑难危重症患者有行之有效的诊断与治疗措施，曾以主要参加人身份获国家科技进步二等奖二项。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="news_box">
        <div class="new_title">
          <span>相关咨讯 >>></span>
        </div>
        <div class="item_list">
          <div class="item">
            <span
              >初心不改 砥砺前行 | 北京协和医院庆祝中国共产党成立101周年</span
            >
            <span>发布时间：2022.07.07</span>
          </div>
          <div class="item">
            <span>2-21年度表彰</span>
            <span>发布时间：2022.06.20</span>
          </div>
          <div class="item">
            <span>肾内科开展多形式世界肾脏日主题活动</span>
            <span>发布时间：2022.04.21</span>
          </div>
          <div class="item">
            <span>医院内科学系主任李雪梅获评全国三八红旗手</span>
            <span>发布时间：2022.04.18</span>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader.vue";
import NavFooter from "../components/NavFooter.vue";
import { Button } from "element-ui";
export default {
  data() {
    return {
      doc: null,
      rank: ["主任医师", "副主任医师", "普通医师"],
    };
  },
  components: {
    NavHeader,
    NavFooter,
    [Button.name]: Button,
  },
  created() {
    this.doc = JSON.parse(this.$route.query.doctor);
  },
  methods:{
    goback(){
      this.$router.back()
    }
  }
};
</script>

<style lang="scss">

.part1 {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
  .detail_wrap {
    width: 70%;
    display: flex;
    justify-content: space-around;
    .detail_img {
      width: 232px;
      height: 340px;
      margin-top: 38px;
      margin-right: 15px;
    }
    .detail_text {
      width: 930px;
      .dorname {
        background: url("../assets/images/dividerLine.png") repeat-x left bottom;
        padding-bottom: 60px;
        margin-bottom: 45px;
        padding-top: 38px;
        .back{
          display: flex;
          justify-content: space-between;
        }
        .title1 {
          font-size: 24px;
          color: #333;
        }
        .title2 {
          font-size: 14px;
          color: #474747;
          margin-top: 20px;
          line-height: 1.4;
        }
      }
      .text {
        font-size: 14px;
      }
    }
  }
}
.part2 {
  width: 100%;
  display: flex;
  justify-content: center;
  .news_box {
    width: 60%;
    .item_list {
      margin-bottom: 15px;
      .item {
        display: flex;
        justify-content: space-between;
        height: 15px;
        padding: 25px 0;
        border-bottom: 1px #ccc solid;
        span {
          font-size: 14px;
        }
        &:hover {
          border-bottom: 1px #a88c5f solid;
          span {
            color: #a88c5f;
          }
        }
      }
    }
  }
  .new_title {
    border-bottom: 1px #ccc solid;
    span {
      font-size: 20px;
      color: #a88c5f;
    }
  }
}
</style>
