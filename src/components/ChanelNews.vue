<template>
    <div id="channel_news">
      <p v-if="addList.length">点击删除以下频道</p>
      <ul>
        <li @click="handleClickChannel(item,false)" v-for="(item,index) in addList">{{ item.channel }}</li>

      </ul>
      <p style="clear: both" v-if="delList.length">点击添加以下频道</p>
      <ul>
        <li @click="handleClickChannel(item,true)" v-for="(item,index) in delList">{{ item.channel }}</li>
      </ul>
    </div>
</template>

<script>
  import storage from '../tools/Storage';
    export default {
        name: "ChanelNews",
      data:function () {
        return{
          msg:'ChanelNews',
          list:[]
        }
      },
      methods:{
        handleClickChannel(item,bool){
          item.selected=bool;
        }
      },
      computed:{
        delList:function () {
          return this.list.filter(function (item,index,arr) {
            return item.selected==false;
          })
        },
        addList:function () {
          return this.list.filter(function (item,index,arr) {
            return item.selected==true;
          })
        }
      },
      watch:{
        list:{
          deep:true,
          handler:function () {
            storage.set('channel_list',this.list)
          }
        }
      },
      mounted(){
          this.$store.commit('changeShowBack',false);
          this.list=storage.get('channel_list').length>0?storage.get('channel_list'):this.$store.state.channel_list;
      }
    }
</script>

<style scoped>
  #channel_news{
    top: 40px;
    position: relative;
  }
  #channel_news{
    top: 38px;
    width: 100%;
    background-color: #fff;
    position: relative;
  }
  #channel_news ul{
    width: 96%;
    margin: 0 7px;
    /*display: flex;*/
  }
  #channel_news ul li{
    float: left;
    border: #e5e5e5 solid 1px;
    width: 19%;
    margin: 7px;
    font-size: 18px;
    text-align: center;
  }
  #channel_news p{
    clear: both;
    font-size: 14px;
    padding-top: 5px;
    margin-left: 7px;
  }
</style>
