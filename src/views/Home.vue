<template>
  <div class="home">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-wrap">
      <router-view /><!-- 路由切换动画? -->
    </div>
  </div>
</template>

<script>
  import vHead from '../components/common/Header'
  import vSidebar from '../components/common/Sidebar.vue'

  export default {
    components: {
      vHead,
      vSidebar
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    position: relative;
    background: #F0F2F5;
    .content-wrap {
      position: absolute;
      left: 200px;
      top: 60px;
      padding: 30px 20px 0 20px;
      box-sizing: border-box;
      width: 100%;
    }
  }
</style>
