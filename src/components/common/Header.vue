<template>
  <div class="header">
    <div class="left">
      <div class="title-wrap">
        软件工程课程管理系统
      </div>
    </div>
    <div class="right">
      <i class="el-icon-bell">消息
        <span class="btn-bell-badge"></span>
      </i>
      <i class="el-icon-user">用户名</i>
      <i class="el-icon-setting">设置</i>
      <i class="el-icon-help">帮助</i>
      <i class="el-icon-circle-close">退出</i>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang='scss' scoped>
  .header {
    background-color: #B3C0D1;
    color: #333;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      flex: 0 0 30%;
      display: flex;
      .title-wrap {
        font-size: 20px;
        margin-left: 15px;
      }
    }
    .right {
      margin-right: 30px;
      i {
        margin-right: 15px;
      }
      .el-icon-bell {
        position: relative;
        .btn-bell-badge {
          position: absolute;
          left: 10px;
          top: -5px;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: #f56c6c;
          color: #fff;
        }
      }
    }
  }
</style>
