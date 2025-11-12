import Funcionarios from "./pages/Funcionarios";
import Inicio from "./pages/Inicio";
import Projeto1 from "./pages/Projeto1";
import Projeto2 from "./pages/Projeto2";

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
            <Route path="/" element={<Home />} />
            <Route
              path="/ProgressaoDeLeitura"
              element={<ProgressaoDeLeitura />}
            />
            <Route path="/Cadastrar" element={<Cadastrar />} />

            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Projeto1" element={<Projeto1/>} />
            <Route path="/Projeto2" element={<Projeto2 />} />
            <Route path="/Funcionarios" element={<Funcionarios/>} />
          

          </Routes>
          
        </main>
       
      </BrowserRouter>
    </>
  );
}

export default App;
