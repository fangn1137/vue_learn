<template>
  <div id="app">
  
    <router-link to="/slot"> 插槽 </router-link> 
    <router-link to="/biaodan"> 表单 </router-link>
    <router-link to="/cunstom-switch"> 自定义开关 </router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
