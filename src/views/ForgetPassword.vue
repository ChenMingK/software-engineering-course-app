<template>
  <div class="forget-password-wrap">
    <div class="top-wrap">
      <img class="lock-image" src="../assets/lock.png" alt="" />
      <span class="top-text">找回密码</span>
    </div>
    <div class="main-wrap">
      <el-steps>
        <el-step title="步骤1" description="输入学号"></el-step>
        <el-step title="步骤2" description="进入邮箱确认验证码并填写验证码"></el-step>
        <el-step title="步骤3" description="输入验证码并提交新密码"></el-step>
      </el-steps>
      <el-input v-model="inputNumber" placeholder="请输入学号" style="width: 500px; margin: 20px 20px 20px 0;"></el-input>
      <el-button :disabled="EmailBtnAbled" type="primary" @click="postEmail">发送验证码</el-button>
      <el-input v-model="inputCheckCode" placeholder="请输入验证码" style="width: 500px; display: block;"></el-input>
      <el-input placeholder="请输入新密码" v-model="inputPassword" show-password style="width: 500px; margin: 20px 0; display: block;"></el-input>
      <el-button type="primary" @click="postPassword">确认提交</el-button>
    </div>
    <div class="back" @click="backToLogin">
      <i class="el-icon-d-arrow-left"></i>
      Back To Login Page
    </div>
  </div>
</template>

<script>
  import { forgetPassword, changePasswordWithCode } from '../api'
  export default {
    data () {
      return {
        inputNumber: '',
        inputCheckCode: '',
        inputPassword: '',
        EmailBtnAbled: false
      }
    },
    methods: {
      postEmail () {
        const number = this.inputNumber // 学号
        this.EmailBtnAbled = true
        setTimeout(() => {
          this.EmailBtnAbled = false
        }, 30000)
        forgetPassword(number).then(res => {
          // 按钮置灰色 30s
          console.log(res)
        })
      },
      postPassword () {
        const newPassword = this.inputPassword
        const vCode = this.inputCheckCode
        const number = this.inputNumber
        changePasswordWithCode(number, vCode, newPassword).then(res => {
          if (res.data.code !== 500) {
            this.$message({
              message: '提交成功',
              type: 'success',
              duration: 1000
            })
            this.backToLogin()
          } else {
            this.$message({
              message: '修改密码失败',
              type: 'error',
              duration: 1000
            })
          }
        })
      },
      backToLogin () {
        this.$router.push({
          path: 'login'
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
