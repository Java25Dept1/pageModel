<template>
  <div class="PurchaseShare">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="el-icon-star-on">采购分摊明细表单</span>
      </div>
      <div style="padding: 0 20px; ">
        <el-form :inline="true" :model="tableData" class="demo-form-inline">
          <el-row>
            <el-col :span="10">
              <el-form-item label="物料区间">
                <el-input v-model="name" size="small"  placeholder="开始物料编号"></el-input>
              </el-form-item>
              <el-form-item label="To"> 
                <el-input v-model="name" size="small" placeholder="结束物料编号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="small" ><router-link to="/setting">更多物料</router-link></el-button>
              </el-form-item>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="日期区间">
                  <el-date-picker v-model="value"  type="datetimerange"  :picker-options="pickerOptions" size="small" 
                    range-separator="至"  start-placeholder="开始日期"  end-placeholder="结束日期" align="right">
                  </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="2">
                <el-form-item>
                <el-button type="primary" size="small" @click="a">查询</el-button>
              </el-form-item>
            </el-col>
          </el-row>
            <el-col :span="12"></el-col>
          <el-row>
            <el-col :span="24">
              <el-table
                show-summary
                contenteditable="true"
                :data="tableData"
                height="250"
                border
                style="width: 100%"
              >
                <el-table-column prop="id" label="物料编号"></el-table-column>
                <el-table-column prop="name" label="物料名称"></el-table-column>
                <el-table-column prop="name" label="规格型号"></el-table-column>
                <el-table-column prop="name" label="分摊单号"></el-table-column>
                <el-table-column prop="name" label="分摊方式"></el-table-column>
                <el-table-column prop="date" label="分摊日期" sortable></el-table-column>
                <el-table-column prop="name" label="单位"></el-table-column>
                <el-table-column prop="amount1" label="采购数量" sortable></el-table-column>
                <el-table-column prop="amount2" label="采购金额" sortable></el-table-column>
                <el-table-column prop="amount3" label="重量" sortable></el-table-column>
                <el-table-column prop="amount1" label="材积" sortable></el-table-column>
                <el-table-column prop="amount1" label="分摊金额" sortable></el-table-column>
                <el-table-column prop="name" label="采购入库单号"></el-table-column>
                <el-table-column prop="name" label="供应商"></el-table-column>
                <el-table-column prop="name" label="供应商简称"></el-table-column>
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

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      tableData: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
          date:"2019-09-09"
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
          date:"2019-09-10"
        }
      ],
      value:"",
      pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
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