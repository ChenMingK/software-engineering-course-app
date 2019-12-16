<template>
  <div class="sidebar">
    <el-row class="tac" v-if="privilege === '1'">
      <el-col :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          router
          background-color="#304156"
          text-color="#BFCBD9"
          active-text-color="#409eff"
          style="width: 200px;"
          @select="handleSelect"
        >
          <el-menu-item index="resource" class="menu-item">
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
              <el-menu-item index="checkSchedule">流程查看</el-menu-item>
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
          default-active="1"
          class="el-menu-vertical-demo"
          router
          background-color="#304156"
          text-color="#BFCBD9"
          active-text-color="#409eff"
          style="width: 200px;"
          @select="handleSelect"
        >
          <el-menu-item index="resource">
            <i class="el-icon-document"></i>
            <span slot="title">查看资料</span>
          </el-menu-item>
          <el-menu-item index="studentsInfo" :disabled="privilege !== '2'">
            <i class="el-icon-view"></i>
            <span slot="title">学生选题情况</span>
          </el-menu-item>
          <el-menu-item index="upload" :disabled="privilege !== '2'">
            <i class="el-icon-upload2"></i>
            <span slot="title">上传资料</span>
          </el-menu-item>
          <el-menu-item index="uploadTopics">
            <i class="el-icon-upload"></i>
            <span slot="title">上传课题</span>
          </el-menu-item>
          <el-menu-item index="scoreTeams" :disabled="privilege !== '2'">
            <i class="el-icon-star-on"></i>
            <span slot="title">教师打分</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerIndex: ''
    }
  },
  computed: {
    privilege: function () {
      return this.$store.state.privilege
    },
    defaultActiveIndex: function () {
      return this.$route.path.substr(1)
    }
  },
  methods: {
    handleSelect (index, indexPath) {

    }
  }
}
</script>

<style lang="scss" scoped>
  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
    width: 200px;
    background: #304156;
  }
  .sidebar::-webkit-scrollbar {
    width: 0;
  }
  .sidebar > ul {
      height: 100%;
  }
</style>
