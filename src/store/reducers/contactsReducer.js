import { addContact, deleteContact } from "store/actions/contactsActions";
import { createReducer } from '@reduxjs/toolkit';

export default createReducer([ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },{ id: 'id-1', name: 'lala', number: '459-12-56' }],{
    [addContact]: (state, action) => [...state, action.payload],
    
    [deleteContact]: (state, action) => state.filter(({id})=> id !== action.payload)
})