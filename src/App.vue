<template>
  <div id="app">
    <div class="menu_bar">
      <div id="back_btn" class="btn" v-on:click="back" v-bind:class="showback_btn?'back_hidden_btn':'back_show_btn'"><img src="./assets/icon/back.png" alt="返回" width="32" height="32"/></div>
      <div id="title">今日头条<img src="./assets/icon/refresh.png" width="17" height="17"/></div>
      <router-link tag="div" to="/search/" id="search_btn" class="btn"><img src="./assets/icon/search.png" alt="搜索" width="32" height="32"/></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        msg: "App",
        // showback_btn:true
      }
    },
    computed:{
      showback_btn(){
        return this.$store.state.showback_btn;
      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    },
    mounted(){

    },
    watch:{
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .menu_bar {
    background-color: rgba(255, 0, 0, 1);
    color: white;
    width: 100vw;
    display: flex;
    position: fixed;
    z-index: 999;
  }

  .menu_bar .btn {
    height: 38px;
    width: 38px;
    background-color: #0000;
    border: none;
    padding: 0;
  }
  .menu_bar #title{
    flex-basis: 70%;
    padding-top: 3px;
    text-align: center;
  }
  .menu_bar #title img{
    margin-left: 5px;
  }

  .menu_bar #back_btn {
    flex-basis: 15%;
    padding-top: 3px;
  }
  .menu_bar .back_show_btn{
    visibility: visible;
  }
  .menu_bar .back_hidden_btn{
    visibility: hidden;
  }
  .menu_bar #search_btn{
    flex-basis: 13%;
    padding-top: 3px;
  }
</style>
