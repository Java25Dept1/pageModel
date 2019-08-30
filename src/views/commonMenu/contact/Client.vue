<!-- <h1>客户主文件设定</h1> -->
<template>
  <div>
    <commonHead></commonHead>
    <h3>客户主文件设定</h3>
    <el-form
      :label-position="labelPosition"
      label-width="110px"
      :model="formLabelAlign"
      size="mini"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="客户编号">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1">
          <el-form-item>
            <el-button
              type="text"
              style="font-size:15px;position: relative;left: -70px;"
              @click="dialogFormVisible = true"
            >账款归属</el-button>
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
          <el-form-item label="客户全称">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1">
          <el-form-item>
            <el-button
              type="text"
              style="font-size:15px;position: relative;left: -40px;"
              @click="dialogFormVisible1 = true"
            >类别</el-button>
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
          <el-form-item label="客户简称">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1">
          <el-form-item>
            <el-button
              type="text"
              style="font-size:15px;position: relative;left: -40px;"
              @click="dialogFormVisible2 = true"
            >地区</el-button>
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
          <el-form-item label="英文全称">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1">
          <el-form-item>
            <el-button
              type="text"
              style="font-size:15px;position: relative;left: -40px;"
              @click="dialogFormVisible3 = true"
            >币别</el-button>
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
          <el-form-item label="英文简称">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-tabs type="card">
        <el-tab-pane label="基本资料">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="负责人">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <el-form-item>
                <el-button
                  type="text"
                  style="font-size:15px;position: relative;left: -70px;"
                  @click="dialogFormVisible4 = true"
                >业务人员</el-button>
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
              <el-form-item label="联系人">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="税务登记号">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="联系电话一">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="资本额">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="联系电话二">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="行业别">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="联系电话三">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="电子邮件">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="移动电话">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="网址">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="银行账号">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="传真号码">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="1">
              <el-form-item>
                <el-button
                  type="text"
                  style="font-size:15px;position: relative;left: -70px;"
                  @click="dialogFormVisible5 = true"
                >开户银行</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item>
                <el-input v-model="input" style="position: relative;left: -45px;width: 112%;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="销售信息">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="最初销售出库日">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="折数(%)">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="最初销售退货日">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="售价等级">
                <el-select v-model="pay" placeholder style="width:100%;">
                  <el-option label="建议售价" value="1"></el-option>
                  <el-option label="售价A" value="2"></el-option>
                  <el-option label="售价B" value="3"></el-option>
                  <el-option label="售价C" value="4"></el-option>
                  <el-option label="售价D" value="5"></el-option>
                  <el-option label="售价E" value="6"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="最近销售出库日">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="单价是否含税">
                <el-select v-model="pay1" placeholder style="width:100%;">
                  <el-option label="含税" value="1"></el-option>
                  <el-option label="未税" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="最近销售退货日">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="潜在客户编号">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="最近拜访日">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="客户建立日期">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="预约拜访日">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="终止交易日">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="收款信息">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="额度设定"></el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="账款信息"></el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="账款额度">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="期初预收款">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="剩余额度">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="期初应收款">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="收款条件">
                <el-select v-model="pay2" placeholder style="width:24%;">
                  <el-option label="货到" value="1"></el-option>
                  <el-option label="次月" value="2"></el-option>
                  <el-option label="月结" value="3"></el-option>
                  <el-option label="其它" value="4"></el-option>
                </el-select>
                <el-input v-model="input" style="width: 70%;"></el-input>天
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="期末预收款">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="每日结账号">
                <el-input v-model="input" style="width:94%;"></el-input>号
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="期末应收款">
                <el-input v-model="input" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="信用等级">
                <el-select v-model="pay3" style="width:100%;">
                  <el-option label="A" value="1"></el-option>
                  <el-option label="B" value="2"></el-option>
                  <el-option label="C" value="3"></el-option>
                  <el-option label="D" value="4"></el-option>
                  <el-option label="E" value="5"></el-option>
                  <el-option label="F" value="6"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <el-form-item>
                <el-button
                  type="text"
                  style="font-size:15px;position: relative;left: -100px;"
                  @click="dialogFormVisible6 = true"
                >预收账款科目</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item>
                <el-input v-model="input" style="position: relative;left: -43px;width: 112%;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <el-form-item>
                <el-button
                  type="text"
                  style="font-size:15px;position: relative;left: -645px;"
                  @click="dialogFormVisible7 = true"
                >发票类型</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item>
                <el-input
                  v-model="input"
                  style="position: relative;top:-50px;left: 1px;width: 112%;"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <el-form-item>
                <el-button
                  type="text"
                  style="font-size:15px;position: relative;top:-50px;left: -55px;"
                  @click="dialogFormVisible8 = true"
                >应收账款科目</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item>
                <el-input
                  v-model="input"
                  style="position: relative;top:-50px;left: 1px;width: 112%;"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="地址">
          <el-row :gutter="20">
            <el-table :data="tableData" height="250" border style="width: 100%">
              <el-table-column prop="date" label="地址编号" width="180"></el-table-column>
              <el-table-column prop="name" label="地址" width="180"></el-table-column>
              <el-table-column prop="address" label="邮政编码" width="180"></el-table-column>
              <el-table-column prop="many" label="联系人" width="180"></el-table-column>
              <el-table-column prop="name" label="联系人职称" width="180"></el-table-column>
              <el-table-column prop="address" label="联系电话" width="180"></el-table-column>
              <el-table-column prop="many" label="传真号码" width="180"></el-table-column>
              <el-table-column prop="name" label="行走路线" width="180"></el-table-column>
              <el-table-column prop="address" label="备注" width="180"></el-table-column>
            </el-table>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="其它">
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
            <el-col :span="24">
              <el-form-item label="备注">
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
        <el-dropdown-item disabled>期初账款设定</el-dropdown-item>
        <el-dropdown-item disabled>原厂物料设定</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown style="boder:1px bule">
      <el-button
        size="mini"
        style="margin-left:25px;color:black;font-size: 10px;boder:1px dodgerblue solid;background-color: dodgerblue;"
        class="el-dropdown-link"
      >
        功能
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item disabled>写信</el-dropdown-item>
        <el-dropdown-item disabled>上网</el-dropdown-item>
        <el-dropdown-item disabled>历史交易查询</el-dropdown-item>
        <el-dropdown-item disabled>账额数据校验</el-dropdown-item>
        <el-dropdown-item disabled>新增拜访记录</el-dropdown-item>
        <el-dropdown-item disabled>授权用户查询</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- <h1>对话框</h1> -->

    <el-dialog title="客户主文件设定" :visible.sync="dialogFormVisible">
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
              <el-table-column prop="name" label="客户编号" width="180"></el-table-column>
              <el-table-column prop="date" label="客户名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog title="客户类别设定" :visible.sync="dialogFormVisible1">
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

    <el-dialog title="(国籍)地区设定" :visible.sync="dialogFormVisible2">
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
              <el-table-column prop="name" label="地区编号" width="180"></el-table-column>
              <el-table-column prop="date" label="地区名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog title="币别设定" :visible.sync="dialogFormVisible3">
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
              <el-table-column prop="name" label="币别编号" width="180"></el-table-column>
              <el-table-column prop="date" label="币别简称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog title="人员主文件设定" :visible.sync="dialogFormVisible4">
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
              <el-table-column prop="name" label="人员编号" width="180"></el-table-column>
              <el-table-column prop="date" label="人员名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog title="银行设定" :visible.sync="dialogFormVisible5">
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
              <el-table-column prop="name" label="银行编号" width="180"></el-table-column>
              <el-table-column prop="date" label="银行名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog title="会计科目" :visible.sync="dialogFormVisible6">
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
              <el-table-column prop="name" label="科目编号" width="180"></el-table-column>
              <el-table-column prop="date" label="科目名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog title="发票类型设定" :visible.sync="dialogFormVisible7">
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
              <el-table-column prop="name" label="编号" width="180"></el-table-column>
              <el-table-column prop="date" label="名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog title="会计科目" :visible.sync="dialogFormVisible8">
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
              <el-table-column prop="name" label="科目编号" width="180"></el-table-column>
              <el-table-column prop="date" label="科目名称" sortable width="180"></el-table-column>
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
      dialogFormVisible4: false,
      dialogFormVisible5: false,
      dialogFormVisible6: false,
      dialogFormVisible7: false,
      dialogFormVisible8: false,
      input: "",
      sex: [],
      data: "",
      marriage: [],
      grouping: [],
      deduct: [],
      pay: [],
      pay1: [],
      pay2: [],
      pay3: [],
      tableData: [
        {
          date: "ss",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          many: "1212"
        }
      ]
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
<style scoped>
.el-row {
  margin-bottom: 0px;
}
</style>