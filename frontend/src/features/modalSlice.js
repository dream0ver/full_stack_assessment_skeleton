import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isModalOpen: false
}

export const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            document.body.classList[action.payload ? "add" : "remove"]("modal-open")
            state.isModalOpen = action.payload
        },
    },
})

export const { toggleModal } = modalSlice.actions

export default modalSlice.reducer