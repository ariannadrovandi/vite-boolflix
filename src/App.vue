<template>
  <div>
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
      const url = store.baseUrl + store.endpoint.film;
      axios.get(url).then((res) => {
        store.filmList = res.data.results;
      })
    },
    getSerie(){
      const url = store.baseUrl + store.endpoint.serieTv;
      axios.get(url).then((res) => {
        store.serieList = res.data.results;
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
</style>