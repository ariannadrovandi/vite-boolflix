<template>
    <header class="container-fluid p-2 d-flex justify-content-between align-items-center">
        <h1 class="text-uppercase text-danger">Boolflix</h1>
        <div class="d-flex">
            <input type="text" class="form-control me-3" v-model="store.params.query" @keyup.enter="$emit('onSearch')">
            <button class="btn btn-danger" @click="$emit('onSearch')">Search</button> 
        </div>
    </header>
</template>

<script>
import {store} from '../data/store';
export default {
    name: "HeaderComponent",
    data(){
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        height: 80px;
        background-color: #121212;
    }
</style>