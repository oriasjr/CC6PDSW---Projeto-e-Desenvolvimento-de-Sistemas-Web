import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import usuariosMock from "../../data/usuariosMock";

export default function DetalhesUsuario() {
  const router = useRouter();
  const { id } = router.query;

  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (!id) return;

    setCarregando(true);
    const encontrado = usuariosMock.find((u) => u.id === Number(id));
    setUsuario(encontrado || null);
    setCarregando(false);
  }, [id]);

  useEffect(() => {
    return () => {
      console.log("Saindo da página de detalhes do usuário");
    };
  }, []);

  if (carregando) {
    return <p>Carregando usuário...</p>;
  }

  if (!usuario) {
    return (
      <div>
        <h1>Usuário não encontrado</h1>
        <p>Não existe nenhum usuário com o id {id}.</p>
        <Link href="/usuarios" className="botao">
          Voltar para a lista
        </Link>
      </div>
    );
  }

  const idAnterior = usuario.id - 1;
  const idProximo = usuario.id + 1;
  const temAnterior = usuariosMock.some((u) => u.id === idAnterior);
  const temProximo = usuariosMock.some((u) => u.id === idProximo);

  return (
    <div>
      <h1>{usuario.nome}</h1>

      <dl className="dados">
        <dt>ID</dt>
        <dd>{usuario.id}</dd>
        <dt>Email</dt>
        <dd>{usuario.email}</dd>
        <dt>Telefone</dt>
        <dd>{usuario.telefone}</dd>
        <dt>Cidade</dt>
        <dd>{usuario.cidade}</dd>
        <dt>Cargo</dt>
        <dd>{usuario.cargo}</dd>
      </dl>

      <div className="acoes">
        <Link href="/usuarios" className="botao">
          Voltar para a lista
        </Link>
        {temAnterior && (
          <Link href={`/usuarios/${idAnterior}`} className="botao secundario">
            Usuário anterior
          </Link>
        )}
        {temProximo && (
          <Link href={`/usuarios/${idProximo}`} className="botao secundario">
            Próximo usuário
          </Link>
        )}
      </div>
    </div>
  );
}
