<!-- <h1>单据类型设定</h1> -->
<template>
  <div>
    
    <div class="row" style="margin-top:20px auto;">
      <input
        class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
        value="第一条"
        readonly="true"
        @click="getStockOrder(1)"
      />
      <input
        class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
        value="上一条"
        readonly="true"
        @click="
            getStockOrder(pageInfo.hasPreviousPage ? pageInfo.prePage : 1)
          "
      />
      <input
        class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
        value="下一条"
        readonly="true"
        @click="
            getStockOrder(
              pageInfo.hasNextPage ? pageInfo.nextPage : pageInfo.pages
            )
          "
      />
      <input
        class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
        value="最后一条"
        readonly="true"
        @click="getStockOrder(pageInfo.pages)"
      />
      <input class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default" value="添加" disabled="true" />
      <input
        class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
        value="修改"
        @click="update"
        readonly="true"
      />
      <input class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default" value="保存" readonly="true" />
      <input
        class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
        value="删除"
        @click="deleteStockOrder"
        readonly="true"
      />
    </div>
    <h3>供应商主文件设定</h3>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      size="mini"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="编号">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="名称">
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
import $ from 'jquery'

$(document).on("click","#pageFirst",function(){
  alert("这是第一页")
})

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
  },
    methods:{
      getStockOrder(index){
        if(index == 1){
          //第一页
          alert("1")
        }else if(index == 2){
          //上一页
          alert("2")

        }else if(index == 3){
          //下一页
          alert("3")

        }else if(index == 4){
          //最后一页
          alert("4")

        }else if(index == 5){
          //添加
          alert("5")

        }else if(index == 6){
          //修改
          alert("6")

        }else if(index == 7){
          //保存
          alert("保7存")

        }else if(index == 8){
          //删除
          alert("8")

        }
      }
    }
};
</script>