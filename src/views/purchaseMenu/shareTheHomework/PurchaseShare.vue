<template>
  <div>
    <commonHead></commonHead>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="el-icon-star-on">采购分摊页面</span>
      </div>
      <div style="padding: 0 20px; " v-for="(i,index) in this.pageInfo.list">
        <el-form ref="formref" :model="stockapportion" label-width="150px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="单据日期" prop="appdate">
                <el-date-picker
                  v-model="i.appdate"
                  type="date"
                  style="width: 100%;"
                  placeholder="选择日期时间"
                  align="right"
                  size="small"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="单据号码" prop="appid">
                <el-input size="small" :disabled="true" v-model="i.appid" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10"></el-col>
            <el-col :span="8">
              <el-form-item label="分摊方式" prop="wisname">
                <el-select
                  size="small"
                  style="width: 100%;"
                  v-model="i.wisname"
                  placeholder="请选择分摊方式"
                >
                  <el-option label="按金额" value="按金额"></el-option>
                  <el-option label="按数量" value="按数量"></el-option>
                  <!-- <el-option label="按材积" value="wood"></el-option>
                  <el-option label="按重量" value="weight"></el-option>-->
                </el-select>
              </el-form-item>
            </el-col>
            <!-- <el-col :span="8">
              <el-form-item label="凭证编号">
                <el-input size="small" v-model="i.appid" clearable></el-input>
              </el-form-item>
            </el-col>-->
            <el-col :span="8">
              <el-form-item label="待摊金额本位币" prop="appamtmoney">
                <el-input size="small" v-model="i.appamtmoney"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-tabs type="border-card">
                <el-tab-pane>
                  <span slot="label">
                    <i class="el-icon-date"></i> 费用明细
                  </span>
                  <template>
                    <el-table
                      :data="i.details"
                      height="250"
                      border
                      style="width: 100%"
                    >
                      <!-- contenteditable="true" -->
                      <el-table-column type="index" label="(栏号)" width="70"></el-table-column>
                      <el-table-column prop="adeexesid" label="费用编号"></el-table-column>
                      <el-table-column prop="adeexesname" label="(费用名称)"></el-table-column>
                      <el-table-column prop="adcurrency" label="币别"></el-table-column>
                      <el-table-column prop="adstandardcurrency" label="汇率"></el-table-column>
                      <el-table-column prop="adeamtmoney" label="金额">
                        <template slot-scope="temp">
                          <el-input v-model="temp.row.adeamtmoney" ></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column prop="adstandardcurrency" label="(金额本位币)"></el-table-column>
                    </el-table>
                  </template>
                </el-tab-pane>
                <el-tab-pane label="分摊结果">
                  <template>
                    <el-table :data="i.result" height="250" border style="width: 100%">
                      <el-table-column type="index" label="(栏号)" width="70"></el-table-column>
                      <el-table-column prop="storageid" label="采购入库单号">
                          <template slot-scope="temp">
                            <el-input v-model="temp.row.storageid" ></el-input>
                          </template>
                      </el-table-column>
                      <el-table-column prop="matid" label="物料编号">
                          <template slot-scope="temp">
                            <el-input v-model="temp.row.matid" ></el-input>
                          </template>
                      </el-table-column>
                      <el-table-column prop="matname" label="(物料名称)"></el-table-column>
                      <el-table-column prop="matspec" label="(规格型号)"></el-table-column>
                      <el-table-column prop="stockprice" label="(采购金额)"></el-table-column>
                      <el-table-column prop="atinum" label="(数量)"></el-table-column>
                      <el-table-column prop="ademoney" label="(分摊金额)"></el-table-column>
                    </el-table>
                  </template>
                </el-tab-pane>
              </el-tabs>
            </el-col>
          </el-row>
          <el-row style="padding:20px 0 0 0; ">
            <el-col :span="8">
              <el-form-item label="制单人员" prop="makeperson">
                <el-input size="small" v-model="i.makeperson"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="复核人员" prop="auditingperson">
                <el-input size="small" v-model="i.auditingperson"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <!-- warning -->
              <el-dropdown split-button>
                功能
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>载入来源</el-dropdown-item>
                  <el-dropdown-item>自动分摊</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
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
import commonHead from "../../../components/CommonHead.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    commonHead
  },
  data() {
    //这里存放数据
    return {
      pageInfo: {}, //集合渲染循环操作
      stockapportion: [
        //用于对象增改操作
        {
          appid: "",
          appdate: "",
          wisname: "",
          appamtmoney: "",
          makeperson: "",
          auditingperson: "",
          estate: "",
          result: [
            {
              atiid: "",
              atisequ: "",
              storageid: "",
              matid: "",
              matname: "",
              matspec: "",
              stockprice: 0.0,
              atinum: "",
              ademoney: 0.0,
              enables: ""
            }
          ],
          details: [
            {
              adeid: "",
              adesequ: "",
              adeexesid: "",
              adeexesname: "",
              adeamtmoney: 0.0,
              adcurrency: "",
              adstandardcurrency: 1.0,
              enables: ""
            }
          ]
        }
      ],
      pickerOptions: {
        //针对于时间做的参数
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
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to, from) {
      this.StockApprotionPage(1, 1);
    }
  },
  //方法集合
  methods: {
    getStockOrder(index) {
      if (index == 1) {
        //第一页
        if (this.pageInfo.isFirstPage) {
          this.$alert("已经是第一页了！", "系统提示");
          return;
        }
        this.StockApprotionPage(1, 1);
      } else if (index == 2) {
        //上一页
        if (this.pageInfo.hasPreviousPage) {
          this.StockApprotionPage(this.pageInfo.prePage, 1);
        } else {
          this.$alert("暂无上一页", "系统提示");
        }
      } else if (index == 3) {
        //下一页
        if (this.pageInfo.hasNextPage) {
          this.StockApprotionPage(this.pageInfo.nextPage, 1);
        } else {
          this.$alert("暂无下一页", "系统提示");
        }
      } else if (index == 4) {
        //最后一页
        if (this.pageInfo.isLastPage) {
          this.$alert("已经是最后一页了！", "系统提示");
          return;
        }
        this.StockApprotionPage(this.pageInfo.lastPage, 1);
      } else if (index == 5) {
        //添加
         this.stockapportion=[];
        this.stockapportion.push([
        //用于对象增改操作
        {
          appid: "",
          appdate: new date(),
          wisname: "",
          appamtmoney: 0.00,
          makeperson: "",
          auditingperson: "",
          estate: 1
        }
      ])
      } else if (index == 6) {
        //修改
        console.log(JSON.stringify(this.stockapportion));
        // return;
        let _this = this;
        this.$axios
          .put(
            `http://localhost:8080/api/apportions/apportion`,
            _this.stockapportion
          )
          .then(resp => {
            if (resp.data.code == "200") {
              this.$message({
                type: "success",
                message: "修改成功"
              });
              _this.StockApprotionPage(this.pageInfo.pageNum, 1);
            }
          })
          .catch(e => {
            alert(e);
          });
      } else if (index == 7) {
        //保存
        alert("保存");
      } else if (index == 8) {
        //删除
        let _this = this;
        if (confirm("确定删除吗？")) {
          this.$axios
            .delete(
              `http://localhost:8080/api/apportions/apportion/${this.stockapportion.appid}`
            )
            .then(resp => {
              // console.log(JSON.stringify(resp));
              if (resp.data.code == 200) {
                this.$message({
                  type: "success",
                  message: "删除成功"
                });
                _this.StockApprotionPage(1, 1);
              }
            })
            .catch(e => {
              console.log(e);
            });
        }
      }
    },
    StockApprotionPage(p, s) {
      let _this = this;
      const loading = this.$loading({
        lock: true,
        text: "努力更新中....",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.5)"
      });
      //ajax
      setTimeout(() => {
        _this.$axios
          .get(`http://localhost:8080/api/apportions/apportion/${p}/${s}`)
          .then(resp => {
            _this.pageInfo = resp.data;
            _this.stockapportion = resp.data.list[0];
            console.log("数据：" + JSON.stringify(resp.data));
            loading.close(); //关闭加载块【非常重要】
          })
          .catch(e => {
            alert(e);
          });
      }, 500);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.StockApprotionPage(1, 1);
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