<template>
  <!-- 食品分类轮播图 -->
  <div class="foodc">
    <section v-for="item of foodData" :key="item.id">
      <img :src="item.image_url" :alt="item.title">
      <span>{{item.title}}</span>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      // 食品分类信息
      foodData: ''
    }
  },
  created () {
    this.classification()
  },
  methods: {
    classification () {
      let url = '/api/v2/index_entry'
      let _this = this
      axios.get(url)
      .then((response) => {
        _this.foodData = response.data
        console.dir('食品分类信息：')
        console.log(_this.foodData)
        // url处理
        for (let i = 0; i < _this.foodData.length; i++) {
          _this.foodData[i].image_url = 'https://fuss10.elemecdn.com' + _this.foodData[i].image_url
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .foodc {
    display:flex;
    flex-wrap: wrap;
    margin-top: 0.8rem;
    section {
      display: flex;
      flex-direction: column;
      width: 25%;
      justify-content: center;
      padding: 0.16rem 0;
      img{
        display:inline-flex;
        width: 0.8rem;
        height: 0.8rem;
        margin: 0 auto;
      }
      span {
        text-align: center;
        font-size: 0.26rem;
        margin-top: 0.4rem;
        color: #666;
      }
    }
  }
</style>
