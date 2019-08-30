<template>
  <div>
    <el-container>
      <el-header style="backgrand:red">数据查询 - 客户文件设定</el-header>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="一般式" name="first">
            <el-checkbox v-model="checked" label="1">A.币别</el-checkbox>
            <br />
            <el-input v-model="bbinputA" style="width:375px" clearable></el-input>TO
            <el-input v-model="bbinputB" style="width:375px" clearable></el-input>
            <el-divider></el-divider>
            <el-checkbox v-model="checked" label="1">A.客户编号</el-checkbox>
            <br />
            <el-input v-model="bhinputA" style="width:375px" clearable></el-input>TO
            <el-input v-model="bhinputB" style="width:375px" clearable></el-input>
            <el-divider></el-divider>
            <el-checkbox v-model="checked" label="1">A.客户简称</el-checkbox>
            <br />
            <el-input v-model="jcinputA" style="width:375px" clearable></el-input>TO
            <el-input v-model="jcinputB" style="width:375px" clearable></el-input>
            <br />
            <br />
            <el-button type="info" plain>条件字段选择</el-button>
          </el-tab-pane>
          <el-tab-pane label="进阶" name="second">
            <el-select v-model="val" clearable placeholder="请选择">
              <el-option
                v-for="item in xz"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="val2" clearable placeholder="请选择">
              <el-option
                v-for="item in xz2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="val3" clearable placeholder="请选择">
              <el-option
                v-for="item in xz3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input v-model="inputD" style="width:365px" clearable></el-input>
            <br><br>
            <el-row :gutter="20">
              <el-col :span="16">
                <el-table el-table :data="tableData" border style="width: 100%">
                  <!-- <el-table-column prop="date" label="(一)" sortable width="180"></el-table-column> -->
                </el-table>
              </el-col>
              <el-col :span="6">
                <el-button type="info" plain>新增</el-button>
                <br />
                <br />
                <el-button type="info" plain>修改</el-button>
                <br />
                <br />
                <el-button type="info" plain>删除</el-button>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="条件式" name="third">
                          <el-select v-model="val" clearable placeholder="请选择">
              <el-option
                v-for="item in xz"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="val2" clearable placeholder="请选择">
              <el-option
                v-for="item in xz2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="val3" clearable placeholder="请选择">
              <el-option
                v-for="item in xz3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-tab-pane>
          <el-divider>数据查询</el-divider>
          <el-row :gutter="20">
            <el-col :span="16">
              <el-table el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="(一)" sortable width="180"></el-table-column>
              </el-table>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" style="width:200px" plain>查询</el-button>
              <br />
              <br />
              <el-button type="primary" style="width:200px" plain>显示字段</el-button>
              <br />
              <br />
              <el-button type="primary" style="width:200px" plain>取回</el-button>
              <br />
            </el-col>
          </el-row>
        </el-tabs>
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
      xz: [
        {
          value: "选项1",
          label: "并且"
        },
        {
          value: "选项2",
          label: "或者"
        }
      ],
      xz2: [
        {
          value: "选项1",
          label: "A.账款归属"
        }
      ],
      xz3: [
        {
          value: "选项1",
          label: "等于"
        },
        {
          value: "选项2",
          label: "大于"
        },
        {
          value: "选项3",
          label: "大于等于"
        },
        {
          value: "选项4",
          label: "小于"
        },
        {
          value: "选项5",
          label: "小于等于"
        },
        {
          value: "选项6",
          label: "不等于"
        },
        {
          value: "选项7",
          label: "包含"
        }
      ],
      val: "",
      val2: "",
      val3: "",
      bbinputA: "",
      bbinputB: "",
      bhinputA: "",
      bhinputB: "",
      jcinputA: "",
      jcinputB: "",
      inputD: ""
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
.el-header {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>