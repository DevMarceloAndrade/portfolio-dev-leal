import Image from 'next/image'
import Link from 'next/link'
import logoHeader from '../../../public/logoHeader.svg'
import MoveDown from '../moveDown'
const Header = ()=>{
    const classLinks = ''
    return (
        <>
            <header className='flex flex-wrap justify-center items-center py-2 md:justify-between'>
                <Link href={'/'}>
                    <Image src={logoHeader} alt='logo' width={300} height={100}/>
                </Link>

                <div className='flex gap-3'>
                    <Link href={'/'} className='link'>INICIO</Link>
                    <MoveDown className='link' idTarget="projects">PROJETOS</MoveDown>
                    <Link href={'/'} className='buttonBlue'>ENTRE EM CONTATO</Link>
                </div>
            </header>
        </>
    )
}


export default Header