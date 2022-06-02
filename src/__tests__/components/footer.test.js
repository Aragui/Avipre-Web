import {render, screen} from '@testing-library/react'
import Footer from '../../components/footer'
import '@testing-library/jest-dom'

describe('<Footer />', () => {
    test('Render Footer', () => {
        const {container} = render(<Footer/>);
        expect(container).toMatchSnapshot();
    });
});
