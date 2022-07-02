import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Spinner from '../../components/spinner'

describe('<Spinner />', () => {
    const { container, debug } = render(<Spinner />);
    
    jest.spyOn(global, 'setTimeout');
    jest.useRealTimers();

    test('Render Spinner', () => {
        expect(container.firstChild).toBeInTheDocument();
    });

    test('Unmount Spinner', async () => {
        jest.setTimeout(2000);
        await new Promise(res => setTimeout(res, 1500));
        expect(container.firstChild).not.toBeInTheDocument();
    })
})