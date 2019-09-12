<template>
  <div class="page">
    <div class="head">
      <kmHead @toggle="toggle"></kmHead>
    </div>
    <div class="main">
      <div class="nav" :class="active? 'active': ''">
        <kmNav @toggle="toggle"></kmNav>
      </div>
      <div class="content">
        <transition :name="transitionName">
          <router-view class="position-div"></router-view>
        </transition>
      </div>
    </div>
    <!--遮罩-->
    <transition name="fade">
      <div class="overlay" v-if="active"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    kmHead: () => import('@/components/base/kmHead'),
    kmNav: () => import('@/components/base/kmNav')
  },
  data () {
    return {
      active: false,
      statue: false,
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
    // 手机模式下侧边栏隐藏与否
    toggle () {
      this.active = !this.active;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../assets/css/common.less';
  .page{
    height: 100%;
  }
  .head{
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  .main{
    padding-top: 50px;
    height: 100%;
    .nav{
      width: 200px;
      height: 100%;
    }
    .content{
      height: 100%;
    }
  }
  // 遮罩层
  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    z-index: 100;
  }
  @media screen and (max-width: 700px) {
    .main {
      .nav{
        position: fixed;
        top: 0;
        transform: translateX(-100%);
        background-color: white;
        transition: all .3s;
        z-index: 101;
        &.active{
          transform: translateX(0);
        }
      }
      .content{
        width: calc(100%);
        margin-left: 0;
        .position-div{
          position: absolute;
          left: 0;
          right: 0;
          top: 50px;
          bottom: 0;
        }
      }
    }
  }
  @media screen and (min-width: 701px){
    .main {
      .nav{
        position: fixed;
        .shadowRight;
      }
      .content{
        width: calc(100% - 200px);
        margin-left: 200px;
        .position-div{
          position: absolute;
          left: 200px;
          right: 0;
          top: 50px;
          bottom: 0;
        }
      }
    }
  }
</style>
