<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">{{ title }}</h1>
    <div class="row placeholders myrow">
      <div v-for="(item, index) in subjects" :key="index">
        <img :src="'https://images.weserv.nl?url=' + item.images.large.substr(7)" alt="">
        <span>{{item.title}}</span>
        <span>{{item.genres}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// 使用 vuex 中的数据
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      // 将 state 中的属性映射到了组件中
      title: state => state.title,
      subjects: state => state.subjects
    })
  },
  methods: {
      ...mapActions({
        setStateData: 'setStateData'
      })
  },
  mounted() {
    this.setStateData('top250')
  }
}
</script>
<style>
.myrow {
  text-align: left;
}
</style>
