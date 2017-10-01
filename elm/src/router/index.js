import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '外卖页',
      component: (resolve) => { require(['../views/takeaway/takeaway.vue'], resolve) }
    },
    {
      path: '/order',
      name: '订单页',
      component: (resolve) => { require(['../views/order/order.vue'], resolve) }
    },
    {
      path: '/discover',
      name: '发现页',
      component: (resolve) => { require(['../views/discover/discover.vue'], resolve) }
    },
    {
      path: '/mine',
      name: '我的',
      component: (resolve) => { require(['../views/mine/mine.vue'], resolve) }
    }
  ]
})
