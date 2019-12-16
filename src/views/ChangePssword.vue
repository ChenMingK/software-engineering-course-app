<template>
  <div class="forget-password-wrap">
    <div class="top-wrap">
      <img class="lock-image" src="../assets/lock.png" alt="" />
      <span class="top-text">修改密码</span>
    </div>
    <div class="main-wrap">
      <el-input placeholder="请输入原密码" v-model="oldPassword" show-password style="width: 500px; margin: 20px 0; display: block;"></el-input>
      <el-input placeholder="请输入新密码" v-model="newPassword" show-password style="width: 500px; margin: 20px 0; display: block;"></el-input>
      <el-button type="primary" @click="postPassword">确认提交</el-button>
    </div>
    <div class="back" @click="back">
      <i class="el-icon-d-arrow-left"></i>
      Back
    </div>
  </div>
</template>

<script>
  import { changePassword } from '../api'
  export default {
    data () {
      return {
        oldPassword: '',
        newPassword: ''
      }
    },
    methods: {
      back () {
        this.$router.push({
          path: 'resource'
        })
      },
      postPassword () {
        let number = localStorage.getItem('number')
        const oldPassword = this.oldPassword
        const newPassword = this.newPassword
        changePassword(number, oldPassword, newPassword).then(res => {
          if (res.data.code !== 500) {
            this.$message({
              message: '修改密码成功',
              type: 'success',
              duration: 1000
            })
            this.$router.push({
              path: 'resource'
            })
          } else {
            this.$message({
              message: '修改密码失败',
              type: 'error',
              duration: 1000
            })
          }
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  .forget-password-wrap {
    width: 100%;
    height: 100%;
    background-color: #F2F6FC;
    padding: 70px 200px 0 200px;
    box-sizing: border-box;
    .top-wrap {
      width: 100%;
      height: 200px;
      background-color: white;
      border-bottom: 5px solid #F2F6FC;
      display: flex;
      justify-content: center;
      align-items: center;
      .lock-image {
        width: 80px;
      }
      .top-text {
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 10px;
        font-family: '黑体';
      }
    }
    .main-wrap {
      width: 100%;
      height: 450px;
      background-color: white;
      padding: 20px 50px 0 50px;
      box-sizing: border-box;
    }
    .back {
      position: absolute;
      top: 20px;
      left: 20px;
      color: gray;
      cursor: pointer;
      animation: movingLeft 1s ease-in infinite alternate;
    }
  }
  @keyframes movingLeft {
    0% {
      left: 20px;
    }
    100% {
      left: 0px;
    }
  }
</style>
