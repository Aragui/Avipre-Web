import { render } from '@testing-library/react';
import reducer, { decrementIndex, incrementIndex, setIndex, setShow } from '../../util/gallery-slice';

describe('Gallery Slice', () => {
    const initialState = {
        index: 0,
        show: false
    };

    test('Should return initial state', () => {
        expect(reducer(undefined, { type: undefined }))
            .toEqual(initialState);
    });

    test('Should set index', () => { 
        expect(reducer(initialState, setIndex(1)))
            .toEqual({
                ...initialState,
                index: 1
            });
     });

    test('Should increment index value', () => {
        expect(reducer(initialState, incrementIndex(2)))
            .toEqual({
                ...initialState,
                index: 1
            });
    });

    test('Should reset index', () => {
        expect(reducer({
            ...initialState,
            index: 3
        }, incrementIndex(4)))
            .toEqual(initialState);
    });

    test('Should decrement index', () => {
        expect(reducer({
            ...initialState,
            index: 1
        }, decrementIndex(2)))
            .toEqual(initialState);
    });

    test('Should set last index', () => {
        expect(reducer(initialState, decrementIndex(3)))
            .toEqual({
                ...initialState,
                index: 2
            });
    });

    test('Should set show value to true', () => {
        expect(reducer(initialState, setShow()))
            .toEqual({
                ...initialState,
                show: true
            });
    });

    test('Should set show value to false', () => {
        expect(reducer({
            ...initialState,
            show: true
        }, setShow()))
            .toEqual(initialState);
    });
});