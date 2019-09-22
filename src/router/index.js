import Vue from 'vue'
import Router from 'vue-router'

// 引入路由对应的组件
import in_theaters from '../views/in_theaters/in_theaters.vue'
import coming_soon from '../views/coming_soon/coming_soon.vue'
import top250 from '../views/top250/top250.vue'
import endpage from '../views/endpage/endpage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // { path: '/in_theaters', name: 'in_theaters', component: in_theaters },
    // { path: '/coming_soon', name: 'coming_soon', component: coming_soon },
    // { path: '/top250', name: 'top250' , component: top250 }
    { path: '/in_theaters', name: 'in_theaters', component: endpage },
    { path: '/coming_soon', name: 'coming_soon', component: endpage },
    { path: '/top250', name: 'top250' , component: endpage }
  ]
})
