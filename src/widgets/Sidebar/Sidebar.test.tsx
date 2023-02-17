import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithTranslation from 'shared/lib/helpers/renderWithTranslation';

import Sidebar from './Sidebar';

describe('Sidebar', () => {
    test('render', () => {
        renderWithTranslation(<Sidebar />);

        const sideBar = screen.getByRole('menu');

        expect(sideBar).toBeInTheDocument();
    });

    test('menu toggle works', async () => {
        renderWithTranslation(<Sidebar />);

        const sideBar = screen.getByRole('menu');
        const menuToggle = screen.getByLabelText('menu-toggle');

        await userEvent.click(menuToggle);

        expect(sideBar).toHaveClass('collapsed');
    });
});
