import Image from "next/image";
import HomeBody from "@/components/homeBody";
import ProjectsBody from "@/components/projectsBody";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <HomeBody/>
        <Link href={'#projects'}>
          <Image
            className='md:m-16 animate-bounce'
            src={'/positionIcons/down.svg'} alt='logo' width={100} height={100}/>
        </Link>
        <ProjectsBody/>
      </div>
    </>
  );
}
