<template>
  <div class="upload-wrap">
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://localhost:8088/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
      :http-request='uploadFileMethod'
      style="width: 400px;"  
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: []
      }
    },
    methods: {
      submitUpload () {
        console.log(this.fileList)
      },
      handleRemove (file, fileList) {
        // console.log(file, fileList)
      },
      handlePreview (file) {
        // console.log(file)
      }
    }
  }
</script>

<style lang='scss' scoped>
  .upload-wrap {
    width: 600px;
    height: 400px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    padding: 20px;
    box-sizing: border-box;
    transition: all linear .2s;
    &:hover {
      box-shadow: 0 5px 20px rgba(0,0,0,.1);
    } 
  }
</style>
