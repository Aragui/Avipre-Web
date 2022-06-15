import { render, screen, getByText } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Project } from '../../domain/models/project';

import ProjectPage, { getStaticPaths, getStaticProps, projectsRepo } from '../../pages/[slug]';

describe('<ProjectPage />', () => {
    const project = new Project('Project test', 2022, 'test.jpg', 'project-test', 'Mérida', ['test.jpg']);

    const mockFunction = (slug) => {
        if (slug === 'project-test') {
            return project;
        } else {
            throw new Error('Unable to find project');
        }
    }

    test('Render Project', () => {
        const { container, debug } = render(<ProjectPage project={project} />);

        expect(container.querySelector('h1.title')).toBeInTheDocument();
        expect(container.querySelectorAll('img').length).toBe(2);
    });

    test('Get Static Paths', async () => {
        const pathsList = ['project-test']

        jest.spyOn(projectsRepo, 'getSlugs').mockImplementation(() => pathsList);

        const { fallback, paths } = await getStaticPaths();

        expect(fallback).toBe(false);
        expect(paths.length).toEqual(1)
    });

    test('Get Static Props Succesful', async () => {
        jest.spyOn(projectsRepo, 'getSingleProject').mockImplementation(mockFunction);

        const { props } = await getStaticProps({
            params: {
                slug: 'project-test'
            }
        });

        expect(props.project.name).toBe('Project test');
    });

    test('Get Static Props Fail', async () => {
        jest.spyOn(projectsRepo, 'getSingleProject').mockImplementation(mockFunction);

        const { error } = await getStaticProps({
            params: {
                slug: 'failed-test'
            }
        });

        expect(error.toString()).toContain('Unable to find project');
    })
})