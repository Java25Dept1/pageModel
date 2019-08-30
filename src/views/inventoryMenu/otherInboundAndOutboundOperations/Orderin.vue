<template>
  <div>
    <commonHead></commonHead>
    <el-container>
      <el-header >其他入库单</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="3">
            出库类型
          </el-col>
          <el-col :span="9">
            <el-input v-model="type" clearable></el-input>
          </el-col>
          <el-col :span="3">
            单据日期
          </el-col>
          <el-col :span="9">
            <el-date-picker
              v-model="value2"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="3">
            仓库
          </el-col>
          <el-col :span="9">
            <el-input v-model="ck" clearable></el-input>
          </el-col>
          <el-col :span="3">
            单据号码
          </el-col>
          <el-col :span="9">
            <el-input v-model="documentnumber" clearable></el-input>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="3">
            凭证编号
          </el-col>
          <el-col :span="9">
            <el-input v-model="number" clearable></el-input>
          </el-col>
        </el-row>

        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" border>
          <el-tab-pane label="内容" name="first">
            <el-table el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="(栏号)" sortable width="180"></el-table-column>
              <el-table-column prop="name" label="物料编号" width="180"></el-table-column>
              <el-table-column prop="address" label="(物料名称)" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="(规格型号)" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="(单位名称)" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="数量" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="单价" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="金额" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="批号" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="分录备注" :formatter="formatter"></el-table-column>
            </el-table>
            <br>
            合计:
        <el-input v-model="input5" style="width:200px" clearable></el-input>
          </el-tab-pane>
          <el-tab-pane label="备注" name="second">
            自定栏一
            <el-input v-model="input1" style="width:200px" clearable></el-input>
            自定栏二
            <el-input v-model="input2" style="width:200px" clearable></el-input>
            <br><br>
            <el-input
              type="textarea"
              :autosize="{ minRows: 6, maxRows: 6}"
              placeholder="请输入内容"
              v-model="textarea2"
            ></el-input>
          </el-tab-pane>
        </el-tabs>
        <br />
        <br />
        <br />
        <el-row :gutter="20">
          <el-col :span="3">
            入库人员:
          </el-col>
          <el-col :span="9">
            <el-input v-model="input6" clearable></el-input>
          </el-col>
          <el-col :span="3">
            制单人员:
          </el-col>
          <el-col :span="9">
            <el-input v-model="input7" clearable></el-input>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="3">
            所属部门:
          </el-col>
          <el-col :span="9">
            <el-input v-model="input8" clearable></el-input>
          </el-col>
          <el-col :span="3">
            复核人员:
          </el-col>
          <el-col :span="9">
            <el-input v-model="input9" clearable></el-input>
          </el-col>
        </el-row>
        <el-dropdown>
          <el-button type="primary">
            功能
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>批号设定</el-dropdown-item>
            <el-dropdown-item>组合展开</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-main>
      <!-- <el-footer>销售报价单</el-footer> -->
    </el-container>
  </div>
</template>
<script>
import commonHead from "../../../components/CommonHead.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    commonHead
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      type: "",
      ck: "",
      documentnumber: "",
      number: "",
      select: "",
      input1: "",
      input2: "",
      textarea2: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      radio: "1"
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
<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-header{
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>