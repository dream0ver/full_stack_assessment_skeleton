import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedUser: "",
    homesIntrested: [],
    homesIntrestedTotalCount: 0
}

export const currentUserSlice = createSlice({
    name: 'currentUserSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.selectedUser = action.payload
        },
        setHomesIntrested: (state, action) => {
            state.homesIntrested = action.payload.homes
            state.homesIntrestedTotalCount = action.payload.totalCount
        }
    },
})

export const { setUser, setHomesIntrested } = currentUserSlice.actions

export default currentUserSlice.reducer