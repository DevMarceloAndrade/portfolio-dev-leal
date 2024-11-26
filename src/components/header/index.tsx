import Image from 'next/image'
import Link from 'next/link'
import MoveDown from '../common/moveDown'
import GitHubContributions from '../common/gitHubCalendar'
import ContactModal from '../common/serverModal'
const Header = ()=>{
    return (
        <>
            <header className='flex flex-wrap gap-2 justify-center items-center py-2  md:justify-between'>
                <Link href={'/'} className='md:w-64 lg:w-auto'>
                    <Image src='/common/logoHeader.svg' alt='logo' width={300} height={100}/>
                </Link>
                <GitHubContributions />
                <div className='flex gap-3'>
                    <Link href={'/'} className='link'>INICIO</Link>
                    <MoveDown className='link' idTarget="projects">PROJETOS</MoveDown>
                    <ContactModal />
                </div>
            </header>
        </>
    )
}


export default Header