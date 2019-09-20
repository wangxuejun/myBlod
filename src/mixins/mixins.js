import { $loading } from '@/utils/loading';
export default {
  data () {
    return {
    };
  },
  created () {
  },
  methods: {
    // 阻止空事件
    stop () {},
    // 加载框
    loading () {
      return $loading();
    },
    returnBack () {
      this.$router.back();
    },
    // 跳转页面
    createPage (page) {
      let {name, params, query} = page;
      this.$router.push({name, params, query});
    },
    // 验证值是否有效
    isValid (value) {
      if (value === '') { return false; }
      if (value === null) { return false; }
      if (value === undefined) { return false; }
      if (value === 0) { return false; }
      if (value === false) { return false; }
      return true;
    },
    // 验证值是否有效
    isValidNot0 (value) {
      if (value === '') { return false; }
      if (value === null) { return false; }
      if (value === undefined) { return false; }
      if (value === false) { return false; }
      return true;
    },
    // 处理点击事件错位
    resetClick () {
      setTimeout(function () {
        var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
      }, 100);
    }
  },
  computed: {
  }
  // beforeRouteEnter (to, from, next) {
  //   let {title} = to.meta
  //   title = title || '珂盟美业'
  //   if (title) document.title = title
  //   next()
  // },
};
