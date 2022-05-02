import {createSlice} from "@reduxjs/toolkit";

const initialState = {name:null,status:null}

const characterSlice = createSlice({
    name: "characterSlice",
    initialState,
    reducers: {
        nameForSearch:((state, action) => {
            state.name=action.payload.name
        }),
        statusForSearch:((state, action) => {
            state.status=action.payload.status
        })
    }
})


const {reducer:characterReducer,actions:{nameForSearch,statusForSearch}} = characterSlice

const characterActions = {
    nameForSearch,statusForSearch
}
export {characterReducer,characterActions};
