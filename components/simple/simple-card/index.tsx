/* eslint-disable @next/next/no-img-element */
import { FC } from "react"

import Link from "next/link"
import { CardWrapper, InfoCard, YearCard } from './simple-card.styles'

import { IProject } from "../../../domain/interfaces/iproject"


const ProjectCard: FC<IProject> = (project) => {
    return (
        <CardWrapper className="col-xl-3 col-lg-3 col-md-6 d-flex flex-column mb-3">
            <Link href={`/${project.slug}`}>
                <div className="image-container">
                    <img src={project.cover!} alt={project.name} />
                    <InfoCard>
                        <span className="text">{project.name}</span>
                        <div className="divider"></div>
                        <span className="text">{project.ubication}</span>
                        <div className="divider"></div>

                    </InfoCard>

                    <YearCard>
                        <h4 className="year">{project.year}</h4>
                    </YearCard>
                </div>
            </Link>
        </CardWrapper>
    )
}

export default ProjectCard