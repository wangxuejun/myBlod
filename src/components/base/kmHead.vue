<template>
  <div class="component kmhead flex shadowBottom">
    <Icon class="kmhead-mobile_back" type="ios-arrow-back" size="40" v-if="back" @click="returnBack"/>
    <Icon class="kmhead-mobile_reodrer" type="md-reorder" size="40" @click="toggle" v-else/>
    <span class="kmhead-mobile_title">标题</span>
    <span class="kmhead-pc_brand">JS</span>
    <Dropdown trigger="click" @on-click="select">
      <Avatar icon="ios-person"/>
      <DropdownMenu slot="list">
          <DropdownItem class="kmhead-mobile_dropditem" name="login">登录</DropdownItem>
          <DropdownItem class="kmhead-mobile_dropditem" name="register">注册</DropdownItem>
          <DropdownItem class="kmhead-mobile_dropditem" name="set">设置</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import mixin from '@/mixins/mixins'  
export default {
  name: 'HeadCom',
  mixins: [mixin],
  data () {
    return {
      back: false,
    }
  },
  watch: {
    '$route' (to, from) {
      let name = to.name;
      if (name === 'loginPage' || name === 'detailPage') {
        this.back = true
      } else {
        this.back = false
      }
    }
  },
  methods: {
    toggle () {
      this.$emit('toggle')
    },
    select (name) {
      console.log(name)
      this.createPage({name: 'loginPage'})
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/css/common.less';
  .component{
    height: 50px;
    padding: 0 16px;
    background-color: white;
    transition: all .3s;
  }
  .kmhead-pc_brand{
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #19be6b;
    display: inline-block;
  }
  @media screen and (max-width: 700px) {
    .kmhead-mobile_reodrer{
      margin-left: -10px;
      // transform: translateX(-10px);
    }
    .kmhead-mobile_back{
      margin-left: -10px;
      // transform: translateX(-10px);
    }
    .kmhead-pc_brand{
      display: none;
    }
    .kmhead-mobile_dropditem{
      font-size: 16px!important;
    }
  }
  @media screen and (min-width: 701px){
    .kmhead-mobile_reodrer{
      display: none;
    }
    .kmhead-mobile_back{
      display: none;
    }
    .kmhead-mobile_title{
      display: none;
    }
  }
</style>
