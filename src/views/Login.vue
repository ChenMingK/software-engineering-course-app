<template>
  <div class="login">
    <div class="bg-wrap"></div><!--用渐变做背景-->
    <div class="loginForm-wrap">
      <div class="text-wrap">
        <span>软件工程课程管理系统-用户登录</span>
      </div>
      <div class="form-wrap">
        <div class="input-user-wrap">
          <span class="el-icon-user"></span>
          <input type="text" placeholder="用户名" v-model="username">
        </div>
        <div class="input-password-wrap">
          <span class="el-icon-lock"></span>
          <input type="password" placeholder="密码" v-model="password"  @keyup.enter="loginCheck" >
          <i class="el-icon-question"></i><span class="forget-text" @click="jumpToForgetPasPage">忘记密码?</span>
        </div>
        <div class="radio-wrap">
          <el-radio v-model="radio" label="1">学生</el-radio>
          <el-radio v-model="radio" label="2">老师</el-radio>
          <!-- <el-radio v-model="radio" label="0">管理员</el-radio> -->
        </div>
        <div class="warning-wrap">
          <span class="icon-warning"></span>
          <span class="warning-text">{{warningMsg}}</span>
        </div>
        <div class="btns-wrap">
          <div class="login-btn" @click="loginCheck">
            <span>登录</span>
          </div>
          <div class="register-btn" @click="jumpToRegisterPage">
            <span>注册</span>
          </div>
          <div class="traveler-btn" @click="jumpToHome">
            <span>游客登录</span>
          </div>
        </div>  
        <div class="footer-text">
          <span>温馨提示:以游客身份登录不需要输入用户名和密码，游客可以下载课程资料</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { login } from '../api'
  export default {
    data: function () {
      return {
        username: '',
        password: '',
        ifWarningShow: false,
        warningMsg: '',
        radio: '1' // 单选 
      }
    },
    methods: {
      clickTest () {
        this.$store.dispatch('setPrivilege', 2)
        console.log(this.privilege)
      },
      loginCheck() {
        let username = this.username.trim()
        let password = this.password.trim()
        const radio = this.radio
        console.log(username, password)
        if (!username || !password) {
          this.showWarningMsg('用户名和密码不能为空')
          return
        }
        login(username, password, radio).then(res => {
          // console.log(res)
          let info = res.data // res.data.data 才是
          const errorCode = info.code
          // console.log(errorCode)
          let { id, projectId, teamId, topicId } = res.data.data
          if (!teamId) {
            teamId = 0
          }
          // 检查 error_code 和 msg 来确定下一步操作
          if (errorCode === 200) { // 正确
            this.$store.dispatch('setNumber', this.username)
            this.$store.dispatch('setPrivilege', this.radio)
            this.$store.dispatch('setId', id)
            this.$store.dispatch('setProjectId', projectId)
            this.$store.dispatch('setTeamId', teamId)
            this.$store.dispatch('setTopicId', topicId)
            this.$router.push({
              path: 'resource'
            })
          } else {
            this.showWarningMsg('用户名或密码错误')
          }
        })
      },
      showWarningMsg (msg) {
        this.ifWarningShow = true
        this.warningMsg = msg
        let el = document.querySelector('.warning-wrap')
        el.style.opacity = 1
      },
      jumpToRegisterPage () {
        this.$router.push({
          path: 'register'
        })
      },
      jumpToHome () {
        this.$store.dispatch('setPrivilege', 3)
        this.$router.push({
          path: 'resource'
        })
      },
      jumpToForgetPasPage () {
        this.$router.push({
          path: 'forgetPassword'
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../assets/style/common";
  @mixin btnStyle {
    width: 100%;
    height: 25px;
    border-radius: 3px;
    @include center;
    font-size: 20px;
    font-family: '楷体';
    color: white;
    letter-spacing: 10px;
    cursor: pointer;
    margin-bottom: 5px;
  }
  @mixin inputStyleMixin {
    display: flex;
    width: 80%;
    border: 1px solid #00b3ff;
    border-radius: 3px;
    padding: 10px;
    box-sizing: border-box;
    align-items: center;
    margin-bottom: 8px;
    span {
      &:before {
        font-size: 18px;
        color: black;
      }
      margin-right: 10px;
    }
    input {
      border: none;
      outline: none;
      height: 18px;
      line-height: 18px;
    }
  }
  .login {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    .bg-wrap {
      width: 100%;
      height: 100%;
      background-image: linear-gradient(160deg, #b100ff 20%,#00b3ff 80%);
    }
    .loginForm-wrap {
      @include absCenter;
      width: 400px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .text-wrap {
        @include center;
        font-size: 20px;
        color: white;
        letter-spacing: 5px;
        font-weight: bold;
        margin-bottom: 15px;
        font-family: '楷体'
      }
      .form-wrap {
        width: 100%;
        height: 320px;
        background: white;
        border: 1px solid #e6e6e6;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 20px 10px 20px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:hover {
          box-shadow: 0 0 8px 2px #ebeef5;
        }
        transition: all .1s linear;
        .input-user-wrap {
          @include inputStyleMixin;
        }
        .input-password-wrap {
          @include inputStyleMixin;
          .el-icon-question {
            color: gray;
            cursor: pointer;
          }
          .forget-text {
            font-size: 12px;
            cursor: pointer;
            color: gray;
          }
        }
        .radio-wrap {
          width: 80%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 10px;
        }
        .warning-wrap {
          width: 80%;
          height: 20px;
          opacity: 0;
          margin: 10px 0 10px 0;
          transition: all .2s linear;
          span::before {
            color: orangered;
            margin-right: 3px;
          }
          .warning-text {
            font-size: 12px;
            letter-spacing: 5px;
            color: orangered;
          }
        }
        .btns-wrap {
          width: 80%;
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .login-btn {
            @include btnStyle;
            background: #409EFF;
          }
          .register-btn {
            @include btnStyle;
            background: #409EFF;
          }
          .traveler-btn {
            @include btnStyle;
            background: #67C23A;
          }
        }
        .footer-text {
          width: 80%;
          line-height: 20px;
          font-size: 12px;
          letter-spacing: 2px;
          color: #67C23A;
        }
      }
    }
  }
</style>
