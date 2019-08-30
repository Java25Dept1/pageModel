<!-- <h1>采购入库类型设定</h1> -->
<template>
    <div style=" border: 1px solid #C0C4CC">
    <commonHead></commonHead>
      <h3>采购入库类型设定</h3>
      <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" size="mini">
       <el-row :gutter="20">
           <el-col :span="12">  
               <el-form-item label="类型编号">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
             <el-col :span="12">  
               <el-form-item label="类型名称">
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
   h3{
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
          input:"",
          marriage:"",
          grouping:"",
          checkList: []
      }
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
  }
</script>