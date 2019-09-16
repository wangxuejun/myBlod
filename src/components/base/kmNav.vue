<template>
  <div class="component kmNav">
    <div class="kmNav-mobile_head shadowBottom flex" @click.stop="toggle">
      <Icon type="md-return-left" size="40"/>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixins/mixins';
export default {
  name: 'HeadCom',
  mixins: [mixin],
  data () {
    return {
    };
  },
  methods: {
    toggle () {
      this.$emit('toggle');
    }
  }
};
</script>

<style scoped lang="less">
  @import '../../assets/css/common.less';
  .component{
    background-color: white;
  }
  @media screen and (max-width: 700px) {
    .kmNav-mobile_head{
      height: 50px;
      background-color: white;
      justify-content: flex-end;
      padding-right: 10px;
    }
  }
  @media screen and (min-width: 701px){
    .kmNav-mobile_head{
      display: none;
    }
  }
</style>
