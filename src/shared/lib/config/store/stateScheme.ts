import { CounterScheme } from './counterScheme';
import { LoginScheme } from './loginScheme';
import { UserScheme } from './userScheme';

export interface StateScheme {
    counter: CounterScheme;
    authData: UserScheme;
    loginForm?: LoginScheme;
}
