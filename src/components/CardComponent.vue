<template>
    <div class="ad-margin col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card flip-card">
            <div class="flip-card-inner">
                <div class="card-image flip-card-front">
                <img class="img-fluid" :src="(image) ? store.imagePath + store.fileSize + image : '/img/fake.png'" :alt="title">
                </div>
                <div class="my-4 d-flex flex-column align-items-center justify-content-center flip-card-back">
                    <p>{{ title }}</p>
                    <p>{{ original_title }}</p>
                    <p class="fs-6 m-4 overflow-scroll">{{ overview }}</p>
                    <img class="img-fluid" id="flags" :src="'/img/'+flags+'.png'" :alt="language">
                    <!-- <p>{{ stars }}</p> -->
                    <div class="stars">
                        <i class="fa-star" v-for="(n, index) in 5" :key="index" :class="(n <= stars) ? 'fa-solid' : 'fa-regular'"></i>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    import {store} from '../data/store';
    export default {
        name: 'CardComponent',
        props: [
            'title',
            'original_title',
            'overview',
            'language',
            'vote',
            'image'
        ],
        data(){
            return {
                store,
                availableFlags: [
                    'de',
                    'en',
                    'es',
                    'it'
                ]
            }
        },
        computed: {
            flags() {
                if (this.availableFlags.includes(this.language)) {
                    return this.language;
                } else {
                    return 'unk'
                }
            },
            stars() {
                return Math.round(this.vote / 2);
            }
        }
    }
</script>


<style lang="scss" scoped>
    body {
    font-family: Arial, Helvetica, sans-serif;
    }

    .flip-card {
    background-color: transparent;
    width: 342px;
    height: 510px;
    perspective: 1000px;
    }

    .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    }

    .flip-card-front {
    background-color: #bbb;
    color: black;
    }

    .flip-card-back {
        background-color: #000000;
        color: white;
        transform: rotateY(180deg);
    }
    .card{
        width: 342px;
    }
    .ad-margin{
        margin-bottom: 5px;
        margin-top: 5px;
    }
    #flags{
        width: 50px;
        height: 50px;
    }

    .fa-star{
        color: yellow;
    }
</style>
