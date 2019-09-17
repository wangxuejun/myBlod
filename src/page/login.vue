<template>
  <div class="inPage" ref="inPage">
    <div class="header">
      <van-field v-model="name" placeholder="请输入用户名" clearable left-icon="manager" size="large"/>
      <van-field v-model="password" placeholder="请输入密码" clearable left-icon="lock" size="large" type="password"/>
      <div class="pg-register">
        <span><Checkbox v-model="rember" size="large">记住登录状态</Checkbox></span>
        <span @click="register">注册</span>
      </div>
      <van-button class="shadowAround"  type="info" long size="large" @click="login">登录</van-button>
    </div>
  </div>
</template>
<script>
import mixin from '@/mixins/mixins';
export default {
  name: 'loginPage',
  mixins: [mixin],
  components: {
  },
  data () {
    return {
      name: '',
      password: '',
      rember: false
    };
  },
  mounted () {
  },
  methods: {
    // 去注册
    register () {
      this.$notify.clear();
      this.createPage({name: 'registerPage'});
    },
    // 登录
    login () {
      this.$notify({
        message: '用户名错误',
        color: '#ffffff',
        background: '#7a86d5',
        duration: 1000
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
