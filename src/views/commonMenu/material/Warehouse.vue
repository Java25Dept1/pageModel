<!-- <h1>仓库设定</h1> -->
<template>
    <div>
    <commonHead></commonHead>
       <h3>仓库设定</h3>
       <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" size="mini">
       <el-row :gutter="20">
           <el-col :span="12">  
               <el-form-item label="仓库编号">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
             <el-col :span="12">  
               <el-form-item label="仓库名称">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
            <el-col :span="12">  
               <el-form-item label="仓库简称">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
             <el-col :span="12"> 
                 <el-form-item label="英文名称">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
            <el-col :span="12">  
               <el-form-item label="联系人员">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
             <el-col :span="12">  
               <el-form-item label="联系电话">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
             <el-col :span="12">  
               <el-form-item label="仓库地址">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
             <el-col :span="24">  
               <el-form-item label="备注">
                  <el-input v-model="input" type="textarea"></el-input>
                   </el-form-item>
                   </el-col>
                    </el-row>
                    
</el-form>
  <el-dropdown style="boder:1px bule">
  <el-button size="mini" style="margin-left:25px;color:black;font-size: 10px;boder:1px dodgerblue solid;background-color: dodgerblue;" class="el-dropdown-link">
    设定<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item disabled>业务员责任绩效设定</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    </div>
</template>
<style scoped>
   h3{
       text-align: center
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
      }
    },
  }
</script>