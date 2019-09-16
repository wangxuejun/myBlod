<template>
  <div class="inPage" ref="inPage">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <kmArcile v-for="(item, index) in list" :info="item" :key="index" @click.native="jump"></kmArcile>
      <div class="bottom">
        <van-loading />
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import mixin from '@/mixins/mixins';
export default {
  name: 'homePage',
  mixins: [mixin],
  components: {
    kmArcile: () => import('@/components/base/kmArcile')
  },
  data () {
    return {
      isLoading: false,
      list: [
        {
          img: true,
          love: 3
        },
        {
          img: false,
          love: 4
        },
        {
          img: true,
          love: 2
        },
        {
          img: true,
          love: 5
        },
        {
          img: true,
          love: 5
        },
        {
          img: false,
          love: 3
        },
        {
          img: false,
          love: 4
        },
        {
          img: true,
          love: 3
        },
        {
          img: true,
          love: 1
        }
      ]
    };
  },
  mounted () {
    let that = this;
    window.onscroll = function () {
      let dom = that.$refs.inPage;
      if (!dom) return;
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = dom.scrollHeight + 50;
      if (scrollTop + windowHeight === scrollHeight) {
        that.onLoading();
      }
    };
  },
  methods: {
    jump () {
      this.createPage({name: 'detailPage'});
    },
    // 下拉刷新
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
    // 加载更多
    onLoading () {
      setTimeout(() => {
        this.list.push({
          img: true,
          love: 3
        });
      }, 2000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .inPage{
    background-color: #f4f5f5;
    .bottom{
      text-align: center;
      padding: 10px 0;
    }
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (min-width: 701px){
  }
</style>
