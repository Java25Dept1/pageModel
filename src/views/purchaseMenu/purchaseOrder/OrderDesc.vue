<template>
<div class='' style="height:200px;overflow: scroll;overflow-x: hidden;">
    <table class="table table-hover table-striped  text-center">
    <tr>
        <td class="col-md-6" style="border:none">
        <label style="width:20%;">表头条文:</label
        ><input
            class="form-control"
            style="width:70%;display:inline"
            :disabled="isupdate"
        />
        </td>

        <td class="col-md-6" style="border:none">
        <label style="width:20%;"> 自定栏一:</label
        >
         <select class="form-control" style="width:70%;display:inline" :disabled="isupdate">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        
        </td>
    </tr>
    <tr>
        <td class="col-md-6" style="border:none">
        <label style="width:20%;">表尾条文:</label
        >
       <input
            class="form-control"
            style="width:70%;display:inline"
            :disabled="isupdate"
        />
        
        </td>

        <td class="col-md-6" style="border:none">
        <label style="width:20%;"> 自定栏二:</label
        >
        <select class="form-control" style="width:70%;display:inline" :disabled="isupdate">
           <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        </td>
    </tr>
</table>
<textarea class="form-control" style="width:100%;height:100%" v-text="this.desc" :disabled="isupdate"></textarea>


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

};
},
props:['desc','isupdate'],
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
/*@import url(); 引入公共css类*/

</style>