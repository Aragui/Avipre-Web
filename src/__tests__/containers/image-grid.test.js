import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { store } from '../../util/store';
import ImageGrid from '../../containers/image-grid';

describe('<ImageGrid />', () => {
    const images = [
        'image-test-1.jpg',
        'image-test-2.jpg',
        'image-test-3.jpg'
    ]

    store.dispatch = jest.fn();

    let getByText, getAllByRole, rerender, container;

    beforeEach(() => {
        const { getByText: gbt, getAllByRole: gbar, rerender: rrdr, container: ctr } = render(
            <Provider store={store}>
                <ImageGrid images={images} />
            </Provider>
        );

        getByText = gbt;
        getAllByRole = gbar;
        rerender = rrdr;
        container = ctr;
    });

    test('Should dispatch show gallery', () => {
        const div = container.querySelector('div.image-container')

        fireEvent.click(div);

        expect(store.dispatch).toHaveBeenCalled();
    });

    test('Render grid', () => {
        expect(getAllByRole('img').length)
            .toBe(images.length);

        rerender(
            <Provider store={store}>
                <ImageGrid images={[]} />
            </Provider>
        );

        expect(getByText('Aún no hay fotos')).toBeInTheDocument();
    });

})