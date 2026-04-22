import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-2 pb-6 pt-8 md:px-4">
      <div className="section-shell surface-panel flex flex-wrap items-center justify-between gap-4 px-4 py-5 md:px-6">
        <p className="text-sm font-medium text-[var(--muted)]">
          © {year} Marcelo Leal. Construído com Next.js e foco em produto.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/doc/privacy" className="link-ghost no-underline">
            Privacidade
          </Link>
          <Link href="/doc/terms" className="link-ghost no-underline">
            Termos
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
