<template>
  <section>
    <i v-if="takeaway" class="iconfont">&#xe651;</i>
    <i v-else class="iconfont address">&#xe62a;</i>
    <span>{{address}}</span>
    <i v-if="mine" class="iconfont">&#xe60f;</i>
  </section>
</template>

<script>
export default {
  // 传props时用数组和对象的区别
  props: {
    takeaway: {
      default: false
    },
    address: {
      default: 'lalamu'
    },
    mine: {
      default: false
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  section {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #3190e8;
    color: #fff;
    align-items: center;
    span {
      display: flex;
      font-size: 0.30rem;
      line-height: 0.8rem;
      width: 80%;
      justify-content:center;
    }
    i {
      display: flex;
      font-size: 0.38rem;
      width: 10%;
      justify-content: center;
    }
  }
</style>
