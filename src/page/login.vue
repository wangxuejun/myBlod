<template>
  <div class="inPage" ref="inPage">
    <div class="header">
      <van-field v-model="user" placeholder="请输入用户名" clearable left-icon="manager" size="large"/>
      <van-field v-model="password" placeholder="请输入密码" clearable left-icon="lock" size="large" type="password"/>
      <div class="pg-register">
        <span><Checkbox v-model="rember" size="large">一周内免登陆</Checkbox></span>
        <span @click="register">注册</span>
      </div>
      <van-button class="shadowAround"  type="info" long size="large" @click="login">登录</van-button>
    </div>
  </div>
</template>
<script>
import mixin from '@/mixins/mixins';
import { apiLogin } from '../utils/api';
import { $checkEmpty } from '../utils/utils';
export default {
  name: 'loginPage',
  mixins: [mixin],
  components: {
  },
  data () {
    return {
      user: '',
      password: '',
      rember: false
    };
  },
  mounted () {
  },
  methods: {
    // 去注册
    register () {
      this.createPage({name: 'registerPage'});
    },
    // 登录
    login () {
      let user = this.user;
      let password = this.password;
      let check = [
        {key: user, msg: '用户名不能为空！'},
        {key: password, msg: '密码不能为空！'}
      ];
      if (!$checkEmpty(check)) return;
      apiLogin({user, password}, (res) => {
        console.log(res);
        if (res.code === 0) {
          let token = res.data.token;
          let info = res.data;
          delete info.token;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(info));
          this.$mutations.setUser(info);
          this.$Message.success('欢迎登陆！');
          setTimeout(() => {
            this.createPage({name: 'homePage'});
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
  /*公共样式*/
  .inPage{
    background-color: white;
    height: 100%;
    padding: 15px;
    .pg-register{
      .flex;
      padding: 20px 0;
      color: @color_content;
    }
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
