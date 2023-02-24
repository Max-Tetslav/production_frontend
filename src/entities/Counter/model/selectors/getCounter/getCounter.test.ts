import { DeepPartial } from 'redux';
import { StateScheme } from 'shared/lib/config/store';
import { getCounter } from './getCounter';

const setup = (value: number) => ({
    counter: { value },
} as DeepPartial<StateScheme>);

describe('getCounter', () => {
    test('return counter value', () => {
        const state = setup(10);

        expect(getCounter(state as StateScheme)).toEqual({ value: 10 });
    });

    test('error for wrong argument', () => {
        const state = setup(0);

        expect(getCounter(state as StateScheme)).not.toEqual({ value: 10 });
    });
});
