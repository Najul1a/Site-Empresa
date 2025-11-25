import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Funcionarios from "./pages/Funcionarios"
import Projeto1 from "./pages/Projeto1"
import Projeto2 from "./pages/Projeto2"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/funcionarios" element={<Funcionarios />} />
      <Route path="/projeto1" element={<Projeto1 />} />
      <Route path="/projeto2" element={<Projeto2 />} />
    </Routes>
  )
}

export default App
