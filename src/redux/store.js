import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catReducer from './slices/catSlice'
import dogReducer from "./slices/dogSlice";

const rootReducer = combineReducers({
    cat: catReducer,
    dog: dogReducer
})

export const store = configureStore({reducer: rootReducer})