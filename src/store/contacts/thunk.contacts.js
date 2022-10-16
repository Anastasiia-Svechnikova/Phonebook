import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services/api/contacts.api';

export const getContactsThunk = createAsyncThunk('contacts/getContacts', async(_, thunkAPI) => {
    try {
        return await API.getAllContacts();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const addContactThunk = createAsyncThunk('contacts/addContact', async(contact, thunkAPI) => {
    try {
        const data = await API.addContact(contact);
        return data.data;
        // thunkAPI.dispatch(getContactsThunk())
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async(id, thunkAPI) => {
    try {
        await API.deleteContact(id);
        // console.log(data)
        return id;
        // thunkAPI.dispatch(getContactsThunk())
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})