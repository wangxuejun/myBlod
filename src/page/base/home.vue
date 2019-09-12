<template>
  <div class="inPage">
    <h1 v-for="item,index in 100" @click="jump">home{{index}}</h1>
  </div>
</template>

<script>
import mixin from '@/mixins/mixins'
export default {
  name: 'homePage',
  mixins: [mixin],
  components: {
  },
  methods: {
    jump () {
      this.createPage({name: 'detailPage'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @media screen and (max-width: 700px) {
  }
  @media screen and (min-width: 701px){
  }
</style>
