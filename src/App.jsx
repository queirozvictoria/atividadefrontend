import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Login from "./screens/login"
import './App.css'

import Cadastro from "./screens/Cadastro";

function App() {
  const [pagina, setPagina] = useState("login");

  return (
    <>
      {pagina === "login" ? (
        <Login irParaCadastro={() => setPagina("cadastro")} />
      ) : (
        <Cadastro irParaLogin={() => setPagina("login")} />
      )}
    </>
  );
}

export default App;