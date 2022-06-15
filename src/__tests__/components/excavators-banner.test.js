import {render} from '@testing-library/react'

import ExcavatorsBanner from '../../components/excavators-banner'

describe('<ExcavatorsBanner />', () => { 
    const {container} = render(<ExcavatorsBanner />)

    test('Render Banner', () => { 
        expect(container).toMatchSnapshot();
     })
 })