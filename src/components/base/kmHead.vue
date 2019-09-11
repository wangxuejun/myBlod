<template>
  <div class="component kmhead flex shadowBottom">
    <Icon class="kmhead-mobile_reodrer" type="md-reorder" size="40" @click="toggle"/>
    <span class="kmhead-mobile_title">标题</span>
    <span class="kmhead-pc_brand">JS</span>
    <Dropdown trigger="click">
      <Avatar icon="ios-person"/>
      <DropdownMenu slot="list">
          <DropdownItem class="kmhead-mobile_dropditem">登录</DropdownItem>
          <DropdownItem class="kmhead-mobile_dropditem">注册</DropdownItem>
          <DropdownItem class="kmhead-mobile_dropditem">设置</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: 'HeadCom',
  data () {
    return {
    }
  },
  methods: {
    toggle () {
      this.$emit('toggle')
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
    .kmhead-mobile_title{
      display: none;
    }
  }
</style>
