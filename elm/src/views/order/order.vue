<template>
  <div>
    <top-bar></top-bar>
    <nav-bar :order="order"></nav-bar>
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
        order: true
      }
    }
  }
</script>

<style lang="scss" scpoed>
  
</style>