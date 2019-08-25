<template>
<div class=''>
<table class="table table-hover table-striped  text-center">
    <tr>
        <td class="col-md-6" style="border:none">
        <label style="width:20%;">账款归属:</label
        ><input
        value="全力电子"
            class="form-control"
            style="width:70%;display:inline"
            :disabled="isupdate"
            @dblclick="dialogFormVisible=true"
        />
        </td>

        <td class="col-md-6" style="border:none">
        <label style="width:20%;"> 付款日期:</label
        >
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
        </td>
    </tr>
    <tr>
        <td class="col-md-6" style="border:none">
        <label style="width:20%;">付款条件:</label
        >
        <select class="form-control" style="width:15%;display:inline">
            <option>货到</option>
            <option>次月</option>
            <option>月结</option>
        </select>
        <input 
            class="form-control"
            style="width:52%;display:inline"
            :disabled="isupdate"
        />
        天
        </td>

        <td class="col-md-6" style="border:none">
        <label style="width:20%;"> 账款月份:</label
        >
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
        </td>
    </tr>
</table>
<el-dialog  title="供应商" :visible.sync="dialogFormVisible">
                <!-- 供应商查询显示框 -->
                <el-container >
                    <el-header class="col-md-12" >
                  <input type="button" value="确定" class="btn btn-info col-md-1" @click="dialogFormVisible= false" >
                  <input type="button" value="取消"  class="btn btn-info col-md-1" @click="dialogFormVisible= false" style="margin-left:5px">
                    <div class="form-group col-md-9">
                      <label>查询条件:</label>
					              <el-select v-model="value2" placeholder="请选择" style="width:25%" size="small">
                          <el-option key="客户名称" label="客户名称" value1="客户名称"></el-option>
                          <el-option key="地区" label="地区" value1="地区"></el-option>
                          <el-option key="类别" label="类别" value1="类别"></el-option>
                        </el-select>
                        <el-select v-model="value2" placeholder="请选择" style="width:20%" size="small">
                          <el-option key="模糊" label="模糊" value2="模糊"></el-option>
                          <el-option key="等于" label="等于" value2="等于"></el-option>
                          <el-option key="不等于" label="不等于" value2="不等于"></el-option>
                        </el-select>
                        <input type="text" class="form-control" style="width:25%;display:inline;margin-right:5px"/>
                        <button class="btn btn-danger">查询</button>
                    </div>
                    </el-header>
                     <el-container>
                    <el-aside width="200px" style="border:1px solid rgba(225,225,225,0.9) ">
                        <el-menu  default-active="1-4-1"  
					 class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                         :default-openeds="opens">
                           <el-submenu index="1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>往来单位</span>
                            </template>
                             <el-submenu index="1-1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>客户</span>
                            </template>
                            <el-menu-item index="1-1-1">华北</el-menu-item>
                            <el-menu-item index="1-1-2">华中</el-menu-item>
                            <el-menu-item index="1-1-3">华南</el-menu-item>
                            </el-submenu>
                            <el-submenu index="1-2">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>供应商</span>
                            </template>
                             <el-menu-item index="1-2-1">原材料供应商</el-menu-item>
                             <el-menu-item index="1-2-2">零件供应商</el-menu-item>
                            </el-submenu>
                            </el-submenu>
                        </el-menu>
                  </el-aside>
                    <el-main height="">
                       <el-table
                          ref="singleTable"
                          :data="tableData"
                          highlight-current-row
                          @current-change="handleCurrentChange"
                          style="width: 100%" :span-method="arraySpanMethod">
                          <el-table-column
                            type="index"
                            label="序号"
                            width="50">
                          </el-table-column>
                          <el-table-column
                            property="date"
                            label="日期"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            property="name"
                            label="公司名"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            property="address"
                            label="地址">
                          </el-table-column>
                        </el-table>
                            <el-pagination
                              background
                              layout="prev, pager, next"
                              :total="1000" style="margin-top:20%;background:rgba(150,180,200,0.3)">
                            </el-pagination> 
                    </el-main>
                  </el-container>
                </el-container>
              </el-dialog>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
value1:'2019-08-17',
value2:"",
dialogFormVisible:false,
tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        opens:['1-1','1-2','1']
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
/*@import url(); 引入公共css类*/

</style>