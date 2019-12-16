<template>
  <div class="header">
    <div class="left">
      <div class="title-wrap">
        软件工程课程管理系统
      </div>
    </div>
    <div class="right">
      <i class="el-icon-message-solid btn">消息
        <span class="btn-bell-badge"></span>
      </i>
      <i class="el-icon-user-solid btn">{{ this.username }}</i>
      <i class="el-icon-s-tools btn" @click="jumpToChangePswPage">修改密码</i>
      <i class="el-icon-error btn" @click="backToLoginPage">退出</i>
      <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="img" />
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      username () {
        const privilege = this.$store.state.privilege
        if (privilege === '1') {
          return '学生'
        } else if (privilege === '2') {
          return '教师'
        } else {
          return '游客'
        }
      }
    },
    methods: {
      backToLoginPage () {
        this.$router.push({
          path: 'login'
        })
      },
      jumpToChangePswPage () {
        this.$router.push({
          path: '/changePassword'
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  .header {
    background-color: white;
    color: #97a8be;
    height: 60px;
    width: 100%;
    padding-left: 200px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 4px rgba(0,21,41,.1);
    .left {
      flex: 0 0 30%;
      display: flex;
      .title-wrap {
        font-size: 20px;
        margin-left: 15px;
      }
    }
    .right {
      margin-right: 60px;
      i {
        margin-right: 15px;
      }
      .btn {
        color: #5a5e66;
        cursor: pointer;
        font-size: 18px;
      }
      .img {
        width: 50px;
        position: absolute;
        top: 5px;
        border-radius: 10px;
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
