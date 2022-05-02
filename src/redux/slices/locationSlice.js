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
    reducers:{
        getCurentLocation:((state, action) => {
            state.curentLocation=action.payload.name
        }),
        resetCurentLocation:((state, action) => {
            state.curentLocation=false
        }),
    },
    extraReducers:(builder)=> {
        builder
.addCase(getAll.fulfilled, ((state, action) => {
        const {info:{count, pages, next, prev}, results} = action.payload
        state.count = count
        state.pages = pages
        state.next = next
        state.prev = prev
        state.locations = results
    state.curentLocation=false
    }))
}
})

const {reducer:locationReducer,actions:{getCurentLocation,resetCurentLocation}} = locationSlice;

const  locationActions={getAll,getCurentLocation,resetCurentLocation}

export {locationReducer,locationActions};