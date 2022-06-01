const  baseURL=process.env.REACT_APP_API
const urls={
    movie:'/discover/movie',
    genres:'/genre/movie/list',
    details:'/movie'
}
const miniPoster = `https://image.tmdb.org/t/p/w500`
export {urls,baseURL,miniPoster}

