<template>
  <div class="score-wrap">
    <span>小组得分: {{teamScore}}</span>
    <el-divider></el-divider>
    <el-card class="box-card" shadow="always" style="width: 600px;">
      <div slot="header" class="clearfix">
        <span>教师评价</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="text item">
        {{ comment }}
      </div>
    </el-card>
  </div>
</template>

<script>
  import { getProjectInfo } from '../api'
  export default {
    data () {
      return {
        teamScore: 100,
        comment: ''
      }
    },
    mounted () {
      const projectId = this.$store.state.projectId
      getProjectInfo(projectId).then(res => {
        console.log(res)
        this.teamScore = res.data.data.result
        this.comment = res.data.data.review
      })
    }
  }
</script>

<style lang='scss' scoped>
  .score-wrap {
    padding: 20px;
    width: 800px;
  }
  .text {
    // font-size: 14px;
    line-height: 20px;
    // letter-spacing: 1px;
    // font-family: '微软雅黑';
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
