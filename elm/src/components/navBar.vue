<template>
  <footer>
      <section>
        <i class="iconfont">&#xe64f;</i>
        <span>外卖</span>
      </section>
      <section>
        <i class="iconfont">&#xe600;</i>
        <span>发现</span>
      </section>
      <section>
        <i class="iconfont">&#xe601;</i>
        <span>订单</span>
      </section>
      <section>
        <i class="iconfont">&#xe644;</i>
        <span>我的</span>
      </section>
  </footer>
</template>

<script>
export default {
  data () {
    return {
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
  }
</style>
