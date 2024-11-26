import { projects } from "@/data/projects"
import ProjectCard from "./projectCard"

const ProjectsSection = ()=>{

    return(
        <>
            <div className='mb-16' id="projects">
                <h1 className='titleH1 text-center'>|Principais Projetos|</h1>
                <div className='flex flex-wrap justify-center gap-10 mt-4'>
                    <ProjectCard href="/project/1" imagesProps={projects[0].images} title="WebSite E-Commerce"/>
                    <ProjectCard href="/project/2" imagesProps={projects[1].images} title="Rest API + Painel Administrativo"/>
                    <ProjectCard href="/project/3" imagesProps={projects[2].images} title="Portifolio"/>
                </div>
            </div>
        </>
    )
}

export default ProjectsSection