import Vue from 'vue'
import Router from 'vue-router'
import CellItem from '@/components/CellItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CellItem',
      component: CellItem
    }
  ]
})
