import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services/api/contacts.api';

export const getContactsThunk = createAsyncThunk('contacts/getContacts', async(_, thunkAPI) => {
    try {
        return API.getAllContacts();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const addContactThunk = createAsyncThunk('contacts/addContact', async(contact, thunkAPI) => {
    try {
        console.log(contact)
        await API.addContact(contact);
        thunkAPI.dispatch(getContactsThunk())
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async(id, thunkAPI) => {
    try {
        console.log(id)
        await API.deleteContact(id);
        thunkAPI.dispatch(getContactsThunk())
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})