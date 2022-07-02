import React from 'react'
import ProjectCard from '../../components/simple-card'
import { Project } from '../../domain/models/project'

interface props{
    projects: Project[]
}

const ProjectGrid = ({projects}: props) => {
    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                <h3 className="text-center title">Proyectos</h3>
            </div>
            <div className="row">
                {
                    projects.map(project => (
                        <ProjectCard
                            key={project.slug}
                            name={project.name}
                            cover={project.cover}
                            slug={project.slug}
                            ubication={project.ubication}
                            year={project.year}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectGrid