<template>
  <div class="upload-select-wrap">
    <el-form ref="form" :model="form" label-width="80px" inline style="width: 600px;">
      <el-form-item label="班级" style="width: 600px;" prop="class">
        <el-input v-model="form.class"></el-input>
      </el-form-item>
      <el-form-item label="组长姓名" prop="leaderName"> <!-- 调用 UI 的 resetFields 方法需要设置 prop -->
        <el-input v-model="form.leaderName"></el-input>
      </el-form-item>
      <el-form-item label="组长学号" prop="leaderNumber">
        <el-input v-model="form.leaderNumber"></el-input>
      </el-form-item>
      <el-form-item label="组员1姓名" prop="teammate1Name">
        <el-input v-model="form.teammate1Name"></el-input>
      </el-form-item>
      <el-form-item label="组员1学号" prop="teammate1Number">
        <el-input v-model="form.teammate1Number"></el-input>
      </el-form-item>
      <el-form-item label="组员2姓名" prop="teammate2Name">
        <el-input v-model="form.teammate2Name"></el-input>
      </el-form-item>
      <el-form-item label="组员2学号" prop="teammate2Number">
        <el-input v-model="form.teammate2Number"></el-input>
      </el-form-item>
      <el-form-item label="组员3姓名" prop="teammate3Name">
        <el-input v-model="form.teammate3Name"></el-input>
      </el-form-item>
      <el-form-item label="组员3学号" prop="teammate3Number">
        <el-input v-model="form.teammate3Number"></el-input>
      </el-form-item>
      <el-form-item label="组员4姓名" prop="teammate4Name">
        <el-input v-model="form.teammate4Name"></el-input>
      </el-form-item>
      <el-form-item label="组员4学号" prop="teammate4Number">
        <el-input v-model="form.teammate4Number"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          class: '',
          leaderName: '',
          leaderNumber: '',
          teammate1Name: '',
          teammate1Number: '',
          teammate2Name: '',
          teammate2Number: '',
          teammate3Name: '',
          teammate3Number: '',
          teammate4Name: '',
          teammate4Number: ''
        }
      }
    },
    methods: {
      onSubmit () {
        // console.log('submit!')
      },
      resetForm () {
        this.$refs.form.resetFields()
      }
    }
  }
</script>

<style lang='scss' scoped>
  .upload-select-wrap {
    display: flex;
    width: 85%;
    height: 700px;
    // margin-left: 50px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition:.2s;
    padding: 20px;
    background: white;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6),
                  0 2px 4px 0 rgba(232, 237, 250, .5);
    }
  }
</style>
