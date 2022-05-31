import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from '../../services/movies.service'
const initialState = {page:null, movies:null,curentMovies:null, genres:[]}

const getAll = createAsyncThunk(
    "moviesSlice/getAll",
    async ({page})=>{

        const {data} =   await  moviesService.getAllMovie(page)
        return data
    }
)
const getGenres = createAsyncThunk(
    "moviesSlice/getGenres",
    async ()=>{
        const {data} =   await  moviesService.getGenres()
        return data
    }
)

const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        getCurentMovies:((state, action) => {
            state.curentMovies=action.payload.title
        }),
        resetCurentMovies:((state, action) => {
            state.curentMovies=false
        }),
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, ((state, action) => {
                const {page,results} = action.payload
                state.pages = page
                state.movies = results
                state.curentMovies=false
            }))
            .addCase(getGenres.fulfilled, ((state, action) => {
                state.genres = action.payload.genres
            }))
    }
})

const {reducer:moviesReducer,actions:{getCurentMovies,resetCurentMovies}} = moviesSlice

const moviesActions = {
    getAll,resetCurentMovies,getCurentMovies, getGenres
}
export {moviesReducer,moviesActions};