// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'
// import hljs from 'highlight.js'
// import 'highlight.js/styles/googlecode.css'
import { Switch, Message, Notice, Modal, Icon, Avatar, Dropdown, DropdownMenu, DropdownItem } from 'iview';
let components1 = {
  'i-switch': Switch,
  'Icon': Icon,
  'Avatar': Avatar,
  'Dropdown': Dropdown,
  'DropdownMenu': DropdownMenu,
  'DropdownItem': DropdownItem
}
let components2 = {
  '$Message': Message,
  '$Notice': Notice,
  '$Modal': Modal
}
for(let key in components1) {
  Vue.component(key, components1[key]);
}
for(let key in components2) {
  Vue.component(key, components1[key]);
  Vue.prototype[key] = components2[key];
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
