<template>
  <footer>
      <section @click='goTakeaway()' :class="{select: takeaway}">
        <i class="iconfont">&#xe64f;</i>
        <span>外卖</span>
      </section>
      <section @click='goDiscover()' :class="{select: discover}">
        <i class="iconfont">&#xe600;</i>
        <span>发现</span>
      </section>
      <section @click='goOrder()' :class="{select: order}">
        <i class="iconfont">&#xe601;</i>
        <span>订单</span>
      </section>
      <section @click='goMine()' :class="{select: mine}">
        <i class="iconfont">&#xe644;</i>
        <span>我的</span>
      </section>
  </footer>
</template>

<script>
export default {
  props: {
    takeaway: {
      default: false
    },
    discover: {
      default: false
    },
    mine: {
      default: false
    },
    order: {
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    goTakeaway () {
      let url = '/'
      this.$router.push({
        path: url
      })
    },
    goOrder () {
      let url = '/order'
      this.$router.push({
        path: url
      })
    },
    goMine () {
      let url = '/mine'
      this.$router.push({
        path: url
      })
    },
    goDiscover () {
      let url = '/discover'
      this.$router.push({
        path: url
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  footer {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 0.01rem solid #333;
    background-color: #fff;
    section {
      display: flex;
      width: 25%;
      flex-direction: column;
      margin-top: 0.04rem;
      i,span {
        display: flex;
        font-size: 0.4rem;
        justify-content: center;
        margin: 0.08rem 0;
      }
      span {
        font-size: 0.26rem;
      }
    }
    .select {
      color: red;
    }
  }
</style>
