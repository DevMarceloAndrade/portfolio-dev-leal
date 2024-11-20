import Link from "next/link"
import Image from "next/image"
const BtnCurriculum = () => {
    return (
        <>
            <Link 
                href={'/curriculum/curriculo-marcelo-andrade.pdf'} target="_blank" rel="noopener noreferrer"
                className='p-1 my-10 bg-blue-600 flex gap-1 items-center w-fit font-semibold border-x-2 border-white rounded-md transition-all hover:bg-blue-800 hover:border-blue-600'
            >
                BAIXAR CURRICULO
                <Image src={'/commonIcons/file-earmark-arrow-down.svg'} alt='pdf' width={30} height={30}/>
            </Link>
        </>
    )
}

export default BtnCurriculum