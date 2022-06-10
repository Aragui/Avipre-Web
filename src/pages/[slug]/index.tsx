import Head from 'next/head';
import CoverBanner from '../../components/cover-banner';
import ImageGrid from '../../containers/image-grid';
import { Project } from '../../domain/models/project';
import { ProjectRepo } from '../../repository/project-repository';

const projectsRepo = new ProjectRepo();

const ProjectPage = (project: Project) => {
    return (
        <div className="container-fluid">
            <Head>
                <title>{project.name} | AVIPRE Arquitectura</title>
            </Head>
            <div className="row">
                <CoverBanner title={project.name} urlImage={project.cover!} />
            </div>
            <ImageGrid images={project.gallery} />
        </div>
    );
}

export async function getStaticPaths() {
    const slugList = projectsRepo.getSlugs();

    const paths = slugList.map(slug => ({
        params: {
            slug
        }
    }));

    return { paths, fallback: false }
}

export async function getStaticProps(context: any) {
    const params = context.params
    const slug = params.slug

    const project = projectsRepo.getSingleProject(slug);

    return {
        props: project
    }
}

export default ProjectPage;