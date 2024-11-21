import Link from "next/link"
import Image from "next/image"
const BtnCurriculum = () => {
    return (
        <>
            <Link 
                href={'/curriculum/curriculo-marcelo-andrade.pdf'} target="_blank" rel="noopener noreferrer"
                className='my-10 buttonBlue'
            >
                BAIXAR CURRICULO
                <Image src={'/commonIcons/file-earmark-arrow-down.svg'} alt='pdf' width={30} height={30}/>
            </Link>
        </>
    )
}

export default BtnCurriculum