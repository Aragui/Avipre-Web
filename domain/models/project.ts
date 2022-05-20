import { IProject } from "../interfaces/iproject";

class Project implements IProject {
    name: string;
    year: number;
    cover: string | null | undefined;
    slug: string;
    ubication: string | null | undefined;
    // description: string | null | undefined;
    // groundExtension: string | null | undefined;
    // designer: string;
    // builder: string;

    constructor(
        name: string,
        year: number,
        cover: string | null | undefined,
        slug: string,
        ubication: string | null | undefined
        // description: string | null | undefined,
        // groundExtension: string | null | undefined,
        // designer: string,
        // builder: string,
    ) {
        this.name = name;
        this.year = year;
        this.cover = cover;
        this.slug = slug;
        this.ubication = ubication;
        // this.description = description;
        // this.groundExtension = groundExtension;
        // this.designer = designer;
        // this.builder = builder;
    }
}

export { Project }