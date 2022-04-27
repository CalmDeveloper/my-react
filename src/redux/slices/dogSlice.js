import {createSlice} from "@reduxjs/toolkit";

const initialState = {dogs: [], dogForUpdate:null}
const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        addDog: (state, action) => {
          const name= action.payload.name
const newDog = {name, id:new Date().getTime()}
            state.dogs.push(newDog)
        },
        delDog: (state, action) => {
            const {id} = action.payload.id
const index = state.dogs.findIndex(dog =>dog.id===id)
            state.dogs.splice(index,1)
        },
        updateDog: (state, action) => {
const {name,id}  = action.payload
     const  index = state.dogs.findIndex(dog =>dog.id===id)
            state.dogs[index].name=name
            state.dogForUpdate=false
        },
        setDogForUpdate: (state, action) => {
state.dogForUpdate=action.payload.dog
        }
    }
})
const {reducer: dogReducer, actions: {addDog, delDog, updateDog, setDogForUpdate}} = dogSlice

export default dogReducer;
export const actionsDog = {
    addDog, delDog, updateDog, setDogForUpdate
}