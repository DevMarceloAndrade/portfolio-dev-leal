import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/data/projects";

type Props = {
  project: PortfolioProject;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Link
      href={`/project/${project.id}`}
      className="surface-panel group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1"
    >
      <div className="relative h-56 overflow-hidden border-b-2 border-[var(--stroke)]">
        <Image
          src={project.images[0].src}
          alt={project.images[0].alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 to-transparent" />
        <span className="chip absolute left-4 top-4 border-white/80 bg-white/90 text-black">{project.year}</span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-2xl font-black leading-tight">{project.title}</h3>
          <p className="mt-2 text-sm font-medium text-[var(--muted)]">{project.summary}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((item) => (
            <span key={item} className="rounded-full border-2 border-[var(--stroke)] bg-[#fff2e3] px-3 py-1 text-xs font-semibold">
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
