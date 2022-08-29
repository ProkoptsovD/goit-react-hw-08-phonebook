import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "services/authApi";
import { contactsApi } from "services/contactsApi";
import { persistedReducer } from './root.reducer';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const skippedActions = {
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(skippedActions),
        contactsApi.middleware,
        authApi.middleware
    ]
})

export default store;
export const persistor = persistStore(store);