import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedHome: "",
}

export const currentHomeSlice = createSlice({
    name: 'currentHomeSlice',
    initialState,
    reducers: {
        setSelectedHome: (state, action) => {
            state.selectedHome = action.payload
        },
    },
})

export const { setSelectedHome } = currentHomeSlice.actions

export default currentHomeSlice.reducer