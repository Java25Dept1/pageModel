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
                <el-col :span="24"><div style="margin:10px 0;text-align:left;">&nbsp;基本信息</div></el-col>
            </el-row>
            <el-row class="border1">
                <el-row style="margin:5px 0px;font-size:14px;">
                    <el-col :span="8">
                        <div style="color:#919191;">
                           <span>单据编号：</span><el-input v-model="moveprice.moveorderno" :disabled="true" size="mini" style="width:250px;" placeholder="保存订单自动生成"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="8"><div><span>增值科目*：</span> <el-input @focus="dialogTableVisible1 = true" v-model="input1" size="mini" style="width:250px;"></el-input></div></el-col>
                    <el-col :span="8"><div><span>减值科目*：</span> <el-input @focus="dialogTableVisible1 = true" v-model="input1" size="mini" style="width:250px;"></el-input></div></el-col>
                </el-row>
                <el-row style="margin:5px 0px;font-size:14px;">
                    <el-col :span="8"><div><span>制单人： </span><el-input v-model="moveprice.movemake" size="mini" style="width:250px;" placeholder="请输入内容"></el-input></div></el-col>
                    <el-col :span="8"><div><span>制单日期*：</span> <el-date-picker v-model="moveprice.movedate" align="right" size="mini" style="width:250px;" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker></div></el-col>
                </el-row>
                <el-row style="margin:5px 0px;font-size:14px;">
                    <el-col :span="8"><div><span>审核人： </span><el-input v-model="moveprice.movecheck" size="mini" style="width:250px;" placeholder="请输入内容"></el-input></div></el-col>
                  </el-row>
            </el-row>
        </el-row>
        <el-row class='border' style="margin-top:20px;">
            <el-row>
                <el-col :span='24' style="text-align:left;">
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
                        :data="moveprice.details"
                        highlight-current-row
                        @current-change="handleCurrentChange"
                        style="width: 100%,"
                        border
                        class="border1"
                        @cell-click ="handleCellClick"
                        >
                        <el-table-column prop="moveinile" width="58px" label="序号"></el-table-column>
                        <el-table-column prop="movematerielno" width="150px" label="物品编号*">
                            <template slot-scope="{row,$index}">
                                <div  @click="{{changeNum($index)}}">
                                    <el-input @focus="dialogTableVisible2 = true" size="mini" @blur="dis()" v-if="editable[$index]" v-model='row.movematerielno'></el-input>
                                    <span v-else v-text="row.movematerielno"></span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="movematerielname"  width="160px" label="物品名称" class-name="column-bg-color-editable" show-overflow-tooltip></el-table-column>
                        <el-table-column prop="movespectype"  width="150px" label="规格"></el-table-column>
                        <el-table-column prop="moveunit"  width="150px" label="单位"></el-table-column>
                        <el-table-column prop="movestocks" width="150px" label="库存数量"></el-table-column>
                        <el-table-column prop="moveaveragecost" width="150px" label="平均成本"></el-table-column>
                        <el-table-column prop="moveprice" width="150px" label="调价后成本*">
                            <template slot-scope="{row,$index}">
                                <div  @click="{{changeNum1($index)}}">
                                    <el-input size="mini" @blur="money($index)" v-if="editable1[$index]" v-model='row.moveprice'></el-input>
                                    <span v-else v-text="row.moveprice"></span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="movemoveprice" width="150px" label="调价金额"></el-table-column>
                        <el-table-column prop="" width="150px" label="分录备注*"></el-table-column>
                    </el-table>
                </el-col>
            </el-row>
            <el-row style="margin:5px 0px;font-size:14px;">
                <el-col :span="24" style="text-align:left;">
                    <div>
                        <span>备注：</span>
                        <el-input type="moveprice.moveremark" style="width:1375px;" :rows="3" v-model="textarea"></el-input>
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
          <el-button size="mini" type="primary" @click="addMovePriceDetatil()">确 定</el-button>
          <el-button size="mini" type="primary" @click="dialogTableVisible2 = false">取 消</el-button>查询条件：
          <el-select size="mini" style="margin-right:20px;" v-model="id">
            <el-option key="A" label="以A开头" value="1"></el-option>
            <el-option key="B" label="以B开头" value="2"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row style="margin-top:10px;" :gutter="20">
        <el-col style="font-size:14px;text-align:left;" :span="24">
          <el-table
            ref="multipleTable"
            :data="Materiel"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="matid" label="物品编号"></el-table-column>
            <el-table-column prop="matname" label="物品名称"></el-table-column>
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
      index:0,
      id:"",
      xinzen:false,
      moveprice:{
        enables:"",
        moveadjust:"",
        moveauditingstate:"",
        movecheck:"",
        movedate:"",
        movemake:"",
        moveorderno:"",
        moveremark:"",
        movestorageno:"",
        details:[
            {
              enables:"",
              moveaveragecost:"",
              moveinile:"",
              movematerielname:"",
              movematerielno:"",
              movemoveprice:"",
              moveorderno:"",
              moveprice:"",
              movespectype:"",
              movestocks:"",
              moveunit:"",
              safetyone:"",
              safetytwo:""
            }
          ]
      },
      movepriceBeFen:{
        enables:"",
        moveadjust:"",
        moveauditingstate:"",
        movecheck:"",
        movedate:"",
        movemake:"",
        moveorderno:"201908310001",
        moveremark:"",
        movestorageno:"",
        details:[
            {
              enables:"",
              moveaveragecost:"",
              moveinile:"",
              movematerielname:"",
              movematerielno:"",
              movemoveprice:"",
              moveorderno:"",
              moveprice:"",
              movespectype:"",
              movestocks:"",
              moveunit:"",
              safetyone:"",
              safetytwo:""
            }
          ]
      },
      Materiel:[
        {
          matadviceprice:"3800",
          matadvicepricea:"3750",
          matadvicepriceb:"3600",
          matadvicepricec:"0",
          matadvicepriced:"0",
          matadvicepricee:"0",
          matcategories:"",
          matcost:"0",
          matcurrency:"",
          matdardcost:"3370",
          matdityname:"采购件",
          matdutyrate:"0",
          matepotdate:"null",
          matetystock:"0",
          matfestock:"5",
          matgawpdate:"0",
          matgecost:"0",
          matid:"C01-W-HP-DC7900-307",
          matifduty:"1",
          matldepotdate:"null",
          matmainafford:"",
          matmainaffordid:"",
          matname:"HP V7650 17\ Flat Color Monitor",
          matolumnone:"",
          matolumntow:"",
          matragedate:"null",
          matravailable:"0",
          matremark:"",
          matshape:"采购件",
          matshapecode:"0",
          matspec:"",
          matstandardprice:"3370",
          matstockaheaddate:"0",
          matstopdate:"null",
          mattalcost:"0",
          mattaveragecost:"0",
          mattialcost:"3370",
          mattoragedate:"null",
          mattypeid:"",
          mattypename:"显示器",
          matuantity:"0",
          matunit:""
        }
      ],
      pageInfo:{},
      currentRow: null,
      editable: [],
      editable1: [],
      multipleSelection:[],
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
      this.moveprice.details.push({
              enables:"",
              moveaveragecost:"",
              moveinile:"",
              movematerielname:"",
              movematerielno:"",
              movemoveprice:"",
              moveorderno:"",
              moveprice:"",
              movespectype:"",
              movestocks:"",
              moveunit:"",
              safetyone:"",
              safetytwo:""
      });
    },
    money(a){
      let price = this.moveprice.details[a].moveaveragecost - this.moveprice.details[a].moveprice;
      this.moveprice.details[a].movemoveprice = -(this.moveprice.details[a].movestocks * price);
    },
    addMovePriceDetatil(){
      let _this = this;
      this.moveprice.details = [];
      this.index = 0;
      this.multipleSelection.forEach((element,index) => {
          _this.moveprice.details.push({
              enables:"",
              moveaveragecost:element.mattaveragecost,
              moveinile:++_this.index,
              movematerielname:element.matname,
              movematerielno:element.matid,
              movemoveprice:0,
              moveorderno:_this.moveprice.moveorderno,
              moveprice:element.mattaveragecost,
              movespectype:element.matspec,
              movestocks:element.matravailable,
              moveunit:element.matunit,
              safetyone:"",
              safetytwo:""
        });
      });
      this.dialogTableVisible2 = false;
    },
    setCurrent() {
      this.moveprice.details = this.removeTableData();
    },
    removeTableData() {
      if (this.currentRow == null) {
        alert("请选择要删除的行");
        return this.moveprice.details;
      } else {
        let length = this.moveprice.details.length;
        for (let i = 0; i < length; i++) {
          if (this.moveprice.details[i] === this.currentRow) {
            if (i === 0) {
              this.moveprice.details.shift(); //删除并返回数组的第一个元素
              this.currentRow = null;
              return this.moveprice.details;
            } else if (i === length - 1) {
              this.moveprice.details.pop(); //删除并返回数组的最后一个元素
              this.currentRow = null;
              return this.moveprice.details;
            } else {
              this.moveprice.details.splice(i, 1); //删除下标为i的元素
              this.currentRow = null;
              return this.moveprice.details;
            }
          }
        }
      }
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    
    handleSelectionChange(val) {
        this.multipleSelection = val;
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
    goToPrePage() {
        this.goToPage(this.pageInfo.prePage);
    },
    goToNextPage() {
        this.goToPage(this.pageInfo.nextPage);
    },
    goToPage(p) {
          let _this = this;
          //ajax
          _this.$axios.get(`http://localhost:8080/MovePrice/selectMovePrice?pageNum=`+p).then(resp => {
              _this.pageInfo = resp.data;
              _this.moveprice =  resp.data.list[0];
              _this.index = resp.data.list[0].details.length;
          }).catch(e => {
              alert(e);
          });
    },
    selectMateriel() {
          let _this = this;
          //ajax
          _this.$axios.get(`http://localhost:8080/MovePrice/selectMateriel?name=`+this.id).then(resp => {
              _this.Materiel = resp.data;
          }).catch(e => {
              alert(e);
          });
    },
    getStockOrder(index){
        if(index == 1){
          //第一页
          this.goToPage(1);
        }else if(index == 2){
          //上一页
          this.goToPrePage();
        }else if(index == 3){
          //下一页
          this.goToNextPage();

        }else if(index == 4){
          //最后一页
          this.goToPage(this.pageInfo.pages);
        }else if(index == 5){
          //添加
          this.moveprice = this.movepriceBeFen;
          this.index=0;
          this.xinzen = true;

        }else if(index == 6){
          //修改
          alert("6")

        }else if(index == 7){
          //保存
          let _this = this;
          //ajax
          if(this.xinzen){
            _this.$axios.post(`http://localhost:8080/MovePrice/insertMovePrice`,this.moveprice).then(resp => {
              alert("保存成功");
            }).catch(e => {
                alert(e);
            });
          }else{
            _this.$axios.post(`http://localhost:8080/MovePrice/updateMovePrice`,this.moveprice).then(resp => {
              alert("保存成功");
            }).catch(e => {
                alert(e);
            });
          }

        }else if(index == 8){
          //删除
          if(confirm("确定要删除吗?")){
            let _this = this;
            _this.$axios.get(`http://localhost:8080/MovePrice/deleteMovePrice?moveorderno=`+_this.moveprice.moveorderno).then(resp => {
            alert("删除成功");
            _this.goToPage(0);
          }).catch(e => {
              alert(e);
          });
          }

        }
      }
  },
  //挂载完成（可以访问DOM元素）
  mounted() {
    this.goToPage(0);
    this.selectMateriel();
  }
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