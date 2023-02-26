import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserScheme } from 'shared/lib/config/store';

const initialState: UserScheme = {
    user: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
