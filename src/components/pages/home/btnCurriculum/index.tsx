import Image from "next/image";
import Link from "next/link";

const BtnCurriculum = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/curriculum/curriculo-marcelo-andrade.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Baixar currículo
        <Image src="/commonIcons/file-earmark-arrow-down.svg" alt="Ícone de download" width={20} height={20} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/dev-marcelo-leal/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
      >
        LinkedIn
      </Link>
    </div>
  );
};

export default BtnCurriculum;
