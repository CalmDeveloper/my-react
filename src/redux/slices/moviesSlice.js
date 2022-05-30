import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from '../../services/movies.service'
const initialState = {page:null, movies:[],curentMovies:null}

const getAll = createAsyncThunk(
    "moviesSlice/getAll",
    async ({api_key,page})=>{

        const {data} =   await  moviesService.getAllMovie(api_key,page)

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
    }
})

const {reducer:moviesReducer,actions:{getCurentMovies,resetCurentMovies}} = moviesSlice

const moviesActions = {
    getAll,resetCurentMovies,getCurentMovies
}
export {moviesReducer,moviesActions};