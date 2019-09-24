import Vue from 'vue';

let userInfo = localStorage.getItem('user');
export let store = Vue.observable({
  title: '首页',
  isMin: true,
  userInfo: {}
});
if (userInfo) {
  userInfo = JSON.parse(userInfo);
  store.userInfo = userInfo;
};
if (window.innerWidth <= 700) {
  store.isMin = true;
} else {
  store.isMin = false;
}
window.onresize = function () {
  if (window.innerWidth <= 700) {
    store.isMin = true;
  } else {
    store.isMin = false;
  }
};
export let mutations = {
  setUser (user) {
    store.userInfo = user;
  },
  setTitle (title) {
    store.title = title;
  }
};
