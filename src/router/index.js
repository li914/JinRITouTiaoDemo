import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ListNews from '@/components/ListNews'
import SearchNews from '@/components/SearchNews'
import ShowNew from '@/components/ShowNew'
import ChanelNews from '@/components/ChanelNews'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListNews',
      component: ListNews
    },
    {
      path: '/search',
      name: 'SearchNews',
      component: SearchNews
    },
    {
      path: '/show/:id',
      name: 'ShowNew',
      component: ShowNew
    },
    {
      path: '/chanel',
      name: 'ChanelNews',
      component: ChanelNews
    },
  ]
});
