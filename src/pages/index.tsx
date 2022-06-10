import ProjectCard from "../components/simple-card"
import BackhoesBanner from "../components/backhoes-banner"
import Map from "../components//map"
import Head from "next/head"

import { ProjectRepo } from "../repository/project-repository"
import { Project } from "../domain/models/project"

const Home = ({ list }: { list: Project[] }) => {
    return (
        <div id="proyectos">
            <Head>
                <title>AVIPRE Arquitectura</title>
            </Head>
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
        const projectRepo = new ProjectRepo();

        const list = projectRepo.getProjects();

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