import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import ImageGrid from '../../containers/image-grid';

describe('<ImageGrid />', () => {
    const images = ['test.jpg'];


    test('Render images', () => {
        const { container } = render(<ImageGrid images={images} />);

        expect(container.querySelector('img[src="test.jpg"]')).toBeInTheDocument();
    });
})