import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/home";
import CadastroEndereco from "./pages/cadastro";
import "./index.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/home" element={<Home/>} />
        </Routes>

      </BrowserRouter>
      <BrowserRouter>
      <Routes>
          <Route path="/cadastro" element={<CadastroEndereco/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}