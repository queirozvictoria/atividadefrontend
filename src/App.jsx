import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./screens/login";
import Cadastro from "./screens/cadastro";
import Home from "./screens/home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;