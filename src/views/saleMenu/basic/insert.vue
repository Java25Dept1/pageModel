<template>
  <div>
    <commonHead></commonHead>
    <el-container>
      <el-header>客户主文件设定</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="6">
            客户编号:&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputbh" style="width:200px" clearable></el-input>
          </el-col>
          <el-col :span="6">
            账款归属:&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputgs" style="width:200px" clearable></el-input>
          </el-col>
          <el-col :span="6">
            客户全程: &nbsp;&nbsp;&nbsp;
            <el-input v-model="inputqc" style="width:200px" clearable></el-input>
          </el-col>
          <el-col :span="6">
            类别: &nbsp;&nbsp;&nbsp;
            <el-input v-model="inputlb" style="width:200px" clearable></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            客户简称: &nbsp;&nbsp;&nbsp;
            <el-input v-model="inputbh" style="width:200px" clearable></el-input>
          </el-col>
          <el-col :span="6">
            地区:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input v-model="inputgs" style="width:200px" clearable></el-input>
          </el-col>
          <el-col :span="6">
            英文全称: &nbsp;&nbsp;&nbsp;
            <el-input v-model="inputqc" style="width:200px" clearable></el-input>
          </el-col>
          <el-col :span="6">
            币别: &nbsp;&nbsp;&nbsp;
            <el-input v-model="inputlb" style="width:200px" clearable></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            英文简称: &nbsp;&nbsp;&nbsp;
            <el-input v-model="inputlb" style="width:200px" clearable></el-input>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-tabs>
          <el-tab-pane label="基本资料" name="one">
            <el-row :gutter="20">
              <el-col :span="6">
                负责人: &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputbh" style="width:200px" clearable></el-input>
              </el-col>
              <el-col :span="6">
                业务人员:&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputgs" style="width:200px" clearable></el-input>
              </el-col>
              <el-col :span="6">
                联系人: &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputqc" style="width:200px" clearable></el-input>
              </el-col>
              <el-col :span="6">
                税务登记号: &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputlb" style="width:200px" clearable></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                联系电话一: &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputbh" style="width:200px" clearable></el-input>
              </el-col>
              <el-col :span="6">
                联系电话二:&nbsp;&nbsp;&nbsp;
                <el-input v-model="inputgs" style="width:200px" clearable></el-input>
              </el-col>
              <el-col :span="6">
                联系电话三: &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputqc" style="width:200px" clearable></el-input>
              </el-col>
              <el-col :span="6">
                资本额: &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputlb" style="width:200px" clearable></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                行业别: &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputbh" style="width:200px" clearable></el-input>
              </el-col>
              <el-col :span="6">
                电子邮件: &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputbh" style="width:200px" clearable></el-input>
              </el-col>
              <el-col :span="6">
                网址: &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputbh" style="width:200px" clearable></el-input>
              </el-col>
              <el-col :span="6">
                银行账号: &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputbh" style="width:200px" clearable></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                传真号码: &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputbh" style="width:200px" clearable></el-input>
              </el-col>
              <el-col :span="6">
                开户银行: &nbsp;&nbsp;&nbsp;
                <el-input v-model="inputbh" style="width:200px" clearable></el-input>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="销售信息" name="two">
            <el-row :gutter="20">
              <el-col :span="8">
                最初销售出库日
                <el-date-picker
                  v-model="value1"
                  align="right"
                  type="date"
                  placeholder="单据日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-col>
              <el-col :span="8">
                最初销售退货日
                <el-date-picker
                  v-model="value1"
                  align="right"
                  type="date"
                  placeholder="单据日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-col>
              <el-col :span="8">
                最近销售出库日
                <el-date-picker
                  v-model="value1"
                  align="right"
                  type="date"
                  placeholder="单据日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                最初销售退货日
                <el-date-picker
                  v-model="value1"
                  align="right"
                  type="date"
                  placeholder="单据日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-col>
              <el-col :span="8">
                最近拜访日
                <el-date-picker
                  v-model="value1"
                  align="right"
                  type="date"
                  placeholder="单据日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-col>
              <el-col :span="8">
                预约拜访日
                <el-date-picker
                  v-model="value1"
                  align="right"
                  type="date"
                  placeholder="单据日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                折数(%)
                <el-input v-model="zs" style="width:225px" clearable></el-input>
              </el-col>
              <el-col :span="8">
                售价等级
                <el-select v-model="val1" clearable placeholder="请选择">
                  <el-option
                    v-for="item in xz1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                单价是否含税
                <el-select v-model="val2" clearable placeholder="请选择">
                  <el-option
                    v-for="item in xz2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                潜在客户编号
                <el-input v-model="zs" style="width:225px" clearable></el-input>
              </el-col>
              <el-col :span="8">
                客户建立日期
                <el-date-picker
                  v-model="value1"
                  align="right"
                  type="date"
                  placeholder="单据日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-col>
              <el-col :span="8">
                终止交易日
                <el-date-picker
                  v-model="value1"
                  align="right"
                  type="date"
                  placeholder="单据日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="收款信息" name="three">

          </el-tab-pane>
          <el-tab-pane label="地址" name="four">
            <el-table contenteditable="true" el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="地址编号" sortable width="180"></el-table-column>
              <el-table-column prop="name" label="地址" width="180"></el-table-column>
              <el-table-column prop="address" label="邮政编码" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="联系人" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="联系人职称" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="联系电话" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="传真号码" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="行走路线" :formatter="formatter"></el-table-column>
              <el-table-column prop="address" label="备注" :formatter="formatter"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="其他" name="five">
              
          </el-tab-pane>
        </el-tabs>
        <el-row :gutter="20">
          <el-col :span="5">
            <el-dropdown>
              <el-button type="primary">
                设定
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>初期账款设定</el-dropdown-item>
                <el-dropdown-item>原厂物料设定</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="5">
            <el-dropdown>
              <el-button type="primary">
                功能
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click="write()">写信</el-dropdown-item>
                <el-dropdown-item>上网</el-dropdown-item>
                <el-dropdown-item>历史交易查询</el-dropdown-item>
                <el-dropdown-item>账额数据效验</el-dropdown-item>
                <el-dropdown-item>新增拜访记录</el-dropdown-item>
                <el-dropdown-item>授权用户查询</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-main>
      <el-footer></el-footer>
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
      xz1: [
        {
          value: "选项1",
          label: "介意售价"
        },
        {
          value: "选项2",
          label: "销售A"
        },
        {
          value: "选项3",
          label: "销售B"
        },
        {
          value: "选项4",
          label: "销售C"
        },
        {
          value: "选项5",
          label: "销售D"
        },
        {
          value: "选项6",
          label: "销售E"
        },
        {
          value: "选项7",
          label: "销售F"
        }
      ],
      xz2: [
        {
          value: "选项1",
          label: "含税"
        },
        {
          value: "选项2",
          label: "未含税"
        }
      ],
      val2: "",
      val1: "",
      value1: "",
      inputbh: "",
      inputgs: ""
    };
  },
  methods: {
    write() {
      alert("sss");
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
};
</script>
<style>
.el-header {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>