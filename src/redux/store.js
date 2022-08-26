import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "services/authApi";
import { contactsApi } from "services/contactsApi";
import { persistedRootReducer } from "./root.reducer";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistIgnoreActionTypes = {
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}

const store = configureStore({
    reducer: persistedRootReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(persistIgnoreActionTypes),
        contactsApi.middleware,
        authApi.middleware
    ]
})

export const persistor = persistStore(store);
export default store;