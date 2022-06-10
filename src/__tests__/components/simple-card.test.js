import { render, screen } from '@testing-library/react';
import { Project } from '../../domain/models/project'

import SimpleCard from '../../components/simple-card'

const project = new Project('Proyecto test', 2022, 'http://test.test', 'proyecto-test', 'Mérida');

describe('<SimpleCard />', () => {
    const { container, getByText } = render(<SimpleCard
        cover={project.cover}
        name={project.name}
        slug={project.slug}
        ubication={project.ubication}
        year={project.year} />);

    test('Render card', () => {
        expect(getByText(project.name).innerHTML).toBe(project.name)
        expect(getByText(project.ubication).innerHTML).toBe(project.ubication)
        expect(getByText(project.year).innerHTML).toBe(project.year.toString())
    })
})