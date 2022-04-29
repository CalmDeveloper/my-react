import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {mortyReducer} from "./slices/episodesSlice";

const rootReducer = combineReducers({
   episodes:mortyReducer
})

const store = configureStore({reducer:rootReducer})

export {store};