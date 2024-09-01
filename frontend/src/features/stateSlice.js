import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allUsers: [],
    allUsersCount: 0,
    user: "",
    userHomes: [],
    userHomesCount: 0
}

export const stateSlice = createSlice({
    name: 'stateSlice',
    initialState,
    reducers: {
        setAllUsers: (state, action) => {
            state.allUsers = action.payload.allUsers
            state.allUsersCount = action.payload.allUsersCount
        },
        setSelectedUser: (state, action) => {
            state.user = action.payload
        },
        setUserHomes: (state, action) => {
            state.userHomes = action.payload.homes
            state.userHomesCount = action.payload.totalCount
        }
    },
})

export const { setAllUsers, setSelectedUser, setUserHomes } = stateSlice.actions

export default stateSlice.reducer