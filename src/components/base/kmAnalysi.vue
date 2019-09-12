<template>
  <div class="component">
    <!--<mavon-editor ref="editor" v-model="doc"-->
            <!--:ishljs = "true"-->
            <!--@save="saveDoc"-->
            <!--@change="updateDoc">-->
    <!--</mavon-editor>-->
    <mavon-editor
      class="md"
      :ishljs = "true"
      :value="doc"
      :subfield = "false"
      defaultOpen = "preview"
      :toolbarsFlag = "false"
      :editable="false"
      :scrollStyle="true">
    </mavon-editor>
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
      isopen: false,
      doc: content
    }
  },
  mounted () {
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
