import { reactive } from 'vue';

export const store = reactive({
    urlBase: 'https://api.themoviedb.org/3/',
    endpoint: {
        film: 'search/movie?api_key=4493a6161bf7eaaf2f840ecc546f651a&query=a',
        serieTv: 'search/tv?api_key=4493a6161bf7eaaf2f840ecc546f651a&page=a'
    },
    imgBase: 'https://image.tmdb.org/t/p/w300/',
    search: '',
    filmList: [],
    serieList: [],
})