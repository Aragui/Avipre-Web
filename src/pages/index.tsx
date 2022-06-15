import ProjectCard from "../components/simple-card"
import ExcavatorsBanner from "../components/excavators-banner"
import Map from "../components//map"
import Head from "next/head"

import { ProjectRepo } from "../repository/project-repository"
import { Project } from "../domain/models/project"

export const projectRepo = new ProjectRepo();

const Home = ({ list }: { list: Project[] }) => {
    return (
        <div id="proyectos">
            <Head>
                <title>AVIPRE Arquitectura</title>
                <meta name="description" content="Construccion en Merida, Arquitectura Merida, Contruccion y Diseño Merida, Contruir Casas Merida" />
                <meta name="og:image" content="https://avipre.vercel.app/images/logos/logotipo-2322x688-13.png" />
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
            <ExcavatorsBanner />
            <Map />
        </div>
    )
}

export async function getStaticProps(context: any) {

    try {
        const list = projectRepo.getProjects();

        return {
            props: {
                list
            }
        }
    } catch (error) {
        console.log(error)

        return {
            error
        }
    }
}

export default Home