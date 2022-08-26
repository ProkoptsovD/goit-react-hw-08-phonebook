import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toEdit: null
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setToEdit(state, action) {
            state.toEdit = action.payload;
        },
    },
})

export const contactsActions = contactsSlice.actions;
export default contactsSlice.reducer;