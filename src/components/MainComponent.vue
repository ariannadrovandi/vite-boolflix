<template>
    <div class="main">
        <p class="fs-3">Film Section</p>
        <div class="container d-flex flex-wrap justify-content-between">
            <CardComponent v-for="(film, index) in store.filmList" :key="film.id" :film="film"/>
        </div>
        <p class="fs-3">Serie TV Section</p>
        <div class="container d-flex flex-wrap justify-content-between">
            <CardComponent />
        </div>
    </div>
    
</template>

<script>
import { store } from '../data/store';
import CardComponent from './CardComponent.vue';
export default {
    name: 'MainComponent',
    components: {
        CardComponent
    },
    data(){
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
    .main{
        height: calc(100vh - 80px);
        width: 100%;
        padding: 35px;
        background-color: #797878;
    }
    p{
        font-size: 3rem;
        padding-top: 45px;
        color: #ffffff;
    }
</style>