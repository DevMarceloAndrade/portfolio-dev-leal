import Link from "next/link";
import Reveal from "@/components/common/reveal";
import type { PortfolioProject } from "@/data/projects";
import ProjectSlide from "./projectSlide";

type Props = {
  project: PortfolioProject;
};

const ProjectBody = ({ project }: Props) => {
  return (
    <article className="section-shell pb-16 pt-10 md:pb-20">
      <Reveal>
        <Link href="/" className="link-ghost">
          ← Voltar para a home
        </Link>
      </Reveal>

      <Reveal delay={0.06}>
        <header className="mt-6 space-y-5">
          <span className="chip">Case {project.id}</span>
          <h1 className="section-title hero-gradient-text text-balance">{project.title}</h1>
          <p className="max-w-3xl text-lg text-[var(--muted)]">{project.tagline}</p>

          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="btn-secondary"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </header>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {project.metrics.map((metric, index) => (
          <Reveal key={metric.label} delay={0.12 + index * 0.06}>
            <div className="meta-card">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">{metric.label}</p>
              <p className="mt-2 text-xl font-black">{metric.value}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal delay={0.08}>
          <ProjectSlide images={project.images} />
        </Reveal>

        <Reveal delay={0.14}>
          <div className="surface-panel p-6 md:p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-black">Contexto</h2>
              {project.overview.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-black">Entregas principais</h3>
              <ul className="space-y-2">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-[#5c8edcb8] bg-[#0a1f4db8] px-3 py-2 text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-black">Stack</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#6296e2bf] bg-[#092149b2] px-3 py-1 text-xs font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </article>
  );
};

export default ProjectBody;
