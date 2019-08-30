<template>
  <div class="div">
    <el-row :gutter="20">
      <el-col :span="24">
        <h2 style="color:#666666;">库存呆滞品分析</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-row styel="background-color:#FCFDFD;">
        <el-col :span="24">
          <div style="margin:10px 0;text-align:left;">&nbsp;查询条件</div>
        </el-col>
      </el-row>
      <el-row>
        <el-row style="margin:10px 0px;font-size:14px;">
          <el-col :span="3">
              <span>物料区间：</span>
          </el-col>
          <el-col :span="9">
              <el-input
                @focus="dialogTableVisible1 = true"
                v-model="input"
                size="mini"
                style="width:150px;"
              ></el-input>To
              <el-input
                v-model="input1"
                @focus="dialogTableVisible1 = true"
                size="mini"
                style="width:150px;"
              ></el-input>
          </el-col>
          <el-col :span="3">
              <span>物料类别：</span>
          </el-col>
          <el-col :span="9">
              <el-input
                @focus="dialogTableVisible2 = true"
                v-model="input2"
                size="mini"
                style="width:150px;"
              ></el-input>To
              <el-input
                @focus="dialogTableVisible2 = true"
                v-model="input3"
                size="mini"
                style="width:150px;"
              ></el-input>
          </el-col>
        </el-row>
        <el-row style="margin:10px 0px;font-size:14px;">
          <el-col :span="3">
            <span>日期选择：</span>
          </el-col>
          <el-col :span="9">
            <el-radio-group v-model="radio">
              <el-radio :label="3">最近入库日</el-radio>
              <el-radio :label="6">最近出库日</el-radio>
            </el-radio-group>
          </el-col>
          <el-col :span="3">
            <span>呆滞计算日期：</span>
          </el-col>
          <el-col :span="9">
            <el-date-picker
              v-model="value2"
              align="right"
              size="mini"
              style="width:350px;"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
        </el-row>
        <el-row style="margin:10px 0px;font-size:14px;">
          <el-col :span="12">
            <div>
              <el-button size="mini" @click="dialogTableVisible = true">呆滞区间</el-button>
              <el-button size="mini">查询</el-button>
            </div>
          </el-col>
        </el-row>
      </el-row>
    </el-row>
    <el-row class="border" style="margin-top:20px;">
      <el-row>
        <el-col :span="24">
          <el-table
            ref="singleTable"
            :data="tableData"
            style="width: 100%,"
            border
            class="border1,table__body"
            @cell-click="handleCellClick"
          >
            <el-table-column prop="name" width="128px" label="物料编号"></el-table-column>
            <el-table-column prop="date" width="128px" label="物品名称"></el-table-column>
            <el-table-column type="index" width="128px" label="规格型号"></el-table-column>
            <el-table-column type="index" width="128px" label="物料类别"></el-table-column>
            <el-table-column type="index" width="128px" label="单位"></el-table-column>
            <el-table-column type="index" width="128px" label="最近出库日"></el-table-column>
            <el-table-column type="index" width="128px" label="库存量"></el-table-column>
            <el-table-column type="index" width="125px" label="现行成本"></el-table-column>
            <el-table-column type="index" width="125px" label="呆滞天数"></el-table-column>
            <el-table-column type="index" width="125px" label="本期发出数"></el-table-column>
            <el-table-column type="index" width="125px" label="期末结存数"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-row>
    <el-dialog title="呆滞区间" :visible.sync="dialogTableVisible">
      <el-table border :data="qujian">
        <el-table-column property="qujian" label="区间" width="150"></el-table-column>
        <el-table-column property="tian" label="起始天数" width="200"></el-table-column>
        <el-table-column property="jiezhi" label="截至天数"></el-table-column>
        <el-table-column property="shuo" label="区间说明"></el-table-column>
      </el-table>
      <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
    </el-dialog>
    <el-dialog title="物料选择" :visible.sync="dialogTableVisible1">
      <el-row :gutter="20">
        <el-col style="font-size:14px;text-align:left;" :span="24">
          <el-button size="mini" type="primary" @click="dialogTableVisible1 = false">确 定</el-button>
          <el-button size="mini" type="primary" @click="dialogTableVisible1 = false">取 消</el-button>查询条件：
          <el-select size="mini" style="margin-right:20px;" v-model="value">
            <el-option key="1" label="以A开头" value="1"></el-option>
            <el-option key="2" label="以B开头" value="2"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row style="margin-top:10px;" :gutter="20">
        <el-col style="font-size:14px;text-align:left;" :span="24">
          <el-table
            ref="multipleTable"
            :data="tableData"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="物品编号"></el-table-column>
            <el-table-column prop="address" label="物品名称"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-dialog>
    <el-dialog title="物料类别选择" :visible.sync="dialogTableVisible2">
      <el-row :gutter="20">
        <el-col style="font-size:14px;text-align:left;" :span="24">
          <el-button size="mini" type="primary" @click="dialogTableVisible2 = false">确 定</el-button>
          <el-button size="mini" type="primary" @click="dialogTableVisible2 = false">取 消</el-button>查询条件：
          <el-select size="mini" style="margin-right:20px;" v-model="value">
            <el-option key="1" label="以A开头" value="1"></el-option>
            <el-option key="2" label="以B开头" value="2"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row style="margin-top:10px;" :gutter="20">
        <el-col style="font-size:14px;text-align:left;" :span="24">
          <el-table
            ref="multipleTable"
            :data="tableData"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="类别编号"></el-table-column>
            <el-table-column prop="address" label="类别名称"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      input: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      input10: "",
      value2: "",
      value: "1",
      radio: 3,
      fileList: [],
      tableData: [],
      qujian: [
        {
          qujian: 1,
          tian: 0,
          jiezhi: 30,
          shuo: "30天以下"
        },
        {
          qujian: 2,
          tian: 31,
          jiezhi: 60,
          shuo: "31天至60天"
        },
        {
          qujian: 3,
          tian: 61,
          jiezhi: 90,
          shuo: "61天至90天"
        },
        {
          qujian: 4,
          tian: 91,
          jiezhi: 180,
          shuo: "91天至780天"
        },
        {
          qujian: 5,
          tian: 181,
          jiezhi: "",
          shuo: "180天以上"
        }
      ],
      dialogTableVisible: false,
      dialogTableVisible1: false,
      dialogTableVisible2: false,
      multipleSelection: []
    };
  },
  //计算属性
  computed: {},
  //方法集合
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
    
  },
  //挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style  scoped>
/*@import url(); 引入公共css类*/
.div {
  background-color: white;
}
body {
  background-color: white;
}
span {
  display: inline-block;
  width: 120px;
  height: 100%;
  text-align: right;
}
</style>