import Image from "next/image";
import HomeBody from "@/components/homeBody";
import MoveDown from "@/components/moveDown";
import ProjectsBody from "@/components/projectsBody";


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <HomeBody/>
        <MoveDown idTarget="projects">
          <Image
              className='md:m-16 animate-bounce'
              src={'/positionIcons/down.svg'} alt='logo' width={100} height={100}
          />
        </MoveDown>
        <ProjectsBody/>
      </div>
    </>
  );
}
