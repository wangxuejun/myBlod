<template>
  <div id="app">
    <router-view></router-view>
    <BackTop :bottom="20"></BackTop>
    <kmBack :bottom="60"></kmBack>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
    kmBack: () => import('@/components/base/kmBack')
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less">
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
