import {screen, render} from '@testing-library/react'
import Header from '../../components/header'

describe('<Header />', () => {
    const {container} = render(<Header/>);

    test('Render Header', () =>{
        expect(container).toMatchSnapshot();
    });    
})