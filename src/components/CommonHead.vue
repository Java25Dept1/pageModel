<template>
<div class=''>
    <div class="row" style="margin-top:20px auto;">
      <input
        class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
        value="第一条"
        readonly="true"
        @click="getStockOrder(1)"
      />
      <input
        class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
        value="上一条"
        readonly="true"
        @click="getStockOrder(2)"
      />
      <input
        class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
        value="下一条"
        readonly="true"
        @click="getStockOrder(3)"
      />
      <input
        class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
        value="最后一条"
        readonly="true"
        @click="getStockOrder(4)"
      />
      <input class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default" @click="getStockOrder(5)" value="添加" readonly="true" />
      <input
        class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
        value="修改"
        @click="getStockOrder(6)"
        readonly="true"
      />
      <input class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default" @click="getStockOrder(7)" value="保存" readonly="true" />
      <input
        class="col-lg-1 col-md-1 col-sm-1 col-xs-1 btn btn-default"
        value="删除"
        @click="getStockOrder(8)"
        readonly="true"
      />
    </div>
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
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  getStockOrder(o){
    this.$parent.getStockOrder(o)
  }
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
@import "../assets/css/bootstrap.css";
input{
    margin-left: 37px;
}
</style>