<!-- <h1>销售出库页面</h1> -->
<template>
    <div>
    <commonHead></commonHead>
       <h3>销售出库单</h3>
       <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" size="mini">
       <el-row :gutter="20">
           <el-col :span="12">  
               <el-form-item label="客户">
                   <el-input v-model="user"></el-input>
                   </el-form-item>
            </el-col>
            <el-col :span="12">  
               <el-form-item label="单据日期">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
              <el-col :span="12">  
               <el-form-item label="送货地址">
                   <el-input v-model="input" style="width:30%;"></el-input>
                    <el-input v-model="input" style="width:70%;"></el-input>
                   </el-form-item>
            </el-col>
              <el-col :span="12">  
               <el-form-item label="单据号码">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
            <el-col :span="12">  
               <el-form-item label="销售出库类型">
                    <el-input></el-input>
                   </el-form-item>
            </el-col>
            <el-col :span="12"> 
                 <el-form-item label="币别">
                    <el-input v-model="input"></el-input>
                    </el-form-item>
            </el-col>
             <el-col :span="12">  
               <el-form-item label="单价是否含税">
                    <el-select v-model="grouping" placeholder="" style="width:100%;">
                         <el-option label="未含税" value="8"></el-option>
                         <el-option label="含税" value="9"></el-option>
                         </el-select>
                   </el-form-item>
            </el-col>
            <el-col :span="12"> 
                 <el-form-item label="汇率">
                    <el-input v-model="input"></el-input>
                    </el-form-item>
            </el-col>
            <el-col :span="12"> 
                 <el-form-item label="仓库">
                    <el-input v-model="input"></el-input>
                    </el-form-item>
            </el-col>
            
        
              <el-col :span="12">  
               <el-form-item label="国外贸易">
                    <el-select v-model="grouping" placeholder="" style="width:100%;">
                         <el-option label="是" value="8"></el-option>
                         <el-option label="否" value="9"></el-option>
                         </el-select>
                   </el-form-item>
            </el-col>
            <el-col :span="12"> 
                 <el-form-item label="凭证编号">
                    <el-input v-model="input"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item>
                 <el-checkbox v-model="checkList" label="复合后自动生成发票"></el-checkbox>
                </el-form-item>
            </el-col>
        </el-row>

        <el-tabs type="card" style=" border: 1px solid #C0C4CC;height:350px;" class="table_lsc">
            <el-tab-pane label="内容">
                <el-row :gutter="20">
                    <el-table :data="tableData" border style="width: 100%" :summary-method="getSummaries" show-summary >
                        <el-table-column type="index" label="(栏号)" width="70"></el-table-column>
                        <el-table-column prop="name" label="物料编号" width="90"></el-table-column>
                        <el-table-column prop="province" label="(物料名称)" width="90"></el-table-column>
                        <el-table-column prop="city" label="(规格型号)" width="90"></el-table-column>
                        <el-table-column label="(单位名称)" width="120">
                            <template scope="scope">
                                <el-input v-model="scope.row.address" placeholder="请输入内容" ></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column  label="数量" width="90">
                            <template scope="scope">
                                <el-checkbox v-model="scope.row.zip"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="折扣前单价" width="90"></el-table-column>
                        <el-table-column prop="name" label="折数（%）" width="110"></el-table-column>
                        <el-table-column prop="name" label="单价" width="90"></el-table-column>
                        <el-table-column prop="name" label="金额" width="90"></el-table-column>
                        <el-table-column prop="name" label="(税率(%))" width="90"></el-table-column>
                        <el-table-column prop="name" label="(税额)" width="90"></el-table-column>
                        <el-table-column prop="name" label="(含税金额)" width="90"></el-table-column>
                        <el-table-column prop="name" label="(批号)" width="120">
                            <template scope="scope">
                                <el-checkbox v-model="scope.row.zip"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column label="物料组合" width="90">
                            <template scope="scope">
                                <el-checkbox v-model="scope.row.zip"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column label="赠品" width="90">
                            <template scope="scope">
                                <el-checkbox v-model="scope.row.zip"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column label="(发票明细)" width="90">
                            <template scope="scope">
                                <el-checkbox v-model="scope.row.zip"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="(未开票数量)" width="120"></el-table-column>
                        <el-table-column prop="name" label="分录备注" width="90">
                            <template scope="scope">
                                <el-input v-model="scope.row.name" placeholder="请输入内容" ></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="(来源单别)" width="90"></el-table-column>
                        <el-table-column prop="name" label="(来源单号)" width="90"></el-table-column>
                        <el-table-column prop="name" label="客户订单" width="90"></el-table-column>
                        <el-table-column label="操作" width="50">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                                移除
                            </el-button>
                        </template>
                        </el-table-column>
                </el-table>
                </el-row>
                </el-tab-pane>
                <el-tab-pane label="帐款">
        <el-row :gutter="20">
             <el-col :span="12">  
               <el-form-item label="帐款归属">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
            </el-col>
             
            <el-col :span="12">  
               <el-form-item label="收款日期">
                   <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                   </el-form-item>
            </el-col>
             <el-col :span="12">  
               <el-form-item label="收款条件">
                   <el-select v-model="grouping" placeholder="" style="width:30%;">
                         <el-option label="a" value="8"></el-option>
                         <el-option label="b" value="9"></el-option>
                    </el-select>
                    <el-input v-model="input" style="width:70%;"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">  
               <el-form-item label="入境日期">
                   <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                   </el-form-item>
            </el-col>
        </el-row>
                </el-tab-pane>
                <el-tab-pane label="备注">
                    <el-row :gutter="20">
            <el-col :span="12">  
               <el-form-item label="自定栏一">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
                   </el-col>
                   <el-col :span="12">  
               <el-form-item label="自定栏二">
                   <el-input v-model="input"></el-input>
                   </el-form-item>
                   </el-col>   
                   <el-col :span="24">  
               <el-form-item label="备注">
                  <el-input v-model="input" type="textarea"></el-input>
               </el-form-item>
              </el-col>
              </el-row>
          </el-tab-pane>
        </el-tabs>
  </el-form>

<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" size="mini" style="margin-top:20px;">
  <el-col :span="10">  
        <el-form-item label="业务人员">
            <el-input v-model="input"></el-input>
        </el-form-item>
  </el-col>
  <el-col :span="10">  
        <el-form-item label="制单人员">
            <el-input v-model="input"></el-input>
        </el-form-item>
  </el-col>
  <el-col :span="10">  
        <el-form-item label="所属部门">
            <el-input v-model="input"></el-input>
        </el-form-item>
  </el-col>
  <el-col :span="10">  
        <el-form-item label="复合人员">
            <el-input v-model="input"></el-input>
        </el-form-item>
  </el-col>
  <el-col :span="10">  
        <el-form-item label="复合人员">
            <el-input v-model="input"></el-input>
        </el-form-item>
  </el-col>
  <el-col>
    <el-dropdown style="boder:1px bule">
          <el-button style="margin-left:25px;color:black;font-size: 10px;boder:1px dodgerblue solid;background-color: dodgerblue;" class="el-dropdown-link">
          查询<i class="el-icon-arrow-down el-icon--right"></i>
     </el-button>
    <el-dropdown-menu slot="dropdown">
    <el-dropdown-item disabled>历史交易查询</el-dropdown-item>
    <el-dropdown-item disabled>单据状况查询</el-dropdown-item>
  </el-dropdown-menu>
  </el-dropdown>
     <el-dropdown style="boder:1px bule">
          <el-button style="margin-left:25px;color:black;font-size: 10px;boder:1px dodgerblue solid;background-color: dodgerblue;" class="el-dropdown-link">
          转单<i class="el-icon-arrow-down el-icon--right"></i>
     </el-button>
    <el-dropdown-menu slot="dropdown">
    <el-dropdown-item disabled>销售报价转入</el-dropdown-item>
    <el-dropdown-item disabled>销售订单转入</el-dropdown-item>
    <el-dropdown-item disabled>商业发票转入</el-dropdown-item>
  </el-dropdown-menu>
  </el-dropdown>
     <el-dropdown style="boder:1px bule">
          <el-button style="margin-left:25px;color:black;font-size: 10px;boder:1px dodgerblue solid;background-color: dodgerblue;" class="el-dropdown-link">
          功能<i class="el-icon-arrow-down el-icon--right"></i>
     </el-button>
    <el-dropdown-menu slot="dropdown">
    <el-dropdown-item disabled>物料组合设定</el-dropdown-item>
    <el-dropdown-item disabled>批号设定</el-dropdown-item>
    <el-dropdown-item disabled>条码打印</el-dropdown-item>
    <el-dropdown-item disabled>批次变更单价</el-dropdown-item>
  </el-dropdown-menu>
  </el-dropdown>
  </el-col>
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
          user:"",
          input:"",
          marriage:"",
          grouping:"",
          checkList: [],
          tableData: [{
          date: '2016-05-02',
          name: '1',
          province: '2',
          city: '普陀区',
          address: '上海市',
          zip: true
        }, {
          date: '2016-05-04',
          name: '1',
          province: '2',
          city: '普陀区',
          address: '上海市',
          zip: true
        }]
      }
    },methods: {
      handleClick(row) {
        console.log(row);
      },handleSelectionChange (val) {
        console.log(val)
      },getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '   合计：';
            return;
          }
          //通过下标定义要统计的列，下标从1开始
          if(index == 5||index == 9||index == 11||index == 12){
            const values = data.map(item => Number(item[column.property]));
              sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr);
                if (!isNaN(value)) {
                  return prev + curr;
                } else {
                  return prev;
                }
              }, 0);
          }
        });
        return sums;
      },deleteRow(index, rows) {
        if(confirm("是否删除")){
          rows.splice(index, 1);
        }
      },
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
<style>
.table_lsc{
    max-height: 280px;
    overflow: auto;
}
</style>