<template>
 <el-container>
      <el-header class="header" height="100px">
          <h3>我的网站</h3>
          <p>Vue小模块之用户登录功能</p>
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
 </el-container>
</template>

<script>
import ElContainer from "../node_modules/element-ui/packages/container/src/main.vue";
import ElHeader from "../node_modules/element-ui/packages/header/src/main.vue";

export default {
  components: {
    ElHeader,
    ElContainer},
  name: 'App'
}
</script>

<style>
.header{
  background-color: #409EFF;
  color:white;
}
</style>
