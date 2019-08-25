<template>
<div class='' style="height:200px;overflow: scroll;width:1030px">
    <table class="table table-hover table-striped  text-center" style="width:2200px;"> 
        <thead>
            <tr>
                <th>序号</th>
                <th>物料编号</th>
                <th>物料名称</th>
                <th>规格型号</th>
                <th>计量单位</th>
                <th>数量</th>
                <th>折扣前单价</th>
                <th>折数(%)</th>
                <th>单价</th>
                <th>金额</th>
                <th>税率(%)</th>
                <th>税额</th>
                <th>(含税金额)</th>
                <th>预入库日</th>
                <th>未入库量</th>
                <th>赠品</th>
                <th>分录备注</th>
                <th>来源单别</th>
                <th>来源单号</th>
                <th><span class="glyphicon glyphicon-plus" @click="addList"></span></th>
            </tr>
        </thead>
        <tbody>
            <tr  v-bind:key="index" v-for="(temp,index) in details">
                <td>{{index+1}}</td>
                <td><input value="SSW1000-1" class="form-control" :disabled="isupdate" @dblclick="openDialog=true"></td>
                <td><input v-model="temp.tbProdname" class="form-control" :disabled="isupdate"></td>
                <td><input value="xx-1" class="form-control" :disabled="isupdate"></td>
                <td><input value="件" class="form-control" :disabled="isupdate"></td>
                <td><input v-model="temp.tbAmount" class="form-control" :disabled="isupdate"></td>
                <td><input v-model="temp.tbPrice"  class="form-control" :disabled="isupdate"></td>
                <td><input value="100" class="form-control" :disabled="isupdate"></td>
                <td><input value="900" class="form-control" :disabled="isupdate"></td>
                <td><input value="900" class="form-control" :disabled="isupdate"></td>
                <td><input value="100" class="form-control" :disabled="isupdate"></td>
                <td><input value="100" class="form-control" :disabled="isupdate"></td>
                <td><input value="1000" class="form-control" :disabled="isupdate"></td>
                <td> <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </td>
                <td><input value="10" class="form-control" :disabled="isupdate"></td>
                <td>
                    <input style="vertical-align: middle" type="checkbox" :checked="temp.tbIspresent | ischeck" :disabled="isupdate">
                </td>
                <td><input value="10" class="form-control" :disabled="isupdate"></td>
                <td><input value="1010" class="form-control" :disabled="isupdate"></td>
                <td><input value="1010" class="form-control" :disabled="isupdate"></td>
                <td>
                    <span class="glyphicon glyphicon-remove" @click="removeList(index)"></span>
                </td>
               
            </tr>
        </tbody>
    </table>
<!-- 弹出框=>加载物料 -->
              <el-dialog  title="物料" :visible.sync="openDialog">
                <!-- 物料查询显示框 -->
                <el-container >
                    <el-header class="col-md-12" >
                  <input type="button" value="确定" class="btn btn-info col-md-1" @click="openDialog = false" >
                  <input type="button" value="取消"  class="btn btn-info col-md-1" @click="openDialog = false" style="margin-left:5px">
                    <div class="form-group col-md-9">
                      <label>查询条件:</label>
					              <el-select v-model="value1" placeholder="请选择" style="width:25%" size="small">
                          <el-option key="物料编号" label="物料编号" value1="物料编号"></el-option>
                          <el-option key="物料名称" label="物料名称" value1="物料名称"></el-option>
                          <el-option key="物料类别" label="物料类别" value1="物料类别"></el-option>
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
                              <span>排头</span>
                            </template>
                             <el-submenu index="1-1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>A</span>
                            </template>
                            <el-menu-item index="1-1-1">A-1</el-menu-item>
                            <el-menu-item index="1-1-2">A-1</el-menu-item>
                            <el-menu-item index="1-1-3">A-1</el-menu-item>
                            </el-submenu>
                            <el-submenu index="1-2">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>B</span>
                            </template>
                             <el-menu-item index="1-2-1">B-1</el-menu-item>
                             <el-menu-item index="1-2-2">B-2</el-menu-item>
                            </el-submenu>
                            </el-submenu>
                        </el-menu>
                  </el-aside>
                    <el-main height="">
                       <el-table
                            ref="multipleTable"
                            :data="tableData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                            <el-table-column
                            type="selection"
                            width="55">
                            </el-table-column>
                            <el-table-column
                            label="日期"
                            width="120">
                            <template slot-scope="scope">{{ scope.row.date }}</template>
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="姓名"
                            width="120">
                            </el-table-column>
                            <el-table-column
                            prop="address"
                            label="地址"
                            show-overflow-tooltip>
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
details:[{"tbAmount":10,"tbBillno":"so001","tbIspresent":0,"tbLineId":1,"tbMoneyAmt":9000,"tbPrice":900,"tbProdname":"cpu"},{"tbAmount":1,"tbBillno":"so001","tbIspresent":1,"tbLineId":2,"tbMoneyAmt":0,"tbPrice":0,"tbProdname":"cpu"}]
,openDialog:false,
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
props:['isupdate','tbBillno'],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {
        // '$route'(to,from){
        //      this.getStockorderDetail();
        // }
    } //如果页面有keep-alive缓存功能，这个函数会触发
    ,
//过滤器
filter:{
      ischeck(val){
            return val==0?false:true;
      }
},
//方法集合
methods: {
       getStockorderDetail(no) {
            let _this = this;
            ajax
            _this.$axios.get(`http://localhost:8080/api/StockOrders/getStockOrderDetail/${no}`).then(resp => {
                _this.details= resp.data;
                 console.log(JSON.stringify(resp.data))
            }).catch(e => {
                alert(e);
            });
        },
        addList(){
            if(this.isupdate)return ;
            this.details.push({});
        },
        removeList(index){
             if(this.isupdate)return ;
            this.details.splice(index,1);
        }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
 //this.getStockorderDetail(this.tbBillno);
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
th{
    text-align: center;
    
}
</style>