<template>
  <div class="page">
    1
    <h1 v-for="item in 100">index</h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .page{
    background-color: yellow;
  }
</style>
