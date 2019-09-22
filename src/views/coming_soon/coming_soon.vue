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
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState({
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
        this.setStateData('coming_soon')
    }
}
</script>

<style>

</style>
