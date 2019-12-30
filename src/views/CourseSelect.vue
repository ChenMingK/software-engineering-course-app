<template>
  <div class="course-select-wrap">
    <div class="list-wrap">
      <div v-for="(item, index) in topicList" :key="index" class="list-item">
        <el-radio v-model="radioData" :label="index" border @change="radioChange">{{item}}</el-radio>
      </div>
      <div class="submit-btn" :class="hasSubmitted ? 'has-submit' : ''" @click="submit">请阅读说明并点击提交</div>
    </div>

    <div class="info-wrap">
      <el-collapse v-model="activeNames" @change="handleChange" style="width: 900px;">
        <el-collapse-item v-for="(item, index) in introList" :key="index" :title="item.title">
          <div>{{item.content}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { getTopics, teamTopicSelect, getProjectInfo, scheduleUpdate } from '../api'
export default {
  data() {
    return {
      topicList: [],
      radioData: null,
      activeNames: ['1'],
      // 课题说明
      introList: [],
      hasSubmitted: false
    }
  },
  methods: {
    radioChange() {
      // console.log(this.radioData)
    },
    handleChange (val) {
      // console.log(val)
    },
    submit () {
      if (this.hasSubmitted) {
        return
      }
      // console.log(this.topicList[this.radioData])
      let projectId = this.$store.state.projectId
      const radioNumber = Number(this.radioData) + 1
      const _this = this
      if (!projectId) {
        projectId = 1
      }
      teamTopicSelect(projectId, Number(radioNumber)).then(res => {
        if (res.data.msg === 'success') {
          this.$message({
            message: '提交成功',
            type: 'success',
            duration: 1000
          })
          _this.hasSubmitted = true
          scheduleUpdate(projectId)
        } else {
          this.$message({
            message: '提交失败',
            type: 'error',
            duration: 1000
          })
        }
      })
    }
  },
  mounted () {
    const projectId = this.$store.state.projectId
    getTopics().then(res => {
      let data = res.data.data
      data.forEach((item, index) => {
        this.topicList.push(item.title)
        this.introList.push({
          title: `课题${index}说明`,
          content: item.content
        })
      })
    })
    
    getProjectInfo(projectId).then(res => {
      if (res.data.data !== null) {
        const topicId = res.data.data.topicId
        if (topicId !== null && topicId > 0) {
          this.hasSubmitted = true // 已提交
        }
      }
    })
  }
}
</script>

<style lang='scss' scoped>
  .course-select-wrap {
    width: 85%;
    height: 700px;
    display: flex;
    background: white;
    padding: 20px;
    box-sizing: border-box;
    .list-wrap {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      height: 400px;
      justify-content: space-between;
      flex: 0 0 20%;
      position: relative;
      .submit-btn {
        position: absolute;
        bottom: -40px;
        left: 0;
        background: #409eff;
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        letter-spacing: 10px;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
      .has-submit {
        cursor: not-allowed;
        background: #333;
        color: white;
      }
    }
    .info-wrap {
      flex: 1;
      margin-left: 50px;
    }
  }
</style>
