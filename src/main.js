// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'iview/dist/styles/iview.css';
// iview
import { Switch, Message, Notice, Modal, Icon, Avatar, Dropdown, DropdownMenu, DropdownItem, BackTop, Checkbox } from 'iview';
// vant
import { Button, Skeleton, PullRefresh, Loading, Image, Lazyload, Field, Notify, Toast } from 'vant';
import 'vant/lib/Skeleton/style';
import 'vant/lib/pull-refresh/style';
import 'vant/lib/loading/style';
import 'vant/lib/image/style';
import 'vant/lib/lazyload/style';
import 'vant/lib/field/style';
import 'vant/lib/notify/style';
import 'vant/lib/toast/style';
let components1 = {
  'i-button': Button,
  'i-switch': Switch,
  'Icon': Icon,
  'Avatar': Avatar,
  'Dropdown': Dropdown,
  'DropdownMenu': DropdownMenu,
  'DropdownItem': DropdownItem,
  'BackTop': BackTop,
  'Checkbox': Checkbox
};
let components2 = {
  '$Message': Message,
  '$Notice': Notice,
  '$Modal': Modal
};
for (let key in components1) {
  Vue.component(key, components1[key]);
}
for (let key in components2) {
  Vue.component(key, components1[key]);
  Vue.prototype[key] = components2[key];
}
Vue.use(Button);
Vue.use(Skeleton);
Vue.use(PullRefresh);
Vue.use(Loading);
Vue.use(Image);
Vue.use(Lazyload);
Vue.use(Field);
Vue.use(Notify);
Vue.use(Toast);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
