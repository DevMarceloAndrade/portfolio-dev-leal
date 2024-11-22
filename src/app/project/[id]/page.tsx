import ProjectBody from '@/components/projectBody'
import { projects } from '@/components/projects'
import ProjectPagination from '@/components/projectBody/projectPagination'

type Props = {
    params: Promise<{ id: string }>
}
export default async function Projects({ params }: Props) {
    const id = (await params).id
    const project = projects[parseInt(id) - 1]

    return (
        <>
            <ProjectBody 
                images={project.images} 
                links={project.links} 
                projectName={project.projectName}
                descriptionChildren={project.descriptionChildren}
            />
            <ProjectPagination position={parseInt(id)} />
        </>
    )
}