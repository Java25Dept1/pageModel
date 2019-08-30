<template>
  <div class="div">
    <commonHead></commonHead>
    <el-row :gutter="20">
      <el-col :span="24">
        <h2 style="color:#666666;">调价单</h2>
      </el-col>
    </el-row>
    <el-row class="border">
      <el-row styel="background-color:#FCFDFD;">
        <el-col :span="24">
          <div style="margin:10px 0;text-align:left;">&nbsp;基本信息</div>
        </el-col>
      </el-row>
      <el-row class="border1">
        <el-row style="margin:5px 0px;font-size:14px;">
          <el-col :span="12">
            <div style="color:#919191;">
              <span>单据编号：</span>
              <el-input
                v-model="input"
                :disabled="true"
                size="mini"
                style="width:350px;"
                placeholder="保存订单自动生成"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <span>增值科目*：</span>
              <el-input
                @focus="dialogTableVisible1 = true"
                v-model="input1"
                size="mini"
                style="width:350px;"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin:5px 0px;font-size:14px;">
          <el-col :span="12">
            <div>
              <span>减值科目*：</span>
              <el-input
                @focus="dialogTableVisible1 = true"
                v-model="input1"
                size="mini"
                style="width:350px;"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <span>制单人：</span>
              <el-input v-model="input9" size="mini" style="width:350px;" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin:5px 0px;font-size:14px;">
          <el-col :span="12">
            <div>
              <span>制单日期*：</span>
              <el-date-picker
                v-model="value2"
                align="right"
                size="mini"
                style="width:350px;"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </el-col>
        </el-row>
      </el-row>
    </el-row>
    <el-row class="border" style="margin-top:20px;">
      <el-row>
        <el-col :span="24" style="text-align:left;">
          <div style="margin:10px;">
            <el-button @click="adddata" size="small">增行</el-button>
            <el-button @click="setCurrent()" size="small">删行</el-button>
            <span>调价物料</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-table
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%,"
            border
            class="border1"
            @cell-click="handleCellClick"
          >
            <el-table-column type="index" width="58px" label="序号"></el-table-column>
            <el-table-column prop="name" width="150px" label="物品编号*">
              <template slot-scope="{row,$index}">
                <div @click="{{changeNum($index)}}">
                  <el-input
                    @focus="dialogTableVisible2 = true"
                    size="mini"
                    @blur="dis()"
                    v-if="editable[$index]"
                    v-model="row.name"
                  ></el-input>
                  <span v-else v-text="row.name"></span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="date"
              width="160px"
              label="物品名称"
              class-name="column-bg-color-editable"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column type="index" width="150px" label="规格"></el-table-column>
            <el-table-column type="index" width="150px" label="单位"></el-table-column>
            <el-table-column type="index" width="150px" label="库存数量"></el-table-column>
            <el-table-column type="index" width="150px" label="平均成本"></el-table-column>
            <el-table-column type="index" width="150px" label="单价*">
              <template slot-scope="{row,$index}">
                <div @click="{{changeNum1($index)}}">
                  <el-input @blur="dis1()" size="mini" v-if="editable1[$index]" v-model="row.date"></el-input>
                  <span v-else v-text="row.date"></span>
                </div>
              </template>
            </el-table-column>
            <el-table-column type="index" width="150px" label="调价金额"></el-table-column>
            <el-table-column type="index" width="150px" label="分录备注*"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row style="margin:5px 0px;font-size:14px;">
        <el-col :span="24" style="text-align:left;">
          <div>
            <span>备注：</span>
            <el-input type="textarea" style="width:1375px;" :rows="3" v-model="textarea"></el-input>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <el-dialog title="会计科目" :visible.sync="dialogTableVisible1">
      <el-row :gutter="20">
        <el-col style="font-size:14px;text-align:left;" :span="24">
          <el-button size="mini" type="primary" @click="dialogTableVisible2 = false">确 定</el-button>
          <el-button size="mini" type="primary" @click="dialogTableVisible2 = false">取 消</el-button>查询条件：
          <el-select size="mini" style="margin-right:20px;" v-model="value3">
            <el-option key="1" label="科目编号" value="1"></el-option>
            <el-option key="2" label="科目名称" value="2"></el-option>
          </el-select>
          <el-input v-model="input11" size="mini" style="width:150px;margin-right:20px;"></el-input>
          <el-button size="mini">查 询</el-button>
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
            <el-table-column label="科目编号" width="120" type="no"></el-table-column>
            <el-table-column prop="name" label="科目名称"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-dialog>
    <el-dialog title="物料选择" :visible.sync="dialogTableVisible2">
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
            <el-table-column prop="name" label="物品编号"></el-table-column>
            <el-table-column prop="address" label="物品名称"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-dialog>
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
      value3: "1",
      value: "",
      fileList: [],
      tableData: [
        {
          date: "",
          name: "",
          address: ""
        },
        {
          date: "",
          name: "",
          address: ""
        },
        {
          date: "",
          name: "",
          address: ""
        },
        {
          date: "",
          name: "",
          address: ""
        }
      ],
      currentRow: null,
      editable: [],
      editable1: [],
      dialogTableVisible1: false,
      dialogTableVisible2: false
    };
  },
  //计算属性
  computed: {},
  //方法集合
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    adddata() {
      this.tableData.push({
        date: "",
        name: "",
        address: ""
      });
    },
    setCurrent() {
      this.tableData = this.removeTableData();
    },
    removeTableData() {
      if (this.currentRow == null) {
        alert("请选择要删除的行");
        return this.tableData;
      } else {
        let length = this.tableData.length;
        for (let i = 0; i < length; i++) {
          if (this.tableData[i] === this.currentRow) {
            if (i === 0) {
              this.tableData.shift(); //删除并返回数组的第一个元素
              this.currentRow = null;
              return this.tableData;
            } else if (i === length - 1) {
              this.tableData.pop(); //删除并返回数组的最后一个元素
              this.currentRow = null;
              return this.tableData;
            } else {
              this.tableData.splice(i, 1); //删除下标为i的元素
              this.currentRow = null;
              return this.tableData;
            }
          }
        }
      }
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    changeNum(row) {
      let length = this.editable.length;
      this.editable[row] = true;
      this.editable1 = [];
      for (let i = 0; i < length; i++) {
        if (i != row) {
          this.editable[i] = false;
        }
      }
      this.$set(this.editable, row, true);
    },
    changeNum1(row) {
      let length = this.editable1.length;
      this.editable1[row] = true;
      this.editable = [];
      for (let i = 0; i < length; i++) {
        if (i != row) {
          this.editable1[i] = false;
        }
      }
      this.$set(this.editable1, row, true);
    },
    handleCellClick: function(row, column, cell, event) {
      emptransfer.addClass(cell, "current-cell");
      if (emptransfer.getChildElement(cell, 3) !== 0) {
        var _inputParentNode = emptransfer.getChildElement(cell, 3);
        if (
          _inputParentNode.hasChildNodes() &&
          _inputParentNode.childNodes.length > 2
        ) {
          var _inputNode = _inputParentNode.childNodes[2];
          if (_inputNode.tagName === "INPUT") {
            _inputNode.focus();
          }
        }
      }
    },
    //input框失去焦点事件
    handleInputBlur: function(event) {
      //当 input 失去焦点 时,input 切换为 span，并且让下方 表格消失（注意，与点击表格事件的执行顺序）
      var _event = event;
      setTimeout(function() {
        var _inputNode = _event.target;
        if (emptransfer.getParentElement(_inputNode, 4) !== 0) {
          var _cellNode = emptransfer.getParentElement(_inputNode, 4);
          emptransfer.removeClass(_cellNode, "current-cell");
          emptransfer.removeClass(_cellNode, "current-cell2");
        }
      }, 200);
    },
    getStockOrder(index) {
      if (index == 1) {
        //第一页
        alert("1");
      } else if (index == 2) {
        //上一页
        alert("2");
      } else if (index == 3) {
        //下一页
        alert("3");
      } else if (index == 4) {
        //最后一页
        alert("4");
      } else if (index == 5) {
        //添加
        alert("5");
      } else if (index == 6) {
        //修改
        alert("6");
      } else if (index == 7) {
        //保存
        alert("保7存");
      } else if (index == 8) {
        //删除
        alert("8");
      }
    }
  },
  //挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style  scoped>
/*@import url(); 引入公共css类*/
.div {
  height: 948px;
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