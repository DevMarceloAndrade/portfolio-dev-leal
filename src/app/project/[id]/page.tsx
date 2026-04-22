import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectBody from "@/components/pages/project";
import ProjectPagination from "@/components/pages/project/projectPagination";
import { getProjectById, getProjectIndex, projects } from "@/data/projects";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Projeto não encontrado",
      description: "O case solicitado não existe.",
    };
  }

  return {
    title: `${project.title} | Marcelo Leal`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const projectIndex = getProjectIndex(id);

  return (
    <>
      <ProjectBody project={project} />
      <ProjectPagination position={projectIndex} />
    </>
  );
}
