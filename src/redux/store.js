import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slice/auth.slice";
import {carReducer} from "./slice/carSlice";

const rootReducer = combineReducers({
    auth: authReducer,cars:carReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
}