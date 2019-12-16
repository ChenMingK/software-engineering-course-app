<template>
  <div class="upload-topics-wrap">
    <el-input
      placeholder="请输入课题名称"
      v-model="topic"
      clearable
      style="width: 200px; display: block;">
    </el-input>
    <el-input
      type="textarea"
      :rows="7"
      placeholder="请输入课题相关说明"
      v-model="content"
      style="margin-top: 20px; width: 800px; display: block;">
    </el-input>
    <el-button type="primary" style="margin-top: 20px;" @click="submit">确认提交</el-button>
  </div>
</template>

<script>
  import { uploadTopics } from '../api'
  export default {
    data () {
      return {
        topic: '',
        content: ''
      }
    },
    methods: {
      submit () {
        const teacherId = this.$store.state.id
        // const topic = this.topic
        // const content = this.content
        // upload
        this.$confirm('提交后信息不可修改，确定提交?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const title = this.topic
          const content = this.content
          uploadTopics(title, content, teacherId).then(res => {
            this.topic = ''
            this.content = ''
            this.$message({
              type: 'success',
              message: '提交成功!'
            })
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })          
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  .upload-topics-wrap {
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
  }
</style>
