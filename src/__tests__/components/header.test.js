import {screen, render, fireEvent} from '@testing-library/react'
import React from 'react';
import Header from '../../components/header'

describe('<Header />', () => {
    const {container} = render(<Header/>);

    test('Render Header', () =>{
        expect(container).toMatchSnapshot();
    });    

    test('Scroll down event', () => {
        fireEvent.scroll(window, {target: {scrollY: 20}});
        fireEvent.scroll(window, {target: {scrollY: 6}});
    });
})