import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "./initial-state.auth";
import { registerUserThunk } from "./thunk.auth";

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: {
        [registerUserThunk.fulfilled]: (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        
    }
})


export const authReducer = authSlice.reducer