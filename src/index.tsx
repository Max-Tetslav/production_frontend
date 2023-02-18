import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App, ThemeProvider } from 'app';

import './shared/lib/config/i18n/i18n';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
