<template>
    <main>
        <section class="container-fluid">
        <h2>Movies</h2>
        <div class="row">
            <CardComponent v-for="(item, index) in store.movies" :key="item.id" :title="item.title" :original_title="item.origina_title" :overview="item.overview" :language="item.original_language" :vote="item.vote_average" :image="item.poster_path"/>
        </div>
    </section>
    <section class="container-fluid">
        <h2>Serie Tv</h2>
        <div class="row">
            <CardComponent v-for="(item, index) in store.series" :key="item.id" :title="item.name" :original_title="item.origina_name" :overview="item.overview" :language="item.original_language" :vote="item.vote_average" :image="item.poster_path"/>
        </div>
    </section>
    </main>
</template>

<script>
    import { store } from '../data/store';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardComponent,
        },
        data(){
            return {
            store
            }
        }
    }
</script>

<style lang="scss" scoped>
    h2{
        color: white;
    }
    main{
        overflow:scroll;
        height: 100vh;
        background-color: #222326;
    }
</style>