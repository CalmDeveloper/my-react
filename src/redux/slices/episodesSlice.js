import {createSlice} from "@reduxjs/toolkit";
const initialState = {}
const mortySlice = createSlice({
    name: "mortySlice",
    initialState,
    reducers:{

    }
})

const {reducer:mortyReducer,actions} = mortySlice

const episodeActions = {

}
export {mortyReducer,episodeActions};


