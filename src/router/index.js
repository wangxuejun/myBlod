import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: resolve => require(['@/page/index'], resolve),
      redirect: '/home',
      children: [
        {
          name: 'homePage',
          path: 'home',
          component: resolve => require(['@/page/base/home'], resolve),
          meta: {
            index: 1
          }
        },
        {
          name: 'detailPage',
          path: 'detail',
          component: resolve => require(['@/page/base/detail'], resolve),
          meta: {
            index: 2
          }
        },
        {
          path: '/login',
          name: 'loginPage',
          component: resolve => require(['@/page/login'], resolve),
          meta: {
            index: 100
          }
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
