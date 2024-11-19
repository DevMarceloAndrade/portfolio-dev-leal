import HomeBody from "@/components/homeBody";
import MoveDown from "@/components/moveDown";
import ProjectsBody from "@/components/projectsBody";


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <HomeBody/>
        <MoveDown/>
        <ProjectsBody/>
      </div>
    </>
  );
}
