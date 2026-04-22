import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import GitHubContributions from "@/components/common/gitHubCalendar";
import { sendEmail } from "@/service/resendServices";
import BtnCurriculum from "./btnCurriculum";
import ProjectsSection from "./projectsSection";

type ContactStatus = "success" | "error" | null;

type HomeBodyProps = {
  contactStatus: ContactStatus;
};

const techStack = [
  { icon: "/techIcons/ts.svg", name: "TypeScript", note: "Tipagem forte e DX" },
  { icon: "/techIcons/react.svg", name: "React", note: "Interfaces orientadas a componente" },
  { icon: "/techIcons/next.svg", name: "Next.js", note: "App Router e rendering híbrido" },
  { icon: "/techIcons/node.svg", name: "Node.js", note: "Serviços e automação" },
  { icon: "/techIcons/postgres.svg", name: "PostgreSQL", note: "Modelagem e persistência" },
  { icon: "/techIcons/java.svg", name: "Java", note: "Back-end corporativo" },
  { icon: "/techIcons/spring.svg", name: "Spring", note: "APIs e arquitetura robusta" },
];

const indicators = [
  { label: "Projetos em produção", value: "10+" },
  { label: "Anos de prática", value: "4" },
  { label: "Foco", value: "Full Stack" },
];

const HomeBody = ({ contactStatus }: HomeBodyProps) => {
  const contactAction = async (formData: FormData) => {
    "use server";

    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!email || !message) {
      redirect("/?sent=error#contato");
    }

    try {
      await sendEmail(email, message);
      redirect("/?sent=success#contato");
    } catch {
      redirect("/?sent=error#contato");
    }
  };

  return (
    <div className="section-shell pb-16 pt-10 md:pb-20">
      <section id="inicio" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-8">
          <span className="chip">Disponível para novos projetos</span>

          <div className="space-y-4">
            <h1 className="section-title text-balance text-5xl leading-[0.94] md:text-7xl">
              Interfaces ousadas.
              <br />
              APIs confiáveis.
              <br />
              Produto com direção.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Sou Marcelo Leal, desenvolvedor full stack. Transformo necessidades de negócio em experiências digitais
              rápidas, escaláveis e com identidade visual forte.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <BtnCurriculum />
            <Link href="/#projetos" className="btn-secondary">
              Explorar projetos
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {indicators.map((item) => (
              <div key={item.label} className="meta-card">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">{item.label}</p>
                <p className="mt-2 text-2xl font-black">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="surface-panel noise-overlay overflow-hidden p-5 md:p-8">
          <div className="rounded-2xl border-2 border-[var(--stroke)] bg-[#ffe8cd] p-2">
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
            <p className="chip">Base: Brasil</p>
            <h2 className="text-2xl font-black">Execução ponta a ponta</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">
              Atuo do design técnico à entrega final, conectando experiência de usuário, arquitetura de aplicação e
              manutenção de longo prazo.
            </p>
          </div>
        </aside>
      </section>

      <section id="skills" className="mt-24 space-y-8">
        <div>
          <span className="chip">Competências principais</span>
          <h2 className="section-title mt-4 text-balance">Stack moderna para construir produtos que performam.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((item) => (
            <div key={item.name} className="surface-panel flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[var(--stroke)] bg-[#fff2e3] p-2">
                <Image src={item.icon} alt={item.name} width={28} height={28} className="h-7 w-7" />
              </div>
              <div>
                <p className="text-base font-black">{item.name}</p>
                <p className="text-sm text-[var(--muted)]">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectsSection />

      <section id="atividade" className="mt-24">
        <GitHubContributions />
      </section>

      <section id="contato" className="mt-24 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="surface-panel p-6 md:p-8">
          <span className="chip">Contato direto</span>
          <h2 className="section-title mt-4">Vamos tirar sua ideia do papel.</h2>
          <p className="section-subtitle mt-4">
            Se você está buscando alguém para acelerar produto, melhorar experiência ou estruturar o back-end, me envie
            uma mensagem.
          </p>

          <div className="mt-8 space-y-3">
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

        <form action={contactAction} className="surface-panel flex flex-col gap-4 p-6 md:p-8">
          <h3 className="text-2xl font-black">Envie um e-mail</h3>
          <p className="text-sm text-[var(--muted)]">Resposta normalmente no mesmo dia útil.</p>

          <label className="text-sm font-semibold" htmlFor="email">
            Seu e-mail
          </label>
          <input id="email" name="email" type="email" required className="input-field" placeholder="voce@empresa.com" />

          <label className="text-sm font-semibold" htmlFor="message">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="textarea-field"
            placeholder="Conte o contexto do projeto, prazo e objetivo."
          />

          <button type="submit" className="btn-primary mt-2">
            Enviar mensagem
          </button>

          {contactStatus === "success" && (
            <p className="rounded-xl border-2 border-emerald-700 bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-900">
              Mensagem enviada com sucesso. Obrigado pelo contato.
            </p>
          )}
          {contactStatus === "error" && (
            <p className="rounded-xl border-2 border-rose-700 bg-rose-100 px-3 py-2 text-sm font-semibold text-rose-900">
              Não foi possível enviar a mensagem agora. Tente novamente em instantes.
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default HomeBody;
