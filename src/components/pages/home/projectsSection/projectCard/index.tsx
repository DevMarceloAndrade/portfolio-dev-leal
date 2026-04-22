import Link from "next/link";
import type { PortfolioProject } from "@/data/projects";
import CardSlide from "./cardSlide";

type Props = {
  project: PortfolioProject;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Link
      href={`/project/${project.id}`}
      className="surface-panel group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1"
    >
      <div className="h-56 overflow-hidden border-b border-[#5587d1ad]">
        <CardSlide images={project.images} />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <div className="chip w-fit">{project.year}</div>
          <h3 className="mt-3 text-2xl font-black leading-tight">{project.title}</h3>
          <p className="mt-2 text-sm font-medium text-[var(--muted)]">{project.summary}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#5b8fdebf] bg-[#0a1f4db8] px-3 py-1 text-xs font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
