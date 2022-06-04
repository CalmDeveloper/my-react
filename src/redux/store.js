import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/moviesSlice";
import {authReducer} from "./slices/authSlice";

const rootReducer = combineReducers({
    movies:moviesReducer,auth:authReducer
})

const store = configureStore({reducer:rootReducer})

export {store};