<template>
  <div class="home">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <v-tag></v-tag>
    <div class="content-wrap">
      <router-view></router-view>
    </div>
    <!-- <div class="content-box">
      <v-tags></v-tags> 标签记录点击的过的路由
      <div class="content">
        This is content
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div> -->
    
  </div>
</template>

<script>
  import vHead from '../components/common/Header'
  import vSidebar from '../components/common/Sidebar.vue'
  import vTag from '../components/common/Tags.vue'

  export default {
    components: {
      vHead,
      vSidebar,
      vTag
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    position: relative;
    .content-wrap {
      position: absolute;
      left: 160px;
      top: 90px;
      padding: 10px;
      width: 100%;
    }
  }
</style>
