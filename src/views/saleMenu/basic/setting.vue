<template>
  <div>
    <el-container>
      <el-header style="backgrand:red">给你们这些生活不能自理的弟弟们的通用页面</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-input v-model="input1" name="input1" style="width:200px" clearable></el-input>&nbsp;&nbsp;
            <el-button type="primary" icon="el-icon-arrow-left" round></el-button>
            <el-button type="primary" icon="el-icon-arrow-right" round></el-button>
          </el-col>
          <el-col :span="6">
            <el-checkbox v-model="checked" label="1">寻找同时选取</el-checkbox>
          </el-col>
          <el-col :span="6"></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-select v-model="value" clearable placeholder="请选择" style="width:575px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>&nbsp;&nbsp;
            <el-button type="primary" icon="el-icon-arrow-up" round></el-button>
            <el-button type="primary" icon="el-icon-arrow-down" round></el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="info" @click="query()" plain>信息查询</el-button>
            <el-button type="info" plain>刷新</el-button>
            <el-button type="info" plain>取回</el-button>
          </el-col>
          <el-col :span="6"></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-button type="primary" plain>全选</el-button>
            <el-button type="primary" plain>全清</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" plain>以下全清</el-button>
            <el-button type="primary" plain>以下全选</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" plain>新增记录</el-button>
          </el-col>
          <el-col :span="6"></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-table el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="(一)" sortable width="180"></el-table-column>
            </el-table>
          </el-col>
          <el-col :span="10">
            <el-table el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="name" label="物料编号" width="180"></el-table-column>
              <el-table-column prop="date" label="物料名称" sortable width="180"></el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>尾部</el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: ""
    };
  },methods:{
    query(){
      // alert("sss")
      location.href="./#/pivotquery"
      //  let _this = this;
      //  alert(_this.input1)
      // $("[name=input1]").val();
    }
  }
};
</script>
<style>
.el-header {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>