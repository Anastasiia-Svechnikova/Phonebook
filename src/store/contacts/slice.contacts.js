import { createSlice } from "@reduxjs/toolkit";
import contactsInitialState from "./initial-state.contacts";
import { addContactThunk, getContactsThunk, deleteContactThunk, editContactThunk } from "./thunk.contacts";

const handlePending = (state) => {
    state.isLoading = true
}
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload
}


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: {
        [getContactsThunk.pending]: handlePending,
        [getContactsThunk.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.items = action.payload
        },
        [getContactsThunk.rejected]: handleRejected,

        [addContactThunk.pending]: handlePending,
        [addContactThunk.fulfilled]: (state, { payload}) => {
            state.isLoading = false;
            state.items.unshift(payload);
        },
        [addContactThunk.rejected]: handleRejected,

        [deleteContactThunk.pending]: handlePending,
        [deleteContactThunk.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.items = state.items.filter(el => el.id !== payload)
        },
        [deleteContactThunk.rejected]: handleRejected,
        [editContactThunk.pending]: handlePending,
        [editContactThunk.rejected]: handleRejected,
        [editContactThunk.fulfilled]: (state, {payload}) => {
            state.isLoading = false;          
            state.items = state.items.map(item => item.id === payload.id ? payload : item)

        }
        
    }
})

export const contactsReducer = contactsSlice.reducer; 