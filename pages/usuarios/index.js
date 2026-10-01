import { useState, useEffect } from "react";
import Link from "next/link";
import usuariosMock from "../../data/usuariosMock";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    function carregarDados() {
      setUsuarios(usuariosMock);
      setCarregando(false);
    }

    const temporizador = setTimeout(carregarDados, 800);

    return () => clearTimeout(temporizador);
  }, []);

  return (
    <div>
      <h1>Usuários</h1>

      {carregando ? (
        <p>Carregando usuários...</p>
      ) : (
        <>
          <p>{usuarios.length} usuários encontrados.</p>
          <table className="tabela">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>
                    <Link
                      href={`/usuarios/${usuario.id}`}
                      className="botao pequeno"
                    >
                      Ver detalhes
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
