<template>
  <div class="upload-select-wrap">
    <div class="team-input-wrap">
      <el-input
        class="input-teamName"
        v-model="teamName"
        placeholder="请输入队伍名称"
        style="width: 200px; height: 50px; line-height: 50px;"
        :disabled="submitTeamDisabled"
      >
      </el-input>
      <el-button :disabled="submitTeamDisabled" class="confirm-btn" @click="createTeam">点击创建</el-button>
    </div>
    <div class="tag-input-wrap">
      <el-input
        class="input-new-tag"
        v-model="inputValue"
        placeholder="+新组员(输入学号)"
        @keyup.enter.native="handleInputConfirm"
        ref="saveTagInput"
        style="width: 200px; height: 50px; line-height: 50px;"
      >
      </el-input>
      <el-button class="confirm-btn" @click="submit">确定提交</el-button>
    </div> 
    <div class="tags-wrap">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
        style="font-size: 18px !important;">
        {{tag}}
      </el-tag>
    </div>
    
  </div>
</template>

<script>
  import { createTeam, getStudentInfoByNumber, studetnJoinTeam, scheduleUpdate } from '../api'
  export default {
    data () {
      return {
        dynamicTags: [],
        inputVisible: false,
        inputValue: '',
        teamName: '',
        submitTeamDisabled: false
      }
    },
    computed: {
      teamId: function () {
        return this.$store.state.teamId
      }
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      },

      handleInputConfirm() {
        let inputValue = this.inputValue
        let major, name, info
        const teamId = this.teamId
        if (this.inputValue === null || this.inputValue.length === 0) {
          return
        }
        getStudentInfoByNumber(inputValue, teamId).then(res => {
          // console.log(res)
          if (res.data.code !== 500) {
            console.log(res)
            let data = res.data.data
            major = data.major
            name = data.name

            // 标签
            info = inputValue + ' ' + major + ' ' + name
            if (inputValue) {
              this.dynamicTags.push(info)
            }
            this.inputVisible = false
            this.inputValue = ''
            // 学生加入小组
            studetnJoinTeam(inputValue, teamId).then(res => {
              if (res.data.code !== 500) {
                this.$message({
                  message: '提交成功',
                  type: 'success',
                  duration: 1000
                })
              } else {
                this.$message({
                  message: '提交失败，请重试',
                  type: 'error',
                  duration: 1000
                })
              }
            })
          }
        })
      },
      // 创建小组
      createTeam () {
        // const studentId = Number(this.$store.state.id)
        let studentId = localStorage.getItem('id')
        let projectId = localStorage.getItem('projectId')
        const teamName = this.teamName
        createTeam(teamName, studentId).then(res => {
          let code = res.data.code
          if (code === 200) {
            this.submitTeamDisabled = true
            this.$message({
              type: 'success',
              message: '创建成功',
              duration: 1000
            })
            console.log(res)
            console.log(res.data.data.teamId)
            this.$store.dispatch('setTeamId', res.data.data.teamId)
            scheduleUpdate(projectId)
          }
        })
      },
      // 提交表单
      submit () {
        this.$confirm('提交后信息不可再修改，确定提交?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          })
          this.inputValue = ''
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })          
        })
      }
    },
    mounted () {
      let teamId = this.$store.state.teamId
      if (!teamId) {
        teamId = localStorage.getItem('teamId')
      }
      if (teamId > 0) {
        this.submitTeamDisabled = true
      }
    }
  }
</script>

<style lang='scss' scoped>
  .upload-select-wrap {
    width: 85%;
    height: 700px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition:.2s;
    padding: 20px;
    background: white;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6),
                  0 2px 4px 0 rgba(232, 237, 250, .5);
    }
    .tags-wrap {
      position: absolute;
      left: 50px;
      top: 200px;
      width: 400px;
    }
    .confirm-btn {
      margin-left: 20px;
      height: 42px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
      font-size: 18px !important;
    }
    .team-input-wrap {
      width: 1000px;
      margin-bottom: 10px;
    }
    .tag-input-wrap {
      width: 1000px;
      margin-bottom: 10px;
    }
  }
  .el-tag {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 50px;
    line-height: 50px;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 18px !important;
  }
</style>
