import { GetStaticProps, NextPage } from "next"
import { IProject } from "../domain/interfaces/iproject"

import json from '../assets/json/projects.json'

import ProjectCard from "../components/simple/simple-card"
import BackhoesBanner from "../components/composed/backhoes-banner"

const Home = ({ list }: { list: IProject[] }) => {
    return (
        <>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.465253441941!2d-89.61212008522136!3d21.014062186006306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5676b96b60f7a3%3A0x4532a4c5af95b0cc!2s28St%20Coworking%20Center!5e0!3m2!1sen!2sus!4v1653072447560!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border:"0;"}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
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