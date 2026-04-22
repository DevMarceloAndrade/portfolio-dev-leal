const sections = [
  {
    title: "1. Aceitação",
    content:
      "Ao acessar este site, você concorda com estes termos. Caso não concorde, interrompa o uso da plataforma.",
  },
  {
    title: "2. Uso permitido",
    content:
      "O conteúdo deve ser utilizado apenas para fins legítimos. É proibido tentar violar segurança, interromper funcionamento ou reproduzir materiais sem autorização.",
  },
  {
    title: "3. Propriedade intelectual",
    content:
      "Textos, layouts, marcas, imagens e código publicados neste site são protegidos por direitos autorais e não podem ser copiados integralmente sem permissão.",
  },
  {
    title: "4. Links externos",
    content:
      "Podem existir links para serviços de terceiros. Não há responsabilidade sobre conteúdo, políticas ou disponibilidade desses ambientes externos.",
  },
  {
    title: "5. Alterações",
    content:
      "Os termos podem ser atualizados periodicamente para refletir mudanças técnicas, legais ou operacionais.",
  },
  {
    title: "6. Contato",
    content:
      "Para dúvidas sobre estes termos, utilize o formulário disponível na página inicial do site.",
  },
];

export default function Terms() {
  return (
    <article className="section-shell pb-16 pt-10 md:pb-20">
      <div className="surface-panel p-6 md:p-10">
        <span className="chip">Documento legal</span>
        <h1 className="section-title mt-4">Termos de Uso</h1>
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
