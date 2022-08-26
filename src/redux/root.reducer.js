import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { contactsApi } from 'services/contactsApi';
import { authApi } from 'services/authApi';
import filterSliceReducer from './filter/filter.slice';
import authSliceReducer from './auth/auth.slice';
import contactsSliceReducer from './contacts/contacts.slice';

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
})
export const persistedRootReducer = persistReducer(persistConfig, rootReducer);