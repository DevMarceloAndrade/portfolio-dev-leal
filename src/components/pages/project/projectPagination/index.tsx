import Link from "next/link";
import Reveal from "@/components/common/reveal";
import { projects } from "@/data/projects";

type Props = {
  position: number;
};

const ProjectPagination = ({ position }: Props) => {
  const previousProject = position > 0 ? projects[position - 1] : null;
  const nextProject = position < projects.length - 1 ? projects[position + 1] : null;

  return (
    <Reveal>
      <nav className="section-shell mb-14 mt-2 flex flex-wrap items-center justify-between gap-3">
        {previousProject ? (
          <Link href={`/project/${previousProject.id}`} className="btn-secondary">
            ← {previousProject.title}
          </Link>
        ) : (
          <span />
        )}

        {nextProject ? (
          <Link href={`/project/${nextProject.id}`} className="btn-primary">
            {nextProject.title} →
          </Link>
        ) : (
          <Link href="/" className="btn-primary">
            Voltar para a home
          </Link>
        )}
      </nav>
    </Reveal>
  );
};

export default ProjectPagination;
