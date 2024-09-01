import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedUser: "",
}

export const currentUserSlice = createSlice({
    name: 'currentUserSlice',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        },
    },
})

export const { setSelectedUser, } = currentUserSlice.actions

export default currentUserSlice.reducer