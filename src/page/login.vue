<template>
  <div class="inPage" ref="inPage">
    <div class="shadowAround header">
      <van-field v-model="name" placeholder="请输入用户名" clearable/>
      <van-field v-model="password1" placeholder="请输入密码" clearable type="password"/>
      <van-field v-model="password2" placeholder="请重复密码" clickable type="password"/>
    </div>
    <!-- <van-password-input
      :value="value"
      info="密码为 6 位数字"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    /> -->
  </div>
</template>
<script>
import mixin from '@/mixins/mixins'
export default {
  name: 'loginPage',
  mixins: [mixin],
  components: {
  },
  data () {
    return {
      name: '',
      password1: '',
      password2: ''
    }
  },
  mounted () {
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../assets/css/common.less';
  .inPage{
    background-color: #f4f5f5;
    height: 100%;
    padding: 10px;
    .header{
      border-radius: 4px;
      overflow: hidden;
    }
  }
  .van-password-input{
    margin: 0;
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (min-width: 701px){
  }
</style>
