import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {mortyReducer} from "./slices/episodesSlice";
import {locationReducer} from "./slices/locationSlice";


const rootReducer = combineReducers({
   episodes:mortyReducer,
   locations: locationReducer,

})

const store = configureStore({reducer:rootReducer})

export {store};