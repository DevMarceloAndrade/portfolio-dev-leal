import ProjectCard from "./projectCard"

const ProjectsBody = ()=>{

    return(
        <>
            <div className='' id="projects">
                <h1 className='text-4xl mt-12 text-center'>|Principais Projetos|</h1>
                <div className='flex flex-wrap justify-center gap-4 mt-4'>
                    <ProjectCard href="/projects/1" imageUrl="/projects/webSiteEcomeerce.png" title="WebSite E-Commerce"/>
                    <ProjectCard href="/projects/2" imageUrl="/projects/apiEcommerce.png" title="Rest API + Painel Administrativo"/>
                    <ProjectCard href="/projects/3" imageUrl="/projects/webSiteEcomeerce.png" title="WebSite E-Commerce"/>
                </div>
            </div>
        </>
    )
}

export default ProjectsBody