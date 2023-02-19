import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { fakeFn } from 'shared/lib/constants/tests';
import Button, { ButtonVariants } from './Button';

describe('Button', () => {
    test('render', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>текст</Button>);
        const btn = screen.getByRole('button');

        expect(btn).toBeInTheDocument();
    });

    test('className prop works', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button className="test">текст</Button>);
        const btn = screen.getByRole('button');

        expect(btn).toHaveClass('test');
    });

    test('variant prop works', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button variant={ButtonVariants.CLEAN}>текст</Button>);
        const btn = screen.getByRole('button');

        expect(btn).toHaveClass('clean');
    });

    test('onClick prop works', async () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button onClick={fakeFn}>текст</Button>);
        const btn = screen.getByRole('button');

        await userEvent.click(btn);

        expect(fakeFn).toBeCalled();
        expect(fakeFn).toBeCalledTimes(1);
    });
});
