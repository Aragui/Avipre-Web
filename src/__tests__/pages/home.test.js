import { render, screen } from '@testing-library/react';
import { Project } from '../../domain/models/project';
import '@testing-library/jest-dom'

import Home, { getStaticProps, projectRepo } from '../../pages/index';


describe('<Home />', () => {
    const projects = [
        new Project('Test 1', 2022, 'test1.jpg', 'test-1', 'Mérida', ['test1.jpg'])
    ];

    test('Render Home page', async () => {
        render(<Home list={projects} />);

        const project = screen.getByText('Test 1');

        expect(project).toBeInTheDocument();
    });

    test('Get Static Props Successful', async () => {
        jest.spyOn(projectRepo, 'getProjects').mockImplementation(() => projects);

        const {props: {list}} = await getStaticProps();

        expect(projectRepo.getProjects).toBeCalled();

        expect(list.length).toEqual(1);
    });

    test('Get Static Props Failed', async () => { 
        jest.spyOn(projectRepo, 'getProjects').mockImplementation(() => {
            throw new Error('Failed to get projects');
        });

        const res = await getStaticProps();

        expect(res.error.toString()).toContain('Failed to get projects')
     });
});