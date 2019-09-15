<template>
  <transition name="fade">
  <div class="component kmBack" @click.stop="back" :style="{bottom: bottom + 'px'}" v-show="active">
    <Icon type="ios-arrow-up" />
  </div>
  </transition>
</template>

<script>
export default {
  name: 'kmBack',
  props: {
    bottom: {
      type: String | Number
    }
  },
  data () {
    return {
      timer: null,
      active: false
    }
  },
  mounted () {
    document.addEventListener('scroll', () => {
      clearTimeout(this.timer)
      this.active = true
      this.timer = setTimeout(() => {
        this.active = false
      }, 1500)
    })
    // document.addEventListener('touchstart', () => {
    //   clearTimeout(this.timer)
    //   this.active = true
    // })
    // document.addEventListener('touchend', () => {
    //   this.timer = setTimeout(() => {
    //     this.active = false
    //   }, 1500)
    // })
  },
  methods: {
    back () {
      // this.$router.replace('/home')
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/css/common.less';
  .component{
    background-color: rgba(0,0,0,.6);
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.2);
    /*transition: all .2s ease-in-out;*/
    padding: 4px 10px 8px;
    font-size: 24px;
    position: fixed;
    bottom: 71px;
    right: 32px;
    transform: rotate(-90deg);
    z-index: 9999!important;
    /*transition: all .3s;*/
    i:before{
      color: white;
    }
  }
</style>
