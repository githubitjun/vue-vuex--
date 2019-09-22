<template>
  <div>
    <!-- 顶部导航 -->
    <tophead />
    <!-- 内部区域 -->
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <myaside />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import tophead from './components/tophead/tophead.vue'
import myaside from './components/aside/aside.vue'

export default {
  components: {
    tophead,
    myaside
  }
}
</script>

<style>

</style>
