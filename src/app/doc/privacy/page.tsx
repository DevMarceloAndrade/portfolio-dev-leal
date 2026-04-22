const sections = [
  {
    title: "1. Informações coletadas",
    content:
      "Coletamos dados enviados voluntariamente no formulário de contato, como e-mail e mensagem. Também podemos coletar dados técnicos básicos de navegação para segurança e análise de desempenho.",
  },
  {
    title: "2. Finalidade",
    content:
      "As informações são usadas exclusivamente para responder contatos profissionais, melhorar o site e prevenir abusos. Não vendemos dados pessoais.",
  },
  {
    title: "3. Compartilhamento",
    content:
      "Dados podem ser processados por provedores necessários para operação do site (como hospedagem e e-mail), sempre com finalidade limitada ao funcionamento da plataforma.",
  },
  {
    title: "4. Retenção e segurança",
    content:
      "Mantemos os dados pelo período necessário para atendimento e registro operacional. Aplicamos medidas técnicas razoáveis para proteger as informações contra acesso não autorizado.",
  },
  {
    title: "5. Direitos do titular",
    content:
      "Você pode solicitar confirmação de tratamento, correção ou remoção de dados pessoais enviados por meio do formulário de contato.",
  },
];

export default function Privacy() {
  return (
    <article className="section-shell pb-16 pt-10 md:pb-20">
      <div className="surface-panel p-6 md:p-10">
        <span className="chip">Documento legal</span>
        <h1 className="section-title mt-4">Política de Privacidade</h1>
        <p className="section-subtitle">Atualizado em 22 de abril de 2026.</p>

        <div className="mt-8 space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="space-y-2">
              <h2 className="text-xl font-black">{section.title}</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)] md:text-base">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
