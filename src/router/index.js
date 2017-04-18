import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import create from '@/components/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/create',
      name: 'create',
      component: create
    }
  ]
})
