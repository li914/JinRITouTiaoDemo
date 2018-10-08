<template>
  <div id="list_news">
    <div id="scorll_bar">
      <div class="channel_list">
        <ul>
          <li v-for="(item,index) in channel">{{item.channel}}</li>
        </ul>
      </div>
      <div class="channel_btn" v-on:click="toChannel">
        <img src="../assets/icon/chanel.png" width="25" height="25"/>
      </div>
    </div>
    <div id="list_item">
      <!--<ul>-->
      <!--<li>-->
      <router-link tag="div" :to="/show/+item.id" class="item" v-for="(item,index) in news_list">
        <div class="top">
          <div :class="item.pic.length>0?'left':'_left'">
            <h5>{{item.title}}</h5>
          </div>
          <div class="rigth" v-if="item.pic.length>0">
            <img :src="item.pic" width="90" height="90"/>
          </div>
        </div>
        <p style="clear: both;"><span>{{item.src}}</span><span>{{item.time.substr(item.time.length-9)}}</span></p>
      </router-link>
      <!--<router-link v-for="(item,index) in news_list" :to="/show/+item.id">-->
      <!--<div class="item">-->
      <!--<div class="top">-->
      <!--<div :class="item.pic.length>0?'left':'_left'">-->
      <!--<h5>{{item.title}}</h5>-->
      <!--</div>-->
      <!--<div class="rigth" v-if="item.pic.length>0">-->
      <!--<img :src="item.pic" width="90" height="90"/>-->
      <!--</div>-->
      <!--</div>-->
      <!--<p style="clear: both;"><span>{{item.src}}</span><span>{{item.time.substr(item.time.length-9)}}</span></p>-->
      <!--</div>-->
      <!--</router-link>-->
      <!--</li>-->
      <!--</ul>-->
    </div>
  </div>
</template>

<script>
  import storage from '../tools/Storage';

  export default {
    name: "ListNews",
    data: function () {
      return {
        msg: "ListNews",
        channel_list: [],
        news_list: []
      }
    },
    methods: {
      toChannel: function () {
        this.$router.push({
          path: '/chanel'
        })
      }
    },
    computed: {
      channel() {
        return this.channel_list.filter(function (item, index, arr) {
          return item.selected === true;
        });
      }
    },
    watch: {
      channel_list: {
        deep: true,
        handler: function () {
          storage.set('channel_list', this.channel_list)
        }
      },
      news_list: {
        deep: true,
        handler: function () {
          storage.set('news_list', []);
          storage.set('news_list', this.news_list);
        }
      }
    },
    beforeMount() {
      console.log('beforeMount');
      var _that = this;
      var list = storage.get('news_list');
      console.log(list);
      if (list.length < 1) {
        $.ajax({
          url: this.global.URL + 'news/api/list?num=25',
          dataType: 'json',
          type: 'GET',
          success: function (res, status, xml) {
            console.log(res, status, xml);
            if (res.code === 1 && res.msg === 'ok') {
              _that.news_list = res.data;
              storage.set('news_list', res.data);
            }
          },
          error: function (res, status, xml) {
            console.log(res, status, xml);
          }
        });
      } else {
        this.news_list = list;
      }
    },
    mounted() {
      console.log('mounted');
      var _that = this;
      this.$store.commit('changeShowBack', true);
      this.channel_list = storage.get('channel_list').length > 0 ? storage.get('channel_list') : this.$store.state.channel_list;
    }
  }
</script>

<style scoped>
  #list_news {
    /*height: 100vh;*/
  }

  #scorll_bar {
    position: fixed;
    top: 38px;
    width: 100vw;
    background-color: #fff;
    z-index: 999;
    border-bottom: 1px solid rgba(166, 166, 166, 0.7);
  }

  #scorll_bar .channel_list {
    width: 90vw;
    float: left;
    overflow: hidden;
    overflow-x: scroll;
  }

  #scorll_bar .channel_list ul {
    overflow: hidden;
    overflow-x: scroll;
    display: inline;
    white-space: nowrap;
    height: 100%;
  }

  #scorll_bar .channel_list ul li {
    display: inline-block;
    padding: 7px;
    height: 100%;
  }

  #scorll_bar .channel_btn {
    width: 7vw;
    float: right;
    padding: 5px;
  }

  #scorll_bar .channel_btn img {
    display: block;
    padding: 3px;
  }

  #list_item {
    position: relative;
    top: 88px;
    overflow: hidden;
    overflow-y: scroll;
  }

  #list_item .item {
    border-bottom: 1px solid rgba(166, 166, 166, 0.6);
    white-space: nowrap;
    word-break: break-word;
    padding: 7px 7px 0 7px;
    min-height: 90px;
    max-height: 120px;
  }

  #list_item .item .top {
  }

  #list_item .item .top .left {
    float: left;
    width: 75vw;
  }

  #list_item .item .top ._left {
    float: left;
    width: 100%;
  }

  #list_item .item .top h5 {
    white-space: nowrap;
    word-break: break-word;
  }

  #list_item .item .top .rigth {
    float: left;
    width: 20vw;
  }

  #list_item .item .bottom {
    clear: both;
    width: 100vw;
  }

  #list_item .item .bottom .content {
    width: 90%;
    margin: 0 auto;
  }

  #list_item .item p {
    clear: both;
    text-align: right;
  }

  #list_item .item p span {
    display: inline-block;
    color: rgba(0, 0, 0, 0.4);
    font-size: 14px;
    margin-top: 3px;
    margin-left: 5px;
  }

  #list_item .item .bottom img {
    padding: 13px;
    display: inline-block;

  }
</style>
