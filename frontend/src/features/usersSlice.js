import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    totalCount: 0
}

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload.users
            state.totalCount = action.payload.totalCount
        },
    },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer