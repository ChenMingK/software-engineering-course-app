<template>
  <div class="students-info-wrap">
    <template>
      <el-table
        :data="tableData"
        border
        style="width: 800px">
        <el-table-column
          prop="teamName"
          label="小组名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="teamCourse"
          label="小组选题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="teamMember"
          label="小组成员">
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
          teamName: '486小队',
          teamCourse: '王小虎',
          teamMember: '张三 李四 王五 贼六'
        }, {
          teamName: '2016-05-02',
          teamCourse: '王小虎',
          teamMember: '上海市普陀区金沙江路 1518 弄'
        }, {
          teamName: '2016-05-02',
          teamCourse: '王小虎',
          teamMember: '上海市普陀区金沙江路 1518 弄'
        }, {
          teamName: '2016-05-02',
          teamCourse: '王小虎',
          teamMember: '上海市普陀区金沙江路 1518 弄'
        }, {
          teamName: '2016-05-02',
          teamCourse: '王小虎',
          teamMember: '上海市普陀区金沙江路 1518 弄'
        }, {
          teamName: '2016-05-02',
          teamCourse: '王小虎',
          teamMember: '上海市普陀区金沙江路 1518 弄'
        }, {
          teamName: '2016-05-02',
          teamCourse: '王小虎',
          teamMember: '上海市普陀区金沙江路 1518 弄'
        }, {
          teamName: '2016-05-02',
          teamCourse: '王小虎',
          teamMember: '上海市普陀区金沙江路 1518 弄'
        }, {
          teamName: '2016-05-02',
          teamCourse: '王小虎',
          teamMember: '上海市普陀区金沙江路 1518 弄'
        }, {
          teamName: '2016-05-02',
          teamCourse: '王小虎',
          teamMember: '上海市普陀区金沙江路 1518 弄'
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
