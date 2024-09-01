import { configureStore } from '@reduxjs/toolkit'
import currentUserSliceReducer from "../features/currentUserSlice"
import modalSliceReducer from "../features/modalSlice"
import currentHomeSliceReducer from "../features/currentHomeSlice"
import { setupListeners } from '@reduxjs/toolkit/query'
import filterSliceReducer from '../features/filterSlice'
import { api } from "../../api/api"

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        currentUserSlice: currentUserSliceReducer,
        modalSlice: modalSliceReducer,
        currentHomeSlice: currentHomeSliceReducer,
        filterSlice: filterSliceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)