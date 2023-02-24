import { DeepPartial } from 'redux';
import { CounterScheme, StateScheme } from 'shared/lib/config/store';
import { getCounterValue } from './getCounterValue';

const setup = (value: number) => ({
    counter: { value },
} as DeepPartial<StateScheme>);

describe('getCounterValue', () => {
    test('return counter value', () => {
        const state = setup(10);

        expect(getCounterValue(state as StateScheme)).toEqual(10);
    });

    test('error for wrong argument', () => {
        const state = setup(10);

        expect(getCounterValue(state as StateScheme)).not.toEqual(0);
    });
});
