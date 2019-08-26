<!-- <h1>币别设定</h1> -->
<template>
    <div style=" border: 1px solid #C0C4CC">
      <h3>币别设定</h3>
      <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" size="mini">
       <el-row :gutter="20">
            <el-col :span="24">  
               <el-form-item label="设定">
                   </el-form-item>
            </el-col>
           <el-col :span="12">  
               <el-form-item label="币别编号">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
             <el-col :span="12">  
               <el-form-item label="异动日期">
                    <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                   </el-form-item>
            </el-col>
            <el-col :span="12">  
               <el-form-item label="币别名称">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
             <el-col :span="12">  
               <el-form-item label="固定汇率">
                  <el-input v-model="input"></el-input>
                   </el-form-item>
                   </el-col>
                <el-col :span="12">  
               <el-form-item label="币别简称">
                  <el-input v-model="input"></el-input>
                   </el-form-item>
                   </el-col>
                <el-col :span="12">  
               <el-form-item label="买进汇率">
                  <el-input v-model="input"></el-input>
                   </el-form-item>
                   </el-col>
                <el-col :span="12">  
               <el-form-item label="英文名称">
                  <el-input v-model="input"></el-input>
                   </el-form-item>
                   </el-col>
               <el-col :span="12">  
               <el-form-item label="卖出汇率">
                  <el-input v-model="input"></el-input>
                   </el-form-item>
                   </el-col>
                <el-col :span="24">  
               <el-form-item label="数值设定">
                   </el-form-item>
                   </el-col>   
                <el-col :span="12">  
               <el-form-item label="单价位数">
                   <el-select v-model="grouping" placeholder="" style="width:100%;">
                         <el-option label="整数" value="8"></el-option>
                         <el-option label="小数一位" value="1"></el-option>
                         <el-option label="小数二位" value="2"></el-option>
                         <el-option label="小数三位" value="3"></el-option>
                         <el-option label="小数四位" value="4"></el-option>
                         <el-option label="小数五位" value="5"></el-option>
                         <el-option label="小数六位" value="6"></el-option>
                         <el-option label="小数七位" value="7"></el-option>
                        </el-select>
                   </el-form-item>
                   </el-col>    
            <el-col :span="12">  
            <el-checkbox v-model="checkList" label="千位逗号"></el-checkbox>
               <el-form-item>
                   <el-input v-model="input" style="position: relative;top: -25px;width: 100%;"></el-input>
                   </el-form-item>
                   </el-col>
                <el-col :span="12">  
               <el-form-item label="金额位数">
                  <el-select v-model="grouping1" placeholder="" style="width:100%;">
                         <el-option label="整数" value="8"></el-option>
                         <el-option label="小数一位" value="9"></el-option>
                         <el-option label="小数二位" value="10"></el-option>
                         <el-option label="小数三位" value="11"></el-option>
                         <el-option label="小数四位" value="12"></el-option>
                         </el-select>
                   </el-form-item>
                   </el-col>
               <el-col :span="12">  
                   <el-checkbox v-model="checkList1" label="千位逗号"></el-checkbox>
               <el-form-item>
                  <el-input v-model="input" style="position: relative;top: -25px;width: 100%;"></el-input>
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
          grouping1:"",
          data:"",
          checkList: [],
          checkList1: []
      }
    },
  }
</script>