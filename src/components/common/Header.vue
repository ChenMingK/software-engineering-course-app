<template>
  <div class="header">
    <div class="left">
      <div class="title-wrap">
        软件工程课程管理系统
      </div>
    </div>
    <div class="right">
      <i class="el-icon-bell btn">消息
        <span class="btn-bell-badge"></span>
      </i>
      <i class="el-icon-user btn">用户名</i>
      <i class="el-icon-setting btn">设置</i>
      <i class="el-icon-help btn">帮助</i>
      <i class="el-icon-switch-button btn" @click="changeIdentify">身份切换</i>
      <i class="el-icon-circle-close btn" @click="backToLoginPage">退出</i>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      changeIdentify () {
        let identify = this.$store.state.identify === 'teacher' ? 'student' : 'teacher'
        this.$store.dispatch('setIdentify', identify)
      },
      backToLoginPage () {
        this.$router.push({
          path: 'login'
        })
      }
    }
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
      .btn {
        cursor: pointer;
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
