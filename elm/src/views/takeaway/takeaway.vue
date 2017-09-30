<template>
  <div>
    <!-- 头部导航栏 高度0.8rem-->
    <top-bar :takeaway="{takeaway}" :address="{address}" :mine="{mine}"></top-bar>
    <!-- 食品分类轮播图 -->
    <food-Bar></food-Bar>
    <!-- 底部导航栏 -->
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import navBar from '../../components/navBar.vue'
import topBar from '../../components/topBar.vue'
import foodBar from '../../components/foodBar.vue'
export default {
  components: {
    navBar,
    topBar,
    foodBar
  },
  data () {
    return {
      // 头部导航栏信息
      takeaway: true,
      address: '南岸区重庆邮电大学',
      mine: false
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scpoed>
</style>