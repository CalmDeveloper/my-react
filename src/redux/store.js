import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {mortyReducer} from "./slices/episodesSlice";
import {locationReducer} from "./slices/locationSlice";
import {characterReducer} from "./slices/characterSlice";


const rootReducer = combineReducers({
   episodes:mortyReducer,
   locations: locationReducer,
   characters:characterReducer

})

const store = configureStore({reducer:rootReducer})

export {store};