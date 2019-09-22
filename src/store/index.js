// 负责处理 vuex
import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'
Vue.use(Vuex)

// 创建对象
var store = new Vuex.Store({
    state: {
        title: '', // 页面的名称
        subjects: [] // 页面的数据
    },
    mutations: {
        // 给 title 和 subjects 赋值
        setStateData(state, payload) {
            state.title = payload.title
            state.subjects = payload.subjects
        }
    },
    actions: {
        // 发送异步请求请求数据
        setStateData(context,payload) {
            let url = `http://api.douban.com/v2/movie/${payload}?apikey=0df993c66c0c636e29ecbb5344252a4a`
            console.log(url)
            jsonp(url, (err, data) => {
                // 将参数交给 mutations
                context.commit({
                    type: 'setStateData',
                    title: data.title,
                    subjects: data.subjects
                })
            })
        }
    }
})

export default store