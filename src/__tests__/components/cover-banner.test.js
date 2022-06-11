import { render } from '@testing-library/react'

import CoverBanner from '../../components/cover-banner'

const title = 'Project Test'

const urlImage = 'testin-image.jpg'

describe('<CoverBanner />', () => {
    const { getByRole } = render(<CoverBanner title={title} urlImage={urlImage} />)

    test('Render Cover', () => {
        expect(getByRole('img').src).toMatch(urlImage)

        expect(getByRole('img').alt).toMatch(title)

        expect(getByRole('heading').innerHTML).toMatch(title)
    })
})