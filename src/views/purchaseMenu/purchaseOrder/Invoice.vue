<template>
  <div>
    <div class="container col-lg-12 text-center">
      <div class="row" style="border:1px dashed rgba(170,170,170,0.8);padding-bottom:10px">
        <form class="form-horizontal">
            <div class="col-md-3 demo-input-suffix">
               <label> 单据号码</label>
              <el-input placeholder="单据号码" v-model="input"></el-input>
            </div>
            <div class="col-md-3">
                <label>核对状态</label>
              <el-select v-model="value" clearable placeholder="请选择状态" slot="prefix" class="el-input el-input--prefix">
                <el-option key="已核对" label="已核对" value="已核对">
                </el-option>
                <el-option key="未核对" label="未核对" value="未核对">
                </el-option>
              </el-select>
            </div>
            <!-- 根据供应商查询订单 -->
            <div class="col-md-3">
              <label>供应商</label>
              <el-input placeholder="供应商" v-model="input2">
                <i class="el-icon-search el-input__icon"
                  slot="suffix"
                  @click="dialogFormVisible = true">
                </i>
              </el-input>
              <!-- 弹出框=>加载供应商 -->
              <el-dialog  title="供应商" :visible.sync="dialogFormVisible">
                <!-- 供应商查询显示框 -->
                <el-container >
                    <el-header class="col-md-12" >
                  <input type="button" value="确定" class="btn btn-info col-md-1" @click="dialogFormVisible = false" >
                  <input type="button" value="取消"  class="btn btn-info col-md-1" @click="dialogFormVisible = false" style="margin-left:5px">
                    <div class="form-group col-md-10">
                      <label>查询条件:</label>
					              <el-select v-model="value1" placeholder="请选择" style="width:25%" size="small">
                          <el-option key="客户名称" label="客户名称" value1="客户名称"></el-option>
                          <el-option key="地区" label="地区" value1="地区"></el-option>
                          <el-option key="类别" label="类别" value1="类别"></el-option>
                        </el-select>
                        <el-select v-model="value2" placeholder="请选择" style="width:20%" size="small">
                          <el-option key="模糊" label="模糊" value2="模糊"></el-option>
                          <el-option key="等于" label="等于" value2="等于"></el-option>
                          <el-option key="不等于" label="不等于" value2="不等于"></el-option>
                        </el-select>
                        <input type="text" class="form-control" style="width:25%;display:inline;margin-right:5px"/>
                        <button class="btn btn-danger">查询</button>
                    </div>
                    </el-header>
                     <el-container>
                    <el-aside width="200px" style="border:1px solid rgba(225,225,225,0.9) ">
                        <el-menu  default-active="1-4-1"  
					 class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                         :default-openeds="opens">
                           <el-submenu index="1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>往来单位</span>
                            </template>
                             <el-submenu index="1-1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>客户</span>
                            </template>
                            <el-menu-item index="1-1-1">华北</el-menu-item>
                            <el-menu-item index="1-1-2">华中</el-menu-item>
                            <el-menu-item index="1-1-3">华南</el-menu-item>
                            </el-submenu>
                            <el-submenu index="1-2">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>供应商</span>
                            </template>
                             <el-menu-item index="1-2-1">原材料供应商</el-menu-item>
                             <el-menu-item index="1-2-2">零件供应商</el-menu-item>
                            </el-submenu>
                            </el-submenu>
                        </el-menu>
                  </el-aside>
                    <el-main height="">
                       <el-table
                          ref="singleTable"
                          :data="tableData"
                          highlight-current-row
                          @current-change="handleCurrentChange"
                          style="width: 100%" :span-method="arraySpanMethod">
                          <el-table-column
                            type="index"
                            label="序号"
                            width="50">
                          </el-table-column>
                          <el-table-column
                            property="date"
                            label="日期"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            property="name"
                            label="公司名"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            property="address"
                            label="地址">
                          </el-table-column>
                        </el-table>
                            <el-pagination
                              background
                              layout="prev, pager, next"
                              :total="1000" style="margin-top:20%;background:rgba(150,180,200,0.3)">
                            </el-pagination> 
                    </el-main>
                  </el-container>
                </el-container>
              </el-dialog>
            </div>

            <!-- 根据采购员查询订单 -->
            <div class="col-md-3">
                <label>采购员</label>
              <el-input placeholder="采购员" v-model="input3">
                <i class="el-icon-search el-input__icon"
                  slot="suffix"
                  @click="dialogFormVisible2 = true">
                </i>
              </el-input>
              <!-- 弹出框=>加载采购员 -->
              <el-dialog title="采购员" :visible.sync="dialogFormVisible2">
                <el-container >
                    <el-header class="col-md-12" >
                  <input type="button" value="确定" class="btn btn-info col-md-1" @click="dialogFormVisible2 = false" >
                  <input type="button" value="取消"  class="btn btn-info col-md-1" @click="dialogFormVisible2 = false" style="margin-left:5px">
                    <div class="form-group col-md-10">
                      <label>查询条件:</label>
					              <el-select v-model="value1" placeholder="请选择" style="width:25%" size="small">
                          <el-option key="姓名" label="姓名" value1="姓名"></el-option>
                          <el-option key="部门" label="部门" value1="部门"></el-option>
                          <el-option key="职务" label="职务" value1="职务"></el-option>
                        </el-select>
                        <el-select v-model="value2" placeholder="请选择" style="width:20%" size="small">
                          <el-option key="模糊" label="模糊" value2="模糊"></el-option>
                          <el-option key="等于" label="等于" value2="等于"></el-option>
                          <el-option key="不等于" label="不等于" value2="不等于"></el-option>
                        </el-select>
                        <input type="text" class="form-control" style="width:25%;display:inline;margin-right:5px"/>
                        <button class="btn btn-danger">查询</button>
                    </div>
                    </el-header>
                     <el-container>
                    <el-aside width="200px" style="border:1px solid rgba(225,225,225,0.9) ">
                        <el-menu  default-active="1-4-1"  
					 class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                         :default-openeds="opens">
                           <el-submenu index="1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>方向</span>
                            </template>
                             <el-submenu index="1-1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>部门</span>
                            </template>
                            <el-menu-item index="1-1-1">采购部</el-menu-item>
                            <el-menu-item index="1-1-2">销售部</el-menu-item>
                            <el-menu-item index="1-1-3">市场部</el-menu-item>
                            </el-submenu>
                            <el-submenu index="1-2">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>职务</span>
                            </template>
                             <el-menu-item index="1-2-1">采购员</el-menu-item>
                             <el-menu-item index="1-2-2">直销员</el-menu-item>
                            </el-submenu>
                            </el-submenu>
                        </el-menu>
                  </el-aside>
                    <el-main height="">
                       <el-table
                          ref="singleTable"
                          :data="tableData"
                          highlight-current-row
                          @current-change="handleCurrentChange"
                          style="width: 100%" :span-method="arraySpanMethod">
                          <el-table-column
                            type="index"
                            label="序号"
                            width="50">
                          </el-table-column>
                          <el-table-column
                            property="date"
                            label="日期"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            property="name"
                            label="姓名"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            property="address"
                            label="地址">
                          </el-table-column>
                        </el-table>
                            <el-pagination
                              background
                              layout="prev, pager, next"
                              :total="1000" style="margin-top:20%;background:rgba(150,180,200,0.3)">
                            </el-pagination> 
                    </el-main>
                  </el-container>
                </el-container>
              </el-dialog>
            </div>
             <!-- 根据采购日期查询订单 -->
            <div class="col-md-6" >
                <label>开票时间</label>
                <div class="input-with-select el-input el-input--prefix">
              <el-date-picker
                v-model="valueDate"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="left" style="width:100%">
              </el-date-picker>
                </div>
            </div>
            <div class="col-md-6" >
                <label style="height:30%;width:5px;"></label>
                <div class="el-input el-input--prefix">
                    <el-button type="primary" :loading="false">查询</el-button>
                </div>
            </div>
        </form>
      </div>
      <div class="row" style="margin-top:20px;">
        <input
          class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
          value="第一条"
          readonly="true"
          @click="getStockOrder(1)"
        />
        <input
          class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
          value="下一条"
          readonly="true"
          @click="
            getStockOrder(
              pageInfo.hasNextPage ? pageInfo.nextPage : pageInfo.pages
            )
          "
        />
        <input
          class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
          value="上一条"
          readonly="true"
          @click="
            getStockOrder(pageInfo.hasPreviousPage ? pageInfo.prePage : 1)
          "
        />
        <input
          class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
          value="最后一条"
          readonly="true"
          @click="getStockOrder(pageInfo.pages)"
        />
        <input
          class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
          value="添加"
          disabled="true"
        />
        <input
          class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
          value="修改"
          @click="update"
          readonly="true"
        />
        <input
          class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
          value="保存"
          readonly="true"
        />
        <input
          class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
          value="删除"
          @click="deleteStockOrder"
          readonly="true"
        />
      </div>
    </div>
    <table class="table table-hover table-striped  text-center">
      <caption class="text-center">
        <h3>采购发票</h3>
      </caption>
      <thead>
        <tr>
          <td colspan="4">
            <label style="width:20%;"> 供应商:</label
            ><input
              v-model="pageInfo.list[0].tbCustomer"
              class="form-control"
              style="width:70%;display:inline"
              :disabled="isupdate" @dblclick="dialogFormVisible3=true"
            />
          </td>
          <!-- 弹出框=>加载供应商 -->
              <el-dialog  title="供应商" :visible.sync="dialogFormVisible3">
                <!-- 供应商查询显示框 -->
                <el-container >
                    <el-header class="col-md-12" >
                  <input type="button" value="确定" class="btn btn-info col-md-1" @click="dialogFormVisible3 = false" >
                  <input type="button" value="取消"  class="btn btn-info col-md-1" @click="dialogFormVisible3 = false" style="margin-left:5px">
                    <div class="form-group col-md-9">
                      <label>查询条件:</label>
					              <el-select v-model="value1" placeholder="请选择" style="width:25%" size="small">
                          <el-option key="客户名称" label="客户名称" value1="客户名称"></el-option>
                          <el-option key="地区" label="地区" value1="地区"></el-option>
                          <el-option key="类别" label="类别" value1="类别"></el-option>
                        </el-select>
                        <el-select v-model="value2" placeholder="请选择" style="width:20%" size="small">
                          <el-option key="模糊" label="模糊" value2="模糊"></el-option>
                          <el-option key="等于" label="等于" value2="等于"></el-option>
                          <el-option key="不等于" label="不等于" value2="不等于"></el-option>
                        </el-select>
                        <input type="text" class="form-control" style="width:25%;display:inline;margin-right:5px"/>
                        <button class="btn btn-danger">查询</button>
                    </div>
                    </el-header>
                     <el-container>
                    <el-aside width="200px" style="border:1px solid rgba(225,225,225,0.9) ">
                        <el-menu  default-active="1-4-1"  
					 class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                         :default-openeds="opens">
                           <el-submenu index="1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>往来单位</span>
                            </template>
                             <el-submenu index="1-1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>客户</span>
                            </template>
                            <el-menu-item index="1-1-1">华北</el-menu-item>
                            <el-menu-item index="1-1-2">华中</el-menu-item>
                            <el-menu-item index="1-1-3">华南</el-menu-item>
                            </el-submenu>
                            <el-submenu index="1-2">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>供应商</span>
                            </template>
                             <el-menu-item index="1-2-1">原材料供应商</el-menu-item>
                             <el-menu-item index="1-2-2">零件供应商</el-menu-item>
                            </el-submenu>
                            </el-submenu>
                        </el-menu>
                  </el-aside>
                    <el-main height="">
                       <el-table
                          ref="singleTable"
                          :data="tableData"
                          highlight-current-row
                          @current-change="handleCurrentChange"
                          style="width: 100%" :span-method="arraySpanMethod">
                          <el-table-column
                            type="index"
                            label="序号"
                            width="50">
                          </el-table-column>
                          <el-table-column
                            property="date"
                            label="日期"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            property="name"
                            label="公司名"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            property="address"
                            label="地址">
                          </el-table-column>
                        </el-table>
                            <el-pagination
                              background
                              layout="prev, pager, next"
                              :total="1000" style="margin-top:20%;background:rgba(150,180,200,0.3)">
                            </el-pagination> 
                    </el-main>
                  </el-container>
                </el-container>
              </el-dialog>


          <td colspan="3">
            <label style="width:20%;"> 单据号码:</label
            ><input
              v-model="pageInfo.list[0].tbBillno"
              class="form-control"
              style="width:70%;display:inline"
              disabled="true"
            />
          </td>
        </tr>
        <tr>
          <td colspan="4" style="border:none">
            <label style="width:20%;">单据类型:</label
            ><select class="form-control"
              style="width:70%;display:inline"
              :disabled="isupdate">
              <option>采购发票</option>
              <option>退货折让证明</option>
            </select>
          </td>

          <td colspan="3" style="border:none">
            <label style="width:20%;"> 单据日期:</label
            ><input
              v-model="pageInfo.list[0].tbBilldate"
              class="form-control"
              style="width:70%;display:inline"
              :disabled="isupdate"
            />
          </td>
        </tr>
        <tr>
          <td colspan="4" style="border:none">
            <label style="width:20%;"> 采购核对状态:</label
            ><select class="form-control"
              style="width:70%;display:inline"
              :disabled="isupdate">
              <option>已核对</option>
              <option>未核对</option>
            </select>
          </td>

          <td colspan="3" style="border:none">
            <label style="width:20%;"> 币别:</label
            ><input
              value="RMB 人民币"
              class="form-control"
              style="width:70%;display:inline"
              :disabled="true"
            />
          </td>
        </tr>
        <tr>
          <td colspan="4" style="border:none">
            <label style="width:20%;"> 单价是否含税:</label
            >
            <select class="form-control"
              style="width:70%;display:inline"
              :disabled="isupdate">
              <option>未税</option>
              <option>含税</option>
            </select>
          </td>

          <td colspan="3" style="border:none">
            <label style="width:20%;"> 汇率:</label
            ><input
              value="1.0000"
              class="form-control"
              style="width:70%;display:inline"
              :disabled="true"
            />
          </td>
        </tr>
         <tr>
          <td colspan="4" style="border:none">
            <label style="width:20%;"> 发票类型:</label
            >
            <input
             value="增值税务发票"
              class="form-control"
              style="width:70%;display:inline"
              :disabled="isupdate" @dblclick="dialogFormVisible5=true"
            />
          </td>
          <!-- 弹出框=>加载仓库-->
              <el-dialog  title="发票类型" :visible.sync="dialogFormVisible5">
                <!-- 仓库查询显示框 -->
                <el-container >
                    <el-header class="col-md-12" >
                  <input type="button" value="确定" class="btn btn-info col-md-1" @click="dialogFormVisible5 = false" >
                  <input type="button" value="取消"  class="btn btn-info col-md-1" @click="dialogFormVisible5 = false" style="margin-left:5px">
                    <div class="form-group col-md-9">
                      <label>查询条件:</label>
					              <el-select v-model="value1" placeholder="请选择" style="width:25%" size="small">
                          <el-option key="发票类型编号" label="发票类型编号" value1="发票类型编号"></el-option>
                          <el-option key="发票类型名称" label="发票类型名称" value1="发票类型名称"></el-option>
                        </el-select>
                        <el-select v-model="value2" placeholder="请选择" style="width:20%" size="small">
                          <el-option key="模糊" label="模糊" value2="模糊"></el-option>
                          <el-option key="等于" label="等于" value2="等于"></el-option>
                          <el-option key="不等于" label="不等于" value2="不等于"></el-option>
                        </el-select>
                        <input type="text" class="form-control" style="width:25%;display:inline;margin-right:5px"/>
                        <button class="btn btn-danger">查询</button>
                    </div>
                    </el-header>
                     <el-container>
                    <el-aside width="200px" style="border:1px solid rgba(225,225,225,0.9) ">
                        <el-menu  default-active="1-4-1"  
					 class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                         :default-openeds="opens">
                           <el-submenu index="1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>排头简称</span>
                            </template>
                             <el-submenu index="1-1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>0</span>
                            </template>
                            <el-menu-item index="1-1-1">0-1</el-menu-item>
                            <el-menu-item index="1-1-2">0-2</el-menu-item>
                            </el-submenu>
                            <el-submenu index="1-2">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>1</span>
                            </template>
                             <el-menu-item index="1-2-1">1-1</el-menu-item>
                             <el-menu-item index="1-2-2">1-2</el-menu-item>
                            </el-submenu>
                            </el-submenu>
                        </el-menu>
                  </el-aside>
                    <el-main height="">
                       <el-table
                          ref="singleTable"
                          :data="tableData2"
                          highlight-current-row
                          @current-change="handleCurrentChange"
                          style="width: 100%" :span-method="arraySpanMethod">
                          <el-table-column
                            type="index"
                            label="序号"
                            width="50">
                          </el-table-column>
                          <el-table-column
                            property="id"
                            label="仓库编号"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            property="name"
                            label="仓库名称"
                            width="120">
                          </el-table-column>
                        </el-table>
                            <el-pagination
                              background
                              layout="prev, pager, next"
                              :total="1000" style="margin-top:20%;background:rgba(150,180,200,0.3)">
                            </el-pagination> 
                    </el-main>
                  </el-container>
                </el-container>
              </el-dialog>

          <td colspan="3" style="border:none">
            <label style="width:20%;"> 发票号码:</label
            ><input
              class="form-control"
              style="width:70%;display:inline"
              :disabled="true"
            />
          </td>
        </tr>
        <tr>
          <td colspan="4" style="border:none">
            <label style="width:20%;">凭证编号:</label
            ><input
              class="form-control"
              style="width:70%;display:inline"
              :disabled="true"
            />
          </td>

         <td colspan="4" style="border:none">
            <label style="width:20%;">差价凭证编号:</label
            ><input
              class="form-control"
              style="width:70%;display:inline"
              :disabled="true"
            />
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="7" class="text-left">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-tabs type="border-card">
            <el-tab-pane label="明细"><InvoiceList></InvoiceList> </el-tab-pane>
            <el-tab-pane label="清单"><InvoiceList2></InvoiceList2></el-tab-pane>
            <el-tab-pane label="备注"><InvoiceDesc></InvoiceDesc></el-tab-pane>
            <el-tab-pane label="账款"><InvoiceAccount></InvoiceAccount></el-tab-pane>
          </el-tabs>
          </td>
        </tr>
        <tr>
          <td colspan="7">
            <router-view
              ref="children"
              v-bind:isupdate="isupdate"
              v-bind:tbBillno="pageInfo.list[0].tbBillno"
              v-bind:desc="pageInfo.list[0].tbRemark"
            />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">
            <label style="width:20%;"> 采购人员:</label>
            <select
              class="form-control"
              style="width:70%;display:inline"
              :disabled="isupdate"
              v-model="pageInfo.list[0].tbBuyer"
            >
              <option
                v-bind:key="index"
                v-for="(p, index) in personlist"
                :value="p.tbPersonno"
                >{{ p.tbPersonname }}</option
              >
            </select>
          </td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="4" style="border:none">
            <label style="width:20%;"> 制单人员:</label>
            <select
              @change="changeDept($event)"
              class="form-control"
              style="width:70%;display:inline"
              :disabled="isupdate"
              v-model="pageInfo.list[0].tbMaker"
            >
              <option
                v-bind:key="index"
                v-for="(p, index) in personlist"
                :value="p.tbPersonno"
                :tbdeptno="p.tbDeptno"
                >{{ p.tbPersonname }}</option
              >
            </select>
          </td>
          <td colspan="3" style="border:none">
            <label style="width:20%;"> 人员部门:</label>
            <select
              class="form-control"
              style="width:70%;display:inline"
              disabled="true"
              v-model="tbDeptno"
            >
              <option
                v-bind:key="index"
                v-for="(d, index) in deptlist"
                :value="d.tbDeptno"
                >{{ d.tbDeptname }}</option
              >
            </select>
          </td>
        </tr>
        <tr>
          <td colspan="4" style="border:none">
            <label style="width:20%;"> 审核人员:</label>
            <select
              class="form-control"
              style="width:70%;display:inline"
              :disabled="isupdate"
              v-model="pageInfo.list[0].tbPermitter"
            >
              <option
                v-bind:key="index"
                v-for="(p, index) in personlist"
                :value="p.tbPersonno"
                >{{ p.tbPersonname }}</option
              >
            </select>
          </td>
          <td colspan="3" style="border:none">
            <label style="width:20%;">所属项目:</label
            ><select
              class="form-control"
              style="width:70%;display:inline"
              :disabled="isupdate"
            >
            <option>一期项目</option>
            <option>二期项目</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colspan="7" style="border:none;text-align:left">
           <el-select v-model="value3" placeholder="查询" @change="openDialog">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
              >
            </el-option>
          </el-select>
          <!-- 弹出框=>加载历史交易 -->
              <el-dialog  title="历史交易" :visible.sync="dialogFormVisible4">
                <!-- 历史交易显示框 -->
                <el-container >
                    <el-header class="col-md-12" >
                  <input type="button" value="确定" class="btn btn-info col-md-1" @click="dialogFormVisible4 = false" >
                  <input type="button" value="取消"  class="btn btn-info col-md-1" @click="dialogFormVisible4 = false" style="margin-left:5px">
                    <div class="form-group col-md-9">
                      <label>查询条件:</label>
					              <el-select v-model="value1" placeholder="请选择" style="width:25%" size="small">
                          <el-option key="客户名称" label="客户名称" value1="客户名称"></el-option>
                          <el-option key="地区" label="地区" value1="地区"></el-option>
                          <el-option key="类别" label="类别" value1="类别"></el-option>
                        </el-select>
                        <el-select v-model="value2" placeholder="请选择" style="width:20%" size="small">
                          <el-option key="模糊" label="模糊" value2="模糊"></el-option>
                          <el-option key="等于" label="等于" value2="等于"></el-option>
                          <el-option key="不等于" label="不等于" value2="不等于"></el-option>
                        </el-select>
                        <input type="text" class="form-control" style="width:25%;display:inline;margin-right:5px"/>
                        <button class="btn btn-danger">查询</button>
                    </div>
                    </el-header>
                     <el-container>
                    <el-aside width="200px" style="border:1px solid rgba(225,225,225,0.9) ">
                        <el-menu  default-active="1-4-1"  
					 class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                         :default-openeds="opens">
                           <el-submenu index="1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>往来单位</span>
                            </template>
                             <el-submenu index="1-1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>客户</span>
                            </template>
                            <el-menu-item index="1-1-1">华北</el-menu-item>
                            <el-menu-item index="1-1-2">华中</el-menu-item>
                            <el-menu-item index="1-1-3">华南</el-menu-item>
                            </el-submenu>
                            <el-submenu index="1-2">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>供应商</span>
                            </template>
                             <el-menu-item index="1-2-1">原材料供应商</el-menu-item>
                             <el-menu-item index="1-2-2">零件供应商</el-menu-item>
                            </el-submenu>
                            </el-submenu>
                        </el-menu>
                  </el-aside>
                    <el-main height="">
                       <el-table
                          ref="singleTable"
                          :data="tableData"
                          highlight-current-row
                          @current-change="handleCurrentChange"
                          style="width: 100%" :span-method="arraySpanMethod">
                          <el-table-column
                            type="index"
                            label="序号"
                            width="50">
                          </el-table-column>
                          <el-table-column
                            property="date"
                            label="日期"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            property="name"
                            label="公司名"
                            width="120">
                          </el-table-column>
                          <el-table-column
                            property="address"
                            label="地址">
                          </el-table-column>
                        </el-table>
                            <el-pagination
                              background
                              layout="prev, pager, next"
                              :total="1000" style="margin-top:20%;background:rgba(150,180,200,0.3)">
                            </el-pagination> 
                    </el-main>
                  </el-container>
                </el-container>
              </el-dialog>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import $ from "jquery";
import InvoiceList from "./InvoiceList.vue"
import InvoiceDesc from "./InvoiceDesc.vue"
import InvoiceList2 from "./InvoiceList2.vue"
import InvoiceAccount from "./InvoiceAccount.vue"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    InvoiceList:InvoiceList,
    InvoiceDesc:InvoiceDesc,
    InvoiceList2:InvoiceList2,
    InvoiceAccount:InvoiceAccount,
  },
  data() {
    //这里存放数据
    return {
      isupdate: true,
      // 采购订单分页对象
      pageInfo: {
        endRow: 1,
        firstPage: 1,
        hasNextPage: true,
        hasPreviousPage: false,
        isFirstPage: true,
        isLastPage: false,
        lastPage: 2,
        list: [
          {
            tbBilldate: "2019-08-08",
            tbBillno: "so001",
            tbBuyer: "p001",
            tbCreatTime: "2019-08-10 19:27:57",
            tbCustomer: "联想电脑",
            tbCustomerAddress: "黄山路",
            tbDeptname: "d002",
            tbMaker: "p002",
            tbPermitDate: "2019-08-09",
            tbPermitter: "p003",
            tbRemark: "尽快"
          }
        ],
        navigatePages: 8,
        navigatepageNums: [1, 2],
        nextPage: 2,
        orderBy: "",
        pageNum: 1,
        pageSize: 1,
        pages: 2,
        prePage: 0,
        size: 1,
        startRow: 1,
        total: 2
      },
      personlist: [
        {
          tbDeptno: "d001",
          tbPersonname: "牛采购",
          tbPersonno: "p001"
        },
        {
          tbDeptno: "d002",
          tbPersonname: "刘小备",
          tbPersonno: "p002"
        },
        {
          tbDeptno: "d003",
          tbPersonname: "关小羽",
          tbPersonno: "p003"
        },
        {
          tbDeptno: "d004",
          tbPersonname: "张小飞",
          tbPersonno: "p004"
        },
        {
          tbDeptno: "d005",
          tbPersonname: "赵小云",
          tbPersonno: "p005"
        }
      ],
      deptlist: [
        {
          tbDeptname: "采购部",
          tbDeptno: "d001"
        },
        {
          tbDeptname: "生产部",
          tbDeptno: "d002"
        },
        {
          tbDeptname: "市场部",
          tbDeptno: "d003"
        },
        {
          tbDeptname: "销售部",
          tbDeptno: "d004"
        },
        {
          tbDeptname: "总经办",
          tbDeptno: "d005"
        }
      ],
      //当前采购订单号
      tbDeptno: "",
      //单据号码
      input:'',
      //供应商
      input2:'',
      //采购员
      input3:'',
       //单况
      input4:'',
      //弹出框隐藏
      dialogFormVisible: false,
      dialogFormVisible2: false,
      dialogFormVisible3: false,
      dialogFormVisible4: false,
      dialogFormVisible5: false,//仓库
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      value: "", //采购订单单况值
      value1: "", //查询供应商的条件
      value2: "", //查询供应商的条件方式
      value3: "", //查询交易记录,
      options: [{
          value: '历史交易查询',
          label: '历史交易查询'
        }, {
          value: '订金查询',
          label: '订金查询',
          disabled:true,
        }, {
          value: '转单记录查询',
          label: '转单记录查询',
          disabled:true,
        }],
      valueDate: [
        new Date(2000, 10, 10, 10, 10),
        new Date(2000, 10, 11, 10, 10)
      ] ,//时间控件
      //查询供应商时要渲染的数据
       tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }],//仓库数据
          tableData2: [{
          id: '001',
          name: '增值税务',
        }, {
          id: '002',
          name: '普通'
        }],
        opens:["1","1-1","1-2"],//默认展开的下拉框数组
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    update() {
      this.isupdate = !this.isupdate;
    },
    changeDept(e) {
      let selectedBedDom = $(e.srcElement); //dom元素
      this.tbDeptno = selectedBedDom
        .children("option:selected")
        .attr("tbdeptno");
    },
    getStockOrder(c) {
      let _this = this;
      _this.$axios
        .all([
          _this.$axios.get(
            `http://localhost:8080/api/StockOrders/getStockOrder/${c}`
          ),
          _this.$axios.get(`http://localhost:8080/api/StockOrders/getPerson`),
          _this.$axios.get(`http://localhost:8080/api/StockOrders/getDept`)
        ])
        .then(
          _this.$axios.spread((res1, res2, res3) => {
            _this.pageInfo = res1.data;
            _this.personlist = res2.data;
            _this.deptlist = res3.data;
            _this.tbDeptno = res1.data.list[0].tbDeptname;
            _this.$refs.children.getStockorderDetail(
              _this.pageInfo.list[0].tbBillno
            );
          })
        )
        .catch(err => {
          console.log(err);
        });
    },
    deleteStockOrder() {
      if (confirm("是否删除该订单？")) {
        this.$axios
          .delete(
            `http://localhost:8080/api/StockOrders/deleteStockOrder/${this.pageInfo.list[0].tbBillno}`
          )
          .then(resp => {
            if (resp.data.code == "200") {
              alert("删除成功");
              this.$router.replace(`/Order/${Math.random()}`);
            }
          })
          .catch(e => {
            alert(e);
          });
      }
    },
    //合并列
     arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },
      openDialog(){
          if(this.value3=="历史交易查询"){
            this.dialogFormVisible4=true;
          }
      },
    // ,
    // ss(e){
    //     let  selectedBedDom = $(e.srcElement)//dom元素
    //     alert(selectedBedDom.parent().prev().html())
    // }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //this.getStockOrder(1);
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
<style scoped>
/*@import url(); 引入公共css类*/
@import "../../../assets/css/bootstrap.css";

.col-lg-1 {
  margin: 0px 2%;
}


.el-input__icon {
  cursor: pointer;
  
}

</style>
