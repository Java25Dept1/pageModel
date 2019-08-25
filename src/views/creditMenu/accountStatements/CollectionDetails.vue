<template>
  <div class="PurchaseShare">
    <commonHead></commonHead>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="el-icon-star-on">客户应收款明细表</span>
      </div>
      <div style="padding: 0 20px; ">
        <el-form :inline="true" :model="tableData" class="demo-form-inline">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="客户" name="first">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="客户区间">
                    <el-input v-model="name" size="small" placeholder="开始物料编号"></el-input>
                  </el-form-item>
                  <el-form-item label="To">
                    <el-input v-model="name" size="small" placeholder="结束物料编号"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" size="small">
                      <router-link to="/setting">更多客户</router-link>
                    </el-button>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="日期区间">
                    <el-date-picker
                      v-model="value"
                      type="datetimerange"
                      :picker-options="pickerOptions"
                      size="small"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      align="right"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="2">
                  <el-form-item>
                    <el-button type="primary" size="small" @click="a">查询</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="业务员" name="second">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="业务员区间">
                    <el-input v-model="name" size="small" placeholder="开始物料编号"></el-input>
                  </el-form-item>
                  <el-form-item label="To">
                    <el-input v-model="name" size="small" placeholder="结束物料编号"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" size="small">
                      <router-link to="/setting">更多业务员</router-link>
                    </el-button>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="日期区间">
                    <el-date-picker
                      v-model="value"
                      type="datetimerange"
                      :picker-options="pickerOptions"
                      size="small"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      align="right"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="2">
                  <el-form-item>
                    <el-button type="primary" size="small" @click="a">查询</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
          <el-row>
            <el-col :span="24">
              <el-table
                :data="tableData"
                style="width: 100%"
                row-key="id"
                show-summary
                border
                lazy
                :load="load"
                type="selection"
              >
               <el-table-column type="expand">
                  <template slot-scope="props">
                       <p>
                           期初余额 | {{props.row.name}} | 预收款：{{props.row.price}} | 本币预收款：{{props.row.num}} 
                           | 应收款：{{props.row.price}} | 本币应收款：{{props.row.num}}
                       </p>
                       <p>小计：{{props.row.num*props.row.price}}</p>
                  </template>
                </el-table-column>
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="date" label="单据日期" sortable width="180"></el-table-column>
                <el-table-column prop="name" label="客户简称" sortable width="180"></el-table-column>
                <el-table-column prop="address" label="单据号码" sortable></el-table-column>
                <el-table-column prop="name" label="单别" sortable width="180"></el-table-column>
                <el-table-column prop="price" label="预收款" sortable width="180"></el-table-column>
                <el-table-column prop="num" label="本币预收款" sortable width="180"></el-table-column>
                <el-table-column prop="price" label="应收款" sortable width="180"></el-table-column>
                <el-table-column prop="num" label="本币应收款" sortable width="180"></el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
//采购分摊明细表
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import commonHead from "../../../components/CommonHead.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    commonHead
  },
  data() {
    //这里存放数据
    return {
      activeName: "first",
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "客户编号",
          address: "上海市普陀区金沙江路 1518 弄",
          num: 30,
          price: 22
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄",
          num: 20,
          price: 22
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎11",
          address: "上海市普陀区金沙江路 1519 弄",
          num: 100,
          price: 22
        }
      ],
      value: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to, from) {}
  },
  //方法集合
  methods: {
    
   },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.a();
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
/*@import url(); 引入公共css类*/
</style>