import {screen, render} from '@testing-library/react'
import Header from '../../components/header'
import '@testing-library/jest-dom'

describe('<Header />', () => {
    const {container, get} = render(<Header/>)
    test('Render Header', () =>{
        expect(container).toMatchSnapshot();
    });
})