<template>
  <div class="score-report-wrap">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>单击链接下载</span>
        <el-button style="float: right; padding: 3px 0" type="text">全部下载</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'小组名称：' + o }}
        <span class="teamwork">{{'小组作品：' + 'href'}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang='scss' scoped>
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
    width: 1000px;
    .teamwork {
      margin-left: 150px;
    }
  }
</style>
