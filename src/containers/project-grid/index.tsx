import React from 'react'
import Pagination from '../../components/pagination'
import ProjectCard from '../../components/simple-card'
import { Project } from '../../domain/models/project'
import { setPage } from "../../util/projects-slice";
import { RootState } from "../../util/store";

import { useDispatch, useSelector } from "react-redux";

const ProjectGrid = () => {
    const dispatch = useDispatch();
    const { page, currPageList } = useSelector((state: RootState) => state.projects);

    const prevPage = () => dispatch(setPage(page - 1));
    const nextPage = () => dispatch(setPage(page + 1));

    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                <h3 className="text-center title">Proyectos</h3>
            </div>
            <Pagination page={page} prevPage={prevPage} nextPage={nextPage} />
            <div className="row">
                {
                    currPageList.map(project => (
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
            <Pagination page={page} prevPage={prevPage} nextPage={nextPage} />
        </div>
    )
}

export default ProjectGrid