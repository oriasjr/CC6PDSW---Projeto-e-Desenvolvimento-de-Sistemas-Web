import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Painel de Usuários</h1>
      <p>
        Este é um sistema fictício feito para praticar Next.js e React. Ele
        mostra uma lista de usuários e, ao clicar em um deles, abre uma página
        com os detalhes.
      </p>
      <p>Os dados são de exemplo e ficam guardados em um array no código.</p>

      <h2>O que dá para fazer aqui</h2>
      <ul>
        <li>Ver a lista de usuários cadastrados</li>
        <li>Abrir os detalhes de cada usuário</li>
        <li>Navegar entre as páginas sem recarregar o site</li>
      </ul>

      <Link href="/usuarios" className="botao">
        Ver usuários
      </Link>
    </div>
  );
}
