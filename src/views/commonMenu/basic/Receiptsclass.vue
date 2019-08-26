<!-- <h1>单据类型设定</h1> -->
<template>
    <div style=" border: 1px solid #C0C4CC">
      <h3>供应商主文件设定</h3>
      <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" size="mini">
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
   h3{
       text-align: center; 
   }
</style>
<script>
  export default {
    data() {
      return {
          input:"",
          marriage:"",
          grouping:"",
          checkList: []
      }
    },
  }
</script>