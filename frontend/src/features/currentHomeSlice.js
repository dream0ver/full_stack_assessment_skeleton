import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedHome: "",
    interestedByInitial: [],
    interestedBy: []
}

export const currentHomeSlice = createSlice({
    name: 'currentHomeSlice',
    initialState,
    reducers: {
        setSelectedHome: (state, action) => {
            state.selectedHome = { ...action.payload }
        },
        setHomeInrestedBy: (state, action) => {
            state.interestedByInitial = action.payload
            state.interestedBy = action.payload
        },
        mutateInrestedBy: (state, action) => {
            state.interestedBy = action.payload
        },
        clearHomeSlice: (state, action) => {
            state.selectedHome = ""
            state.interestedByInitial = []
            state.interestedBy = []
        }
    },
})

export const { setSelectedHome, setHomeInrestedBy, mutateInrestedBy, clearHomeSlice } = currentHomeSlice.actions

export default currentHomeSlice.reducer