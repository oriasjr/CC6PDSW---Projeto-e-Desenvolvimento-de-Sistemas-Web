import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  function classeDoLink(caminho) {
    const ativo =
      caminho === "/"
        ? router.pathname === "/"
        : router.pathname.startsWith(caminho);
    return ativo ? "navLink ativo" : "navLink";
  }

  return (
    <header className="navbar">
      <div className="navbarConteudo">
        <span className="navbarTitulo">Painel de Usuários</span>
        <nav className="navbarLinks">
          <Link href="/" className={classeDoLink("/")}>
            Home
          </Link>
          <Link href="/usuarios" className={classeDoLink("/usuarios")}>
            Usuários
          </Link>
          <Link href="/sobre" className={classeDoLink("/sobre")}>
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
