import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from '../../services/movies.service'

const initialState = {currentPage: null, keywords:null, total_pages: null, movies: null, curentMovies: null, genres: [], details: {}, genresOfOneMovie: '',
    genresArrForSearch:[]}

const getDetails = createAsyncThunk(
    "moviesSlice/getDetails",
    async ({id}) => {
        const {data} = await moviesService.details(id)
        return data
    }
)

const searchByKeywords = createAsyncThunk(
    "moviesSlice/searchByKeywords",
    async ({parametr}) => {
        const {data} = await moviesService.searchByKeywords(parametr)
        return data
    }
)
const getAll = createAsyncThunk(
    "moviesSlice/getAll",
    async ({page,with_genres}) => {

        const {data} = await moviesService.getAllMovie(page,with_genres)
        return data
    }
)
const getGenres = createAsyncThunk(
    "moviesSlice/getGenres",
    async () => {
        const {data} = await moviesService.getGenres()
        return data
    }
)

const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        getCurentMovies: ((state, action) => {
            state.curentMovies = action.payload.title
        }),
        resetCurentMovies: ((state, action) => {
            state.curentMovies = false
        }),
        genresForSearch: ((state, action) => {
            state.genresArrForSearch=action.payload.arrOfGenrs.arrOfGenrs
        }),
        getKeywords: ((state, action) => {
            state.keywords =  action.payload.keywords.keywords
        }),
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, ((state, action) => {
                const {page, results} = action.payload
                state.currentPage = page
                state.movies = results
                state.total_pages = action.payload.total_pages
                state.curentMovies = false

            }))
            .addCase(getGenres.fulfilled, ((state, action) => {
                state.genres = action.payload.genres
            }))
            .addCase(getDetails.fulfilled, ((state, action) => {
                state.details = action.payload
                const {genres} = action.payload
                state.details = action.payload
                const genresArr = genres.map((value) => value.name)
                state.genresOfOneMovie = genresArr.toString().replaceAll(',', ', ').toLowerCase()
            }))
            .addCase(searchByKeywords.fulfilled, ((state, action) => {
                const {page, results,total_pages} = action.payload
                state.currentPage = page
                state.total_pages = total_pages
                state.movies = results





            }))
    }
})

const {reducer: moviesReducer, actions: {getCurentMovies, resetCurentMovies,genresForSearch,getKeywords}} = moviesSlice

const moviesActions = {
    getAll, resetCurentMovies, getCurentMovies, getGenres, getDetails,genresForSearch,getKeywords,searchByKeywords
}
export {moviesReducer, moviesActions};