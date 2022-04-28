import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from '../../services/'


const initialState = {cars: [], status: null, formErrors: {}, carForUpdate: null}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll()
        return data
    })

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car)
            return data
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
)

const delate = createAsyncThunk(
    'carSlice/delate',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id)
            dispatch(delateCarByID({id}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    })
const update = createAsyncThunk(
    'carSlice/update',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateById(id, car)
            dispatch(updateCarByID({id, car}))

        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    })


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        delateCarByID: ((state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars.splice(index, 1)
        }),
        updateCarByID: ((state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars[index] = {...state.cars[index], ...action.payload.car};
            state.carForUpdate = false;
        }),
        setCarForUpdate: ((state, action) => {
            state.carForUpdate = action.payload.car
        })
    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            // console.log('pending')
            // state.status = 'loading'
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
            const {status, formErrors} = action.payload
            state.status = status
            state.formErrors = formErrors
        },
        [delate.fulfilled]: (state, action) => {
            // console.log('delated')
        },
        [delate.rejected]: (state, action) => {
           // console.log('error')
           //  state.status = 'rejected'
        }
    }

})

const {reducer: carReducer, actions: {delateCarByID, updateCarByID, setCarForUpdate}} = carSlice;

const carActions = {getAll, create, delate, update, setCarForUpdate}
export {carReducer, carActions}