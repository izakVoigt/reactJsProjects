const API_KEY = '439b9a0bff1f22ba41fd78e3c3c3eac8'
const API_BASE = 'https://api.themoviedb.org/3'

/*
    - Originais da Netflix
    - Recomendados (trending)
    - Em alta (Top rated)
    - Séries
    - Ação
    - Aventura
    - Comedia
    - Ficção Científica
    - Romance
    - Terror
    - Faroeste
    - Animação
    - Drama
*/

const basicFetch = async (endPoint) => {
    const req = await fetch(`${API_BASE}${endPoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados Para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'topRated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'series',
                title: 'Séries',
                items: await basicFetch(`/discover/tv?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'adventure',
                title: 'Aventura',
                items: await basicFetch(`/discover/movie?with_genres=12&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'scifi',
                title: 'Ficção Científica',
                items: await basicFetch(`/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'western',
                title: 'Faroeste',
                items: await basicFetch(`/discover/movie?with_genres=37&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'animation',
                title: 'Animação',
                items: await basicFetch(`/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'drama',
                title: 'Drama',
                items: await basicFetch(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break
                default:
                    info = null
                break
            }
        }

        return info
    }
}