import Vue from 'vue';

export let store = Vue.observable({
  userInfo: {
    nickname: '陨落'
  },
  title: '首页'
});
export let mutations = {
  setUser (user) {
    store.userInfo = user;
  },
  setTitle (title) {
    store.title = title;
  }
};
