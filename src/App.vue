<template>
  <div class="ad-page">
    <HeaderComponent />
    <MainComponent />
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
    MainComponent
  },
  data(){
    return {
      store
    }
  },
  methods: {
    getFilm(){
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
    this.getFilm();
    this.getSerie();
  }
}
</script>

<style lang="scss" scoped>
  .ad-page{
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
</style>