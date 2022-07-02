import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { store } from '../../util/store';

import GalleryViewer from '../../components/gallery-viewer';

describe('<GalleryViewer', () => {
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
                <GalleryViewer images={images} />
            </Provider>
        );

        getByText = gbt;
        getAllByRole = gbar;
        rerender = rrdr;
        container = ctr;
    });

    test('Render Modal', () => {
        expect(container).toBeInTheDocument();
    });

    test('Click left button', () => {
        const left = container.querySelector('button.left');

        fireEvent.click(left);

        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

    test('Click right button', () => {
        const right = container.querySelector('button.right');

        fireEvent.click(right);

        expect(store.dispatch).toHaveBeenCalledTimes(2);
    });

    test('Click close button', () => {
        const close = container.querySelector('button.close');

        fireEvent.click(close);

        expect(store.dispatch).toHaveBeenCalledTimes(3);
    })
})
