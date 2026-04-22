import { projects } from "@/data/projects";
import ProjectCard from "./projectCard";

const ProjectsSection = () => {
  return (
    <section id="projetos" className="mt-24 space-y-8">
      <div>
        <span className="chip">Projetos selecionados</span>
        <h2 className="section-title mt-4 text-balance">Cases que conectam produto, engenharia e resultado.</h2>
        <p className="section-subtitle">
          Projetos reais, com decisões técnicas orientadas a experiência de usuário, escalabilidade e clareza de negócio.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
