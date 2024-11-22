import Image from 'next/image'
import Link from 'next/link'
import logoHeader from '../../../public/logoHeader.svg'
import MoveDown from '../moveDown'
import GitHubContributions from '../gitHubCalendar'
const Header = ()=>{
    const classLinks = ''
    return (
        <>
            <header className='flex flex-wrap gap-2 justify-center items-center py-2  md:justify-between'>
                <Link href={'/'} className='md:w-64 lg:w-auto'>
                    <Image src={logoHeader} alt='logo' width={300} height={100}/>
                </Link>
                <GitHubContributions />
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