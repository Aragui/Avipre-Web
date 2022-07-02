/* eslint-disable @next/next/no-img-element */
import { FC } from "react"

import Link from "next/link"
import { CardWrapper, InfoCard, YearCard } from './simple-card.styles'

import { IProject } from "../../../src/domain/interfaces/iproject"


const ProjectCard: FC<IProject> = (project) => {
    return (
        <CardWrapper className="col-xl-3 col-lg-3 col-md-6 d-flex flex-column mb-3">
            <Link href={`/${project.slug}`}>
                <a className="w-100">
                    <div className="image-container">
                        <img src={project.cover!} alt={project.name} className="w-100" />
                        <InfoCard>
                            <span className="text">{project.name}</span>
                            <div className="divider"></div>
                            {
                                project.ubication ?
                                    <>
                                        <span className="text">{project.ubication}</span>
                                        <div className="divider"></div>
                                    </> : null
                            }


                        </InfoCard>

                        <YearCard>
                            <h4 className="year">{project.year}</h4>
                        </YearCard>
                    </div>
                </a>
            </Link>
        </CardWrapper>
    )
}

export default ProjectCard