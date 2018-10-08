<template>
  <div id="search_news">
    <div class="top">
      <div><input type="text" placeholder="输入搜索的内容,,," v-model="value"><img v-on:click="clearValue()" v-if="icon"
                                                                            src="../assets/icon/del.png"></div>
      <!--<div><input type="button" value="搜索"></div>-->
      <div v-on:click="searchNews()"><span>搜索</span></div>
    </div>
    <!--<div class="top"><p><input type="text" placeholder="输入搜索的内容，，，"><input type="button" value="搜索"></p></div>-->
    <div class="search_list">
      <ul>
        <router-link tag="li" :to="/show/+item.id" v-for="(item,index) in list">
          <div class="title"><h5>{{item.title}}</h5></div>
          <p><span>{{item.src}}</span><span>{{item.time.substr(5)}}</span></p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchNews",
    data: function () {
      return {
        msg: "SearchNews",
        value: '',
        icon: false,
        list: {}
      }
    },
    methods: {
      searchNews: function () {
        var _that = this;
        var value = this.value;
        console.log(value);
        if (value.trim().length <= 0) {
          return;
        }
        $.ajax({
          url: this.global.URL + 'news/api/search?search=' + value,
          method: "GET",
          dataType: "json",
          success: function (res, status, xml) {
            console.log(res, status, xml);
            if (res.code == 1 && res.msg == 'ok') {
              _that.list = res.data;
            }
            _that.value = '';
          },
          error: function (res, status, xml) {

          }
        })
      },
      clearValue() {
        this.value = '';
      }
    },
    mounted() {
      this.$store.commit('changeShowBack', false);
    },
    watch: {
      value: {
        handler: function (val, oldVal) {
          if (val.length > 0) {
            this.icon = true;
          } else {
            this.icon = false;
          }
        },
        immediate: true
      }
    }
  }
</script>

<style scoped>
  #search_news {
    position: relative;
    top: 40px;
    width: 100%;
  }

  #search_news .top {
    display: flex;
    background-color: #EFEFEF;
  }

  #search_news .top div:nth-child(1) {
    flex-basis: 85vw;
    padding: 7px 0 7px 7px;
    border: 1px solid rgba(166, 166, 166, 0.6);
    display: flex;
    background-color: white;
  }

  #search_news .top div:nth-child(1) input {
    /*width: 85%;*/
    height: 38px;
    border: 0;
    outline: 0;
    flex-basis: 95%;
  }

  #search_news .top div:nth-child(1) img {
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-basis: 5%;
    border: 0;
    margin: auto 0;
  }

  #search_news .top div:nth-child(2) {
    flex-basis: 15vw;
    padding: 7px 7px 7px 3px;
    text-align: center;
    justify-content: center;
    align-content: center;
  }

  #search_news .top div:nth-child(2) input {
    width: 100%;
    display: block;
    height: 38px;
  }

  #search_news .search_list ul li {
    padding: 3px;
    border-bottom: 1px solid rgba(177, 177, 177, 0.7);
  }
  #search_news .search_list ul li .title{
    text-align: center;
  }
  #search_news .search_list ul li .title h5{
    display: inline-block;
    text-align: left;
  }
  #search_news .search_list ul li p{
    text-align: right;
    padding:7px 0 7px 0;
  }
  #search_news .search_list ul li p span{
    display: inline-block;
    margin-left: 13px;
  }
</style>
