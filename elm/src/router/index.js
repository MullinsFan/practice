import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '外卖页',
      component: (resolve) => { require(['../views/takeaway/takeaway.vue'], resolve) }
    }
  ]
})
