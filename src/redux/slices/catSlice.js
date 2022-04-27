import {createSlice} from "@reduxjs/toolkit";

const initialState = {cats: []}
const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        addCat: (state, action) => {

            const {name} = action.payload;
            const newCat = { name, id: new Date().getTime() };
            state.cats.push(newCat);
        },
        delCat: (state, action) => {
           const index =  state.cats.findIndex(cat => cat.id===action.payload.id)
            state.cats.splice(index,1)
        },
        updateCat: (state, action) => {
        },
        setCatForUpdate: (state, action) => {
        }
    }
})
const {reducer: catReducer, actions: {addCat, delCat, updateCat, setCatForUpdate}} = catSlice

export default catReducer;
export const actionsCat = {
    addCat, delCat, updateCat, setCatForUpdate
}
