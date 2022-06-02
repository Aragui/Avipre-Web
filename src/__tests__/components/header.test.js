import {screen, render} from '@testing-library/react'
import Header from '../../components/header'
import '@testing-library/jest-dom'

describe('<Header />', () => {
    const {container} = render(<Header/>)
    test('Render Header', () =>{
        expect(container).toMatchSnapshot();
    });

    test('Navbar links', () => {
        expect(container.getElementsByClassName('menu-link').length).toEqual(6);
    });
})