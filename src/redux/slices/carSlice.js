import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from '../../services/'

const initialState = {cars: [], status: null,formErrors:{}}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
            const {data} = await carService.getAll()
            return data
    })

const create = createAsyncThunk(
    'carSlice/create',
    async ({car},{rejectWithValue}) => {

        try {
            const {data} = await carService.create(car)
            return data
        }catch (e){
return rejectWithValue({status:e.message, formErrors:e.response.data})
        }
    }
)


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAll.pending]: (state, action) => {
            // console.log('pending')
            // state.status = 'pending'
        },
        [getAll.fulfilled]: (state, action) => {
            // console.log('fulfilled')
            // state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAll.rejected]: (state, action) => {
            // console.log('rejected')
            state.status = 'rejected'
        },
        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload)

        },
        [create.rejected]: (state, action) => {
        const {status, formErrors} =  action.payload
            state.status=status
            state.formErrors = formErrors
        }
    }

})

const {reducer: carReducer, actions} = carSlice;

const carActions = {getAll, create}
export {carReducer, carActions}