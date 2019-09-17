<template>
  <div class="component kmhead flex shadowBottom">
    <Icon class="kmhead-mobile_back" type="ios-arrow-back" size="40" v-if="back" @click="returnBack"/>
    <Icon class="kmhead-mobile_reodrer" type="md-reorder" size="40" @click="toggle" v-else/>
    <span class="kmhead-mobile_title">标题</span>
    <span class="kmhead-pc_brand">JS</span>
    <span class="kmHead-mobile_head">
      <Dropdown trigger="click" @on-click="select" v-if="!back">
        <Avatar icon="ios-person"/>
        <DropdownMenu slot="list">
            <DropdownItem class="kmhead-mobile_dropditem" name="loginPage">登录</DropdownItem>
            <DropdownItem class="kmhead-mobile_dropditem" name="registerPage">注册</DropdownItem>
            <DropdownItem class="kmhead-mobile_dropditem" name="setPage">设置</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </span>
  </div>
</template>

<script>
import mixin from '@/mixins/mixins';
export default {
  name: 'HeadCom',
  mixins: [mixin],
  data () {
    return {
      back: false
    };
  },
  watch: {
    '$route' (to) {
      let name = to.name;
      this.judge(name);
    }
  },
  mounted () {
    let name = this.$route.name;
    this.judge(name);
  },
  methods: {
    // 判断当前页面
    judge (name) {
      if (['loginPage', 'detailPage', 'registerPage'].indexOf(name) >= 0) {
        this.back = true;
      } else {
        this.back = false;
      }
    },
    // 侧边栏隐藏与否
    toggle () {
      this.$emit('toggle');
    },
    // 选择
    select (name) {
      this.createPage({name});
    }
  }
};
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
      color: @color_content;
    }
    .kmhead-mobile_back{
      margin-left: -10px;
      color: @color_content;
    }
    .kmhead-pc_brand{
      display: none;
    }
    .kmhead-mobile_dropditem{
      font-size: 16px!important;
    }
    .kmHead-mobile_head{
      min-width: 32px;
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
