<!-- <h1>人员主文件设定</h1> -->
<template>
  <div>
    <commonHead></commonHead>
    <h3>人员主文件设定</h3>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      size="mini"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="人员编号">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1">
          <el-form-item>
            <el-button
              type="text"
              style="font-size:15px;position: relative;left: -70px;"
              @click="dialogFormVisible = true"
            >所属部门</el-button>
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
          <el-form-item label="人员姓名">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别">
            <el-select v-model="sex" placeholder="选择性别" style="width:100%;">
              <el-option label="男性" value="1"></el-option>
              <el-option label="女性" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="英文姓名">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="身份证号">
            <el-input v-model="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-tabs type="card">
        <el-tab-pane label="基本资料">
          <el-row :gutter="20">
            <el-col :span="1">
              <el-form-item>
                <el-button
                  type="text"
                  style="font-size:15px;position: relative;left: -70px;"
                  @click="dialogFormVisible1 = true"
                >就职状态</el-button>
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
                  @click="dialogFormVisible2 = true"
                >行事历</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item>
                <el-input v-model="input" style="position: relative;left: -45px;width: 112%;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="出生日期">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="政治面貌">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="婚姻状况">
                <el-select v-model="marriage" placeholder style="width:100%;">
                  <el-option label="丧偶" value="3"></el-option>
                  <el-option label="已婚" value="4"></el-option>
                  <el-option label="离婚" value="5"></el-option>
                  <el-option label="未婚" value="6"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="入职日期">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="血型">
                <el-select v-model="grouping" placeholder style="width:100%;">
                  <el-option label="RH-型" value="7"></el-option>
                  <el-option label="B型" value="8"></el-option>
                  <el-option label="C型" value="9"></el-option>
                  <el-option label="AB型" value="10"></el-option>
                  <el-option label="O型" value="11"></el-option>
                  <el-option label="RH+型" value="12"></el-option>
                  <el-option label="A型" value="13"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="离职日期">
                <el-date-picker
                  type="date"
                  v-model="data"
                  placeholder="选择日期"
                  style="width: 100%;"
                  disabled
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="籍贯">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="技术职称">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <el-form-item>
                <el-button
                  type="text"
                  style="font-size:15px;position: relative;left: -45px;"
                  @click="dialogFormVisible3 = true"
                >国籍</el-button>
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
                  style="color: rgb(96,98,102);font-size:15px;position: relative;left: -75px;"
                >中文职务</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item>
                <el-input v-model="input" style="position: relative;left: -45px;width: 112%;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="民族">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="英文职务">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <el-form-item>
                <el-button
                  type="text"
                  style="font-size:15px;position: relative;left: -45px;"
                  @click="dialogFormVisible4 = true"
                >职务</el-button>
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
                  style="font-size:15px;position: relative;left: -45px;"
                  @click="dialogFormVisible5 = true"
                >岗位</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item>
                <el-input v-model="input" style="position: relative;left: -45px;width: 112%;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系邮编">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系地址">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系电话">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="移动电话">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="薪资信息">
          <el-row :gutter="20">
            <el-col :span="1">
              <el-form-item>
                <el-button
                  type="text"
                  style="font-size:15px;position: relative;left: -75px;"
                  @click="dialogFormVisible6 = true"
                >薪资方案</el-button>
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
                  style="font-size:15px;position: relative;left: -75px;"
                  @click="dialogFormVisible7 = true"
                >传输科目</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item>
                <el-input v-model="input" style="position: relative;left: -45px;width: 112%;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="扣税方式">
                <el-select v-model="deduct" placeholder style="width:100%;">
                  <el-option label="依所得税额表计算" value="14"></el-option>
                  <el-option label="依固定税额缴扣" value="15"></el-option>
                  <el-option label="依固定税率缴扣" value="16"></el-option>
                  <el-option label="不带扣缴" value="17"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="发薪方式">
                <el-select v-model="pay" placeholder style="width:100%;">
                  <el-option label="现金" value="18"></el-option>
                  <el-option label="银行" value="19"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="其它资料">
          <el-row :gutter="20">
            <el-col :span="1">
              <el-form-item>
                <el-button
                  type="text"
                  style="font-size:15px;position: relative;left: -75px;"
                  @click="dialogFormVisible8 = true"
                >最高学历</el-button>
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
                  style="font-size:15px;position: relative;left: -75px;color: rgb(96,98,102);"
                >到期日期</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item>
                <el-date-picker
                  type="date"
                  style="position: relative;left: -45px;width: 112%;"
                  v-model="data"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="学位">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="入境日期">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="毕业学校">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="护照号码">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="所学专业">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同起始日期">
                <el-date-picker
                  type="date"
                  v-model="data"
                  placeholder="选择日期"
                  style="width: 100%;"
                  disabled
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="外语水平">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同终止日期">
                <el-date-picker
                  type="date"
                  v-model="data"
                  placeholder="选择日期"
                  style="width: 100%;"
                  disabled
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="体检日期">
                <el-date-picker type="date" v-model="data" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="合同期(长)" disabled>
                <el-input v-model="input" style="width: 44%;" disabled>0</el-input>年
                <el-input v-model="input" style="width: 44%;" disabled>0</el-input>月
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="通讯资料">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="电子邮件">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="现电话">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="户籍电话">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="现邮编">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="户籍邮编">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="现住址">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="户籍住址">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="紧急联系人">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="家庭电话">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="紧急联系邮编">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="家庭邮编">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="紧急联系电话">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="家庭住址">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="紧急联系住址">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="备注">
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
            <el-col :span="12">
              <el-form-item label="自定栏三">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="自定栏四">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="自定栏五">
                <el-input v-model="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="自定栏六">
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
        <el-dropdown-item disabled>人员相片设定</el-dropdown-item>
        <el-dropdown-item disabled>经历资料设定</el-dropdown-item>
        <el-dropdown-item disabled>证照资料设定</el-dropdown-item>
        <el-dropdown-item disabled>亲属资料设定</el-dropdown-item>
        <el-dropdown-item disabled>人员合同设定</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- <h1>对话框</h1> -->

    <el-dialog title="所属部门设定" :visible.sync="dialogFormVisible">
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
              <el-table-column prop="name" label="部门编号" width="180"></el-table-column>
              <el-table-column prop="date" label="部门名称" sortable width="180"></el-table-column>
            </el-table>
            <el-button type="primary" style="width: 40%;" size="mini" plain>显示字段设定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog title="就职状态设定" :visible.sync="dialogFormVisible1">
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
    <el-dialog title="行事历设定" :visible.sync="dialogFormVisible2">
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

    <el-dialog title="(国籍)地区设定" :visible.sync="dialogFormVisible3">
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

    <el-dialog title="职务基本资料" :visible.sync="dialogFormVisible4">
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
    <el-dialog title="岗位基本资料" :visible.sync="dialogFormVisible5">
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

    <el-dialog title="工资结构方案" :visible.sync="dialogFormVisible6">
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
    <el-dialog title="传输科目设定" :visible.sync="dialogFormVisible7">
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

    <el-dialog title="岗位基本资料" :visible.sync="dialogFormVisible5">
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

    <el-dialog title="薪资方案设定" :visible.sync="dialogFormVisible6">
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

    <el-dialog title="学历设定" :visible.sync="dialogFormVisible8">
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
              <el-table-column prop="name" label="学历编号" width="180"></el-table-column>
              <el-table-column prop="date" label="学历名称" sortable width="180"></el-table-column>
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
      pay: []
    };
  }
};
</script>
<style scoped>
.el-row {
  margin-bottom: 0px;
}
</style>
