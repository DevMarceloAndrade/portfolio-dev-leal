'use client'
import Image from "next/image";
import Link from "next/link";
const MoveDown = () => {

    const moveAction = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        };

    return (
        <>
            <Link href={'#projects'} id="moveDown" onClick={moveAction}>
                <Image
                    className='md:m-16 animate-bounce'
                    src={'/positionIcons/down.svg'} alt='logo' width={100} height={100} />
            </Link>
        </>
    )
}

export default MoveDown