import { reactive } from 'vue';

export const store = reactive({
    movies: [],
    series: [],
    urlBase: 'https://api.themoviedb.org/3/',
    endpoint: {
        movie: 'search/movie',
        serieTv: 'search/tv'
    },
    params: {
        api_key:'4493a6161bf7eaaf2f840ecc546f651a',
        query: ''
    }
    
})