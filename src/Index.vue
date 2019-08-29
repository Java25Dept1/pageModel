<template>
  <div class>
    <el-container height="100vh">
        <!-- 头部 -->
        <el-header height="15%" >
            <el-row>
                <el-col :span="12">
                    <div>
                        <el-avatar style="" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size='55'>\
                        </el-avatar>
                    </div>
                </el-col>
                <el-col :span="12">
                    <!-- :default-active="activeIndex" -->
                    <el-menu
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                    >
                        <el-menu-item index="1" @click="changeMenu('common')">共用资料</el-menu-item>
                        <el-menu-item index="2" @click="changeMenu('purchase')">采购管理</el-menu-item>
                        <el-menu-item index="3" @click="changeMenu('sale')">销售管理</el-menu-item>
                        <el-menu-item index="4" @click="changeMenu('inventory')">库存管理</el-menu-item>
                        <el-menu-item index="5" @click="changeMenu('credit')">账款管理</el-menu-item>
                        <el-menu-item index="6">注销</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>

        <el-container height="80%">
            <!-- 左侧边栏 -->
            <el-aside width="225px"> 
                <el-radio-group v-model="isCollapse" style="margin: 0 0 20px 0;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
                <!-- default-active="1-4-1" -->
                <el-menu
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    :collapse="isCollapse"
                    :unique-opened="true"
                >
                    <!-- :router="true" -->
                    <!-- <el-submenu  v-for="(te,index) in menuList" v-bind:key="(te,index)" :index="te.name">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">{{te.meta.title}}</span>
                        </template>   -->
                        <el-submenu v-for="ts in menuList.children" v-bind:key="ts" :index="ts.name"> 
                            <template slot="title">
                                <i :class="ts.meta.icon"></i>
                                <span slot="title">{{ts.meta.title}}</span>
                            </template>  
                            <el-menu-item v-for="item in ts.children"
                                :index="item.path"
                                :key="item.path"
                                @click="addTab(item.name,item.meta.title,item)">
                                    <i :class="item.meta.icon"></i>
                                    {{item.meta.title}}
                            </el-menu-item>   
                        </el-submenu>  
                    <!-- </el-submenu> -->
                    
                    <!-- 共用资料 -->
                    <!-- <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">共用资料</span>
                        </template>
                        <el-submenu index="1-1">
                            <span slot="title">基本资料</span>
                            <el-menu-item index="1-1-1" @click="addTab('1-1-1','部门设定','form')">部门设定</el-menu-item>
                            <el-menu-item index="1-1-2" @click="addTab('1-1-2','项目设定','form')">项目设定</el-menu-item>
                            <el-menu-item index="1-1-3" @click="addTab('1-1-3','地区设定','form')">地区设定</el-menu-item>
                            <el-menu-item index="1-1-4" @click="addTab('1-1-4','发票类型设定','form')">发票类型设定</el-menu-item>
                            <el-menu-item index="1-1-5" @click="addTab('1-1-5','人员主文件设定','form')">人员主文件设定</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-2">
                            <span slot="title">物料资料</span>
                            <el-menu-item index="1-2-1">仓库设定</el-menu-item>
                            <el-menu-item index="1-2-2">物料类别设定</el-menu-item>
                            <el-menu-item index="1-2-3">计量单位设定</el-menu-item>
                            <el-menu-item index="1-2-4">物料主文件设定</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-3">
                            <span slot="title">往来资料</span>
                            <el-menu-item index="1-3-1">客户类别设定</el-menu-item>
                            <el-menu-item index="1-3-2">潜在客户主文件设定</el-menu-item>
                            <el-menu-item index="1-3-3">客户主文件设定</el-menu-item>
                            <el-menu-item index="1-3-4">潜在客户转正式客户</el-menu-item>
                            <el-menu-item index="1-3-5">供应商类别设定</el-menu-item>
                            <el-menu-item index="1-3-6">供应商主文件设定</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-4">
                            <span slot="title">科目资料</span>
                            <el-menu-item index="1-4-1">科目总类设定</el-menu-item>
                            <el-menu-item index="1-4-2">项目类别设定</el-menu-item>
                        </el-submenu>
                    </el-submenu> -->
                    
                </el-menu>
            </el-aside>

            <!-- 主题内容 -->
            <el-main>
                <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
                    <el-tab-pane 
                        v-for="item in editableTabs"
                        :key="item.name"
                        :label="item.title"
                        :name="item.name"
                    >
                        <router-view :name="item.content"></router-view>
                    </el-tab-pane>
                </el-tabs>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            menuList:{}, //左侧导航栏
            isCollapse: false,
            editableTabsValue: '',//当前选中标签页
            editableTabs: [] //标签页集合
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        //展开侧边栏
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        //收起侧边栏
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        //新增标签页
        addTab(targetName,titleName) {
            let num = 0;
            this.editableTabs.forEach(temp => {
                //判断该标签是否已打开
                if(temp.name == targetName){
                    num++;
                }
            })
            this.editableTabsValue = targetName;
            if(num > 0){
                //this.editableTabsValue = targetName;
                return;
            }
            this.editableTabs.push({
                title: titleName,
                name: targetName,
                content: targetName
            });
            // alert(JSON.stringify(this.editableTabs))
        },
        //移除标签页
        removeTab(targetName) {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }
            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        },
        //显示不同的一级目录
        changeMenu(menu){
           
            this.menuList={};
            this.$router.options.routes.forEach(ele => {
            if(ele.meta){
                // console.log(ele)
                if(ele.name == menu)
                    this.menuList = ele;
            }
         
        })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        // alert(JSON.stringify(this.$router.options.routes))
        this.$router.options.routes.forEach(ele => {
            if(ele.meta){
                // console.log(ele)
                if(ele.name == "common")
                    this.menuList = ele;
            }
         
        })
        // alert(JSON.stringify(this.menuList))
    },
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
<style scoped>
/*@import url(); 引入公共css类*/
.el-header{
    background-color:white;
    margin-top: 10px;
}
.el-avatar{
    float: left;
    margin-left: 40px;
}
.el-row{    
    border-bottom: solid 1px #e6e6e6;
    margin-bottom: 20px;
}
.el-menu.el-menu--horizontal {
    border-bottom: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 600px;
  text-align: left;
}
</style>