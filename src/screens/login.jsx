import { useState } from "react";
import "./Auth.css";

function Login({ irParaCadastro }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin(event) {
    event.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    alert("Login realizado!");
  }

  return (
    <main className="auth-page">
      <div className="auth-decoration auth-decoration-1"></div>
      <div className="auth-decoration auth-decoration-2"></div>

      <section className="auth-card">
        <div className="auth-logo">
        </div>

        <p className="auth-subtitle">Jardim Secreto</p>

        <h1>Entre na sua conta</h1>

        <p className="auth-description">
          Bem-vindo de volta! Entre para continuar.
        </p>

        <form onSubmit={fazerLogin}>
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

          <button type="button" className="forgot-password">
            Esqueci minha senha
          </button>

          <button type="submit" className="auth-button">
            Entrar
          </button>
        </form>

        <p className="change-page">
          Ainda não possui uma conta?{" "}
          <button type="button" onClick={irParaCadastro}>
            Criar conta
          </button>
        </p>
      </section>
    </main>
  );
}

export default Login;