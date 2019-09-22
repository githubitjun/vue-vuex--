<template>
    <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
            <router-link to="/in_theaters" tag="li" active-class="active">
                <a>正在热映</a>
            </router-link>
            <router-link to="/coming_soon" tag="li" active-class="active">
                <a>即将上映</a>
            </router-link>
            <router-link to="/top250" tag="li" active-class="active">
                <a>top250</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
