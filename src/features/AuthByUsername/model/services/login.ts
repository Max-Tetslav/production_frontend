import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'shared/lib/config/store';
import axios from 'axios';
import i18n from 'shared/lib/config/i18n/i18n';
import { userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/lib/constants/localStorage';

export interface authData {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, authData, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error('error');
            }

            const userData = { username: response.data.username, id: response.data.id };

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userData));
            thunkApi.dispatch(userActions.setAuthData(userData));

            return response.data;
        } catch (e) {
            console.log(e);

            return thunkApi.rejectWithValue('error');
        }
    }
);
