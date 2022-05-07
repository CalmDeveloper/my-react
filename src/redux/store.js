
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slice/auth.slice";


const rootReducer = combineReducers({
    auth: authReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
}