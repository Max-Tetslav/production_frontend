import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import renderWithProviders from 'shared/lib/helpers/renderWithProviders';
import Counter from './Counter';

const setup = () => {
    renderWithProviders(<Counter />, { initialState: { counter: { value: 10 } } });

    const container = screen.getByLabelText('counter');
    const value = screen.getByLabelText('counter-value');
    const increment = screen.getByLabelText('increment-counter');
    const decrement = screen.getByLabelText('decrement-counter');

    return {
        container,
        value,
        increment,
        decrement,
    };
};

describe('Counter', () => {
    test('render', () => {
        const { container } = setup();

        expect(container).toBeInTheDocument();
    });

    test('increment', async () => {
        const { value, increment } = setup();

        await userEvent.click(increment);

        expect(value).toHaveTextContent(/11/);
    });

    test('decrement twice', async () => {
        const { value, decrement } = setup();

        await userEvent.click(decrement);
        await userEvent.click(decrement);

        expect(value).toHaveTextContent(/8/);
    });
});
