import { StateScheme } from 'shared/lib/config/store';

export const getUserAuthData = (state: StateScheme) => state.authData.user;
