import {render} from '@testing-library/react'

import ImageCard from '../../components/image-card'

const src = '/images/casa-cholul/IMG-6934.jpg'

describe('<ImageCard />', () => { 
    const {getByRole} = render(<ImageCard src={src} />)

    test('Render image', () => {
        expect(getByRole('img').src).toMatch(src);
    })
 })