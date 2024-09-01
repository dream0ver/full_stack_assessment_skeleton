import { configureStore } from '@reduxjs/toolkit'
import usersSliceReducer from "../features/usersSlice"
import currentUserSliceReducer from "../features/currentUserSlice"
import modalSliceReducer from "../features/modalSlice"
import currentHomeSliceReducer from "../features/currentHomeSlice"

export const store = configureStore({
    reducer: {
        usersSlice: usersSliceReducer,
        currentUserSlice: currentUserSliceReducer,
        modalSlice: modalSliceReducer,
        currentHomeSlice: currentHomeSliceReducer
    },
})