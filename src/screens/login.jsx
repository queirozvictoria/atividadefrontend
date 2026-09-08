import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function fazerLogin(event) {
    event.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await api.post("/users/login", {
        email,
        password: senha,
      });

      const data = response.data;

      localStorage.setItem("token", data.token);

      alert("Login realizado com sucesso!");

      // Depois do login, pode navegar para a home
      navigate("/home");

    } catch (error) {
      console.error("Erro:", error);

      alert(
        error.response?.data?.message ||
        "Não foi possível conectar ao servidor."
      );
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">

        <p className="auth-subtitle">
          Jardim Secreto
        </p>

        <h1>Entre na sua conta</h1>

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

          <button
            type="submit"
            className="auth-button"
          >
            Entrar
          </button>
        </form>

        <p className="change-page">
          Ainda não possui uma conta?{" "}

          <button
            type="button"
            onClick={() => navigate("/cadastro")}
          >
            Criar conta
          </button>
        </p>

      </section>
    </main>
  );
}

export default Login;