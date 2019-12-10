<template>
  <div class="login">
    <div class="bg-wrap"></div><!--用渐变做背景-->
    <div class="loginForm-wrap">
      <div class="text-wrap">
        <span>软件工程课程管理系统-用户注册</span>
      </div>
      <div class="form-wrap">
        <div class="input-user-wrap">
          <span class="el-icon-user"></span>
          <input type="text" placeholder="用户名" v-model="username">
        </div>
        <div class="input-password-wrap">
          <span class="el-icon-eleme"></span>
          <input type="text" placeholder="学号" v-model="number"  @keyup.enter="loginCheck">
        </div>
        <div class="input-password-wrap">
          <span class="el-icon-lock"></span>
          <input type="password" placeholder="密码" v-model="password"  @keyup.enter="loginCheck">
        </div>
        <div class="input-password-again-wrap">
          <span class="el-icon-lock"></span>
          <input type="password" placeholder="确认密码" v-model="checkPassword"  @keyup.enter="loginCheck">
        </div>
        <div class="radio-wrap">
          <el-radio v-model="radio" label="1">学生</el-radio>
          <el-radio v-model="radio" label="2">老师</el-radio>
        </div>
        <transition name="fade">
          <div class="warning-wrap" v-if="ifWarningShow">
            <span class="el-icon-warning-outline"></span>
            <span class="warning-text">{{warningMsg}}</span>
          </div>
        </transition>
        <div class="btns-wrap">
          <div class="register-btn" @click="registerCheck">
            <span>注册</span>
          </div>
          <div class="back-btn" @click="jumpToLogin">
            <span>返回登录界面</span>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
  import { register } from '../api'
  export default {
    data: function () {
      return {
        username: '',
        number: '',
        password: '',
        checkPassword: '',
        ifWarningShow: false,
        warningMsg: '',
        radio: '1'
      }
    },
    methods: {
      jumpToLogin () {
        this.$router.push({
          path: 'login'
        })
      },
      registerCheck () {
        let username = this.username
        let password = this.password
        let checkPassword = this.checkPassword
        let number = this.number
        if (!username || !password) {
          this.showWarningMsg('用户名和密码不能为空')
          return
        }
        if (password !== checkPassword) {
          this.showWarningMsg('密码和确认密码不一致')
          return
        }

        register(username, password, number).then(res => {
          let info = res.data // res.data.data才是
          console.log(info)
          const errorCode = info.code
          // 检查error_code和msg来确定下一步操作
          if (errorCode === 200) { // 注册成功
            this.$router.push({ name: 'home', params: { privilege: info.privilege, username: username } })
          } else {
            // 注册失败
          }
        })
      },
      showWarningMsg (msg) {
        this.ifWarningShow = true
        this.warningMsg = msg
        // let el = document.querySelector('.warning-wrap')
        // el.style.opacity = 1
      },
      jumpToRegisterPage () {
        this.$router.push({
          path: 'register'
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../assets/style/common";
  @mixin btnStyleMixin {
    width: 100%;
    height: 25px;
    border-radius: 3px;
    @include center;
    font-size: 20px;
    font-family: '楷体';
    color: white;
    letter-spacing: 10px;
    cursor: pointer;
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
        font-size: 15px;
        color: black;
      }
      margin-right: 10px;
    }
    input {
      border: none;
      outline: none;
      height: 12px;
      line-height: 12px;
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
        height: 330px;;
        background: white;
        box-sizing: border-box;
        padding: 20px 10px 20px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        &:hover {
          box-shadow: 0 0 8px 2px #ebeef5;
        }
        transition: all .1s linear;
        .input-user-wrap {
          @include inputStyleMixin;
        }
        .input-password-wrap {
          @include inputStyleMixin;
        }
        .input-password-again-wrap {
          @include inputStyleMixin;
        }
        .radio-wrap {
          width: 80%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 8px 0;
        }
        .warning-wrap {
          width: 80%;
          height: 20px;
          margin: 0 0 10px 0;
          // transition: all .2s linear;
          span::before {
            color: orangered;
            font-size: 14px;
            margin-right: 3px;
            position: relative;
            top: .5px;
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
          .register-btn {
            @include btnStyleMixin;
            background: #409EFF;
            margin-bottom: 10px;
          }
          .back-btn {
            @include btnStyleMixin;
            background: #67C23A;
          }
        }
      }
    }
  }
</style>
