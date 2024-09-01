import { configureStore } from '@reduxjs/toolkit'
import usersSliceReducer from "../features/usersSlice"
import currentUserSliceReducer from "../features/currentUserSlice"

export const store = configureStore({
    reducer: {
        usersSlice: usersSliceReducer,
        currentUserSlice: currentUserSliceReducer
    },
})