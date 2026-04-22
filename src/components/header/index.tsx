import Link from "next/link";

const navLinks = [
  { href: "/#skills", label: "Skills" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#atividade", label: "Atividade" },
  { href: "/#contato", label: "Contato" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 px-2 pt-4 md:px-4">
      <div className="section-shell surface-panel flex flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="ring-glow inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111] text-sm font-black text-white">
            ML
          </span>
          <span className="font-display text-lg font-extrabold uppercase tracking-[0.12em]">Marcelo Leal</span>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-ghost no-underline">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="https://github.com/DevMarceloAndrade"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </Link>
          <Link href="/#contato" className="btn-primary">
            Vamos conversar
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
