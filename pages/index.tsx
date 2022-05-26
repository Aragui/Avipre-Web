import { IProject } from "../domain/interfaces/iproject"

import json from '../assets/json/projects.json'

import ProjectCard from "../components/simple/simple-card"
import BackhoesBanner from "../components/composed/backhoes-banner"
import { useEffect } from "react"
import Map from "../components/simple/map"

const Home = ({ list }: { list: IProject[] }) => {

    useEffect(() => {
        document.title = "AVIPRE Arquitectura"
    })

    return (
        <div id="proyectos">
            <div className="container">
                <div className="row mt-4 mb-4">
                    <h3 className="text-center title">Proyectos</h3>
                </div>
                <div className="row">
                    {
                        list.map(project => (
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
            <BackhoesBanner />
            <Map />
        </div>
    )
}

export async function getStaticProps(context: any) {

    try {
        const list: IProject[] = json.filter(project => {
            if (project.cover !== null) {
                return project
            }
        }).sort((a, b) => b.year - a.year)

        return {
            props: {
                list
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export default Home