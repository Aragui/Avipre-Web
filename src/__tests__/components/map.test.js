import {render} from '@testing-library/react'

import Map from '../../components/map'

describe('<Map />', () => { 
    const {container} = render(<Map />)

    test('Render Map', () => { 
        expect(container).toMatchSnapshot()
     })
 })