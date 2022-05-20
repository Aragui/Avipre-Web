import { IProject } from "../domain/interfaces/iproject";
import { Project } from "../domain/models/project";

function parseJson(json: any): Array<IProject> {
    const projectList: Array<IProject> = [];
    try {

        for (var i = 0; i < json.lenght; i++) {
            projectList.push(new Project(json[i]["name"], json[i]["year"], json[i]["cover"], json[i]["slug"], json[i]["ubication"]));
        }

    } catch (error) {
        console.log(error)
    }
    return projectList;
}

export { parseJson }