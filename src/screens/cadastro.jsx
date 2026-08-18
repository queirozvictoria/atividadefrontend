import { useState } from "react";
import "./Auth.css";

function Cadastro({ irParaLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function criarConta(event) {
    event.preventDefault();

    if (!email || !senha || !confirmarSenha) {
      alert("Preencha todos os campos!");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não são iguais!");
      return;
    }

    alert("Conta criada com sucesso!");
  }

  return (
    <main className="auth-page">
      <div className="auth-decoration auth-decoration-1"></div>
      <div className="auth-decoration auth-decoration-2"></div>

      <section className="auth-card">
        <div className="auth-logo">
        </div>

        <p className="auth-subtitle">Jardim Secreto</p>

        <h1>Crie sua conta</h1>

        <p className="auth-description">
          Cadastre-se para fazer parte do nosso jardim.
        </p>

        <form onSubmit={criarConta}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>

            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>

            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmarSenha">Confirmar senha</label>

            <input
              type="password"
              id="confirmarSenha"
              placeholder="Digite sua senha novamente"
              value={confirmarSenha}
              onChange={(event) => setConfirmarSenha(event.target.value)}
            />
          </div>

          <button type="submit" className="auth-button">
            Criar conta
          </button>
        </form>

        <p className="change-page">
          Já possui uma conta?{" "}
          <button type="button" onClick={irParaLogin}>
            Entrar
          </button>
        </p>
      </section>
    </main>
  );
}

export default Cadastro;