import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProviders from 'shared/lib/helpers/renderWithProviders';

import Sidebar from './Sidebar';

describe('Sidebar', () => {
    test('render', () => {
        renderWithProviders(<Sidebar />);

        const sideBar = screen.getByRole('menu');

        expect(sideBar).toBeInTheDocument();
    });

    test('menu toggle works', async () => {
        renderWithProviders(<Sidebar />);

        const sideBar = screen.getByRole('menu');
        const menuToggle = screen.getByLabelText('menu-toggle');

        await userEvent.click(menuToggle);

        expect(sideBar).toHaveClass('collapsed');
    });
});
