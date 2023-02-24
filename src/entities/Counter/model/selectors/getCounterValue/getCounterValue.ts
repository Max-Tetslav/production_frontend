import { createSelector } from 'reselect';

import { CounterScheme } from 'shared/lib/config/store';
import { getCounter } from '../getCounter';

export const getCounterValue = createSelector(getCounter, (counter: CounterScheme) => counter.value);
