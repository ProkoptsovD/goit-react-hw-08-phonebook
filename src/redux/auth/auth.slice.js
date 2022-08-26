import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: null,
    token: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, { payload }) {
            state.name = payload.user.name;
            state.token = payload.token;
        },
        killCredentials(state) {
            state.name = null;
            state.token = null;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;