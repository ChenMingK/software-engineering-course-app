<template>
  <div class="resource-wrap">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="课程资料" name="first">
        <el-card class="box-card">
          <div v-for="item in downloadList" :key="item" class="text item">
            <a href="http://cmk1018.cn/wp-content/uploads/2019/04/8.jpg" download>{{item}}</a>
          </div> <!-- https://blog.csdn.net/sinat_29774479/article/details/78404794 -->
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="学生作品" name="second">学生作品</el-tab-pane>
      <el-tab-pane label="课程实验" name="third">课程实验</el-tab-pane>
      <el-tab-pane label="小班讨论" name="fourth">小班讨论</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeName: 'first',
        downloadList: [
          'http://cmk1018.cn/wp-content/uploads/2019/04/8.jpg',
          'http://x2',
          'http://x3',
          'http://x4'
        ]
      }
    },
    methods: {
      handleClick (tab, event) {
        // console.log(tab, event)
      }
    }
  }
</script>

<style lang='scss' scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
