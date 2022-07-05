import ProjectCard from "../components/simple-card"
import ExcavatorsBanner from "../components/excavators-banner"
import Map from "../components//map"
import Head from "next/head"

import { ProjectRepo } from "../repository/project-repository"
import { Project } from "../domain/models/project"
import ProjectGrid from "../containers/project-grid"

import { setList } from "../util/projects-slice";

import { useDispatch } from "react-redux";
import { useEffect } from "react"

export const projectRepo = new ProjectRepo();

const Home = ({ list }: { list: Project[] }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setList(list));
    });

    return (
        <>
            {/* <Spinner /> */}
            <div id="proyectos">
                <Head>
                    <title>AVIPRE Arquitectura</title>
                    <meta name="description" content="Construccion en Merida, Arquitectura Merida, Contruccion y Diseño Merida, Contruir Casas Merida" />
                    <meta name="og:image" content="https://avipre.vercel.app/images/logos/logotipo-2322x688-13.png" />
                </Head>
                <ProjectGrid />
                <ExcavatorsBanner />
                <Map />
            </div>
        </>
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