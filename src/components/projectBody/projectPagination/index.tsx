import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Image from 'next/image'
import Link from "next/link"

type Props = {
    position: number
}
const ProjectPagination = ({position}:Props)=>{ 
    const pathLinks =[['/','INICIO'],['/project/01','WebSite E-Commerce'],['/project/02','Rest API + Painel Administrativo'],['/project/03','Portifolio'],['/contact','CONTATOS']]

    return (
        <>
            <div className="mb-4 md:mb-8 flex gap-12 md:gap-32 justify-center">              
                    {
                        position > 0? 
                            <Link href={pathLinks[position -1][0]} type="submit" className="pageLink">
                                <Image src={'/positionIcons/prev.svg'} alt='arrow' width={50} height={50}/>
                                {pathLinks[position -1][1]}
                            </Link>
                        :<></>
                    }
                    {
                        position < 3? 
                            <Link href={pathLinks[position +1][0]} type="submit" className="pageLink">
                                {pathLinks[position +1][1]}
                                <Image src={'/positionIcons/nex.svg'} alt='arrow' width={50} height={50}/>
                            </Link>
                        :<></>
                    }
            </div>
        </>
    )
}


export default ProjectPagination