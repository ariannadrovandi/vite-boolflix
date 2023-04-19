<template>
    <div class="ad-card mx-2 my-4 col-12 col-sm-6 col-md-4 col-lg-3">
        <img :src="store.baseImg + film.poster_path" :alt="film.title">
    </div>
</template>

<script>
import { store } from '../data/store';
export default {
    name: 'CardComponent',
    data(){
        return {
            store
        }
    },
    props: [
        'film',
        'serieTv'
    ]
}
</script>

<style lang="scss" scoped>
    .ad-card{
        
        text-align: center;
        color: #ffffff;
        width: 250px;
        height: 350px;
    }
    img{
        border: 2px solid #ffffff;
        width: 100%;
        height: 100%;
    }
</style>