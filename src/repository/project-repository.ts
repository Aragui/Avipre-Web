import { IProjectRepo } from "../domain/interfaces/iproject-repo";
import { Project } from "../domain/models/project";

import data from '../assets/json/projects.json';

class ProjectRepo implements IProjectRepo {
    private projects: Project[] = data.filter(project => {
        if (project.cover !== null) {
            return project
        }
    }).sort((a, b) => b.year - a.year);

    getProjects(): Project[] {
        return this.projects;
    }
    
    getSingleProject(slug: string): Project {
        return this.projects.find(project => project.slug === slug)!;
    }
    
    getSlugs(): string[] {
        return this.projects.map(project => project.slug);
    }
}

export { ProjectRepo };