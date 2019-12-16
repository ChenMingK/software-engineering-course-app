<template>
  <div class="resource-wrap">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="课程资料" name="first">
        <el-card class="box-card">
          <div v-for="(item, index) in downloadList" :key="index" class="text item">
            <a :href="item.downloadURL" download>{{item.fileName}}</a>
          </div> <!-- https://blog.csdn.net/sinat_29774479/article/details/78404794 -->
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { getResource } from '../api'
  export default {
    data () {
      return {
        activeName: 'first',
        downloadList: [] // { downloadURL: 'xxx', fileName: 'xxx' }
      }
    },
    methods: {
      handleClick (tab, event) {
        // console.log(tab, event)
      }
    },
    mounted () {
      getResource().then(res => {
        let fileArray = res.data.data
        console.log(res)
        // let downloadListTemp = []
        fileArray.forEach(item => {
          this.downloadList.push({
            downloadURL: 'http://192.168.43.178:8080/v1/download/' + item.id,
            fileName: item.oldFilename
          })
        })
        console.log(this.downloadList)
      })
    }
  }
</script>

<style lang='scss' scoped>

  .text {
    font-size: 16px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 80%;
    height: 600px;
    overflow-y: scroll;
  }

</style>
