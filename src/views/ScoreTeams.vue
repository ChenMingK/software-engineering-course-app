<template>
  <div class="score-teams-wrap">
    <!-- <el-rate
      v-model="value"
      show-text
      :texts="texts"
      :max="10"
    >
    </el-rate>-->
    <el-table :data="tableData" style="width: 1000px;">
      <el-table-column label="小组名称" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.teamName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">评分</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      texts: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      tableData: [
        {
          teamName: '老虎队',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          teamName: '老虎队',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          teamName: '老虎队',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          teamName: '老虎队',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      }
    }
}
</script>

<style lang='scss' scoped>
</style>
