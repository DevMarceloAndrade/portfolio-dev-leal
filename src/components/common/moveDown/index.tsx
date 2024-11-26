'use client'
import Link from "next/link";

type Props = {
    idTarget: string
    children?: React.ReactNode
    className?: string
}
const MoveDown = ({idTarget, children, className}: Props) => {

    const moveAction = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();
            document.getElementById(idTarget)?.scrollIntoView({ behavior: 'smooth' });
        };

    return (
        <>
            <Link className={className} href={`#${idTarget}`} onClick={moveAction}>
                {children}
            </Link>
        </>
    )
}

export default MoveDown