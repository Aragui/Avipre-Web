import { render, screen } from '@testing-library/react';

import Layout from '../../containers/Layout';

const textMock = 'Render layout test';

describe('<Layout />', () => {
    const { getByText } = render(<Layout>
        <h1>Render layout test</h1>
    </Layout>);

    test('Render Layour', () => {
        expect(getByText(textMock).innerHTML).toMatch(textMock);
    });
})