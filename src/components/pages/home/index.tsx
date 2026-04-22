import Image from "next/image";
import Link from "next/link";
import ContactModal from "@/components/common/contactModal";
import GitHubContributions from "@/components/common/gitHubCalendar";
import Reveal from "@/components/common/reveal";
import BtnCurriculum from "./btnCurriculum";
import ProjectsSection from "./projectsSection";

const techStack = [
  { icon: "/techIcons/ts.svg", name: "TypeScript", note: "Código mais seguro e escalável" },
  { icon: "/techIcons/react.svg", name: "React", note: "UI moderna e componentizada" },
  { icon: "/techIcons/next.svg", name: "Next.js", note: "SSR/SEO e performance de produto" },
  { icon: "/techIcons/node.svg", name: "Node.js", note: "APIs e integrações de negócio" },
  { icon: "/techIcons/postgres.svg", name: "PostgreSQL", note: "Modelagem e consistência de dados" },
  { icon: "/techIcons/java.svg", name: "Java", note: "Soluções robustas para backend" },
  { icon: "/techIcons/spring.svg", name: "Spring", note: "Arquitetura empresarial confiável" },
];

const indicators = [
  { label: "Projetos em produção", value: "10+" },
  { label: "Anos de prática", value: "4" },
  { label: "Perfil", value: "Full Stack" },
];

const hiringSignals = [
  "Entrega front-end e back-end com autonomia.",
  "Foco em performance, legibilidade e manutenção.",
  "Comunicação clara com produto, design e negócio.",
];

const HomeBody = () => {
  return (
    <div className="section-shell pb-16 pt-10 md:pb-20">
      <section id="inicio" className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="absolute -left-20 top-6 h-56 w-56 rounded-full bg-[#0073fa33] blur-3xl" />
        <div className="absolute -right-20 bottom-6 h-48 w-48 rounded-full bg-[#16c4ff2b] blur-3xl" />

        <div className="space-y-8">
          <Reveal>
            <span className="chip">Disponível para contratação</span>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-4">
              <h1 className="section-title hero-gradient-text text-balance text-5xl leading-[0.92] md:text-7xl">
                Desenvolvedor Full Stack
                <br />
                pronto para acelerar
                <br />
                seu time de produto.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
                Sou Marcelo Leal. Especialista em construir interfaces e APIs que transformam requisitos de negócio em
                software confiável, rápido e pronto para escalar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="flex flex-wrap gap-3">
              <BtnCurriculum />
              <Link href="/#projetos" className="btn-secondary">
                Ver projetos
              </Link>
              <ContactModal label="Vamos conversar" className="btn-primary btn-pulse" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid gap-3 sm:grid-cols-3">
              {indicators.map((item) => (
                <div key={item.label} className="meta-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">{item.label}</p>
                  <p className="mt-2 text-2xl font-black">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="surface-panel p-4 md:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#9fc9ff]">Por que contratar</p>
              <ul className="mt-3 space-y-2">
                {hiringSignals.map((signal) => (
                  <li key={signal} className="rounded-xl border border-[#6aa8ff7f] bg-[#0a285ea6] px-3 py-2 text-sm font-medium">
                    {signal}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative" delay={0.12}>
          <aside className="surface-panel noise-overlay overflow-hidden p-5 md:p-8">
            <div className="rounded-2xl border border-[#5f8ed8b3] bg-[#081838] p-2">
              <Image
                src="/common/aboutMe.svg"
                alt="Ilustração de Marcelo Leal"
                width={520}
                height={520}
                className="h-auto w-full rounded-xl"
                priority
              />
            </div>
            <div className="mt-5 space-y-3">
              <p className="chip">Base: Brasil · remoto</p>
              <h2 className="text-2xl font-black">Pronto para desafios reais</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
                Atuação ponta a ponta: discovery técnico, implementação, testes e evolução contínua em produção.
              </p>
            </div>
          </aside>
        </Reveal>
      </section>

      <section id="skills" className="mt-24 space-y-8">
        <Reveal>
          <div>
            <span className="chip">Stack principal</span>
            <h2 className="section-title mt-4 text-balance">Tecnologias que eu uso para gerar resultado rápido.</h2>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <div className="surface-panel flex items-center gap-4 p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#7fc0ff] bg-[#0a2f6f] p-2 shadow-[0_0_20px_rgba(22,196,255,0.35)]">
                  <Image src={item.icon} alt={item.name} width={34} height={34} className="h-8 w-8 drop-shadow-[0_0_8px_rgba(124,222,255,0.6)]" />
                </div>
                <div>
                  <p className="text-base font-black">{item.name}</p>
                  <p className="text-sm text-[var(--muted)]">{item.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ProjectsSection />

      <section id="atividade" className="mt-24">
        <Reveal>
          <GitHubContributions />
        </Reveal>
      </section>

      <section id="contato" className="mt-24 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className="surface-panel p-6 md:p-8">
            <span className="chip">Canal estratégico</span>
            <h2 className="section-title mt-4">Quer um dev que entrega de ponta a ponta?</h2>
            <p className="section-subtitle mt-4">
              Se sua empresa busca alguém para executar rápido sem perder qualidade técnica, podemos iniciar por um
              briefing objetivo agora.
            </p>

            <div className="mt-8">
              <ContactModal label="Abrir briefing no modal" className="btn-primary btn-pulse w-full" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="surface-panel p-6 md:p-8">
            <h3 className="text-2xl font-black">Canais rápidos</h3>
            <p className="mt-3 text-sm text-[var(--muted)] md:text-base">Escolha o canal mais prático para conversar.</p>

            <div className="mt-6 grid gap-3">
              <Link
                href="https://www.linkedin.com/in/dev-marcelo-leal/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                Falar no LinkedIn
              </Link>
              <Link
                href="https://github.com/DevMarceloAndrade"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                Ver GitHub
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default HomeBody;
