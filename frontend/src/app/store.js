import { configureStore } from '@reduxjs/toolkit'
import stateSliceReducer from "../features/stateSlice"

export const store = configureStore({
    reducer: {
        stateSlice: stateSliceReducer
    },
})