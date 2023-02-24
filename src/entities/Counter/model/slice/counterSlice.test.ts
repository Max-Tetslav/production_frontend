import { DeepPartial } from 'redux';
import { counterActions, counterReducer } from 'entities/Counter';
import { CounterScheme } from 'shared/lib/config/store';

const setup = (value: number) => ({
    value,
} as DeepPartial<CounterScheme>);

describe('counterSlice', () => {
    test('decrement', () => {
        const state = setup(10);

        expect(counterReducer(state as CounterScheme, counterActions.decrement())).toEqual({ value: 9 });
    });

    test('increment', () => {
        const state = setup(10);

        expect(counterReducer(state as CounterScheme, counterActions.increment())).toEqual({ value: 11 });
    });

    test('test with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
