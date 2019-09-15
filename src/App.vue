<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <BackTop :bottom="20"></BackTop>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      transitionName: 'fade'
    }
  },
   watch: {
    '$route' (to, from) {
      let wid = document.documentElement.offsetWidth || document.body.offsetWidth
      if (wid > 700) {
        this.transitionName = 'fade'
        return
      }
      let fromI = from.meta.index
      let toI = to.meta.index
      if (fromI < toI) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less">
@import './assets/css/common.less';
*{
  padding: 0;
  margin: 0;
}
html, body{
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app{
  height: 100%;
}
</style>
