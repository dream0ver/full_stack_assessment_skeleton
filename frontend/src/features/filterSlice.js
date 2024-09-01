import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 1,
}

export const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = Number(action.payload)
        },
    },
})

export const { setPage } = filterSlice.actions

export default filterSlice.reducer