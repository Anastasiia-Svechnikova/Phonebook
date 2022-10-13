
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice.auth';
import {contactsReducer} from './contacts/slice.contacts';
import { filterReducer } from './filter/slice.filter';



const rootReducer = combineReducers({
        contacts: contactsReducer,
        filter: filterReducer,
        auth: authReducer,
    })

export const store = configureStore({
    reducer: rootReducer
})

