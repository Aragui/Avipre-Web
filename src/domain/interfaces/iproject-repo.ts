import { Project } from "../models/project"

interface IProjectRepo {
    getProjects(): Project[];
    getSingleProject(slug: string): Project;
    getSlugs(): string[];
}

export type { IProjectRepo }