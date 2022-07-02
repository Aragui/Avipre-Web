import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ErrorPage from '../../pages/404';

describe('<ErrorPage />', () => {
    const { container } = render(<ErrorPage />);

    test('Render page', () => {
        expect(container).toBeInTheDocument();
    });
})