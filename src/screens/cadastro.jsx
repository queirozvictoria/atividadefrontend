import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";
import "./Auth.css";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const navigate = useNavigate();

  async function criarConta(event) {
    event.preventDefault();

    if (!email || !senha || !confirmarSenha) {
      alert("Preencha todos os campos!");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não são iguais!");
      return;
    }

    try {
      await api.post("/users/register", {
        email,
        password: senha,
      });

      alert("Conta criada com sucesso!");

      // Vai para a tela de login após criar a conta
      navigate("/login");

    } catch (error) {
      console.error("Erro:", error);

      alert(
        error.response?.data?.message ||
        "Não foi possível criar a conta."
      );
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">

        <p className="auth-subtitle">
          Jardim Secreto
        </p>

        <h1>Criar conta</h1>

        <form onSubmit={criarConta}>

          <div className="form-group">
            <label>E-mail</label>

            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Senha</label>

            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirmar senha</label>

            <input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmarSenha}
              onChange={(event) => setConfirmarSenha(event.target.value)}
            />
          </div>

          <button type="submit" className="auth-button">
            Criar conta
          </button>

        </form>

        {/* LINK PARA VOLTAR AO LOGIN */}
        <p className="change-page">
          Já possui uma conta?{" "}

          <button
            type="button"
            onClick={() => navigate("/login")}
          >
            Entrar
          </button>
        </p>

      </section>
    </main>
  );
}

export default Cadastro;