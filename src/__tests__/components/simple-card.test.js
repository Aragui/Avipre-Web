import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Project } from '../../domain/models/project'

import SimpleCard from '../../components/simple-card'

const project = new Project('Proyecto test', 2022, 'http://test.test', 'proyecto-test', 'Mérida');

describe('<SimpleCard />', () => {
    let getByText, rerender, ubication;

    beforeEach(() => {
        const { getByText: gbt, rerender: rrdr } = render(<SimpleCard
            cover={project.cover}
            name={project.name}
            slug={project.slug}
            ubication={project.ubication}
            year={project.year} />);

        getByText = gbt;
        rerender = rrdr;
        ubication = getByText('Mérida');
    })

    test('Render card', () => {
        expect(getByText(project.name).innerHTML).toBe(project.name)
        expect(getByText(project.ubication).innerHTML).toBe(project.ubication)
        expect(getByText(project.year).innerHTML).toBe(project.year.toString())
    });

    test('Render without ubication', () => {
        rerender(<SimpleCard
            cover={project.cover}
            name={project.name}
            slug={project.slug}
            year={project.year} />);

        expect(ubication).not.toBeInTheDocument();
    })
})