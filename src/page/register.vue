<template>
  <div class="inPage" ref="inPage">
    <div class="header">
      <van-field v-model="name" placeholder="请输入用户名" clearable left-icon="manager" size="large"/>
      <van-field v-model="password" placeholder="请输入密码" clearable left-icon="lock" size="large" type="password"/>
      <van-field v-model="password2" placeholder="重复密码" clearable left-icon="lock" size="large" type="password2"/>
      <div class="pg-register">
      </div>
      <br>
      <van-button class="shadowAround" type="info" long size="large" @click="register">注册</van-button>
    </div>
  </div>
</template>
<script>
import mixin from '@/mixins/mixins';
export default {
  name: 'registerPage',
  mixins: [mixin],
  components: {
  },
  data () {
    return {
      name: '',
      password: '',
      password2: ''
    };
  },
  mounted () {
  },
  methods: {
    register () {}
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
