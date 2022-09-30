import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers/contactsReducer';
import filterReducer from './reducers/filterReducer';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
        contacts: contactsReducer,
        filter: filterReducer,
    })

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
}

const persistedContactsReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedContactsReducer,
    middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
})

export const persistor = persistStore(store)