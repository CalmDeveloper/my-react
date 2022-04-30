import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";
const initialState = {count:null, pages:null, next:null, prev:null, episodes:[],curentEpisode:null}

const getAll = createAsyncThunk(
   "mortySlice/getAll",
    async ({page})=>{
     const {data} =   await  episodeService.getAll(page)
        return data
    }
)

const mortySlice = createSlice({
    name: "mortySlice",
    initialState,
    reducers: {
        getCurentEpisode:((state, action) => {
            state.curentEpisode=action.payload.episodeName
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, ((state, action) => {
const {info:{count, pages, next, prev},results} = action.payload
   state.count = count
   state.pages = pages
   state.next = next
   state.prev = prev
      state.episodes = results
            }))
    }
})

const {reducer:mortyReducer,actions:{getCurentEpisode}} = mortySlice

const episodeActions = {
    getAll,getCurentEpisode
}
export {mortyReducer,episodeActions};


