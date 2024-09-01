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
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
            if (!action.payload) {
                state.homesIntrested = []
                state.homesIntrestedTotalCount = 0
            }
        },
        setHomesIntrested: (state, action) => {
            state.homesIntrested = action.payload.homes
            state.homesIntrestedTotalCount = action.payload.totalCount
        }
    },
})

export const { setSelectedUser, setHomesIntrested } = currentUserSlice.actions

export default currentUserSlice.reducer