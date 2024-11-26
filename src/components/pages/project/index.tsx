import Link from "next/link"
import ProjectSlide, { ImageSlideProps } from "./projectSlide"

interface AcessLinks {
    href: string
    text: string
}
export interface ProjectBodyProps {
    descriptionChildren?: React.ReactNode
    images:ImageSlideProps[]
    links: AcessLinks[]
    projectName: string

}
const ProjectBody = ({ descriptionChildren, images, links, projectName }: ProjectBodyProps) => {
    return (
        <>
            <div className="p-2 flex flex-col gap-4 lg:p-0 lg:gap-0">
                <h1 className='text-3xl mb-8 md:text-4xl'>{projectName}</h1>
                <div className='flex justify-between'>
                    {
                        links.map((link, index) => {
                            return (
                                <Link key={index} className='buttonBlue' target="_blank" rel="noopener noreferrer" href={link.href}>{link.text}</Link>
                            )
                        })
                    }
                </div>
                <div className='flex flex-wrap justify-start gap-4 mt-4 lg:flex-nowrap'>
                    <ProjectSlide images={images} />
                    <div className='px-4 pb-6 flex flex-col bg-opacity-35 rounded-2xl bg-black'>
                        <h2 className='text-2xl my-8 '>Descrição|</h2>
                        {descriptionChildren}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectBody