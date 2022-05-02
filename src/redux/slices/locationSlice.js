import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {locationService} from "../../services";
const initialState = {count:null, pages:null, next:null, prev:null, locations:[], curentLocation:null}

const getAll = createAsyncThunk(
    "locationSlice/getAll",
    async ({page})=>{
        const {data} =   await  locationService.getAll(page)
        return data
    }
)
const locationSlice = createSlice({
    name:'locationSlice',
    initialState,
    reducerse:{},
    extraReducers:(builder)=> {
        builder
.addCase(getAll.fulfilled, ((state, action) => {
        const {info:{count, pages, next, prev}, results} = action.payload
        state.count = count
        state.pages = pages
        state.next = next
        state.prev = prev
        state.locations = results
    }))
}
})

const {reducer:locationReducer,actions} = locationSlice;

const  locationActions={getAll}

export {locationReducer,locationActions};