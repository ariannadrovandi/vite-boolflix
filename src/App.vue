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
}
</script>

<style lang="scss" scoped>
</style>