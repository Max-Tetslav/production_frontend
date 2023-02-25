import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'shared/components/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { increment, decrement } = counterActions;

    const incrementHandler = () => {
        dispatch(increment());
    };

    const decrementHandler = () => {
        dispatch(decrement());
    };

    const { t } = useTranslation();

    return (
        <div aria-label="counter">
            <h1 aria-label="counter-value">{counterValue}</h1>

            <Button aria-label="increment-counter" onClick={incrementHandler}>
                {t('Increment')}
            </Button>
            <Button aria-label="decrement-counter" onClick={decrementHandler}>
                {t('Decrement')}
            </Button>
        </div>
    );
};

export default Counter;
