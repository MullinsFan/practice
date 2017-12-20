<template>
  <div>
    <h1>欢迎来到热图加载系统</h1>
    <el-button type="primary">点击上传本地图片</el-button>
    <el-button type="primary" plain>主要按钮</el-button>
    <button>点击填写在线图片</button>
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

