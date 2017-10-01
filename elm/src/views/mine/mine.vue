<template>
  <div>
    <top-bar :mine="mine"></top-bar>
    <nav-bar :mine="mine"></nav-bar>
  </div>
</template>

<script>
  import navBar from '../../components/navBar.vue'
  import topBar from '../../components/topBar.vue'
  export default {
    components: {
      navBar,
      topBar
    },
    data () {
      return {
        mine: true
      }
    }
  }
</script>

<style lang="scss" scpoed>
  
</style>