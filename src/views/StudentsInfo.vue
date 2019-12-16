<template>
  <div class="students-info-wrap">
    <template>
      <el-table
        :data="tableData"
        border
        style="width: 80%;"
      >
        <el-table-column
          prop="teamName"
          label="小组名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="leaderName"
          label="小组队长"
          width="150">
        </el-table-column>
        <el-table-column
          prop="members"
          label="小组成员">
        </el-table-column>
        <el-table-column
          prop="topicTitle"
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
  import { getTeamInfo } from '../api'
  export default {
    data () {
      return {
        tableData: []
      }
    },
    mounted () {
      const teacherId = localStorage.getItem('id')
      getTeamInfo(teacherId).then(res => {
        // console.log(res)
        this.tableData = res.data.data
        this.tableData.forEach(item => {
          item.members = item.members.join(',')
        })
      })
    }
  }
</script>

<style lang='scss' scoped>
  .students-info-wrap {
    position: absolute;
    top: 2px;
    left: 0;
    padding: 20px;
    width: 100%;
    height: 800px;
    box-sizing: border-box;
    background: white;
    .paging-wrap {
      position: absolute;
      right: 340px;
      margin-top: 10px;
    }
  }
</style>
