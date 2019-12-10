<template>
  <div class="home">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-wrap">
      <router-view></router-view>
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
    .content-wrap {
      position: absolute;
      left: 160px;
      top: 60px;
      padding: 30px 20px 0 20px;
      box-sizing: border-box;
      width: 100%;
    }
  }
</style>
