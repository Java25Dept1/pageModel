<!-- <h1>客户类别设定</h1> -->
<template>
  <div>
    <commonHead></commonHead>
    <h3>客户类别设定</h3>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      size="mini"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="类别编号">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="类别名称">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="英文名称">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备 注">
            <el-input v-model="input" type="textarea"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<style scoped>
h3 {
  text-align: center;
}
</style>
<script>
import commonHead from "../../../components/CommonHead.vue";

export default {
   //import引入的组件需要注入到对象中才能使用
  components: {
    commonHead
  },
  data() {
    return {
      input: "",
      marriage: "",
      grouping: "",
      checkList: []
    };
  }
};
</script>