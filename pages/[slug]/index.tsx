import Head from 'next/head';
import { FC, useEffect } from 'react';
import json from '../../assets/json/projects.json'
import { IProject } from '../../domain/interfaces/iproject';

const Project = (project: IProject) => {
    return (
        <div className="container my-3">
            <Head>
                <title>{project.name} | AVIPRE Arquitectura</title>
            </Head>
            <div className="row">
                <h2 className="text-center">{project.name}</h2>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = json.filter(project => {
        if (project.cover !== null) {
            return project
        }
    }).map(project => ({
        params: {
            slug: project.slug
        }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps(context: any) {
    const params = context.params
    const slug = params.slug

    const project: IProject = json.find(project => project.slug === slug)!

    return {
        props: project
    }
}

export default Project;