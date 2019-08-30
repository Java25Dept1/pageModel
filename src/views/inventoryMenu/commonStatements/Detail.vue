<template>
    <div class="div">
        <el-row :gutter="20">
            <el-col :span="24"><h2 style="color:#666666;">库存进出明细查询</h2></el-col>
        </el-row>
        <el-row>
            <el-row styel="background-color:#FCFDFD;">
                <el-col :span="24"><div style="margin:10px 0;text-align:left;">&nbsp;查询条件</div></el-col>
            </el-row>
            <el-row>
                <el-row style="margin:10px 0px;font-size:14px;">
                    <el-col :span="12">
                        <div>
                           <span>物料区间：</span><el-input @focus="dialogTableVisible1 = true" v-model="input" size="mini" style="width:150px;"></el-input>To
                           <el-input @focus="dialogTableVisible1 = true" v-model="input" size="mini" style="width:150px;"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                            <span>仓库区间：</span><el-input @focus="dialogTableVisible4 = true" v-model="input" size="mini" style="width:150px;"></el-input>To
                           <el-input @focus="dialogTableVisible4 = true" v-model="input" size="mini" style="width:150px;"></el-input>
                        </div>
                    </el-col>
            </el-row>
                <el-row style="margin:10px 0px;font-size:14px;">
                    <el-col :span="12">
                        <div>
                            <span>时间区间：</span>
                            <el-date-picker v-model="value2" align="right"  size="mini" style="width:150px;" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>To
                           <el-date-picker v-model="value2" align="right"  size="mini" style="width:150px;" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
                        </div>
                    </el-col>
                </el-row>
                <el-row  style="margin:10px 0px;font-size:14px;">
                    <el-col :span="12">
                        <div >
                            <el-button>查询</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-row>
        </el-row>
        <el-row  style="margin-top:20px;">
            <el-row>
                <el-col :span="24">
                    <el-table
                        ref="singleTable"
                        :data="tableData"
                        style="width: 100%,"
                        border
                        class="border1,table__body"
                        @cell-click ="handleCellClick"
                        >
                        <el-table-column prop="name" width="128px"  label="物料编号"></el-table-column>
                        <el-table-column prop="date" width="128px" label="物品名称"></el-table-column>
                        <el-table-column type="index" width="128px" label="规格型号"></el-table-column>
                        <el-table-column type="index" width="128px" label="物料类别"></el-table-column>
                        <el-table-column type="index" width="128px" label="单位"></el-table-column>
                        <el-table-column type="index" width="128px" label="仓库编号"></el-table-column>
                        <el-table-column type="index" width="128px" label="仓库名称"></el-table-column>
                        <el-table-column type="index" width="125px" label="上期结存数量"></el-table-column>
                        <el-table-column type="index" width="125px" label="本期入库数量"></el-table-column>
                        <el-table-column type="index" width="125px" label="本期出库数量"></el-table-column>
                        <el-table-column type="index" width="125px" label="期末结存数"></el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </el-row>
        <el-dialog title="仓库查询" :visible.sync="dialogTableVisible4">
            <el-row :gutter="20">
                <el-col style="font-size:14px;text-align:left;" :span="24">
                    <el-button size="mini" type="primary" @click="dialogTableVisible4 = false">确 定</el-button>
                    <el-button size="mini" type="primary" @click="dialogTableVisible4 = false">取 消</el-button>
                    查询条件：
                    <el-select size="mini" style="margin-right:20px;" v-model="value6">
                            <el-option key="1" label="仓库名称" value="1"></el-option>
                    </el-select>
                    <el-input  v-model="input11" size="mini" style="width:150px;margin-right:20px;"></el-input>
                    <el-button size="mini">查 询</el-button>
                </el-col>
            </el-row>
            <el-row style="margin-top:10px;"  :gutter="20">
                <el-col style="font-size:14px;text-align:left;" :span="24">
                   <el-table
                        ref="multipleTable"
                        :data="tableData"
                        border
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                        type="selection"
                        width="55">
                        </el-table-column>
                        <el-table-column
                        label="序号"
                        width="120"
                        type="index"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="仓库名称">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </el-dialog>
        <el-dialog title="物料选择" :visible.sync="dialogTableVisible1">
            <el-row :gutter="20">
                <el-col style="font-size:14px;text-align:left;" :span="24">
                    <el-button size="mini" type="primary" @click="dialogTableVisible1 = false">确 定</el-button>
                    <el-button size="mini" type="primary" @click="dialogTableVisible1 = false">取 消</el-button>
                    查询条件：
                    <el-select size="mini" style="margin-right:20px;" v-model="value">
                            <el-option key="1" label="以A开头" value="1"></el-option>
                            <el-option key="2" label="以B开头" value="2"></el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row style="margin-top:10px;"  :gutter="20">
                <el-col style="font-size:14px;text-align:left;" :span="24">
                   <el-table
                         ref="multipleTable"
                        :data="tableData"
                        border
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                        type="selection"
                        width="55">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="物品编号">
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="物品名称">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script>
export default {
data() {
//这里存放数据
return {
    input: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    input9: '',
    input10: '',
    value2:'',
    value:'',
    fileList: [],
    tableData: [],
    dialogTableVisible4:false,
    dialogTableVisible1:false,
};
},
//计算属性
computed: {},
//方法集合

    methods:{
    },
//挂载完成（可以访问DOM元素）
mounted() {

}
}
</script>
<style  scoped>
/*@import url(); 引入公共css类*/
.div{
    background-color: white;
}
body{
    background-color: white;
}
span{
    display:inline-block;
    width:120px;
    height:100%;
    text-align: right;
}

</style>