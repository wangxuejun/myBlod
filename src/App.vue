<template>
  <div id="app">
    <div class="head">
      <kmHead @toggle="toggle"></kmHead>
    </div>
    <div class="main">
      <div class="nav" :class="active? 'active': ''" @click="toggle">
        nav
      </div>
      <div class="content">
        <router-view></router-view> 
      </div>
    </div>
    <transition name="fade">
      <div class="overlay" v-if="active"></div>
    </transition> 
  </div>
</template>
<script>

export default {
  name: 'App',
   components: {
      kmHead: () => import ('@/components/base/kmHead')
    },
  data () {
    return {
      active: false,
      statue: false
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
.head{
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
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
      background-color: green;
      transition: all .3s;
      z-index: 101;
      &.active{
        transform: translateX(0);
      }
    }
    .content{
      width: calc(100%);
      margin-left: 0;
    }
  }
}
@media screen and (min-width: 701px){
  .main {
    .nav{
      position: fixed;
      // background-color: blue;
    }
    .content{
      width: calc(100% - 200px);
      margin-left: 200px;
    }
  }
}
/*手机*/
// @media screen and (max-width: 700px) {
//   #app{
//     transition: all .3s;
//   }
//   .header{
//     display: flex;
//     align-items: center;
//     height: 50px;
//     padding: 0 10px;

//   }
//   .nav-bat{
//     z-index: 10000;
//   }
//   .header-left{
//     flex: 1;
//     text-align: right;
//   }
//   .header-right{
//     display: none;
//   }
//   .content-left{
//     width: 0px;
//     background-color: white;
//     overflow: hidden;
//     transition: all .3s;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
//   .content-left >div:first-child{
//       margin-top: 50px;
//   }
//   .content-left >div img{
//     width: 100px;
//     height: 100px;
//     border-radius: 50px;
//     overflow: hidden;
//   }
//   .content-right{
//     width: 100%;
//     position: relative;
//   }
//   .content-left_actived{
//     width: 200px;
//     overflow: hidden;
//     /*display: block;*/
//   }
//   .content-right_actived:after{
//     position: absolute;
//     top: 0;
//     left: 0;
//     content:"";
//     display: block;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0,0,0,0.5);
//   }
// }
/*电脑*/
// @media screen and (min-width: 701px) {
//   .header{
//     display: flex;
//     align-items: center;
//     height: 50px;
//     padding: 0 50px;
//     position:fixed;
//     width:100%;
//     box-sizing: border-box;
//   }
//   .container-view{
//     margin-top: 50px;
//   }
//   .nav-bat{
//     display: none;
//   }
//   .header-left{
//     flex: 1;
//   }
//   .header-right{
//   }
//   .header-right span{
//     padding: 0 20px;
//     cursor: pointer;
//   }
//   .content-left{
//     width: 0px;
//     background-color: blue;
//     overflow: hidden;
//   }
// }
.content-right{
  flex: 1;
}
.header{
  background-color: white;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1)
}
.header-left span{
}
</style>
