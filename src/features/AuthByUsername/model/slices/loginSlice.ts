import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginScheme } from 'shared/lib/config/store/loginScheme';
import { loginByUsername } from '../services/login';

const initialState: LoginScheme = {
    username: '',
    password: '',
    isLoading: false
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.username = action.payload.username;
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
