import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catReducer from './slices/catSlice'

const rootReducer = combineReducers({
    cat: catReducer
})

export const store = configureStore({reducer: rootReducer})