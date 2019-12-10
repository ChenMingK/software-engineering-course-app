<template>
  <div class="students-info-wrap">
    <template>
      <el-table
        :data="tableData"
        border
      >
        <el-table-column
          prop="teamClass"
          label="小组班级"
          width="100">
        </el-table-column>
        <el-table-column
          prop="teamLeader"
          label="小组队长"
          width="100">
        </el-table-column>
        <el-table-column
          prop="teamMember"
          label="小组成员">
        </el-table-column>
        <el-table-column
          prop="teamCourse"
          label="小组选题">
        </el-table-column>
      </el-table>
    </template>
    <div class="paging-wrap">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          teamClass: '计科1601',
          teamLeader: '小组队长',
          teamMember: '张三 李四 王五 贼六',
          teamCourse: '小组选题'
        }, {
          teamClass: '计科1601',
          teamLeader: '小组队长',
          teamMember: '张三 李四 王五 贼六',
          teamCourse: '小组选题'
        }, {
          teamClass: '计科1601',
          teamLeader: '小组队长',
          teamMember: '张三 李四 王五 贼六',
          teamCourse: '小组选题'
        }, {
          teamClass: '计科1601',
          teamLeader: '小组队长',
          teamMember: '张三 李四 王五 贼六',
          teamCourse: '小组选题'
        }, {
          teamClass: '计科1601',
          teamLeader: '小组队长',
          teamMember: '张三 李四 王五 贼六',
          teamCourse: '小组选题'
        }, {
          teamClass: '计科1601',
          teamLeader: '小组队长',
          teamMember: '张三 李四 王五 贼六',
          teamCourse: '小组选题'
        }, {
          teamClass: '计科1601',
          teamLeader: '小组队长',
          teamMember: '张三 李四 王五 贼六',
          teamCourse: '小组选题'
        }, {
          teamClass: '计科1601',
          teamLeader: '小组队长',
          teamMember: '张三 李四 王五 贼六',
          teamCourse: '小组选题'
        }, {
          teamClass: '计科1601',
          teamLeader: '小组队长',
          teamMember: '张三 李四 王五 贼六',
          teamCourse: '小组选题'
        }, {
          teamClass: '计科1601',
          teamLeader: '小组队长',
          teamMember: '张三 李四 王五 贼六',
          teamCourse: '小组选题'
        }]
      }
    }
  }
</script>

<style lang='scss' scoped>
  .students-info-wrap {
    position: relative;
    width: 800px;
    .paging-wrap {
      margin-top: 20px;
      position: absolute;
      right: 0;
    }
  }
</style>
