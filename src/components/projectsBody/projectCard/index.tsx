import Image from 'next/image'

const ProjectCard = () => {

    return (
        <>
            <div className='flex flex-col gap-2 mt-4'>
                <Image className='rounded-2xl border-y-transparent border-4 border-blue-600 hover:border-0 transition-all' src={'/projects/webSiteEcomeerce.png'} alt='webSiteEcomeerce' width={400} height={300}/>
                <h2 className='text-2xl'>WebSite Ecomeerce</h2>
            </div>
        </>
    )
}

export default ProjectCard