<template>
  <div class="inPage" ref="inPage">
    <div class="header">
      <van-field v-model="user" placeholder="请输入用户名" clearable left-icon="manager" size="large"/>
      <van-field v-model="password" placeholder="请输入密码" clearable left-icon="lock" size="large" type="password"/>
      <van-field v-model="password2" placeholder="重复密码" clearable left-icon="lock" size="large" type="password"/>
      <van-field v-model="nickname" placeholder="请输入昵称" clearable left-icon="smile" size="large"/>
      <div class="pg-register">
      </div>
      <br>
      <van-button class="shadowAround" type="info" long size="large" @click="register">注册</van-button>
    </div>
  </div>
</template>
<script>

import mixin from '@/mixins/mixins';
import { apiRegister } from '../utils/api';
import { $checkEmpty } from '../utils/utils';
export default {
  name: 'registerPage',
  mixins: [mixin],
  components: {
  },
  data () {
    return {
      user: '',
      password: '',
      password2: '',
      nickname: ''
    };
  },
  mounted () {
  },
  methods: {
    // 注册
    register () {
      let user = this.user;
      let password = this.password;
      let password2 = this.password2;
      let nickname = this.nickname;
      let check = [
        {key: user, msg: '用户名不能为空！'},
        {key: password, msg: '密码不能为空！'},
        {key: password2, msg: '请确认密码'},
        {key: nickname, msg: '用户昵称不能为空'}
      ];
      if (!$checkEmpty(check)) return;
      if (password !== password2) {
        this.$Message.error('两次密码输入不一致！');
        return;
      }
      apiRegister({user, password, nickname}, res => {
        if (res.code === 0) {
          this.$Message.success('注册成功！');
          setTimeout(() => {
            this.createPage({name: 'loginPage'});
          }, 700);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../assets/css/common.less';
  .inPage{
    background-color: white;
    height: 100%;
    padding: 15px;
  }
  /*ui库样式覆盖*/
  .van-password-input{
    margin: 0;
  }
  .van-button--info{
    background-color: @color_primary;
    border-color: @color_primary;
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (min-width: 701px){
  }
</style>
