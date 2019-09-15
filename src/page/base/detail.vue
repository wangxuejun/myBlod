<template>
  <div class="inPage">
    <kmAnalysi></kmAnalysi>
  </div>
</template>

<script>
export default {
  name: 'detailPage',
  components: {
    kmAnalysi: () => import('@/components/base/kmAnalysi')
  },
  mounted () {
    console.log('detail')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .inPage{
    z-index: 90;
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (min-width: 701px){
  }
</style>
