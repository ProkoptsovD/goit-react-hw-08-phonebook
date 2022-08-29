import { combineReducers } from '@reduxjs/toolkit';
import { contactsApi } from 'services/contactsApi';
import { authApi } from 'services/authApi';
import storage from 'redux-persist/lib/storage';
import filterSliceReducer from './filter/filter.slice';
import authSliceReducer from './auth/auth.slice';
import contactsSliceReducer from './contacts/contacts.slice';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    filter: filterSliceReducer,
    user: authSliceReducer,
    contacts: contactsSliceReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);