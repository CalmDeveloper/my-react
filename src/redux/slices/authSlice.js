import {createSlice} from "@reduxjs/toolkit";


const initialState = {userName: null, hideLoginForm: null}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        openLoginForm: ((state, action) => {
            state.hideLoginForm = true
        }),
        logOut: ((state, action) => {
            state.userName = false
        }),
        addUserName: ((state, action) => {
            state.userName = action.payload.userName
        }),
        hideLoginForm: ((state, action) => {
            state.hideLoginForm = null
        })
    }

})

const {reducer: authReducer, actions: {openLoginForm, addUserName, hideLoginForm, logOut}} = authSlice

const authActions = {
    openLoginForm, addUserName, hideLoginForm, logOut
}
export {authReducer, authActions};