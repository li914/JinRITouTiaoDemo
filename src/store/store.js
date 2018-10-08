import Vue from 'vue';
import Vuex from 'vuex';
import Storage from '../tools/Storage';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    channel_list: [
      {
        channel: "头条",
        category: "tt",
        selected: true,
        current: true
      },
      {
        channel: "新闻",
        category: "news",
        selected: false,
        current: false
      },
      {
        channel: "财经",
        category: "finance",
        selected: true,
        current: false
      },
      {
        channel: "体育",
        category: "sports",
        selected: true,
        current: false
      },
      {
        channel: "娱乐",
        category: "ent",
        selected: true,
        current: false
      },
      {
        channel: "军事",
        category: "mil",
        selected: true,
        current: false
      },
      {
        channel: "教育",
        category: "edu",
        selected: true,
        current: false
      },
      {
        channel: "科技",
        category: "tech",
        selected: false,
        current: false
      },
      {
        channel: "NBA",
        category: "sports",
        selected: true,
        current: false
      },
      {
        channel: "股票",
        category: "finance",
        selected: true,
        current: false
      },
      {
        channel: '星座',
        category: "",
        selected: true,
        current: false
      },
      {
        channel: "女性",
        category: "eladies",
        selected: true,
        current: false
      },
      {
        channel: "健康",
        category: "",
        selected: true,
        current: false
      },
      {
        channel: "育儿",
        category: 'bady',
        selected: true,
        current: false
      }
    ],
    showback_btn:true
  },
  mutations: {
    changeShowBack(state,bool){
      console.log(bool);
      state.showback_btn=bool;
    }
  },
  getters: {},
  actions: {},
  modules: {}
})
