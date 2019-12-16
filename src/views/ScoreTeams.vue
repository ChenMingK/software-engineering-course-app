<template>
  <div class="score-teams-wrap">
    <el-table 
      :data="tableData"
      border 
      class="table"
      style="width: 80%; height: 680px; overflow-y: scroll;">
      <el-table-column 
        label="小组名称"
        width="150"
        prop="teamName">
      </el-table-column>
      <el-table-column 
        label="小组成员"
        width="300"
        prop="members">
      </el-table-column>
      <el-table-column 
        label="小组进度"
        width="300"
        prop="status">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope"> <!-- 这个 scope 相当于获取当前行的数据用于其他处理, 打印 scope 看下有哪些信息 -->
          <el-button 
            size="mini" 
            type="primary"
            plain 
            @click="handleScore(scope.$index, scope.row)">
          评分
          </el-button>
          <el-button 
            size="mini" 
            type="primary" 
            plain
            @click="handleComment(scope.$index, scope.row)">
          评语
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="dialogType === 1 ? '评分' : '评语'"
      :visible.sync="dialogVisible"
      width="30%"
      :modal-append-to-body='false'
      :before-close="handleClose"> <!-- fix: 遮罩被蒙版挡住了 添加 :modal-append-to-body='false' -->
      <div class="block" v-if="dialogType === 1">
        <!-- <span class="demonstration" style="">温馨提示：balabalabala</span> -->
        <el-rate
          v-model="score"
          :colors="colors"
          show-text
          :max="10"
          :texts="texts">
        </el-rate>
      </div>
      <div v-else>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="handleDialogConfirm" size="mini">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { getTeamInfo, postScore, postComment } from '../api'
  export default {
    data() {
      return {
        dialogVisible: false,
        score: null, // 评分的分数
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // 五角星颜色
        texts: [ // texts 长度等于 max
          10,
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90,
          100
        ],
        dialogType: null, // 弹框的类别，两个按钮对应
        textarea: '', // 评语内容
        tableData: [],
        projectId: 1
      }
    },
    methods: {
      handleScore (index, row) {
        // console.log(index, row) // 在列表中的下标，该行的信息所有
        this.projectId = row.projectId // 该行对应的 pid
        this.dialogVisible = true
        this.dialogType = 1
      },
      handleComment (index, row) {
        this.projectId = row.projectId // 该行对应的 pid
        this.dialogType = 2
        this.dialogVisible = true
      },
      handleClose (done) {
        this.$confirm('确认关闭?')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      },
      // 对话框点击后提交，上传分数到服务器，按钮置为灰色(如果做的话需要重新拉取数据通过一个布尔值来判断)
      handleDialogConfirm () {
        // console.log(this.score * 10) // 该组件有点小问题， 乘 10
        this.dialogVisible = false
        const score = this.score * 10
        const projectId = this.projectId
        if (this.dialogType === 1) {
          postScore(projectId, score).then(res => {
            this.$message({
              type: 'success',
              message: '提交成功',
              duration: 1000
            })
          })
        } else {
          const review = this.textarea
          postComment(projectId, review).then(res => {
            this.$message({
              type: 'success',
              message: '提交成功',
              duration: 1000
            })
            this.textarea = ''
          })
        }
      }
    },
    mounted () {
      const status = ['已创建小组', '已提交小组信息', '已上传小组作品', '已完成小组评分']
      const teacherId = localStorage.getItem('id')
      getTeamInfo(teacherId).then(res => {
        // console.log(res)
        this.tableData = res.data.data
        this.tableData.forEach(item => {
          item.members = item.members.join(',')
          item.status = status[item.status - 1]
        })
      })
    }

  }
</script>

<style lang='scss' scoped>
  .score-teams-wrap {
    position: absolute;
    top: 2px;
    left: 0;
    padding: 20px;
    width: 100%;
    height: 800px;
    box-sizing: border-box;
    background: white;
    .table {
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>
