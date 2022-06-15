import Head from 'next/head';
import CoverBanner from '../../components/cover-banner';
import Spinner from '../../components/spinner';
import ImageGrid from '../../containers/image-grid';
import { Project } from '../../domain/models/project';
import { ProjectRepo } from '../../repository/project-repository';

export const projectsRepo = new ProjectRepo();

interface props {
    project: Project;
}

const ProjectPage = ({ project }: props) => {
    return (
        <>
            <Spinner />
            <div className="container-fluid">
                <Head>
                    <title>{project.name} | AVIPRE Arquitectura</title>
                </Head>
                <div className="row">
                    <CoverBanner title={project.name} urlImage={project.cover!} />
                </div>
                <ImageGrid images={project.gallery} />
            </div>
        </>
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

    try {
        const project = projectsRepo.getSingleProject(slug);

        return {
            props: {
                project
            }
        }
    } catch (error) {
        console.log(error);

        return {
            error
        };
    }
}

export default ProjectPage;