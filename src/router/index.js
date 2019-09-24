import Vue from 'vue';
import Router from 'vue-router';
import {mutations} from '@/store';
Vue.use(Router);

const Routers = new Router({
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
            index: 1,
            desc: '首页'
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
            index: 100,
            desc: '登录'
          }
        },
        {
          path: '/register',
          name: 'registerPage',
          component: resolve => require(['@/page/register'], resolve),
          meta: {
            index: 101,
            desc: '注册'
          }
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
Routers.beforeEach((to, from, next) => {
  mutations.setTitle(to.meta.desc);
  next();
});
export default Routers;
