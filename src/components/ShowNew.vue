<template>
  <div id="show_new">
    <div class="title"><h4>{{content.title}}</h4></div>
    <div class="instro">
      <p><span>来源：<strong>{{content.src}}</strong></span><span>{{content.time.substr(5)}}</span></p>
    </div>
    <div id="news_content" v-html="content.content"></div>
    <!--<news_content :content="content.content"></news_content>-->
  </div>
</template>

<script>
  // import news_content from './News_Content.vue'
  export default {
    name: "ShowNew",
    data: function () {
      return {
        msg: "ShowNew",
        content: {time:'2018-10-08 15:31'},
      }
    },
    components:{
      // 'news_content':news_content
    },
    beforeMount() {
    },
    mounted() {
      var _that = this;
      this.$store.commit('changeShowBack', false);
      var id = this.$route.params.id;
      $.ajax({
        url: this.global.URL + 'news/api/show?id=' + id,
        dataType: 'json',
        success: function (res, status, xml) {
          if (res.code === 1 && res.msg === 'ok') {
            _that.content = res.data[0];
            console.log(_that.content);
          }
        },
        error: function (res, statsu, xml) {
          console.log(res, status, xml);
        },
        type: 'GET'
      });
    },
    // component:news_content
  }
</script>

<style scoped>
  #show_new {
    position: relative;
    top: 38px;
  }

  #show_new .title {
    text-align: center;
    padding: 7px 0 7px 0;
    border-bottom: 1px solid rgba(177, 177, 177, 0.6);
  }

  #show_new .title h4 {
    display: inline-block;
    text-align: left;
  }

  #show_new .instro {
    border-bottom: 1px solid rgba(177, 177, 177, 0.6);
    text-align: right;
    padding: 7px 0 7px 0;
    font-size: 14px;
  }

  #show_new .instro span {
    display: inline-block;
    margin-right: 7px;
  }

  #show_new .content{
    text-indent: 2em;
  }
  #show_new .content img{
  }
</style>
