import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";
const initialState = {count:null, pages:null, next:null, prev:null, episodes:[]}

const getAll = createAsyncThunk(
   "mortySlice/getAll",
    async ()=>{
     const {data} =   await  episodeService.getAll()
        return data
    }
)

const mortySlice = createSlice({
    name: "mortySlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, ((state, action) => {
const {info:{count, pages, next, prev},results} = action.payload
state.count = count
   state.pages = pages
   state.next = next
   state.next = next
   state.prev = prev
      state.episodes = results
            }))
    }
})

const {reducer:mortyReducer,actions} = mortySlice

const episodeActions = {
    getAll
}
export {mortyReducer,episodeActions};


