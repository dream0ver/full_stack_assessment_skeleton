import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedHome: "",
    interestedBy: []
}

export const currentHomeSlice = createSlice({
    name: 'currentHomeSlice',
    initialState,
    reducers: {
        setSelectedHome: (state, action) => {
            state.selectedHome = { ...action.payload }
        },
        setInterestedBy: (state, action) => {
            state.interestedBy = action.payload
        },
    },
})

export const { setSelectedHome, setInterestedBy } = currentHomeSlice.actions

export default currentHomeSlice.reducer