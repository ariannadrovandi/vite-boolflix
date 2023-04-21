<template>
  <div class="ad-page">
    <HeaderComponent @on-search="getFilm"/> 
    <MainComponent />
    <ul>
      <li v-for="film in store.movies">{{ film.title }} - {{ film.original_title }} - {{ film.original_lenguage }} - {{ film.vote_average }}</li>
      <li v-for="serie in store.series">{{ serie.title }} - {{ serie.original_title }} - {{ serie.original_lenguage }} - {{ serie.vote_average }}</li>
    </ul>
  </div>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import HeaderComponent from './components/headerComponent.vue';
import MainComponent from './components/MainComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
  },
  data(){
    return {
      store
    }
  },
    methods: {
      getFilm(){
                          //chimata api
        const url = store.urlBase + store.endpoint.movie;
        const options = {
          params: store.params
        }
        axios.get(url, options).then((res) => {
          console.log(res.data);
          this.store.movies = res.data.results;
        })
      // axios.get(url, {params: store.params});
      },
      getSerie(){
                          //chimata api
        const url = store.urlBase + store.endpoint.serieTv;
        const options = {
          params: store.params
        }
        axios.get(url, options).then((res) => {
          console.log(res.data);
          this.store.series = res.data.results;
        })
      }
    },
    mounted(){
        // this.getFilm()
    }
}
</script>

<style lang="scss" scoped>
  .ad-page{
    width: 100%;
    height: 100vh;
    // overflow:auto;
  }
</style>