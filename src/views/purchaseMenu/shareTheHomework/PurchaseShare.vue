<template>
  <div>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span class="el-icon-star-on">采购分摊页面</span>
        </div>
        <div style="padding: 0 20px; ">
            <el-form  ref="formref" :model="form" label-width="150px">
                <el-row>
                    <el-col :span="8">
                        <el-form-item  label="单据日期">
                            <el-date-picker  v-model="form.date" type="datetime"  style="width: 100%;"  placeholder="选择日期时间"
                                align="right"   size="small"  :picker-options="pickerOptions">
                        </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="单据号码">
                            <el-input  size="small" v-model="form.name1" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10"> </el-col>
                    <el-col :span="8">
                        <el-form-item label="分摊方式" >
                            <el-select  size="small" style="width: 100%;" v-model="form.region" placeholder="请选择活动区域" clearable>
                                <el-option label="按金额" value="money"></el-option>
                                <el-option label="按数量" value="num"></el-option>
                                <el-option label="按材积" value="wood"></el-option>
                                <el-option label="按重量" value="weight"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="凭证编号">
                            <el-input size="small" v-model="form.name2" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10"> </el-col>
                    <el-col :span="8">
                        <el-form-item label="待摊金额本位币" >
                            <el-input size="small" :disabled="true" v-model="form.money" clearable></el-input>
                        </el-form-item>
                    </el-col>
                
                </el-row>
                <el-row>
                    <el-col :span="24">     
                        <el-tabs type="border-card">
                            <el-tab-pane>
                                <span slot="label"><i class="el-icon-date"></i> 费用明细</span>
                                <template>
                                    <el-table contenteditable="true" :data="tableData" height="250" border style="width: 100%">
                                        <el-table-column prop="date" label="(栏号)"></el-table-column>
                                        <el-table-column class="colorText" prop="name" label="费用编号"></el-table-column>
                                        <el-table-column prop="name" label="(费用名称)"></el-table-column>
                                        <el-table-column prop="name" label="币别"></el-table-column>
                                        <el-table-column prop="name" label="汇率"></el-table-column>
                                        <el-table-column prop="name" label="金额"></el-table-column>
                                        <el-table-column prop="name" label="(金额本位币)"></el-table-column>
                                    </el-table>
                                </template>
                            </el-tab-pane>
                            <el-tab-pane label="分摊结果">
                                <template>
                                    <el-table :data="tableData" height="250" border style="width: 100%">
                                        <el-table-column prop="name" label="(栏号)"></el-table-column>
                                        <el-table-column prop="name" label="采购入库单号"></el-table-column>
                                        <el-table-column prop="name" label="物料编号"></el-table-column>
                                        <el-table-column prop="name" label="(物料名称)"></el-table-column>
                                        <el-table-column prop="name" label="(规格型号)"></el-table-column>
                                        <el-table-column prop="name" label="(采购金额)"></el-table-column>
                                        <el-table-column prop="name" label="(数量)"></el-table-column>
                                        <el-table-column prop="name" label="(单位)"></el-table-column>
                                        <el-table-column prop="name" label="(重量)"></el-table-column>
                                        <el-table-column prop="name" label="(体积)"></el-table-column>
                                        <el-table-column prop="name" label="(分担金额)"></el-table-column>
                                    </el-table>
                                </template>
                            </el-tab-pane>
                        </el-tabs>
                    </el-col>
                </el-row>
                <el-row style="padding:20px 0 0 0; ">
                    <el-col :span="8">
                        <el-form-item label="制单人员">
                            <el-input size="small" v-model="form.name2" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="复核人员">
                            <el-input size="small" v-model="form.money" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">
                        <!-- warning -->
                        <el-dropdown split-button @click="handleClick">
                            功能
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>载入来源</el-dropdown-item>
                                <el-dropdown-item>自动分摊</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                    <!-- <el-col :span="8">
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">立即创建</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-col> -->
                </el-row>
            </el-form>
        </div>
    </el-card>
  </div>
</template>

<script>
//采购分摊页面
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      form: {
          name1: '',
          name2: '',
          region: '',
          date: '',
          money: '',
        },
        tableData: [{
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      onSubmit() {
        console.log('submit!');
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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