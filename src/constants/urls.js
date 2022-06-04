const  baseURL=process.env.REACT_APP_API
const urls={
    movie:'/discover/movie',
    genres:'/genre/movie/list',
    details:'/movie',
       keywords: '/search/movie'
}
const miniPoster = `https://image.tmdb.org/t/p/w500`
const noFoundImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
const notFoundPageImage = "https://i.stack.imgur.com/6M513.png"
export {urls,baseURL,miniPoster,noFoundImage,notFoundPageImage}

