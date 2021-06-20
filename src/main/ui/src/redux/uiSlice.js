import { createSlice } from '@reduxjs/toolkit';

const initialState = { notification: { show: false, } };

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        showNotification(state, action) {
            if (action.payload.show) {
                state.notification = {
                    // show: action.payload.show,
                    status: action.payload.status,
                    title: action.payload.title,
                    message: action.payload.message,
                };
            }
            else {
                state.notification = {
                    show: false
                }
            }

        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;