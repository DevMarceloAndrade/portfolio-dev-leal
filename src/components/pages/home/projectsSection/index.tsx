import Reveal from "@/components/common/reveal";
import { projects } from "@/data/projects";
import ProjectCard from "./projectCard";

const ProjectsSection = () => {
  return (
    <section id="projetos" className="mt-24 space-y-8">
      <Reveal>
        <div>
          <span className="chip">Projetos selecionados</span>
          <h2 className="section-title mt-4 text-balance">Cases com arquitetura sólida e identidade visual forte.</h2>
          <p className="section-subtitle">
            Projetos reais com decisões técnicas orientadas a performance, manutenção e experiência do usuário.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
