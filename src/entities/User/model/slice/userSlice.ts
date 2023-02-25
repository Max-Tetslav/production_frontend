import { createSlice } from '@reduxjs/toolkit';
import { UserScheme } from 'shared/lib/config/store';

const initialState: UserScheme = {
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
