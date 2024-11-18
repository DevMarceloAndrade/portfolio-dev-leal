import Image from 'next/image'
import Link from 'next/link'
import logoHeader from '../../../public/logoHeader.svg'
const Header = ()=>{
    const classLinks = ''
    return (
        <>
            <header className='flex flex-wrap justify-center items-center py-2 md:justify-between'>
                <Link href={'/'}>
                    <Image src={logoHeader} alt='logo' width={300} height={100}/>
                </Link>

                <div className='flex gap-3'>
                    <Link href={'/home'} className='link'>INICIO</Link>
                    <Link href={'/projects'} className='link'>PROJETOS</Link>
                    <Link href={'/about'} className='link'>SOBRE MIM</Link>
                    <Link href={'/home'} className='link'>CONTATOS</Link>
                </div>
            </header>
        </>
    )
}


export default Header