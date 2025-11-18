import { BrowserRouter, Routes, Route } from "react-router"; 
import Header from "./Components/header/Header";
import Funcionarios from "./pages/Funcionarios";
import Inicio from "./pages/Inicio";
import Projeto1 from "./pages/Projeto1";
import Projeto2 from "./pages/Projeto2";
import "./App.css";

function App() {
  const handleNavLinkClick = (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header onClick={handleNavLinkClick} />

        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/ProgressaoDeLeitura" element={<Projeto1 />} />
            <Route path="/Funcionarios" element={<Funcionarios />} />
            <Route path="/Projeto2" element={<Projeto2 />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
