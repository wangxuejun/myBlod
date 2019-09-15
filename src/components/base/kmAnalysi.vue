<template>
  <div class="component">
    <div>
      <br v-if="loading">
      <van-skeleton :row="50" :row-width="config" :loading="loading">
        <mavon-editor
          class="md"
          :boxShadow = "false"
          :ishljs = "true"
          :value="doc"
          :subfield = "false"
          defaultOpen = "preview"
          :toolbarsFlag = "false"
          :editable="false"
          :scrollStyle="true">
        </mavon-editor>
      </van-skeleton>
    </div>
  </div>
</template>
<script>
import {content} from './text.js'
import {mavonEditor} from "mavon-editor"
import "mavon-editor/dist/css/index.css"
export default {
  components: {mavonEditor},
  data () {
    return {
      loading: true,
      isopen: false,
      doc: content,
      config:[]
    }
  },
  created () {
    let arr = ['40%', '80%', '90%', '50%', '60%']
    let n = 0;
    for(let i = 0; i < 50; i++) {
      if(n === 4) n = 0
      this.config.push(arr[n])
      n +=1
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    updateDoc(markdown, html) {
      // 此时会自动将 markdown 和 html 传递到这个方法中
      console.log("markdown内容: " + markdown);
      console.log("html内容:" + markdown);
    },
    saveDoc(markdown, html) {
      // 此时会自动将 markdown 和 html 传递到这个方法中
      console.log("markdown内容:" + markdown);
      console.log("html内容:" + html);
    }
  }
}
</script>
<style>

</style>
