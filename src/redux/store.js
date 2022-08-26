import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "services/authApi";
import { contactsApi } from "services/contactsApi";
import { rootReducer } from './root.reducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
        authApi.middleware
    ]
})

export default store;