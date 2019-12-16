<template>
  <div class="upload-wrap">
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://192.168.43.178:8080/v1/upload?projectId=1"
      multiple
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :file-list="fileList"
      :auto-upload="false">
      <el-button slot="trigger" size="large" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="large" type="success" @click="submitUpload">上传到服务器</el-button>
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
        this.$refs.upload.submit()
      },
      handleRemove (file, fileList) {
        // console.log(file, fileList)
      },
      handlePreview (file) {
        // console.log(file)
      },
      handleSuccess () {
        this.$refs.upload.clearFiles()
        this.$message({
          message: '上传成功',
          type: 'success',
          duration: 1000
        })
      }
    },
    mounted () {
      
    }
  }
</script>

<style lang='scss' scoped>
  .upload-wrap {
    width: 80%;
    height: 500px;
    border: 1px solid #e6e6e6;
    background: white;
    border-radius: 3px;
    padding: 20px;
    box-sizing: border-box;
    transition: all linear .2s;
    &:hover {
      box-shadow: 0 5px 20px rgba(0,0,0,.1);
    }
    .submit-btn {
      position: absolute;
      left: 160px;
      top: 51px;
    }
    .el-upload__tip {
      font-size: 16px;
    }
  }
</style>
