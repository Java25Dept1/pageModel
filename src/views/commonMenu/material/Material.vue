<!-- <h1>物料主文件设定</h1> -->
<template>
  <div>
    <commonHead></commonHead>
    <h3>物料主文件设定</h3>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      size="mini"
    >
      <el-row :gutter="15">
        <el-col :span="12">
          <el-form-item label="物料编号">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1">
          <el-form-item>
            <el-button
              type="text"
              style="font-size:15px;position: relative;left: -70px;"
              @click="dialogFormVisible = true"
            >物料类别</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="input" style="position: relative;left: -45px;width: 112%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="物料名称">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1">
          <el-form-item>
            <el-button
              type="text"
              style="font-size:15px;position: relative;left: -70px;"
              @click="dialogFormVisible1 = true"
            >计量单位</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item>
            <el-input v-model="input" style="position: relative;left: -45px;width: 112%;"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="规格型号">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="条形码编号">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="英文品名">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-tabs type="card">
        <el-tab-pane label="基本资料">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="建议售价">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="使用币别">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="售价A">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="物料形态">
                <el-select v-model="marriage" placeholder style="width:100%;">
                  <el-option label="半成品" value="1"></el-option>
                  <el-option label="成品" value="2"></el-option>
                  <el-option label="采购件" value="3"></el-option>
                  <el-option label="组合品" value="4"></el-option>
                  <el-option label="非库存品(不管数量/不管成本)" value="5"></el-option>
                  <el-option label="非库存品(不管数量/管成本)" value="6"></el-option>
                  <el-option label="易耗品(管数量/不管成本)" value="7"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="售价B">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="单价是否含税">
                <el-select v-model="grouping" placeholder style="width:90%;">
                  <el-option label="未含税" value="8"></el-option>
                  <el-option label="含税" value="9"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="售价C">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <el-form-item>
                <el-button
                  type="text"
                  style="font-size:15px;position: relative;left: -45px;"
                  @click="dialogFormVisible2 = true"
                >税目</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item>
                <el-input v-model="input" style="position: relative;left: -45px;width: 112%;"></el-input>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="售价D">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="税率(%)">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="售价E">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="采购提前期">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="标准进价">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <el-form-item>
                <el-button
                  type="text"
                  style="font-size:15px;position: relative;left: -75px;"
                  @click="dialogFormVisible3 = true"
                >主供应商</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item>
                <el-input v-model="input" style="position: relative;left: -45px;width: 112%;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item style="padding-left:15px;" label="使用批号设定">
                <el-col :span="24">
                  <el-checkbox v-model="checkList" label="使用批号管理"></el-checkbox>
                  <el-checkbox v-model="checkList" label="使用出厂日期"></el-checkbox>
                  <el-checkbox v-model="checkList" label="使用有效日期"></el-checkbox>
                  <span style="padding-left:45px;">有效天数&nbsp;&nbsp;</span>
                  <el-input v-model="input" style="width:30%;"></el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="存量总信息">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="初期设定"></el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="当前信息"></el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="安全存量">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="低于安全存量">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="期初总数量">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="现有总数量">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="平均成本">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="现有平均成本">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="标准成本">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="标准总成本">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="初期总成本">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="现行总成本">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>

        <el-tab-pane label="存量明细信息">
          <el-row :gutter="20">
            <el-table :data="tableData" height="250" border style="width: 100%">
              <el-table-column prop="date" label="仓库编号" width="180"></el-table-column>
              <el-table-column prop="name" label="仓库名称" width="180"></el-table-column>
              <el-table-column prop="address" label="(期初存量)"></el-table-column>
              <el-table-column prop="many" label="(现有数量)"></el-table-column>
            </el-table>
            <el-col :span="5">
              <el-form-item>
                <el-input value="合计：" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item>
                <el-input v-model="input" style="width: 50%;" disabled></el-input>
                <el-input v-model="input" style="width: 50%;" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>

        <el-tab-pane label="交易资料">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="初期设定"></el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="当前信息"></el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="最初出库日">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="最近出库日">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="最初入库日">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="最近入库日">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="呆滞起计天数">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="停用日期">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="物料描述">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="自定栏一">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="自定栏二">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
       </el-row>
       <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="物料说明">
                <el-input v-model="input" type="textarea"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
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
        <el-dropdown-item disabled>物料期初设定</el-dropdown-item>
        <el-dropdown-item disabled>期初批号设定</el-dropdown-item>
        <el-dropdown-item disabled>原厂物料设定</el-dropdown-item>
        <el-dropdown-item disabled>物料组合设定</el-dropdown-item>
        <el-dropdown-item disabled>物料图片设定</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown style="boder:1px bule">
      <el-button
        size="mini"
        style="color:black;font-size: 10px;boder:1px dodgerblue solid;background-color: dodgerblue;"
        class="el-dropdown-link"
      >
        功能
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item disabled>条码打印</el-dropdown-item>
        <el-dropdown-item disabled>询价查询</el-dropdown-item>
        <el-dropdown-item disabled>物料数据校正</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- <h1>对话框</h1> -->

    <el-dialog title="物料类别设定" :visible.sync="dialogFormVisible">
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
              <el-table-column prop="name" label="类别编号" width="180"></el-table-column>
              <el-table-column prop="date" label="类别名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog title="计量单位设定" :visible.sync="dialogFormVisible1">
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
              <el-table-column prop="name" label="单位编号" width="180"></el-table-column>
              <el-table-column prop="date" label="单位名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog title="税目设定" :visible.sync="dialogFormVisible2">
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
              <el-table-column prop="name" label="税目编号" width="180"></el-table-column>
              <el-table-column prop="date" label="税目名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog title="供应商主文件设定" :visible.sync="dialogFormVisible3">
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
              <el-table-column prop="name" label="供应商编号" width="180"></el-table-column>
              <el-table-column prop="date" label="供应商名称" sortable width="180"></el-table-column>
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
      dialogFormVisible2: false,
      dialogFormVisible3: false,
      input: "",
      data: "",
      marriage: "",
      grouping: "",
      checkList: [],
      tableData: [
        {
          date: "ss",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          many: "1212"
        }
      ]
    };
  }
};
</script>
<style scoped>
.el-row {
    margin-bottom: 0px;
}
</style>