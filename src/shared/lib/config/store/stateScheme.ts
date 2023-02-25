import { CounterScheme } from './counterScheme';
import { UserScheme } from './userScheme';

export interface StateScheme {
    counter: CounterScheme;
    authData: UserScheme;
}
