<template>
  <div class="inPage" ref="inPage">
    <div class="header">
      <van-field v-model="name" placeholder="请输入用户名" clearable left-icon="manager" size="large"/>
      <van-field v-model="password1" placeholder="请输入密码" clearable left-icon="lock" size="large" type="password"/>
      <van-field disabled style="opacity: 0"/>
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
      password1: '',
      password2: ''
    };
  },
  mounted () {
  },
  methods: {
    onInput (key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete () {
      this.value = this.value.slice(0, this.value.length - 1);
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
    padding: 10px;
  }
  .van-password-input{
    margin: 0;
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (min-width: 701px){
  }
</style>
