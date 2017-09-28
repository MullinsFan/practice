<template>
  <div>
    <top-bar></top-bar>
    <nav-bar></nav-bar>
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scpoed>
  nav {
  }
</style>