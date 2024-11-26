import Link from "next/link"
import CardSlide from "./cardSlide"
import { ImageSlideProps } from "@/components/pages/project/projectSlide"

type Props = {
    imagesProps: ImageSlideProps[]
    title: string
    href: string
}
const ProjectCard = ({imagesProps, title, href}: Props) => {
    return (
        <>
            <Link href={href} className='flex flex-col items-center gap-4 mt-4 w-80 h-72 md:w-96'>
                    <CardSlide images={imagesProps} />
                    <h1 className='text-xl whitespace-nowrap md:text-2xl'>{title}</h1>
            </Link>
        </>
    )
}

export default ProjectCard