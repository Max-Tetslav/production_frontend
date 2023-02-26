import { StateScheme } from 'shared/lib/config/store';

export const getLoginState = (state: StateScheme) => state?.loginForm;
