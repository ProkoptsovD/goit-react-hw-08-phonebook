import { combineReducers } from '@reduxjs/toolkit';
import { contactsApi } from 'services/contactsApi';
import { authApi } from 'services/authApi';
import filterSliceReducer from './filter/filter.slice';
import authSliceReducer from './auth/auth.slice';
import contactsSliceReducer from './contacts/contacts.slice';



export const rootReducer = combineReducers({
    filter: filterSliceReducer,
    user: authSliceReducer,
    contacts: contactsSliceReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer
});