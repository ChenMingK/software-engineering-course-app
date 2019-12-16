<template>
  <div class="check-select-wrap">
    <div class="block">
      <el-timeline style="width: 700px;">
        <el-timeline-item timestamp="step 1" placement="top" :color="scheduleStatus >= 1 ? '#0bbd87' : ''">
          <el-card>
            <h4>创建小组{{ scheduleStatus >= 1 ? '（已完成）' : '（未完成）'}}</h4>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step 2" placement="top" :color="scheduleStatus >= 2 ? '#0bbd87' : ''">
          <el-card>
            <h4>确认课题{{ scheduleStatus >= 2 ? '（已完成）' : '（未完成）'}}</h4>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step 3" placement="top" :color="scheduleStatus >= 3 ? '#0bbd87' : ''">
          <el-card>
            <h4>完成小组项目{{ scheduleStatus >= 3 ? '（已完成）' : '（未完成）'}}</h4>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="step 4" placement="top" :color="scheduleStatus >= 4 ? '#0bbd87' : ''">
          <el-card>
            <h4>小组评分完成{{ scheduleStatus >= 4 ? '（已完成）' : '（未完成）'}}</h4>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
  import { getProjectInfo } from '../api'
  export default {
    data () {
      return {
        scheduleStatus: 0
      }
    },
    mounted () {
      const projectId = this.$store.state.projectId
      getProjectInfo(projectId).then(res => {
        this.scheduleStatus = res.data.data === null ? 0 : res.data.data.status
      })
    }
  }
</script>

<style lang='scss' scoped>
</style>
