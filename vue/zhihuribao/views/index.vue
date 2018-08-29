<template>
  <div class="main">
    <h1>欢迎来到热图加载系统</h1>
    <div>
      <el-button type="primary">点击上传本地图片</el-button>
      <el-button type="primary">点击上传在线图片</el-button>
    </div>
    <Counter :number="number"></Counter>
  </div>
</template>
<script>
import Counter from './Counter.vue'
export default {
  components: {
    Counter
  },
  data () {
    return {
      number: 0
    }
  },
  created() {
    this.$bus.on('add', num => {
      this.number += num
    })
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


