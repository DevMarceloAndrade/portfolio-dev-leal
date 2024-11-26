import Link from "next/link"
import Image from "next/image"
const BtnCurriculum = () => {
    return (
        <div className="my-12 flex gap-4">
            <Link 
                href={'/curriculum/curriculo-marcelo-andrade.pdf'} target="_blank" rel="noopener noreferrer"
                className='buttonBlue'
            >
                BAIXAR CURRICULO
                <Image src={'/commonIcons/file-earmark-arrow-down.svg'} alt='pdf' width={30} height={30}/>
            </Link>
            <Link 
                href={'https://github.com/Ellucidator'} target="_blank" rel="noopener noreferrer"
                className='buttonBlue'
            >
                ACESSAR GITHUB
                <Image src={'/commonIcons/github.svg'} alt='pdf' width={30} height={30}/>
            </Link>
        </div>
    )
}

export default BtnCurriculum