<template>
  <div @click="handleClick">介绍页</div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      // console.log(this.$router);
      this.$router.push('/user/123');
    }
  }
}
</script>

