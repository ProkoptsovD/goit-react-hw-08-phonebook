import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { authApi } from "services/authApi";
import { contactsApi } from "services/contactsApi";
import { persistedReducer } from './root.reducer';

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
        authApi.middleware
    ]
})

export default store;
export const persistor = persistStore(store);