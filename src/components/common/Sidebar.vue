<template>
  <div class="sidebar">
    <el-row class="tac" v-if="identify==='teacher'">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-menu-item index="resource">
            <i class="el-icon-document"></i>
            <span slot="title">查看资料</span>
          </el-menu-item>
          <el-menu-item index="upload">
            <i class="el-icon-upload2"></i>
            <span slot="title">上传资料</span>
          </el-menu-item>
          <el-submenu index="select">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span class="title">课程选题</span>
            </template>
            <el-menu-item-group>
              <template slot="title">可选操作</template>
              <el-menu-item index="courseSelect">选择课程题目</el-menu-item>
              <el-menu-item index="uploadSelect">提交小组信息</el-menu-item>
              <el-menu-item index="checkSelect">流程查看</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="score">
            <i class="el-icon-star-off"></i>
            <span slot="title">课程得分</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row class="tac" v-else>
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-menu-item index="resource">
            <i class="el-icon-document"></i>
            <span slot="title">查看资料</span>
          </el-menu-item>
          <el-menu-item index="studentsInfo" :disabled="identify==='traversal'">
            <i class="el-icon-document"></i>
            <span slot="title">学生选题情况</span>
          </el-menu-item>
          <el-menu-item index="upload" :disabled="identify==='traversal'">
            <i class="el-icon-upload2"></i>
            <span slot="title">上传资料</span>
          </el-menu-item>
          <el-submenu index="score" :disabled="identify==='traversal'">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span class="title">教师打分</span>
            </template>
            <el-menu-item-group>
              <template slot="title">可选操作</template>
              <el-menu-item index="scoreReport">查看小组工作报告</el-menu-item>
              <el-menu-item index="scoreSchedule">查看小组进度</el-menu-item>
              <el-menu-item index="scoreTeams">小组打分</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    identify: function () {
      return this.$store.state.identify
    },
    privilege: function () {
      return this.$store.state.privilege
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidebar {
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    overflow-y: scroll;
    width: 160px;
  }
  .sidebar::-webkit-scrollbar {
    width: 0;
  }
  .sidebar > ul {
      height: 100%;
  }
</style>
