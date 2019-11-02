<template>
  <div class="sidebar">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-submenu index="resource">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>查看资料</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="select">
            <i class="el-icon-menu"></i>
            <span slot="title">课程选题</span>
          </el-menu-item>
          <el-menu-item index="upload" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">上传资料</span>
          </el-menu-item>
          <el-menu-item index="score">
            <i class="el-icon-setting"></i>
            <span slot="title">课程得分</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
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
