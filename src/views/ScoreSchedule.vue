<template>
  <div class="score-schedule-wrap">
    <div class="table-wrap">
      <el-table
        :data="tableData"
        border
        style="flex: 0 0 50%;">
        <el-table-column
          prop="teamName"
          label="小组名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="teamMember"
          label="小组成员"
          width="300">
        </el-table-column>
        <el-table-column
          prop="teamSchedule"
          label="小组进度"
        >
        </el-table-column>
      </el-table>
    </div>
    <div class="step-wrap">
      <div class="step-description-text">小组进度说明</div>
      <el-steps align-center direction="vertical" style="height: 300px;">
        <el-step title="步骤1" description="提交小组成员信息" icon="el-icon-user-solid"></el-step>
        <el-step title="步骤2" description="上传小组工作报告" icon="el-icon-document"></el-step>
        <el-step title="步骤3" description="上传小组课题作品" icon="el-icon-upload"></el-step>
        <el-step title="步骤4" description="小组评分完成" icon="el-icon-star-on"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          teamName: '1 队',
          teamMember: '成员1、成员2、成员3',
          teamSchedule: '已提交小组信息'
        }, {
          teamName: '1 队',
          teamMember: '成员1、成员2、成员3',
          teamSchedule: '已上传小组工作报告'
        }, {
          teamName: '1 队',
          teamMember: '成员1、成员2、成员3',
          teamSchedule: '已上传小组工作报告'
        }, {
          teamName: '1 队',
          teamMember: '成员1、成员2、成员3',
          teamSchedule: '已上传小组工作报告'
        }]
      }
    }
  }
</script>

<style lang='scss' scoped>
  .score-schedule-wrap {
    .table-wrap {
      width: 700px;
      position: absolute;
      left: 30px;
    }
    .step-wrap {
      position: absolute;
      right: 450px;
      .step-description-text {
        color: #909399;
        margin-bottom: 20px;
      }
    }
  }
</style>
