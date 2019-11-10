<template>
  <div class="score-wrap">
    <span>小组得分: {{teamScore}}</span>
    <el-divider></el-divider>
    <span>个人得分: {{personalScore}}</span>
    <el-divider></el-divider>
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span>教师评价</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="text item">
        balabalabala
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        teamScore: 100,
        personalScore: 88
      }
    }
  }
</script>

<style lang='scss' scoped>
  .score-wrap {
    padding: 20px;
    width: 800px;
  }
  .text {
    font-size: 14px;
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
