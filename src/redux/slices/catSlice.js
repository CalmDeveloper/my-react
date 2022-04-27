import {createSlice} from "@reduxjs/toolkit";

const initialState = {cats: [], catForUpdate:null}
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
         const {name,id} = action.payload
           const index = state.cats.findIndex(cat =>cat.id===id)
          state.cats[index].name=name
            state.catForUpdate = false;
        },
        setCatForUpdate: (state, action) => {
             state.catForUpdate=action.payload.cat
        }
    }
})
const {reducer: catReducer, actions: {addCat, delCat, updateCat, setCatForUpdate}} = catSlice

export default catReducer;
export const actionsCat = {
    addCat, delCat, updateCat, setCatForUpdate
}
