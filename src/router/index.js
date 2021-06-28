import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Search from '@/view/Search'

export default new VueRouter({
  routes: [
    {
      path: '/search',
      component: Search
    }
  ]  
})