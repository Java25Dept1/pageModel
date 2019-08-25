<!-- <h1>部门设定</h1> -->
<template>
  <div>
    <commonHead></commonHead>
    <h3>部门设定</h3>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      size="mini"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="部门编号">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="部门名称">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="英文名称">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="编制人数">
            男性
            <el-input v-model="sex" style="width: 41%;">0</el-input>女性
            <el-input v-model="sex1" style="width: 40.5%;">0</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1">
          <el-form-item>
            <el-button
              type="text"
              style="font-size:15px;position: relative;left: -70px;"
              @click="dialogFormVisible = true"
            >工资方案</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="input" style="position: relative;left: -45px;width: 112%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1">
          <el-form-item>
            <el-button
              type="text"
              style="font-size:15px;position: relative;left: -70px;"
              @click="dialogFormVisible1 = true"
            >行事历</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="input" style="position: relative;left: -45px;width: 112%;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注">
            <el-input v-model="input" type="textarea"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-dropdown style="boder:1px bule">
      <el-button
        size="mini"
        style="margin-left:25px;color:black;font-size: 10px;boder:1px dodgerblue solid;background-color: dodgerblue;"
        class="el-dropdown-link"
      >
        设定
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item disabled>业务员责任绩效设定</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- <h1>对话框</h1> -->

    <el-dialog title="工资方案设定" :visible.sync="dialogFormVisible">
      <el-form
        :label-position="labelPosition"
        label-width="70px"
        :model="formLabelAlign"
        size="mini"
      >
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item>
              <el-select v-model="value" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-input v-model="input1" name="input1" style="width:10%" size="mini" clearable></el-input>
              <el-button type="primary" size="mini" icon="el-icon-arrow-left" round></el-button>
              <el-button type="primary" size="mini" icon="el-icon-arrow-right" round></el-button>&nbsp;
              <el-checkbox v-model="checked" label="1">寻找同时选取</el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item>
              <el-select style="width: 30%" v-model="value" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-button type="primary" size="mini" icon="el-icon-arrow-up" round></el-button>
              <el-button type="primary" size="mini" icon="el-icon-arrow-down" round></el-button>
              <el-button type="info" @click="query()" plain>信息查询</el-button>
              <el-button type="info" plain>刷新</el-button>
              <el-button type="info" plain>取回</el-button>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item>
              <el-button type="primary" style="width:12%" plain>全选</el-button>
              <el-button type="primary" style="width:12%" plain>全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全选</el-button>
              <el-button type="primary" style="width:12%" plain>新增记录</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item>
              <el-table el-table :data="tableData" border style="width: 100%;height: 160px;">
                <el-table-column prop="date" label="(一)" sortable width="180"></el-table-column>
              </el-table>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-table el-table :data="tableData" border style="width: 100%;height: 130px;">
              <el-table-column prop="name" label="方案编号" width="180"></el-table-column>
              <el-table-column prop="date" label="方案名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog title="行事历方案设定" :visible.sync="dialogFormVisible1">
      <el-form
        :label-position="labelPosition"
        label-width="70px"
        :model="formLabelAlign"
        size="mini"
      >
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item>
              <el-select v-model="value" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-input v-model="input1" name="input1" style="width:10%" size="mini" clearable></el-input>
              <el-button type="primary" size="mini" icon="el-icon-arrow-left" round></el-button>
              <el-button type="primary" size="mini" icon="el-icon-arrow-right" round></el-button>&nbsp;
              <el-checkbox v-model="checked" label="1">寻找同时选取</el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item>
              <el-select style="width: 30%" v-model="value" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-button type="primary" size="mini" icon="el-icon-arrow-up" round></el-button>
              <el-button type="primary" size="mini" icon="el-icon-arrow-down" round></el-button>
              <el-button type="info" @click="query()" plain>信息查询</el-button>
              <el-button type="info" plain>刷新</el-button>
              <el-button type="info" plain>取回</el-button>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item>
              <el-button type="primary" style="width:12%" plain>全选</el-button>
              <el-button type="primary" style="width:12%" plain>全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全清</el-button>
              <el-button type="primary" style="width:12%" plain>以下全选</el-button>
              <el-button type="primary" style="width:12%" plain>新增记录</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item>
              <el-table el-table :data="tableData" border style="width: 100%;height: 160px;">
                <el-table-column prop="date" label="(一)" sortable width="180"></el-table-column>
              </el-table>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-table el-table :data="tableData" border style="width: 100%;height: 130px;">
              <el-table-column prop="name" label="行事历编号" width="180"></el-table-column>
              <el-table-column prop="date" label="行事历名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>
<style scoped>
h3 {
  text-align: center;
}
</style>
<script>
import commonHead from "../../../components/CommonHead.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    commonHead
  },
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisible1: false,
      input: "",
      sex: "",
      sex1: ""
    };
  }
};
</script>