import ProjectCard from "./projectCard"

const ProjectsBody = ()=>{

    return(
        <>
            <div className='' id="projects">
                <h1 className='text-4xl mt-12 text-center'>|Principais Projetos|</h1>
                <div className='flex flex-wrap justify-center gap-4 mt-4'>
                    <ProjectCard imageUrl="/projects/webSiteEcomeerce.png" title="WebSite E-Commerce"/>
                    <ProjectCard imageUrl="/projects/webSiteEcomeerce.png" title="WebSite E-Commerce"/>
                    <ProjectCard imageUrl="/projects/webSiteEcomeerce.png" title="WebSite E-Commerce"/>
                </div>
            </div>
        </>
    )
}

export default ProjectsBody