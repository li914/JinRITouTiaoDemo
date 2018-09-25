<template>
  <div id="app">
    <p>{{msg}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function () {
    return{
      msg:"App"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
