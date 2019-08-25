<!-- <h1>物料类别设定</h1> -->
<template>
    <div>
    <commonHead></commonHead>
    <h3>物料类别设定</h3>
<el-form :label-position="labelPosition" label-width="120px"  :model="formLabelAlign" size="mini">
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
            <el-col :span="1"> 
               <el-form-item>
                 <el-button type="text" style="font-size:15px;position: relative;left: -70px;" @click="dialogFormVisible = true">存货科目</el-button>
               </el-form-item>
            </el-col>
             <el-col :span="11"> 
               <el-form-item>
                 <el-input v-model="input" style="position: relative;left: -45px;width: 112%;"></el-input>
               </el-form-item>
            </el-col>
            <el-col :span="1"> 
               <el-form-item>
                 <el-button type="text" style="font-size:15px;position: relative;left: -683px;" @click="dialogFormVisible1 = true">销售收入科目</el-button>
               </el-form-item>
            </el-col>
             <el-col :span="11"> 
               <el-form-item>
                 <el-input v-model="input" style="position: relative;top:-50px;left: 1px;width: 112%;"></el-input>
               </el-form-item>
            </el-col>
             <el-col :span="1"> 
               <el-form-item>
                 <el-button type="text" style="font-size:15px;position: relative;top:-50px;left: -55px;" @click="dialogFormVisible2 = true">销售成本科目</el-button>
               </el-form-item>
            </el-col>
             <el-col :span="11"> 
               <el-form-item>
                 <el-input v-model="input" style="position: relative;top:-50px;left: 1px;width: 112%;"></el-input>
               </el-form-item>
            </el-col>
            <el-col :span="1"> 
               <el-form-item>
                 <el-button type="text" style="font-size:15px;position: relative;left: -1130px;" @click="dialogFormVisible3 = true">赠品费用科目</el-button>
               </el-form-item>
            </el-col>
             <el-col :span="11"> 
               <el-form-item>
                 <el-input v-model="input" style="position: relative;top: -50px;left: 1px;width: 112%;"></el-input>
               </el-form-item>
            </el-col>
            <el-col :span="1"> 
               <el-form-item>
                 <el-button type="text" style="font-size:15px;position: relative;top: -50px;left: -55px;" @click="dialogFormVisible4 = true">其它收入科目</el-button>
               </el-form-item>
            </el-col>
             <el-col :span="11"> 
               <el-form-item>
                 <el-input v-model="input" style="position: relative;top: -50px;left: 1px;width: 112%;"></el-input>
               </el-form-item>
            </el-col>
            <el-col :span="1"> 
               <el-form-item>
                 <el-button type="text" style="font-size:15px;position: relative;left: -1130px;" @click="dialogFormVisible5 = true">其它费用科目</el-button>
               </el-form-item>
            </el-col>
             <el-col :span="11"> 
               <el-form-item>
                 <el-input v-model="input" style="position: relative;top: -50px;left: 1px;width: 112%;"></el-input>
               </el-form-item>
            </el-col>
            <el-col :span="1"> 
               <el-form-item>
                 <el-button type="text" style="font-size:15px;position: relative;top: -50px;left: -55px;" @click="dialogFormVisible6 = true">其它成本科目</el-button>
               </el-form-item>
            </el-col>
             <el-col :span="11"> 
               <el-form-item>
                 <el-input v-model="input" style="position: relative;top: -50px;left: 1px;width: 112%;"></el-input>
               </el-form-item>
            </el-col>
             <el-col :span="24" style="position: relative;top: -50px;left: 1px;width: 100%;">  
               <el-form-item label="备注">
                  <el-input v-model="input" type="textarea"></el-input>
                   </el-form-item>
                   </el-col>
                    </el-row>
</el-form>

<!-- <h1>对话框</h1> -->

<el-dialog title="会计科目" :visible.sync="dialogFormVisible2">
    <el-form :label-position="labelPosition" label-width="70px" :model="formLabelAlign" size="mini">
       <el-row :gutter="20">
           <el-col :span="24">  
               <el-form-item>
              <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input v-model="input1" name="input1" style="width:10%" size="mini" clearable></el-input>
            <el-button type="primary" size="mini" icon="el-icon-arrow-left" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-right" round></el-button>&nbsp;
            <el-checkbox v-model="checked" label="1">寻找同时选取</el-checkbox>
         </el-form-item>
            </el-col>
         <el-col :span="24">
             <el-form-item>
              <el-select style="width: 30%" v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="primary" size="mini" icon="el-icon-arrow-up" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-down" round></el-button>
             <el-button type="info" @click="query()" plain>信息查询</el-button>
            <el-button type="info" plain>刷新</el-button>
            <el-button type="info" plain>取回</el-button>
            </el-form-item>
            </el-col>
           
            <el-col :span="24">
             <el-form-item>
              <el-button type="primary" style="width:12%" plain>全选</el-button>
              <el-button type="primary" style="width:12%" plain>全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全选</el-button>
              <el-button type="primary" style="width:12%" plain>新增记录</el-button>
            </el-form-item>
            </el-col>
             <el-col :span="10">
             <el-form-item>
              <el-table el-table :data="tableData" border style="width: 100%;height: 160px;">
              <el-table-column prop="date" label="(一)" sortable width="180"></el-table-column>
              </el-table>
            </el-form-item>
            </el-col>
              <el-col :span="14">
            <el-table el-table :data="tableData" border style="width: 100%;height: 130px;">
              <el-table-column prop="name" label="科目编号" width="180"></el-table-column>
              <el-table-column prop="date" label="科目名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
    </el-row>              
</el-form>
</el-dialog>

 <el-dialog title="会计科目" :visible.sync="dialogFormVisible1">
    <el-form :label-position="labelPosition" label-width="70px" :model="formLabelAlign" size="mini">
       <el-row :gutter="20">
           <el-col :span="24">  
               <el-form-item>
              <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input v-model="input1" name="input1" style="width:10%" size="mini" clearable></el-input>
            <el-button type="primary" size="mini" icon="el-icon-arrow-left" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-right" round></el-button>&nbsp;
            <el-checkbox v-model="checked" label="1">寻找同时选取</el-checkbox>
         </el-form-item>
            </el-col>
         <el-col :span="24">
             <el-form-item>
              <el-select style="width: 30%" v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="primary" size="mini" icon="el-icon-arrow-up" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-down" round></el-button>
             <el-button type="info" @click="query()" plain>信息查询</el-button>
            <el-button type="info" plain>刷新</el-button>
            <el-button type="info" plain>取回</el-button>
            </el-form-item>
            </el-col>
           
            <el-col :span="24">
             <el-form-item>
              <el-button type="primary" style="width:12%" plain>全选</el-button>
              <el-button type="primary" style="width:12%" plain>全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全选</el-button>
              <el-button type="primary" style="width:12%" plain>新增记录</el-button>
            </el-form-item>
            </el-col>
             <el-col :span="10">
             <el-form-item>
              <el-table el-table :data="tableData" border style="width: 100%;height: 160px;">
              <el-table-column prop="date" label="(一)" sortable width="180"></el-table-column>
              </el-table>
            </el-form-item>
            </el-col>
              <el-col :span="14">
            <el-table el-table :data="tableData" border style="width: 100%;height: 130px;">
              <el-table-column prop="name" label="科目编号" width="180"></el-table-column>
              <el-table-column prop="date" label="科目名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
    </el-row>              
</el-form>
</el-dialog>

<el-dialog title="会计科目" :visible.sync="dialogFormVisible">
    <el-form :label-position="labelPosition" label-width="70px" :model="formLabelAlign" size="mini">
       <el-row :gutter="20">
           <el-col :span="24">  
               <el-form-item>
              <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input v-model="input1" name="input1" style="width:10%" size="mini" clearable></el-input>
            <el-button type="primary" size="mini" icon="el-icon-arrow-left" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-right" round></el-button>&nbsp;
            <el-checkbox v-model="checked" label="1">寻找同时选取</el-checkbox>
         </el-form-item>
            </el-col>
         <el-col :span="24">
             <el-form-item>
              <el-select style="width: 30%" v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="primary" size="mini" icon="el-icon-arrow-up" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-down" round></el-button>
             <el-button type="info" @click="query()" plain>信息查询</el-button>
            <el-button type="info" plain>刷新</el-button>
            <el-button type="info" plain>取回</el-button>
            </el-form-item>
            </el-col>
           
            <el-col :span="24">
             <el-form-item>
              <el-button type="primary" style="width:12%" plain>全选</el-button>
              <el-button type="primary" style="width:12%" plain>全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全选</el-button>
              <el-button type="primary" style="width:12%" plain>新增记录</el-button>
            </el-form-item>
            </el-col>
             <el-col :span="10">
             <el-form-item>
              <el-table el-table :data="tableData" border style="width: 100%;height: 160px;">
              <el-table-column prop="date" label="(一)" sortable width="180"></el-table-column>
              </el-table>
            </el-form-item>
            </el-col>
              <el-col :span="14">
            <el-table el-table :data="tableData" border style="width: 100%;height: 130px;">
              <el-table-column prop="name" label="科目编号" width="180"></el-table-column>
              <el-table-column prop="date" label="科目名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
    </el-row>              
</el-form>
</el-dialog>

<el-dialog title="会计科目" :visible.sync="dialogFormVisible3">
    <el-form :label-position="labelPosition" label-width="70px" :model="formLabelAlign" size="mini">
       <el-row :gutter="20">
           <el-col :span="24">  
               <el-form-item>
              <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input v-model="input1" name="input1" style="width:10%" size="mini" clearable></el-input>
            <el-button type="primary" size="mini" icon="el-icon-arrow-left" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-right" round></el-button>&nbsp;
            <el-checkbox v-model="checked" label="1">寻找同时选取</el-checkbox>
         </el-form-item>
            </el-col>
         <el-col :span="24">
             <el-form-item>
              <el-select style="width: 30%" v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="primary" size="mini" icon="el-icon-arrow-up" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-down" round></el-button>
             <el-button type="info" @click="query()" plain>信息查询</el-button>
            <el-button type="info" plain>刷新</el-button>
            <el-button type="info" plain>取回</el-button>
            </el-form-item>
            </el-col>
           
            <el-col :span="24">
             <el-form-item>
              <el-button type="primary" style="width:12%" plain>全选</el-button>
              <el-button type="primary" style="width:12%" plain>全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全选</el-button>
              <el-button type="primary" style="width:12%" plain>新增记录</el-button>
            </el-form-item>
            </el-col>
             <el-col :span="10">
             <el-form-item>
              <el-table el-table :data="tableData" border style="width: 100%;height: 160px;">
              <el-table-column prop="date" label="(一)" sortable width="180"></el-table-column>
              </el-table>
            </el-form-item>
            </el-col>
              <el-col :span="14">
            <el-table el-table :data="tableData" border style="width: 100%;height: 130px;">
              <el-table-column prop="name" label="科目编号" width="180"></el-table-column>
              <el-table-column prop="date" label="科目名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
    </el-row>              
</el-form>
</el-dialog>

<el-dialog title="会计科目" :visible.sync="dialogFormVisible4">
    <el-form :label-position="labelPosition" label-width="70px" :model="formLabelAlign" size="mini">
       <el-row :gutter="20">
           <el-col :span="24">  
               <el-form-item>
              <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input v-model="input1" name="input1" style="width:10%" size="mini" clearable></el-input>
            <el-button type="primary" size="mini" icon="el-icon-arrow-left" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-right" round></el-button>&nbsp;
            <el-checkbox v-model="checked" label="1">寻找同时选取</el-checkbox>
         </el-form-item>
            </el-col>
         <el-col :span="24">
             <el-form-item>
              <el-select style="width: 30%" v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="primary" size="mini" icon="el-icon-arrow-up" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-down" round></el-button>
             <el-button type="info" @click="query()" plain>信息查询</el-button>
            <el-button type="info" plain>刷新</el-button>
            <el-button type="info" plain>取回</el-button>
            </el-form-item>
            </el-col>
           
            <el-col :span="24">
             <el-form-item>
              <el-button type="primary" style="width:12%" plain>全选</el-button>
              <el-button type="primary" style="width:12%" plain>全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全选</el-button>
              <el-button type="primary" style="width:12%" plain>新增记录</el-button>
            </el-form-item>
            </el-col>
             <el-col :span="10">
             <el-form-item>
              <el-table el-table :data="tableData" border style="width: 100%;height: 160px;">
              <el-table-column prop="date" label="(一)" sortable width="180"></el-table-column>
              </el-table>
            </el-form-item>
            </el-col>
              <el-col :span="14">
            <el-table el-table :data="tableData" border style="width: 100%;height: 130px;">
              <el-table-column prop="name" label="科目编号" width="180"></el-table-column>
              <el-table-column prop="date" label="科目名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
    </el-row>              
</el-form>
</el-dialog>

<el-dialog title="会计科目" :visible.sync="dialogFormVisible5">
    <el-form :label-position="labelPosition" label-width="70px" :model="formLabelAlign" size="mini">
       <el-row :gutter="20">
           <el-col :span="24">  
               <el-form-item>
              <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input v-model="input1" name="input1" style="width:10%" size="mini" clearable></el-input>
            <el-button type="primary" size="mini" icon="el-icon-arrow-left" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-right" round></el-button>&nbsp;
            <el-checkbox v-model="checked" label="1">寻找同时选取</el-checkbox>
         </el-form-item>
            </el-col>
         <el-col :span="24">
             <el-form-item>
              <el-select style="width: 30%" v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="primary" size="mini" icon="el-icon-arrow-up" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-down" round></el-button>
             <el-button type="info" @click="query()" plain>信息查询</el-button>
            <el-button type="info" plain>刷新</el-button>
            <el-button type="info" plain>取回</el-button>
            </el-form-item>
            </el-col>
           
            <el-col :span="24">
             <el-form-item>
              <el-button type="primary" style="width:12%" plain>全选</el-button>
              <el-button type="primary" style="width:12%" plain>全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全选</el-button>
              <el-button type="primary" style="width:12%" plain>新增记录</el-button>
            </el-form-item>
            </el-col>
             <el-col :span="10">
             <el-form-item>
              <el-table el-table :data="tableData" border style="width: 100%;height: 160px;">
              <el-table-column prop="date" label="(一)" sortable width="180"></el-table-column>
              </el-table>
            </el-form-item>
            </el-col>
              <el-col :span="14">
            <el-table el-table :data="tableData" border style="width: 100%;height: 130px;">
              <el-table-column prop="name" label="科目编号" width="180"></el-table-column>
              <el-table-column prop="date" label="科目名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
    </el-row>              
</el-form>
</el-dialog>
<el-dialog title="会计科目" :visible.sync="dialogFormVisible6">
    <el-form :label-position="labelPosition" label-width="70px" :model="formLabelAlign" size="mini">
       <el-row :gutter="20">
           <el-col :span="24">  
               <el-form-item>
              <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input v-model="input1" name="input1" style="width:10%" size="mini" clearable></el-input>
            <el-button type="primary" size="mini" icon="el-icon-arrow-left" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-right" round></el-button>&nbsp;
            <el-checkbox v-model="checked" label="1">寻找同时选取</el-checkbox>
         </el-form-item>
            </el-col>
         <el-col :span="24">
             <el-form-item>
              <el-select style="width: 30%" v-model="value" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button type="primary" size="mini" icon="el-icon-arrow-up" round></el-button>
            <el-button type="primary" size="mini" icon="el-icon-arrow-down" round></el-button>
             <el-button type="info" @click="query()" plain>信息查询</el-button>
            <el-button type="info" plain>刷新</el-button>
            <el-button type="info" plain>取回</el-button>
            </el-form-item>
            </el-col>
           
            <el-col :span="24">
             <el-form-item>
              <el-button type="primary" style="width:12%" plain>全选</el-button>
              <el-button type="primary" style="width:12%" plain>全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全选</el-button>
              <el-button type="primary" style="width:12%" plain>新增记录</el-button>
            </el-form-item>
            </el-col>
             <el-col :span="10">
             <el-form-item>
              <el-table el-table :data="tableData" border style="width: 100%;height: 160px;">
              <el-table-column prop="date" label="(一)" sortable width="180"></el-table-column>
              </el-table>
            </el-form-item>
            </el-col>
              <el-col :span="14">
            <el-table el-table :data="tableData" border style="width: 100%;height: 130px;">
              <el-table-column prop="name" label="科目编号" width="180"></el-table-column>
              <el-table-column prop="date" label="科目名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
    </el-row>              
</el-form>
</el-dialog>
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
        dialogFormVisible: false,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
        dialogFormVisible3: false,
        dialogFormVisible4: false,
        dialogFormVisible5: false,
        dialogFormVisible6: false,
        input:"",
        sex:"",
        sex1:"",
      };
      
    }
  }
</script>
